import type { Metadata } from 'next';
import ElectricalSubServicePage from '@/components/ElectricalSubServicePage';
import { electricalSubServices } from '@/data/electricalSubServices';

const service = electricalSubServices.find((s) => s.slug === 'cabin-electrical-repair')!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDesc,
  alternates: { canonical: `/${service.slug}` },
};

export default function Page() {
  return <ElectricalSubServicePage service={service} />;
}
