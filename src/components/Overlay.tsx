'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MutableRefObject } from 'react';

type OverlayProps = {
  targetRef: MutableRefObject<HTMLElement | null>;
};

export default function Overlay({ targetRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.22, 0.35], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.35], [0, -70]);

  const section2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.58, 0.7], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.25, 0.7], [70, -35]);

  const section3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
  const section3Y = useTransform(scrollYProgress, [0.6, 1], [60, -20]);

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="h-screen w-full px-6 md:px-16 lg:px-24">
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-cyan-200/80">Noida, India</p>
            <h1 className="text-5xl font-semibold leading-[0.9] text-white md:text-8xl">Ayush Sahu</h1>
            <p className="mt-4 text-lg font-medium uppercase tracking-[0.2em] text-white/80 md:text-xl">
              Creative Developer
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: section2Opacity, y: section2Y }}
          className="absolute left-6 top-1/2 max-w-xl -translate-y-1/2 md:left-16 lg:left-24 max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-7xl">
            I build digital
            <span className="block bg-gradient-to-r from-cyan-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
              experiences.
            </span>
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: section3Opacity, y: section3Y }}
          className="absolute right-6 top-1/2 max-w-xl -translate-y-1/2 text-right md:right-16 lg:right-24 max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2 max-md:text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-7xl">
            Bridging design
            <span className="block text-white/70">and engineering.</span>
          </h2>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/45">
          Scroll to Explore
        </div>
      </div>
    </div>
  );
}
