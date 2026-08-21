import { Phone, ArrowRight } from 'lucide-react';

interface Props {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = 'Ready to Get Your Cabin Back in Shape?',
  subtitle = 'Call now or book online — fast response, reliable service across Sevier County.',
}: Props) {
  return (
    <section className="bg-green-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
        <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:8658052438" className="btn-secondary">
            <Phone className="w-5 h-5" />
            Call 865-805-2438
          </a>
          <a
            href="https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Online <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
