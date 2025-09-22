"use client";

import React, { useEffect, useRef } from "react";

type BlackHoleProps = {
  className?: string;
  durationMs?: number;
};

// A seamless 8-second looping 3D black hole vortex with tilted perspective and warping wireframe grid.
export default function BlackHole({
  className,
  durationMs = 8000,
}: BlackHoleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const start = performance.now();

    const draw = (now: number) => {
      // Looping time 0..1
      const t = ((now - start) % durationMs) / durationMs; // 0..1
      const TWO_PI = Math.PI * 2;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.45;

      // Head-on perspective (no tilt for clean wireframe effect)
      const tiltAngle = 0; // 0 degrees for head-on view
      const perspective = 1.0; // minimal perspective for clean grid

      // Background: dark cosmic gradient with soft radial glow
      const bg = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.1,
        cx,
        cy,
        radius * 1.6
      );
      bg.addColorStop(0, "#0a0f1a");
      bg.addColorStop(0.4, "#070b16");
      bg.addColorStop(1, "#04060a");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Prominent wireframe grid with dramatic space-time distortion
      const gridRings = 24;
      const gridLines = 64;
      const horizonR = radius * 0.15;

      // Project 3D point to 2D with tilt
      const project3D = (x: number, y: number, z: number) => {
        const cosTilt = Math.cos(tiltAngle);
        const sinTilt = Math.sin(tiltAngle);
        const y3d = y * cosTilt - z * sinTilt;
        const z3d = y * sinTilt + z * cosTilt;
        const scale = perspective / (perspective + z3d);
        return {
          x: cx + x * scale,
          y: cy + y3d * scale,
          depth: z3d,
        };
      };

      // Draw dramatic warping grid rings with clean white lines
      for (let rI = 1; rI <= gridRings; rI++) {
        const pr = rI / gridRings; // 0..1
        const bend = Math.pow(pr, 2.2); // more dramatic space-time distortion
        const rr = horizonR * (0.05 + bend * 2.0);
        const z = -bend * 1.2; // deeper into vortex

        const alpha = 0.15 + pr * 0.25; // brighter, more prominent
        const color = `rgba(255, 255, 255, ${alpha})`; // clean white lines

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.8 - pr * 0.6; // thicker lines

        for (let aI = 0; aI <= gridLines; aI++) {
          const ang = (aI / gridLines) * TWO_PI + t * 0.1 * TWO_PI; // slower rotation
          const x = Math.cos(ang) * rr;
          const y = Math.sin(ang) * rr;
          const projected = project3D(x, y, z);

          if (aI === 0) {
            ctx.moveTo(projected.x, projected.y);
          } else {
            ctx.lineTo(projected.x, projected.y);
          }
        }
        ctx.stroke();
      }

      // Draw radial grid lines with dramatic convergence
      for (let aI = 0; aI < gridLines; aI++) {
        const ang = (aI / gridLines) * TWO_PI + t * 0.08 * TWO_PI; // slower rotation
        const cosAng = Math.cos(ang);
        const sinAng = Math.sin(ang);

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, 0.2)`; // bright white lines
        ctx.lineWidth = 1.2;

        for (let rI = 0; rI <= 30; rI++) {
          const pr = rI / 30;
          const bend = Math.pow(pr, 1.8); // more dramatic convergence
          const rr = horizonR * (0.05 + bend * 2.2);
          const z = -bend * 1.0;

          const x = cosAng * rr;
          const y = sinAng * rr;
          const projected = project3D(x, y, z);

          if (rI === 0) {
            ctx.moveTo(projected.x, projected.y);
          } else {
            ctx.lineTo(projected.x, projected.y);
          }
        }
        ctx.stroke();
      }

      // Subtle falling particles for depth
      const starCount = 40;
      ctx.save();
      for (let i = 0; i < starCount; i++) {
        const p = i / starCount;
        const angle = p * 8 * Math.PI + t * TWO_PI * 0.5;
        const r = radius * (0.3 + p * 1.0);
        const z = -p * 1.2; // depth
        const swirl = r * 0.02 * Math.sin(p * 6 - t * TWO_PI * 0.8);

        const x = Math.cos(angle) * (r + swirl);
        const y = Math.sin(angle) * (r + swirl);
        const projected = project3D(x, y, z);

        if (projected.depth > -0.1) continue; // only show stars in front

        const alpha = (0.05 + 0.2 * (1 - p)) * (1 + projected.depth);
        const size = 1 + 2 * (1 - p);

        // Subtle particle glow
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(
          projected.x - size / 2,
          projected.y - size / 2,
          size,
          size
        );
      }
      ctx.restore();

      // Central black hole with subtle glow
      const projectedCenter = project3D(0, 0, -0.3);
      const scale = Math.max(0.1, projectedCenter.depth + 0.3);

      // Subtle outer glow
      const outerGlow = ctx.createRadialGradient(
        projectedCenter.x,
        projectedCenter.y,
        0,
        projectedCenter.x,
        projectedCenter.y,
        horizonR * 2 * scale
      );
      outerGlow.addColorStop(0, "rgba(100,140,255,0.15)");
      outerGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(
        projectedCenter.x,
        projectedCenter.y,
        horizonR * 1.5 * scale,
        0,
        TWO_PI
      );
      ctx.fill();

      // Deep central void
      const holeGrad = ctx.createRadialGradient(
        projectedCenter.x,
        projectedCenter.y,
        0,
        projectedCenter.x,
        projectedCenter.y,
        horizonR * 0.8 * scale
      );
      holeGrad.addColorStop(0, "#000000");
      holeGrad.addColorStop(0.3, "#000000");
      holeGrad.addColorStop(1, "#000000");
      ctx.fillStyle = holeGrad;
      ctx.beginPath();
      ctx.arc(
        projectedCenter.x,
        projectedCenter.y,
        horizonR * 0.6 * scale,
        0,
        TWO_PI
      );
      ctx.fill();

      // Cinematic vignette
      const vignette = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.4,
        cx,
        cy,
        radius * 1.8
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(0.6, "rgba(0,0,0,0.2)");
      vignette.addColorStop(1, "rgba(0,0,0,0.7)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [durationMs]);

  return <canvas ref={canvasRef} className={className} />;
}
