import { MetadataRoute } from 'next';
import { CITIES, SERVICES } from '@/data/seo';
import { hotTubSubServices, hotTubLocationData } from '@/data/hotTubData';
import { electricalFAQs } from '@/data/electricalFaqs';
import { electricalSubServices } from '@/data/electricalSubServices';

const base = 'https://hickorytn.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/reviews`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/cabin-management-hot-tub-repair`, changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const excavationPage: MetadataRoute.Sitemap = [
    { url: `${base}/excavation-services-sevierville-tn`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const serviceCityPages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/${s.slug}-sevierville`,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${base}/locations/${c.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cabinRepairPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${base}/${c.slug}-cabin-repair`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const comboPages: MetadataRoute.Sitemap = [
    { url: `${base}/pigeon-forge-hot-tub-repair`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${base}/gatlinburg-hot-tub-repair`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${base}/cosby-hvac-repair`, changeFrequency: 'monthly' as const, priority: 0.75 },
  ];

  const hotTubSubServicePages: MetadataRoute.Sitemap = hotTubSubServices.map((s) => ({
    url: `${base}/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const hotTubLocationPages: MetadataRoute.Sitemap = hotTubLocationData.map((d) => ({
    url: `${base}/${d.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const electricalSubServicePages: MetadataRoute.Sitemap = electricalSubServices.map((s) => ({
    url: `${base}/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const electricalFaqPages: MetadataRoute.Sitemap = electricalFAQs.map((f) => ({
    url: `${base}/electrical-repairs/faq/${f.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${base}/blog`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${base}/blog/why-vacation-cabin-hot-tubs-stop-heating`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/blog/how-to-keep-rental-cabins-guest-ready`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/blog/common-hvac-problems-gatlinburg-cabins`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/blog/dehumidifier-setup-smoky-mountain-cabins`, changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...excavationPage,
    ...serviceCityPages,
    ...locationPages,
    ...cabinRepairPages,
    ...comboPages,
    ...hotTubSubServicePages,
    ...hotTubLocationPages,
    ...electricalSubServicePages,
    ...electricalFaqPages,
    ...blogPages,
  ];
}
