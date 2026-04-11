'use client';
import { InfiniteSlider } from './infinite-slider';
import { ProgressiveBlur } from './progressive-blur';

const logos = [
  {
    id: 'logo-2',
    description: 'Figma',
    image: 'https://www.shadcnblocks.com/images/block/logos/figma.svg',
    className: 'h-7 w-auto',
  },
  {
    id: 'logo-3',
    description: 'Next.js',
    image: 'https://www.shadcnblocks.com/images/block/logos/nextjs.svg',
    className: 'h-7 w-auto',
  },
  {
    id: 'logo-6',
    description: 'Supabase',
    image: 'https://www.shadcnblocks.com/images/block/logos/supabase.svg',
    className: 'h-7 w-auto',
  },
  {
    id: 'logo-8',
    description: 'Vercel',
    image: 'https://www.shadcnblocks.com/images/block/logos/vercel.svg',
    className: 'h-7 w-auto',
  },
];

export function LogosSlider() {
  return (
    <div className="relative h-[100px] w-full overflow-hidden">
      <InfiniteSlider className="flex h-full w-full items-center" duration={30} gap={48}>
        {logos.map((logo) => (
          <div key={logo.id} className="flex w-32 items-center justify-center">
            <img src={logo.image} alt={logo.description} className={logo.className} />
          </div>
        ))}
      </InfiniteSlider>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[180px] bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[180px] bg-gradient-to-l from-background to-transparent" />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[180px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[180px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
