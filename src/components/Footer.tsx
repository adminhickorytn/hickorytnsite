import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Star } from 'lucide-react';

const serviceLinks = [
  { label: 'Hot Tub Repair', path: '/hot-tub-repair' },
  { label: 'HVAC Services', path: '/hvac-services' },
  { label: 'Electrical Repairs', path: '/electrical-repairs' },
  { label: 'Plumbing Repairs', path: '/plumbing-repairs' },
  { label: 'Maintenance Packages', path: '/maintenance-packages' },
  { label: 'Excavation Services', path: '/excavation-services-sevierville-tn' },
];

const hotTubLinks = [
  { label: 'Heater Repair', path: '/hot-tub-heater-repair' },
  { label: 'Pump Repair', path: '/hot-tub-pump-repair' },
  { label: 'Leak Repair', path: '/hot-tub-leak-repair' },
  { label: 'Spa Pack Replacement', path: '/hot-tub-spa-pack-replacement' },
  { label: 'Control Panel Repair', path: '/hot-tub-control-panel-repair' },
  { label: 'Electrical Repair', path: '/hot-tub-electrical-repair' },
  { label: 'Jet Repair', path: '/hot-tub-jet-repair' },
];

const electricalLinks = [
  { label: 'Panel Replacement', path: '/electrical-panel-replacement' },
  { label: 'Subpanel Installation', path: '/subpanel-installation' },
  { label: 'Underground Electrical', path: '/underground-electrical' },
  { label: 'Service Upgrades', path: '/electrical-service-upgrades' },
  { label: 'Cabin Electrical Repair', path: '/cabin-electrical-repair' },
];

const locations = [
  { name: 'Gatlinburg', slug: 'gatlinburg' },
  { name: 'Pigeon Forge', slug: 'pigeon-forge' },
  { name: 'Sevierville', slug: 'sevierville' },
  { name: 'Wears Valley', slug: 'wears-valley' },
  { name: 'Townsend', slug: 'townsend' },
  { name: 'Cosby', slug: 'cosby' },
  { name: 'Pittman Center', slug: 'pittman-center' },
];

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-serif">H</span>
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-white text-base">Hickory Home and Cabin Repair</span>
              <span className="block text-xs text-amber-400">Sevier County, TN</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Fast, reliable cabin repair and maintenance for short-term rental owners across Sevier County, Tennessee.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/p/Hickory-Home-Cabin-Repair-61571834165926/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <Link
              href="/reviews"
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
            >
              <Star className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            You can also find{' '}
            <a
              href="https://www.angi.com/companylist/us/tn/pigeon-forge/hickory-llc-reviews-150682057.htm"
              className="text-gray-400 hover:text-amber-400 transition-colors underline-offset-2 hover:underline"
            >
              Hickory LLC listed on Angi
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s.path}>
                <Link href={s.path} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium">
                View All Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Hot Tub Services</h3>
          <ul className="space-y-2">
            {hotTubLinks.map((s) => (
              <li key={s.path}>
                <Link href={s.path} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Electrical</h3>
          <ul className="space-y-2">
            {electricalLinks.map((s) => (
              <li key={s.path}>
                <Link href={s.path} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Company</h3>
          <ul className="space-y-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Customer Reviews', path: '/reviews' },
              { label: 'Contact Us', path: '/contact' },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link href={path} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a
                href="https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
              >
                Book Online
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Hickory Home and Cabin Repair LLC. All rights reserved.</span>
          <span>Sevier County, TN | Serving Gatlinburg · Pigeon Forge · Sevierville · Wears Valley</span>
        </div>
      </div>
    </footer>
  );
}
