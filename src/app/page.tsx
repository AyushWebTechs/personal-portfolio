import { readdir } from 'node:fs/promises';
import path from 'node:path';
import Projects from '@/components/Projects';
import ScrollySection from '@/components/ScrollySection';

async function getSequenceFrames() {
  try {
    const sequenceDir = path.join(process.cwd(), 'public', 'sequence');
    const files = await readdir(sequenceDir);

    return files
      .filter((file) => /\.(png|webp)$/i.test(file) && file.includes('frame_'))
      .sort((a, b) => {
        const aNum = Number((a.match(/frame_(\d+)/) ?? [])[1] ?? 0);
        const bNum = Number((b.match(/frame_(\d+)/) ?? [])[1] ?? 0);
        return aNum - bNum;
      })
      .map((file) => `/sequence/${file}`);
  } catch {
    return [];
  }
}

export default async function Home() {
  const frameUrls = await getSequenceFrames();

  return (
    <main className="min-h-screen bg-[#121212] selection:bg-cyan-200/40 selection:text-black">
      <ScrollySection frameUrls={frameUrls} />
      <Projects />
    </main>
  );
}
