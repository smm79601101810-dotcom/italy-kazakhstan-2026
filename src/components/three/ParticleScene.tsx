import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';

/**
 * Lazy-loaded entry point for the Three.js scene used in Hero.
 * Splits all three / fiber / drei code into a separate chunk so the
 * landing page can paint before the 3D bundle downloads.
 */
export default function ParticleScene({ count = 2500 }: { count?: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ParticleField count={count} />
      </Suspense>
    </Canvas>
  );
}
