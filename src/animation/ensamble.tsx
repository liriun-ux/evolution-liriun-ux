'use client';

import React, { useEffect, useRef } from 'react';

// Centralización de paleta y configuración
const COLOR_CONFIG = {
  bg: '#ebe9e4',
  primary: 'rgba(81, 126,245, 0.87)',
  primaryLight: 'rgba(255, 000, 000, 0.15)',
  secondary: '#09ffcf', // Amarillo
  accent: '#ffdd00',    // Cyan
};

const PARTICLE_COUNT = 140;
// Distancia MÁXIMA en espacio 3D (no en pantalla) para trazar una línea entre dos partículas.
const CONNECTION_DISTANCE = 55;
const LERP_SPEED = 0.03;

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

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      currX: (Math.random() - 0.5) * 600,
      currY: (Math.random() - 0.5) * 600,
      currZ: (Math.random() - 0.5) * 600,
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

    const render = (now: number) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;
      const lerpT = 1 - Math.pow(1 - LERP_SPEED, dt / (1000 / 60));

      ctx.clearRect(0, 0, width, height);

      const stageTargets = getStageTargets(activeStageRef.current);
      angleY += 0.005;

      particles.forEach((p, index) => {
        const target = stageTargets[index] || { x: 0, y: 0, z: 0 };
        p.currX += (target.x - p.currX) * lerpT;
        p.currY += (target.y - p.currY) * lerpT;
        p.currZ += (target.z - p.currZ) * lerpT;
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

      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].currX - particles[j].currX;
          const dy = particles[i].currY - particles[j].currY;
          const dz = particles[i].currZ - particles[j].currZ;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < CONNECTION_DISTANCE) {
            const proximity = 1 - dist3D / CONNECTION_DISTANCE;
            const avgDepth = (projected[i].depthScale + projected[j].depthScale) / 2;
            const alpha = 0.05 + proximity * 0.35 * Math.min(avgDepth, 1.3);

            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(150, 070, 250, ${alpha.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }

      projected.forEach((pt, idx) => {
        const r = (idx % 8 === 0 ? 2.6 : 1.4) * pt.depthScale;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, Math.max(r, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = idx % 10 === 0 ? COLOR_CONFIG.secondary : COLOR_CONFIG.primary;
        ctx.fill();
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
    width: '80vw',
    height: '80vh',
    zIndex: 0,
    pointerEvents: 'auto',
  }}
/>
  );
}
