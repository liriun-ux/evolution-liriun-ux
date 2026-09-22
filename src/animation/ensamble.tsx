'use client';

import React, { useEffect, useRef } from 'react';

// Centralización de paleta y configuración
const COLOR_CONFIG = {
  bg: '#ebe9e4',
  starCore: 'rgba(255, 255, 255, 0.95)',   // núcleo de la estrella (blanco)
  starGlowPrimary: 'rgba(81, 126, 245, 0.9)',  // brillo azul (la mayoría de las estrellas)
  starGlowAccent: 'rgba(9, 255, 207, 0.95)',   // brillo cian/turquesa (estrellas destacadas cada 10)
  line: 'rgba(150, 70, 250, 1)',            // color base de las líneas entre estrellas (vertices)
};

const PARTICLE_COUNT = 140;
// Distancia MÁXIMA en espacio 3D (no en pantalla) para trazar una línea entre dos estrellas.
const CONNECTION_DISTANCE = 55;
const LERP_SPEED = 0.03;
// Escala general de la animación principal (el cúmulo que forma las figuras).
// 1.3 = 30% más grande que el tamaño original.
const SHAPE_SCALE = 1.5;
// Cuánto se dispersa cada estrella respecto al punto "ideal" de la figura.
// Con esto las formas dejan de verse como wireframes nítidos y pasan a verse
// como una nube/cúmulo de estrellas (galaxia) alrededor de esa forma.
const JITTER_AMOUNT = 55;
// Amplitud de la deriva lenta y orgánica (además del jitter fijo).
const DRIFT_AMOUNT = 8;
// Estrellas de fondo, fijas en pantalla (no forman parte de ninguna figura),
// para que TODA la pantalla se sienta como una nube de estrellas / galaxia,
// no solo el cúmulo animado del centro.
const BACKGROUND_STAR_COUNT = 260;

interface Point3D {
  x: number;
  y: number;
  z: number;
}

// Genera puntos repartidos uniformemente sobre una lista de aristas (vértice A -> vértice B).
// Reutilizado por todas las figuras poliédricas para que cada una salga como un wireframe limpio.
function pointsOnEdges(
  totalPoints: number,
  vertices: [number, number, number][],
  edges: [number, number][],
  scale: number
): Point3D[] {
  const perEdge = totalPoints / edges.length;
  const targets: Point3D[] = [];
  for (let i = 0; i < totalPoints; i++) {
    const edgeIdx = Math.min(Math.floor(i / perEdge), edges.length - 1);
    const prog = (i % perEdge) / perEdge;
    const [a, b] = edges[edgeIdx];
    const va = vertices[a];
    const vb = vertices[b];
    targets.push({
      x: (va[0] + (vb[0] - va[0]) * prog) * scale,
      y: (va[1] + (vb[1] - va[1]) * prog) * scale,
      z: (va[2] + (vb[2] - va[2]) * prog) * scale,
    });
  }
  return targets;
}

export default function ProcesoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeStageRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cada estrella tiene, además de su posición, una fase de parpadeo propia
    // para que el "twinkle" no se vea sincronizado entre todas. También tiene
    // un desplazamiento fijo (jitter) respecto al punto ideal de la figura y
    // una fase de deriva lenta, para lograr el look de nube de estrellas /
    // galaxia en vez de un wireframe geométrico nítido.
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      currX: (Math.random() - 0.5) * 600,
      currY: (Math.random() - 0.5) * 600,
      currZ: (Math.random() - 0.5) * 600,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.6 + Math.random() * 1.4,
      jitterX: (Math.random() - 0.5) * JITTER_AMOUNT,
      jitterY: (Math.random() - 0.5) * JITTER_AMOUNT,
      jitterZ: (Math.random() - 0.5) * JITTER_AMOUNT,
      driftPhase: Math.random() * Math.PI * 2,
      driftSpeed: 0.08 + Math.random() * 0.14,
    }));

    // Capa de fondo: estrellas repartidas por toda la pantalla (coordenadas
    // fraccionales 0-1, así no dependen del tamaño de la ventana en el
    // momento de crearlas). No se mueven de posición, solo titilan.
    const backgroundStars = Array.from({ length: BACKGROUND_STAR_COUNT }, () => ({
      xFrac: Math.random(),
      yFrac: Math.random(),
      radius: Math.random() * 1.1 + 0.3,
      baseAlpha: 0.2 + Math.random() * 0.45,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.25 + Math.random() * 0.8,
      isAccent: Math.random() < 0.08,
    }));

    // =======================================================
    // SECUENCIA DE 13 ETAPAS (0 a 12)
    // 0 Esfera (El mundo) -> 1 Tetraedro (semilla/inicio) -> 2 Icosaedro (entendemos
    // muchas facetas del negocio) -> 3 Octaedro (arquitectura de info) -> 4 Grilla
    // plana (arquitectura del sitio / wireframe) -> 5 Toroide (diseñamos) ->
    // 6 Doble hélice (desarrollamos) -> 7 Planeta con anillo (revisamos) ->
    // 8 Supernova (publicamos) -> 9 Cubo (entregamos) -> 10 Cúpula (mantenimiento)
    // -> 11 Diamante bipiramidal (cierre) -> 12 Infinito (CTA, vuelve a invitar)
    // =======================================================
    const getStageTargets = (stage: number): Point3D[] => {
      switch (stage) {
        // 0. HERO: Esfera Fluida 3D (El Mundo)
        case 0: {
          const targets: Point3D[] = [];
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
            const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
            targets.push({
              x: 160 * Math.cos(theta) * Math.sin(phi),
              y: 160 * Math.sin(theta) * Math.sin(phi),
              z: 160 * Math.cos(phi),
            });
          }
          return targets;
        }

        // 1. INICIO DEL PROYECTO: Tetraedro (la forma 3D más simple — la semilla)
        case 1: {
          const s = 85;
          const vertices: [number, number, number][] = [
            [1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1],
          ];
          const edges: [number, number][] = [
            [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3],
          ];
          return pointsOnEdges(PARTICLE_COUNT, vertices, edges, s);
        }

        // 2. ETAPA 01 - CONOCEMOS TU NEGOCIO: Icosaedro (muchas caras = muchas
        // facetas del negocio que exploramos)
        case 2: {
          const phi = (1 + Math.sqrt(5)) / 2;
          const s = 74;
          const vertices: [number, number, number][] = [
            [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
            [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
            [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
          ];
          const edges: [number, number][] = [
            [0, 11], [11, 5], [5, 0], [5, 1], [1, 0], [1, 7], [7, 0], [7, 10],
            [10, 0], [10, 11], [5, 9], [9, 1], [11, 4], [4, 5], [10, 2],
            [2, 11], [7, 6], [6, 10], [1, 8], [8, 7], [3, 9], [9, 4], [4, 3],
            [4, 2], [2, 3], [2, 6], [6, 3], [6, 8], [8, 3], [8, 9],
          ];
          return pointsOnEdges(PARTICLE_COUNT, vertices, edges, s);
        }

        // 3. ETAPA 02 - ARQUITECTURA DE INFORMACIÓN: Octaedro Diamante 3D
        case 3: {
          const s = 130;
          const vertices: [number, number, number][] = [
            [0, -150 / s, 0], [0, 150 / s, 0], [1, 0, 0], [0, 0, 1], [-1, 0, 0], [0, 0, -1],
          ];
          const edges: [number, number][] = [
            [0, 2], [0, 3], [0, 4], [0, 5],
            [1, 2], [1, 3], [1, 4], [1, 5],
            [2, 3], [3, 4], [4, 5], [5, 2],
          ];
          return pointsOnEdges(PARTICLE_COUNT, vertices, edges, s);
        }

        // 4. ETAPA 03 - ARQUITECTURA DEL SITIO: Grilla Plana (blueprint / wireframe
        // de un mapa del sitio)
        case 4: {
          const targets: Point3D[] = [];
          const gridLines = 7;
          const totalLines = gridLines * 2;
          const perLine = PARTICLE_COUNT / totalLines;
          const extent = 130;
          const step = (extent * 2) / (gridLines - 1);
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const lineIdx = Math.min(Math.floor(i / perLine), totalLines - 1);
            const prog = (i % perLine) / perLine;
            if (lineIdx < gridLines) {
              const y = -extent + lineIdx * step;
              targets.push({ x: -extent + prog * extent * 2, y, z: 0 });
            } else {
              const x = -extent + (lineIdx - gridLines) * step;
              targets.push({ x, y: -extent + prog * extent * 2, z: 0 });
            }
          }
          return targets;
        }

        // 5. ETAPA 04 - DISEÑAMOS: Toroide 3D (Dona / Anillo — flujo creativo)
        case 5: {
          const targets: Point3D[] = [];
          const R = 110;
          const r = 45;
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const u = (i / PARTICLE_COUNT) * Math.PI * 2 * 6;
            const v = (i / PARTICLE_COUNT) * Math.PI * 2;
            targets.push({
              x: (R + r * Math.cos(u)) * Math.cos(v),
              y: (R + r * Math.cos(u)) * Math.sin(v),
              z: r * Math.sin(u),
            });
          }
          return targets;
        }

        // 6. ETAPA 05 - DESARROLLAMOS: Doble Hélice 3D (código / ADN)
        case 6: {
          const targets: Point3D[] = [];
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const strand = i % 2 === 0 ? 0 : Math.PI;
            const heightVal = -140 + (i / PARTICLE_COUNT) * 280;
            const angleVal = (i / PARTICLE_COUNT) * Math.PI * 8 + strand;
            targets.push({
              x: Math.cos(angleVal) * 85,
              y: heightVal,
              z: Math.sin(angleVal) * 85,
            });
          }
          return targets;
        }

        // 7. ETAPA 06 - REVISAMOS: Planeta con Anillo 3D (Saturno — supervisar/orbitar)
        case 7: {
          const targets: Point3D[] = [];
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            if (i < 100) {
              const phi = Math.acos(-1 + (2 * i) / 100);
              const theta = Math.sqrt(100 * Math.PI) * phi;
              targets.push({
                x: 65 * Math.cos(theta) * Math.sin(phi),
                y: 65 * Math.sin(theta) * Math.sin(phi),
                z: 65 * Math.cos(phi),
              });
            } else {
              const ringAngle = ((i - 100) / 40) * Math.PI * 2;
              const rRing = 150;
              targets.push({
                x: Math.cos(ringAngle) * rRing,
                y: Math.sin(ringAngle) * 35,
                z: Math.sin(ringAngle) * rRing,
              });
            }
          }
          return targets;
        }

        // 8. ETAPA 07 - PUBLICAMOS: Supernova / Explosión Estelar 3D (lanzamiento)
        case 8: {
          const targets: Point3D[] = [];
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const rayAngle = (i / PARTICLE_COUNT) * Math.PI * 2;
            const dist = 40 + (i % 7) * 22;
            const zOffset = ((i % 5) - 2) * 35;
            targets.push({
              x: Math.cos(rayAngle * 3) * dist,
              y: Math.sin(rayAngle * 3) * dist,
              z: zOffset,
            });
          }
          return targets;
        }

        // 9. ETAPA 08 - ENTREGAMOS: Cubo (la "caja" que se entrega)
        case 9: {
          const s = 100;
          const vertices: [number, number, number][] = [
            [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
            [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
          ];
          const edges: [number, number][] = [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [0, 4], [1, 5], [2, 6], [3, 7],
          ];
          return pointsOnEdges(PARTICLE_COUNT, vertices, edges, 0.8);
        }

        // 10. MANTENIMIENTO: Escudo de Protección / Hemisferio 3D
        case 10: {
          const targets: Point3D[] = [];
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const phi = Math.acos(i / PARTICLE_COUNT);
            const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
            targets.push({
              x: 160 * Math.cos(theta) * Math.sin(phi),
              y: -130 + 160 * Math.cos(phi),
              z: 160 * Math.sin(theta) * Math.sin(phi),
            });
          }
          return targets;
        }

        // 11. CIERRE: Cristal de Diamante Bipiramidal 3D
        case 11: {
          const targets: Point3D[] = [];
          const layers = 6;
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const layerIdx = Math.floor(i / (PARTICLE_COUNT / layers));
            const layerR = (1 - Math.abs(layerIdx - 2.5) / 2.5) * 120;
            const layerY = -120 + layerIdx * 48;
            const lAngle = (i % 30) * (Math.PI / 15);
            targets.push({
              x: Math.cos(lAngle) * layerR,
              y: layerY,
              z: Math.sin(lAngle) * layerR,
            });
          }
          return targets;
        }

        // 12. CTA (¿Quieres comenzar?): Vórtice / Infinito 3D (Lemniscata)
        case 12:
        default: {
          const targets: Point3D[] = [];
          const scale = 140;
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const t = (i / PARTICLE_COUNT) * Math.PI * 2;
            const denom = 1 + Math.sin(t) * Math.sin(t);
            targets.push({
              x: (scale * Math.cos(t)) / denom,
              y: (scale * Math.sin(t) * Math.cos(t)) / denom,
              z: Math.sin(t * 2) * 45,
            });
          }
          return targets;
        }
      }
    };

    let angleY = 0;
    let lastTime = performance.now();
    let elapsed = 0;

    const render = (now: number) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;
      elapsed += dt / 1000;
      const lerpT = 1 - Math.pow(1 - LERP_SPEED, dt / (1000 / 60));

      ctx.clearRect(0, 0, width, height);

      // --- Fondo: estrellas repartidas por toda la pantalla ---
      backgroundStars.forEach((s) => {
        const twinkle = 0.5 + 0.5 * Math.sin(elapsed * s.twinkleSpeed + s.twinklePhase);
        const alpha = s.baseAlpha * (0.35 + 0.65 * twinkle);
        const x = s.xFrac * width;
        const y = s.yFrac * height;
        ctx.beginPath();
        ctx.fillStyle = s.isAccent
          ? COLOR_CONFIG.starGlowAccent.replace(/[\d.]+\)$/, `${alpha.toFixed(3)})`)
          : `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        ctx.arc(x, y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const stageTargets = getStageTargets(activeStageRef.current).map((t) => ({
        x: t.x * SHAPE_SCALE,
        y: t.y * SHAPE_SCALE,
        z: t.z * SHAPE_SCALE,
      }));
      angleY += 0.005;

      particles.forEach((p, index) => {
        const target = stageTargets[index] || { x: 0, y: 0, z: 0 };
        // Deriva lenta y orgánica, distinta para cada estrella.
        const driftX = Math.sin(elapsed * p.driftSpeed + p.driftPhase) * DRIFT_AMOUNT;
        const driftY = Math.cos(elapsed * p.driftSpeed * 0.85 + p.driftPhase) * DRIFT_AMOUNT;
        const driftZ = Math.sin(elapsed * p.driftSpeed * 0.7 + p.driftPhase * 1.3) * DRIFT_AMOUNT;
        // Punto objetivo real = punto ideal de la figura + jitter fijo + deriva.
        const jx = target.x + p.jitterX + driftX;
        const jy = target.y + p.jitterY + driftY;
        const jz = target.z + p.jitterZ + driftZ;
        p.currX += (jx - p.currX) * lerpT;
        p.currY += (jy - p.currY) * lerpT;
        p.currZ += (jz - p.currZ) * lerpT;
      });

      const projected = particles.map((p) => {
        const rx = p.currX * Math.cos(angleY) + p.currZ * Math.sin(angleY);
        const rz = -p.currX * Math.sin(angleY) + p.currZ * Math.cos(angleY);
        const ry = p.currY;
        const scale = 360 / (360 + rz);
        return {
          x: width / 2 + rx * scale,
          y: height / 2 + ry * scale,
          depthScale: scale,
        };
      });

      // --- Líneas entre estrellas (los "vertices" de la constelación) ---
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].currX - particles[j].currX;
          const dy = particles[i].currY - particles[j].currY;
          const dz = particles[i].currZ - particles[j].currZ;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < CONNECTION_DISTANCE * SHAPE_SCALE) {
            const proximity = 1 - dist3D / (CONNECTION_DISTANCE * SHAPE_SCALE);
            const avgDepth = (projected[i].depthScale + projected[j].depthScale) / 2;
            const alpha = 0.05 + proximity * 0.35 * Math.min(avgDepth, 1.3);

            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = COLOR_CONFIG.line.replace(
              /[\d.]+\)$/,
              `${alpha.toFixed(3)})`
            );
            ctx.stroke();
          }
        }
      }

      // --- Estrellas: núcleo brillante + halo, con parpadeo individual ---
      projected.forEach((pt, idx) => {
        const p = particles[idx];
        const isBigStar = idx % 10 === 0;
        const twinkle =
          0.55 + 0.45 * Math.sin(elapsed * p.twinkleSpeed + p.twinklePhase);
        const baseRadius = (isBigStar ? 2.4 : 1.3) * pt.depthScale;
        const radius = Math.max(baseRadius * (0.7 + 0.3 * twinkle), 0.4);
        const glowColor = isBigStar
          ? COLOR_CONFIG.starGlowAccent
          : COLOR_CONFIG.starGlowPrimary;

        ctx.save();
        ctx.globalAlpha = Math.min(1, twinkle + 0.15);
        ctx.shadowBlur = 8 * pt.depthScale * (isBigStar ? 1.6 : 1);
        ctx.shadowColor = glowColor;

        // Halo suave
        const grad = ctx.createRadialGradient(
          pt.x, pt.y, 0,
          pt.x, pt.y, radius * 3
        );
        grad.addColorStop(0, glowColor);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo blanco brillante
        ctx.shadowBlur = 0;
        ctx.fillStyle = COLOR_CONFIG.starCore;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const sections = document.querySelectorAll('.proceso-section-trigger');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stageIndex = parseInt(entry.target.getAttribute('data-stage') || '0', 10);
            activeStageRef.current = stageIndex;
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  );
}
