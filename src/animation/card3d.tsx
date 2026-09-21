'use client';

import React, { useRef, MouseEvent, TouchEvent } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const MAX_ROTATION = 2;

  // Función interna para calcular la rotación 3D en base a coordenadas (X, Y)
  const applyTilt = (clientX: number, clientY: number) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;

    const rotateX = -y * (MAX_ROTATION * 2);
    const rotateY = x * (MAX_ROTATION * 2);

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  // Handlers para MOUSE (Escritorio)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    applyTilt(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    resetTilt();
  };

  // Handlers para TOUCH (Móviles / Tablets)
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      applyTilt(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    resetTilt();
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`transition-transform duration-300 ease-out cursor-pointer ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
