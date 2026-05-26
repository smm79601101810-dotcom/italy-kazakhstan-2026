import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  /** Multiplier for how fast the field rotates. */
  speed?: number;
}

/**
 * Drifting particle field in IT/KZ palette + gold.
 * Used as ambient hero background.
 */
export default function ParticleField({
  count = 2500,
  speed = 1,
}: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Palette weighted toward gold/cream so hero feels warm
    const palette: ReadonlyArray<readonly [number, number, number]> = [
      [0.788, 0.643, 0.286], // gold
      [0.788, 0.643, 0.286], // gold (weighted)
      [0.890, 0.769, 0.471], // gold-light
      [0.980, 0.965, 0.933], // cream
      [0.0, 0.549, 0.271], // it-green
      [0.804, 0.129, 0.165], // it-red
      [0.0, 0.686, 0.792], // kz-blue
      [1.0, 0.78, 0.173], // kz-yellow
    ];

    for (let i = 0; i < count; i++) {
      // Disc-shaped distribution, sparse vertically
      const radius = Math.pow(Math.random(), 0.55) * 14;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = Math.sin(angle) * radius - 2; // push slightly back

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }
    return { positions, colors };
  }, [count]);

  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.04 * speed;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.06 * speed;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
