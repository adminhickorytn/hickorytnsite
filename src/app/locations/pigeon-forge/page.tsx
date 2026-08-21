import type { Metadata } from 'next';
import LocationPage, { buildLocationMetadata } from '@/components/LocationPage';

const city = {
  slug: 'pigeon-forge',
  name: 'Pigeon Forge',
  blurb: 'Pigeon Forge is one of the busiest cabin rental markets in the country. We provide same-day hot tub, HVAC, electrical, and plumbing repair for Pigeon Forge cabin owners.',
  zip: '37863',
  population: '6,000+',
};

export const metadata: Metadata = buildLocationMetadata(city);

export default function PigeonForgePage() {
  return <LocationPage city={city} />;
}
