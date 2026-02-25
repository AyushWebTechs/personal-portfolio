'use client';

import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';

type ScrollyCanvasProps = {
  targetRef: MutableRefObject<HTMLElement | null>;
  frameUrls: string[];
};

export default function ScrollyCanvas({ targetRef, frameUrls }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const frame = useTransform(scrollYProgress, [0, 1], [0, Math.max(loadedCount - 1, 0)]);
  const sources = useMemo(() => frameUrls, [frameUrls]);

  useEffect(() => {
    let cancelled = false;

    const loadImage = (src: string) =>
      new Promise<HTMLImageElement | null>((resolve) => {
        const img = new Image();
        img.decoding = 'async';
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
      });

    const preload = async () => {
      const loaded = (await Promise.all(sources.map((src) => loadImage(src)))).filter(
        (img): img is HTMLImageElement => Boolean(img && img.width && img.height)
      );

      if (cancelled) return;
      imagesRef.current = loaded;
      setLoadedCount(loaded.length);
      setIsLoaded(loaded.length > 0);
    };

    preload();

    return () => {
      cancelled = true;
    };
  }, [sources]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index];
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const viewportWidth = canvas.clientWidth;
    const viewportHeight = canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.floor(viewportWidth * dpr);
    canvas.height = Math.floor(viewportHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, viewportWidth, viewportHeight);
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, viewportWidth, viewportHeight);

    if (!image || !image.width || !image.height) return;

    const scale = Math.max(viewportWidth / image.width, viewportHeight / image.height);
    const drawWidth = image.width * scale;
    const drawHeight = image.height * scale;
    const x = (viewportWidth - drawWidth) / 2;
    const y = (viewportHeight - drawHeight) / 2;

    ctx.drawImage(image, x, y, drawWidth, drawHeight);
  };

  useMotionValueEvent(frame, 'change', (latest) => {
    if (!isLoaded || loadedCount < 1) return;
    const next = Math.max(0, Math.min(loadedCount - 1, Math.round(latest)));
    if (next === currentFrameRef.current) return;
    currentFrameRef.current = next;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(next);
    });
  });

  useEffect(() => {
    if (!isLoaded || loadedCount < 1) return;

    currentFrameRef.current = 0;
    drawFrame(0);
    const onResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, loadedCount]);

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#121212]">
          <div className="flex items-center gap-3 text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            <span className="text-sm tracking-[0.2em] uppercase">Loading sequence frames</span>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
    </div>
  );
}
