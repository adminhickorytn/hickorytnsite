import type { Metadata } from 'next';
import HotTubLocationPage from '@/components/HotTubLocationPage';
import { hotTubLocationData } from '@/data/hotTubData';

const data = hotTubLocationData.find((d) => d.slug === 'hot-tub-repair-sevierville')!;

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.metaDesc,
  alternates: { canonical: `/${data.slug}` },
};

export default function Page() {
  return <HotTubLocationPage data={data} />;
}
