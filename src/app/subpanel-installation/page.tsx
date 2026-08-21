import type { Metadata } from 'next';
import ElectricalSubServicePage from '@/components/ElectricalSubServicePage';
import { electricalSubServices } from '@/data/electricalSubServices';

const service = electricalSubServices.find((s) => s.slug === 'subpanel-installation')!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDesc,
  alternates: { canonical: `/${service.slug}` },
};

export default function Page() {
  return <ElectricalSubServicePage service={service} />;
}
