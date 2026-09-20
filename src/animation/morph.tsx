'use client';

import React, { useEffect, useRef } from 'react';

// ==========================================
// CONFIGURACIÓN DE PALETA Y VARIABLES (EDITABLE)
// ==========================================
const THEME_CONFIG = {
  colors: {
    bg: '#ebe9e4',        // --color-bg
    primary: '#000000',   // --color-primary
    secondary: '#ffdd1d', // --color-secondary (Amarillo)
    accent: '#00ffff',    // --color-accent (Cyan)
  },
  animation: {
    durationPerStage: 180, // Duración en frames de cada fase (~3 segundos a 60fps)
    rotationSpeedX: 0.005,
    rotationSpeedY: 0.008,
  }
};

// Vértices base del cubo en 3D
const BASE_NODES = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
];

// Caras compuestas por los vértices
const CUBE_FACES = [
  [0, 1, 2, 3], [5, 4, 7, 6], [4, 0, 3, 7],
  [1, 5, 6, 2], [4, 5, 1, 0], [3, 2, 6, 7]
];

export default function CubeMorphCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Variables de estado interno
    let frame = 0;
    let angleX = 0;
    let angleY = 0;

    // Helper de interpolación lineal (lerp)
    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

    // Convertir HEX a RGBA para opacidades
    const hexToRgba = (hex: string, alpha: number) => {
      let c = hex.replace('#', '');
      if (c.length === 3) c = c.split('').map(x => x + x).join('');
      const num = parseInt(c, 16);
      return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Determinar la etapa activa (0 a 4) según el tiempo transcurrido
      const totalStages = 5;
      const currentStage = Math.floor(frame / THEME_CONFIG.animation.durationPerStage) % totalStages;
      const stageProgress = (frame % THEME_CONFIG.animation.durationPerStage) / THEME_CONFIG.animation.durationPerStage;

      // Actualizar ángulos
      angleX += THEME_CONFIG.animation.rotationSpeedX;
      angleY += THEME_CONFIG.animation.rotationSpeedY;

      const scale = Math.min(width, height) * 0.16;

      // Calcular posiciones de nodos dinámicas por Acto
      const projectedNodes = BASE_NODES.map(([x, y, z]) => {
        let modX = x;
        let modY = y;
        let modZ = z;

        // Acto 1: Caos / Dispersión inicial
        if (currentStage === 0) {
          const factor = lerp(2.2, 1.0, stageProgress);
          modX *= factor;
          modY *= factor;
          modZ *= factor;
        } 
        // Acto 3: Expansión de Nodos / Red
        else if (currentStage === 2) {
          const expand = Math.sin(stageProgress * Math.PI) * 0.4;
          modX += Math.sign(x) * expand;
          modY += Math.sign(y) * expand;
          modZ += Math.sign(z) * expand;
        }

        // Rotación 3D en eje Y y X
        let x1 = modX * Math.cos(angleY) + modZ * Math.sin(angleY);
        let z1 = -modX * Math.sin(angleY) + modZ * Math.cos(angleY);
        let y2 = modY * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = modY * Math.sin(angleX) + z1 * Math.cos(angleX);

        const perspective = 400 / (400 + z2 * scale);
        return {
          x: width / 2 + x1 * scale * perspective,
          y: height / 2 + y2 * scale * perspective,
          z: z2
        };
      });

      // ==========================================
      // RENDERIZADO SEGÚN EL ACTO ACTUAL
      // ==========================================

      // ACTO 1: Puntos / Caos inicial
      if (currentStage === 0) {
        projectedNodes.forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = THEME_CONFIG.colors.primary;
          ctx.fill();
        });
      }

      // ACTO 2: Estructura Wireframe (Negro fino)
      if (currentStage >= 1) {
        ctx.strokeStyle = hexToRgba(THEME_CONFIG.colors.primary, 0.4);
        ctx.lineWidth = 1;
        CUBE_FACES.forEach(face => {
          ctx.beginPath();
          ctx.moveTo(projectedNodes[face[0]].x, projectedNodes[face[0]].y);
          for (let i = 1; i < face.length; i++) {
            ctx.lineTo(projectedNodes[face[i]].x, projectedNodes[face[i]].y);
          }
          ctx.closePath();
          ctx.stroke();
        });
      }

      // ACTO 3: Nodos interactivos (Resaltan en Cyan y Amarillo)
      if (currentStage === 2) {
        projectedNodes.forEach((node, i) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? THEME_CONFIG.colors.accent : THEME_CONFIG.colors.secondary;
          ctx.fill();
        });
      }

      // ACTO 4: Caras Sólidas (Textura y estética)
      if (currentStage >= 3) {
        const sortedFaces = CUBE_FACES.map(face => {
          const avgZ = face.reduce((sum, idx) => sum + projectedNodes[idx].z, 0) / 4;
          return { face, avgZ };
        }).sort((a, b) => b.avgZ - a.avgZ);

        sortedFaces.forEach(({ face }) => {
          ctx.beginPath();
          ctx.moveTo(projectedNodes[face[0]].x, projectedNodes[face[0]].y);
          for (let i = 1; i < face.length; i++) {
            ctx.lineTo(projectedNodes[face[i]].x, projectedNodes[face[i]].y);
          }
          ctx.closePath();
          ctx.fillStyle = hexToRgba(THEME_CONFIG.colors.primary, 0.1);
          ctx.fill();
          ctx.strokeStyle = hexToRgba(THEME_CONFIG.colors.primary, 0.8);
          ctx.stroke();
        });
      }

      // ACTO 5: Representación de Sitio Web (Detalles finales)
      if (currentStage === 4) {
        // Dibuja una línea de acento en la cara frontal
        const p0 = projectedNodes[0];
        const p1 = projectedNodes[1];
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = THEME_CONFIG.colors.secondary;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      frame++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
