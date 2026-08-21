import type { Metadata } from 'next';
import LocationPage, { buildLocationMetadata } from '@/components/LocationPage';

const city = {
  slug: 'gatlinburg',
  name: 'Gatlinburg',
  blurb: 'Gatlinburg is the heart of the Smoky Mountain tourism corridor, with thousands of short-term rental cabins lining the hillsides. Our Gatlinburg cabin repair technicians respond fast to keep your rental guest-ready and protect your bookings.',
  zip: '37738',
  population: '4,000+',
};

export const metadata: Metadata = buildLocationMetadata(city);

export default function GatlinburgPage() {
  return <LocationPage city={city} />;
}
