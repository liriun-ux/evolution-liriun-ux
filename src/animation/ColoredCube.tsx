'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Componente de la malla del Cubo
function Cube() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Animación: hace girar el cubo en cada frame (rotación constante)
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.8;
  });

  // Arreglo con los 6 colores pedidos para las 6 caras del cubo:
  // [Derecha, Izquierda, Arriba, Abajo, Frente, Atrás]
  const colors = [
    'red',       // Rojo
    'yellow',    // Amarillo
    'orange',    // Naranja
    'blue',      // Azul
    'black',     // Negro
    'cyan',      // Cyan
  ];

  return (
    <mesh ref={meshRef}>
      {/* Geometría de un cubo regular de 1x1x1 */}
      <boxGeometry args={[2, 2, 2]} />
      
      {/* Pasamos un arreglo de 6 materiales, uno para cada cara */}
      {colors.map((color, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} color={color} />
      ))}
    </mesh>
  );
}

// Componente principal que envuelve la escena en un Canvas de HTML5
export default function ColoredCubeCanvas() {
  return (
    <div style={{ width: '100%', height: '500px', background: '#222' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Luces para dar volumen 3D al cubo */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Nuestro cubo animado */}
        <Cube />

        {/* Permite rotar el cubo haciendo clic y arrastrando con el mouse */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
