import type { Metadata } from 'next';
import HotTubSubServicePage from '@/components/HotTubSubServicePage';
import { hotTubSubServices } from '@/data/hotTubData';

const service = hotTubSubServices.find((s) => s.slug === 'hot-tub-jet-repair')!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDesc,
  alternates: { canonical: `/${service.slug}` },
};

export default function Page() {
  return <HotTubSubServicePage service={service} />;
}
