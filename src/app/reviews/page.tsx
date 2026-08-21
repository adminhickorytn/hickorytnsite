import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, ThumbsUp } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { ReviewCard, StarRating } from '@/components/ReviewCard';
import { reviews } from '@/data/reviews';
import { reviewSchema, localBusinessSchema, SITE_URL } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Cabin Repair Reviews in Sevierville, TN | Hickory Cabin Repair',
  description:
    'Read real reviews from Sevier County cabin owners who trust Hickory Home and Cabin Repair for hot tub, HVAC, electrical, plumbing, and maintenance services. 5.0 average rating.',
  alternates: { canonical: `${SITE_URL}/reviews` },
};

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Reviews', path: '/reviews' },
];

const sourceCounts = reviews.reduce((acc, r) => {
  acc[r.source] = (acc[r.source] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const schema = [localBusinessSchema(), reviewSchema(reviews)];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-green-950 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label text-amber-400 mb-3">Customer Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Cabin Owners Say About Us
          </h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Real reviews from real cabin owners across Sevier County, Tennessee.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">{avgRating}</div>
              <StarRating rating={5} />
              <p className="text-gray-500 text-sm mt-1">Average rating</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">{reviews.length}</div>
              <p className="text-gray-500 text-sm">Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-500 text-sm">5-star reviews</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335"/>
              </svg>
              <div>
                <p className="text-sm font-bold text-gray-900">Google Reviews</p>
                <p className="text-xs text-gray-500">All verified 5-star</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ThumbsUp className="w-8 h-8 text-green-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Happy with Our Service?</h2>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you! Leaving a review helps other cabin owners in Sevier County find reliable
            repair service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/search/Hickory+Home+and+Cabin+Repair+Sevier+County"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Star className="w-4 h-4" />
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
