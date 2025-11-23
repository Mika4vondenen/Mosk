import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- KONFIGURATION ---
    // Hier kannst du die Farben und Dichte anpassen
    const DOT_COLOR = 0xffffff; // Weiß
    const BACKGROUND_COLOR = 0x000000; // Schwarz (nur für Nebel)
    
    // Sicherheitscheck: Three.js muss geladen sein
    if (!THREE) {
      console.error("Three.js ist nicht installiert oder geladen!");
      return;
    }

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(BACKGROUND_COLOR, 2000, 10000);

      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        10000,
      );
      camera.position.set(0, 400, 1200);

      const renderer = new THREE.WebGLRenderer({
        alpha: true, // Transparenter Hintergrund
        antialias: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      // Alten Canvas entfernen (Cleanup)
      const container = containerRef.current;
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      // Partikel erstellen
      const SEPARATION = 100;
      const AMOUNTX = 50;
      const AMOUNTY = 50;
      
      const positions: number[] = [];
      const colors: number[] = [];

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const y = 0;
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

          positions.push(x, y, z);
          // Helles Grau für die Punkte
          colors.push(0.8, 0.8, 0.8); 
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 4,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // Animation Loop
      let count = 0;
      let animationId: number;

      const animate = () => {
        animationId = requestAnimationFrame(animate);

        const positionAttribute = geometry.attributes.position;
        const positionsArray = positionAttribute.array as Float32Array;

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            const index = i * 3;
            // Wellenbewegung
            positionsArray[index + 1] =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50;
            i++;
          }
        }
        positionAttribute.needsUpdate = true;
        renderer.render(scene, camera);
        count += 0.1;
      };

      animate();

      // Resize Handler
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup Funktion
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.error("Fehler im DottedSurface:", error);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      // ÄNDERUNG: z-50 sorgt dafür, dass es ÜBER allem liegt (zum Testen)
      className={cn('pointer-events-none fixed inset-0 z-50', className)} 
      {...props}
    />
  );
}