'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

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

    // Particle nodes for data/network aesthetic
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const colors = [
      'rgba(139, 92, 246, 0.45)', // violet
      'rgba(56, 189, 248, 0.45)', // electric cyan/blue
      'rgba(99, 102, 241, 0.35)', // indigo
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce on boundary
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }

        // Mouse subtle interaction
        const mouseDist = Math.hypot(nodeA.x - mouseX, nodeA.y - mouseY);
        if (mouseDist < 100) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - mouseDist / 100) * 0.3})`;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Draw particle node
        ctx.fillStyle = nodeA.color;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[130px] dark:bg-violet-600/12 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px] dark:bg-indigo-600/10 pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full opacity-60 dark:opacity-75" />
    </div>
  );
}
