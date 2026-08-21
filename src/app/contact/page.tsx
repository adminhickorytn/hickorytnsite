import type { Metadata } from 'next';
import { SITE_URL } from '@/data/seo';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Cabin Repair in Sevierville, TN | Hickory Cabin Repair',
  description:
    'Contact Hickory Home and Cabin Repair for fast cabin repair services in Sevier County, TN. Call 865-805-2438 or book online.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return <ContactClient />;
}
