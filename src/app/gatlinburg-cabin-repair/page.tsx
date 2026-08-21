import type { Metadata } from 'next';
import LocationServicePage, { buildLocationServiceMetadata } from '@/components/LocationServicePage';
import { getCityBySlug } from '@/data/seo';

const city = getCityBySlug('gatlinburg')!;
const path = '/gatlinburg-cabin-repair';
const variant = 'cabin-repair' as const;

export const metadata: Metadata = buildLocationServiceMetadata(city.name, variant, path);

export default function GatlinburgCabinRepairPage() {
  return (
    <LocationServicePage
      citySlug={city.slug}
      cityName={city.name}
      path={path}
      variant={variant}
      cityBlurb={city.blurb}
      landmarks={city.landmarks}
      neighborhoods={city.neighborhoods}
      commonIssues={city.commonIssues}
      driveTime={city.driveTime}
      zip={city.zip}
    />
  );
}
