'use client';

import { useRef } from 'react';
import Overlay from '@/components/Overlay';
import ScrollyCanvas from '@/components/ScrollyCanvas';

type ScrollySectionProps = {
  frameUrls: string[];
};

export default function ScrollySection({ frameUrls }: ScrollySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ScrollyCanvas targetRef={sectionRef} frameUrls={frameUrls} />
        <Overlay targetRef={sectionRef} />
      </div>
    </section>
  );
}
