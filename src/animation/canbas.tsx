'use client';

import React, { useEffect, useRef } from 'react';

export default function CubeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Manejar resize del contenedor
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Vértices del cubo en 3D
    const nodes = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
    ];

    // Caras con sus respectivos 6 colores (rojo, amarillo, naranja, azul, negro, cyan)
    const faces = [
      { indices: [0, 1, 2, 3], color: 'rgba(255, 0, 0, 0.7)' },     // Rojo
      { indices: [5, 4, 7, 6], color: 'rgba(255, 255, 0, 0.7)' },   // Amarillo
      { indices: [4, 0, 3, 7], color: 'rgba(255, 165, 0, 0.7)' },   // Naranja
      { indices: [1, 5, 6, 2], color: 'rgba(0, 0, 255, 0.7)' },     // Azul
      { indices: [4, 5, 1, 0], color: 'rgba(0, 0, 0, 0.8)' },       // Negro
      { indices: [3, 2, 6, 7], color: 'rgba(0, 255, 255, 0.7)' }    // Cyan
    ];

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Posicionar el cubo centrado en el fondo
      const scale = Math.min(width, height) * 0.18;
      const rx = angleX;
      const ry = angleY;

      // Rotación 3D simple
      const projectedNodes = nodes.map(([x, y, z]) => {
        // Rotar Y
        let x1 = x * Math.cos(ry) + z * Math.sin(ry);
        let z1 = -x * Math.sin(ry) + z * Math.cos(ry);
        // Rotar X
        let y2 = y * Math.cos(rx) - z1 * Math.sin(rx);
        let z2 = y * Math.sin(rx) + z1 * Math.cos(rx);

        // Proyección perspectiva
        const perspective = 400 / (400 + z2 * scale);
        return {
          x: width / 2 + x1 * scale * perspective,
          y: height / 2 + y2 * scale * perspective,
          z: z2
        };
      });

      // Ordenar caras por profundidad (Z-buffer simple)
      const sortedFaces = [...faces].map(face => {
        const avgZ = face.indices.reduce((sum, idx) => sum + projectedNodes[idx].z, 0) / 4;
        return { ...face, avgZ };
      }).sort((a, b) => b.avgZ - a.avgZ);

      // Dibujar caras
      sortedFaces.forEach(face => {
        ctx.beginPath();
        const p0 = projectedNodes[face.indices[0]];
        ctx.moveTo(p0.x, p0.y);
        for (let i = 1; i < face.indices.length; i++) {
          const p = projectedNodes[face.indices[i]];
          ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();
        ctx.fillStyle = face.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.stroke();
      });

      angleX += 0.008;
      angleY += 0.012;

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
        pointerEvents: 'none', // Permite seleccionar el texto del header sin interferir
      }}
    />
  );
}
