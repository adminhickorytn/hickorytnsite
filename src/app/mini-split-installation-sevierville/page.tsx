import type { Metadata } from 'next';
import ServiceCityPage, { buildServiceCityMetadata } from '@/components/ServiceCityPage';
import { SERVICES } from '@/data/seo';

const service = SERVICES.find((s) => s.slug === 'mini-split-installation')!;
const path = '/mini-split-installation-sevierville';
const cityName = 'Sevierville';

export const metadata: Metadata = buildServiceCityMetadata(service.name, cityName, path, `${service.name} for rental cabins in ${cityName}, TN. Same-day response, fair pricing, and guest-ready results. Call 865-805-2438.`, service.heroImage);

export default function MiniSplitInstallationSeviervillePage() {
  return <ServiceCityPage {...service} citySlug="sevierville" cityName={cityName} path={path} />;
}
