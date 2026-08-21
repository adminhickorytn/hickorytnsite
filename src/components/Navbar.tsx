'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { label: 'Hot Tub Repair', path: '/hot-tub-repair' },
  { label: 'HVAC Services', path: '/hvac-services' },
  { label: 'Electrical Repairs', path: '/electrical-repairs' },
  { label: 'Plumbing Repairs', path: '/plumbing-repairs' },
  { label: 'Maintenance Packages', path: '/maintenance-packages' },
  { label: 'Excavation Services', path: '/excavation-services-sevierville-tn' },
];

const hotTubServices = [
  { label: 'Heater Repair', path: '/hot-tub-heater-repair' },
  { label: 'Pump Repair', path: '/hot-tub-pump-repair' },
  { label: 'Leak Repair', path: '/hot-tub-leak-repair' },
  { label: 'Spa Pack Replacement', path: '/hot-tub-spa-pack-replacement' },
  { label: 'Control Panel Repair', path: '/hot-tub-control-panel-repair' },
  { label: 'Electrical Repair', path: '/hot-tub-electrical-repair' },
  { label: 'Jet Repair', path: '/hot-tub-jet-repair' },
];

const electricalServices = [
  { label: 'Panel Replacement', path: '/electrical-panel-replacement' },
  { label: 'Subpanel Installation', path: '/subpanel-installation' },
  { label: 'Underground Electrical', path: '/underground-electrical' },
  { label: 'Service Upgrades', path: '/electrical-service-upgrades' },
  { label: 'Cabin Electrical Repair', path: '/cabin-electrical-repair' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    const handleClick = () => setServicesOpen(false);
    window.addEventListener('keydown', handleKey);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.removeEventListener('click', handleClick);
    };
  }, [servicesOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg font-serif">H</span>
            </div>
            <div className="leading-tight">
              <span
                className={`block font-bold text-base transition-colors ${
                  scrolled ? 'text-green-900' : 'text-white drop-shadow'
                }`}
              >
                Hickory Home
              </span>
              <span
                className={`block text-xs font-medium transition-colors ${
                  scrolled ? 'text-amber-600' : 'text-amber-300'
                }`}
              >
                &amp; Cabin Repair
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
            ].map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'bg-green-800 text-white'
                    : scrolled
                    ? 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setServicesOpen(!servicesOpen); }}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  services.some((s) => s.path === pathname)
                    ? 'bg-green-800 text-white'
                    : scrolled
                    ? 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                Services{' '}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-1 w-64 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 max-h-[80vh] overflow-y-auto">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 font-medium border-b border-gray-100 mb-1"
                    >
                      All Services
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        href={s.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-800"
                      >
                        {s.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <p className="px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wide">Hot Tub Services</p>
                      {hotTubServices.map((s) => (
                        <Link
                          key={s.path}
                          href={s.path}
                          className="block px-4 py-1.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-800"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <p className="px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wide">Electrical Services</p>
                      {electricalServices.map((s) => (
                        <Link
                          key={s.path}
                          href={s.path}
                          className="block px-4 py-1.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-800"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {[
              { label: 'Reviews', path: '/reviews' },
              { label: 'Contact', path: '/contact' },
            ].map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'bg-green-800 text-white'
                    : scrolled
                    ? 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8658052438"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? 'text-green-900' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              865-805-2438
            </a>
            <a
              href="https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'All Services', path: '/services' },
              ...services,
              { label: '— Hot Tub Services —', path: '/hot-tub-repair' },
              ...hotTubServices,
              { label: '— Electrical Services —', path: '/electrical-repairs' },
              ...electricalServices,
              { label: 'Reviews', path: '/reviews' },
              { label: 'Contact', path: '/contact' },
            ].map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path) ? 'bg-green-800 text-white' : 'text-gray-700 hover:bg-green-50 hover:text-green-800'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a href="tel:8658052438" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-green-900">
                <Phone className="w-4 h-4" /> 865-805-2438
              </a>
              <a
                href="https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
