export const SITE_URL = 'https://hickorytn.com';

export const BUSINESS = {
  name: 'Hickory Home and Cabin Repair',
  phone: '865-805-2438',
  phoneRaw: '+18658052438',
  email: 'service@hickorytn.com',
  area: 'Sevier County, TN',
  hours: 'Mo-Sa 07:00-19:00',
  rating: 5,
  reviewCount: 27,
  priceRange: '$$',
};

export const CITIES = [
  {
    slug: 'gatlinburg',
    name: 'Gatlinburg',
    blurb:
      'Gatlinburg is the heart of the Smoky Mountain tourism corridor, with thousands of short-term rental cabins lining the hillsides. Our Gatlinburg cabin repair technicians respond fast to keep your rental guest-ready.',
    zip: '37738',
    population: '4,000+',
    landmarks: ['Great Smoky Mountains National Park entrance', 'Gatlinburg Strip', 'Ober Gatlinburg', 'Anakeesta', 'Gatlinburg Space Needle'],
    neighborhoods: ['Chalet Village', 'Cobbly Nob', 'Emerts Cove', 'Pittman Center area', 'Ski Mountain'],
    commonIssues: 'Steep-driveway plumbing freezes, heavy humidity loads on HVAC systems, and hot tub overuse from high guest turnover.',
    driveTime: '15 minutes from our Sevierville shop.',
  },
  {
    slug: 'pigeon-forge',
    name: 'Pigeon Forge',
    blurb:
      'Pigeon Forge is one of the busiest cabin rental markets in the country. We provide same-day hot tub, HVAC, electrical, and plumbing repair for Pigeon Forge cabin owners.',
    zip: '37863',
    population: '6,000+',
    landmarks: ['Dollywood', 'The Island', 'Titanic Museum', 'Theater District', 'LeConte Center'],
    neighborhoods: ['Wears Valley Road corridor', 'Pittman Center Road', 'Dollywood Lane', 'Teaster Lane area'],
    commonIssues: 'High guest turnover wears out hot tub pumps and HVAC filters faster, and older cabin wiring struggles with modern appliance loads.',
    driveTime: '20 minutes from our Sevierville shop.',
  },
  {
    slug: 'sevierville',
    name: 'Sevierville',
    blurb:
      'Sevierville is the county seat and a major gateway to the Smokies. Our Sevierville cabin repair team handles everything from emergency plumbing to seasonal maintenance for rental properties.',
    zip: '37862',
    population: '18,000+',
    landmarks: ['Sevierville Convention Center', 'Tanger Outlets', 'Forbidden Caverns', 'Sevierville Golf Club', 'Floyd Garrott Bridge'],
    neighborhoods: ['Downtown Sevierville', 'Cherokee Hills', 'Caton Creek', 'Jones Cove', 'Pittman Center Road'],
    commonIssues: 'Mix of older cabins with aging electrical panels and newer builds with mini-split HVAC that needs regular coil cleaning.',
    driveTime: 'Local — we are based in Sevierville.',
  },
  {
    slug: 'wears-valley',
    name: 'Wears Valley',
    blurb:
      'Wears Valley offers a quieter cabin experience on the peaceful side of the Smokies. We serve Wears Valley cabin owners with full repair and maintenance services.',
    zip: '37862',
    population: '1,500+',
    landmarks: ['Great Smoky Mountains National Park (Wears Valley entrance)', 'Cove Mountain Trail', 'Metropolitan Baptist Church area'],
    neighborhoods: ['Wears Cove', 'Hollow Road cabins', 'Cove Mountain', 'Line Springs area'],
    commonIssues: 'Well-water sediment clogs tankless heaters, and tree-line humidity shortens HVAC compressor life.',
    driveTime: '30 minutes from our Sevierville shop.',
  },
  {
    slug: 'townsend',
    name: 'Townsend',
    blurb:
      'Known as the Peaceful Side of the Smokies, Townsend has a growing cabin rental market. Our Townsend cabin repair services keep your property running smoothly.',
    zip: '37882',
    population: '500+',
    landmarks: ['Townsend entrance to Great Smoky Mountains National Park', 'Little River', 'Tuckaleechee Caverns', 'Great Smoky Mountains Heritage Center'],
    neighborhoods: ['Townsend proper', 'Walland area', 'Tuckaleechee Cove', 'Little River Gorge'],
    commonIssues: 'River-cabin humidity spikes mold and HVAC loads, and remote locations make fast response critical.',
    driveTime: '40 minutes from our Sevierville shop.',
  },
  {
    slug: 'cosby',
    name: 'Cosby',
    blurb:
      'Cosby sits on the eastern edge of the Smokies with a mix of cabins and vacation homes. We provide reliable cabin repair services throughout the Cosby area.',
    zip: '37722',
    population: '1,000+',
    landmarks: ['Cosby entrance to Great Smoky Mountains National Park', 'Hen Wallow Falls Trail', 'Cosby Creek'],
    neighborhoods: ['Cosby Creek area', 'Indian Grave Gap', 'Lower Cosby', 'Hartford area (rafting corridor)'],
    commonIssues: 'Elevation cold snaps freeze exposed plumbing, and backup heat strips fail during winter ice events.',
    driveTime: '45 minutes from our Sevierville shop.',
  },
  {
    slug: 'pittman-center',
    name: 'Pittman Center',
    blurb:
      'Pittman Center sits between Gatlinburg and Cosby with a high concentration of luxury rental cabins. Our Pittman Center cabin repair team is ready to help.',
    zip: '37738',
    population: '500+',
    landmarks: ['Emert Street Covered Bridge', 'Little Pigeon River', 'Pittman Center Park'],
    neighborhoods: ['Emerts Cove', 'Cobbly Nob', 'Pittman Center Road corridor'],
    commonIssues: 'Luxury cabins with multiple hot tubs and mini-splits need coordinated maintenance to avoid guest interruptions.',
    driveTime: '25 minutes from our Sevierville shop.',
  },
] as const;

export type CitySlug = (typeof CITIES)[number]['slug'];

export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  bodyParagraphs: string[];
  services: string[];
  signs: string[];
  faq: { q: string; a: string }[];
  relatedServices: { name: string; path: string }[];
  jobPhoto: string;
  jobPhotoAlt: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'hot-tub-repair',
    name: 'Hot Tub Repair',
    shortName: 'Hot Tub Repair',
    heroImage: '/hot-tub-pump-repair-sevierville.webp',
    heroAlt: 'Technician repairing a hot tub pump at a cabin in Sevierville TN',
    intro:
      'A broken hot tub is the number-one reason cabin owners get a midnight call from a guest. We provide same-day hot tub diagnosis and repair for jets, heaters, pumps, leaks, and control boards across Sevier County — keeping your rentals guest-ready and your reviews five-star.',
    bodyParagraphs: [
      'Hot tubs in short-term rental cabins work harder than any residential spa. Back-to-back guests, fluctuating chemical levels, and mountain freeze-thaw cycles stress pumps, heaters, and control boards far beyond their rated duty cycle. When a component fails, the difference between a same-day fix and a three-day wait is often the difference between a refund and a five-star review.',
      'Our technicians carry common replacement parts for the brands most often installed in Smoky Mountain cabins — Balboa, Gecko, HydroQuip, and Aqua-Flo among others — so most heater, pump, and control-board failures are resolved in a single visit. For leaks, we pressure-test the plumbing, inspect the shell and fittings, and repair or replace only what is actually broken — no upselling a whole spa when a $40 union seal fixes the problem.',
      'We also coordinate with your property manager or cleaning crew so repairs happen during turnover windows whenever possible. That means guests arrive to a hot, clean, working tub — and you do not lose a booking to a maintenance window.',
    ],
    services: [
      'Same-day hot tub diagnosis and repair',
      'Heater, pump, and motor replacement',
      'Control board troubleshooting and swap',
      'Leak detection and plumbing repair',
      'Jet replacement and manifold repair',
      'Ozonator and salt-cell service',
      'Filter and plumbing descale',
      'Winterization and de-winterization for seasonal cabins',
      'Chemical level balancing and guest-turnover checks',
    ],
    signs: [
      'Tub will not heat or takes much longer than usual',
      'Breaker trips when the tub runs',
      'Low flow or dead jets',
      'Water level dropping overnight (leak)',
      'Error code on the topside display',
      'Cloudy or foamy water that will not clear',
      'Pump humming or grinding',
      'Guest complaint about cold or dirty water',
    ],
    faq: [
      {
        q: 'Why is my hot tub not heating?',
        a: 'The most common causes are a failed heater element, a tripped high-limit switch, a bad temperature sensor, or a control board fault. We diagnose with a multimeter and thermal probe, then replace only the failed component. Most heating failures are fixed same-day.',
      },
      {
        q: 'Why is my breaker tripping when the hot tub runs?',
        a: 'A tripping breaker usually points to a failed heater element shorting to ground, a wet control board, or a pump motor drawing too much current. Continuing to reset the breaker risks damage to the board and wiring. We isolate each circuit to find the fault and repair it safely.',
      },
      {
        q: 'How much does hot tub repair cost?',
        a: 'A diagnostic visit is a flat trip fee credited toward any repair. Most heater and pump replacements land between $300 and $700 including parts. Control board replacements vary by brand. We always quote before any work begins — no surprise charges.',
      },
      {
        q: 'Do you service rental cabins?',
        a: 'Yes — rental cabins are our specialty. We coordinate with property managers and cleaning crews to schedule repairs during turnover so guests are not disrupted, and we prioritize booked rentals for same-day response.',
      },
      {
        q: 'Can you fix a leak without draining the whole tub?',
        a: 'Often, yes. Many leaks come from unions, valve seals, or cracked PVC at the equipment bay — all repairable without a full drain. Shell leaks may require a partial drain. We pressure-test first to pinpoint the leak before recommending a drain-down.',
      },
    ],
    relatedServices: [
      { name: 'HVAC Services', path: '/hvac-services' },
      { name: 'Plumbing Repairs', path: '/plumbing-repairs' },
      { name: 'Maintenance Packages', path: '/maintenance-packages' },
    ],
    jobPhoto: '/hot-tub-pump-repair-sevierville.webp',
    jobPhotoAlt: 'Technician replacing a hot tub pump in Sevierville TN',
  },
  {
    slug: 'hvac-services',
    name: 'HVAC Services',
    shortName: 'HVAC',
    heroImage: '/hvac-mini-split-installation-sevierville.webp',
    heroAlt: 'HVAC technician installing a mini-split condenser on a cabin in Sevierville TN',
    intro:
      'When the AC fails in a booked cabin in July, every hour without cooling is a refund waiting to happen. We repair, install, and maintain heating and cooling systems — including ductless mini-splits — for rental cabins across Sevier County, with same-day response for failures in active bookings.',
    bodyParagraphs: [
      'Smoky Mountain cabins are hard on HVAC equipment. High humidity, steep attic temperatures, and constant guest occupancy mean filters clog faster, coils frost, and compressors cycle hard. Mini-splits — the most common system in newer cabins — need coil cleaning and drain-line clearing every season to avoid the foul smell and water backups that trigger guest complaints.',
      'We service all major brands including Mitsubishi, Daikin, LG, Friedrich, Pioneer, and Goodman. Our technicians carry coil cleaner, refrigerant gauges, vacuum pumps, and common capacitor and contactor parts to get most cooling failures running again in one visit. For systems beyond repair, we provide honest replacement quotes — including high-efficiency mini-split options sized correctly for your cabin.',
      'Preventive maintenance is where rental cabin owners save the most money. A seasonal tune-up catches a failing capacitor or a clogged drain line before it becomes a midnight no-cooling call. Our maintenance package subscribers get priority dispatch and discounted parts pricing on HVAC repairs.',
    ],
    services: [
      'Same-day AC and heating repair',
      'Ductless mini-split installation, repair, and cleaning',
      'Coil cleaning and drain-line clearing',
      'Capacitor, contactor, and control board replacement',
      'Refrigerant recharge and leak detection',
      'Thermostat replacement and smart-home integration',
      'Heat pump service and replacement',
      'Seasonal tune-ups and filter changes',
      'Emergency heating repair in winter',
    ],
    signs: [
      'AC blowing warm or not cooling',
      'Unit short-cycles or runs constantly',
      'Water leaking from indoor mini-split head',
      'Bad smell when the system runs',
      'Guest complaint about humidity or temperature',
      'Ice on the outdoor unit or refrigerant lines',
      'Thermostat blank or unresponsive',
      'Tripped breaker on the HVAC circuit',
    ],
    faq: [
      {
        q: 'Why is my mini-split leaking water inside the cabin?',
        a: 'The drain line is clogged — usually with mold, algae, or sediment from the coil. We clear the line, treat it with coil cleaner, and confirm drainage before we leave. If the drain pan is cracked, we replace it. Most leaks are resolved in one visit.',
      },
      {
        q: 'Why is my AC blowing warm air?',
        a: 'Common causes are a failed capacitor, low refrigerant from a leak, a dirty condenser coil, or a stuck contactor. We diagnose with gauges and a multimeter, then repair or recharge as needed. Same-day response is available for booked rentals.',
      },
      {
        q: 'How often should a rental cabin HVAC system be serviced?',
        a: 'Twice a year — spring for cooling prep and fall for heating prep. Rental cabins cycle harder than homes, so filters and coils need more frequent attention. Our maintenance package includes both tune-ups plus priority dispatch.',
      },
      {
        q: 'Should I replace my old HVAC with a mini-split?',
        a: 'For most cabins, yes. Mini-splits are more efficient, quieter for guests, and allow zone control so you are not paying to cool an empty bedroom. We size the system correctly for your cabin and install it cleanly with minimal guest disruption.',
      },
      {
        q: 'Do you offer emergency HVAC repair?',
        a: 'Yes. For booked rentals with a no-cooling or no-heat failure, call 865-805-2438 and we prioritize dispatch. Off-hours emergency service is available — we understand that a cabin without heat in January is a guest-safety issue, not just a comfort issue.',
      },
    ],
    relatedServices: [
      { name: 'Hot Tub Repair', path: '/hot-tub-repair' },
      { name: 'Electrical Repairs', path: '/electrical-repairs' },
      { name: 'Maintenance Packages', path: '/maintenance-packages' },
    ],
    jobPhoto: '/hvac-mini-split-installation-sevierville.webp',
    jobPhotoAlt: 'HVAC technician installing a mini-split condenser in Sevierville TN',
  },
  {
    slug: 'mini-split-installation',
    name: 'Mini-Split Installation',
    shortName: 'Mini-Split Installation',
    heroImage: '/hvac-mini-split-installation-sevierville.webp',
    heroAlt: 'Mini-split condenser installation on a Sevierville TN cabin',
    intro:
      'Ductless mini-splits are the most efficient way to heat and cool Smoky Mountain rental cabins — quiet for guests, zoned for savings, and reliable in mountain humidity. We install, size, and service mini-split systems for cabins across Sevier County, with clean installations that respect your booking calendar.',
    bodyParagraphs: [
      'A correctly sized mini-split runs quieter, dehumidifies better, and lasts longer than a central system in a cabin. The problem is that many cabins have undersized or single-zone systems that run constantly trying to cool a loft and a great room at once. We perform a proper load calculation based on your cabin square footage, ceiling height, insulation, and sun exposure — then recommend a multi-zone system that actually keeps up.',
      'Installation day is planned around your turnover. We mount indoor heads, run line sets through finished walls cleanly, set the outdoor condenser on a level pad, pressure-test with nitrogen, pull a deep vacuum, and commission the system with the correct refrigerant charge. We do not leave until every zone is cooling and the drain lines are flowing.',
      'We install and service all major mini-split brands: Mitsubishi, Daikin, LG, Friedrich, Pioneer, and Goodman. Every installation includes a walkthrough of filter cleaning and basic guest operation so your cleaning crew can keep the system running between visits.',
    ],
    services: [
      'Multi-zone mini-split system design and load calculation',
      'Indoor wall-cassette and floor-mount installation',
      'Outdoor condenser placement and leveling',
      'Line-set routing through finished walls',
      'Nitrogen pressure test and deep vacuum',
      'Refrigerant charge commissioning',
      'Drain-line setup and leak test',
      'Smart thermostat and Wi-Fi control integration',
      'Old-system removal and disposal',
    ],
    signs: [
      'Current system cannot keep up on hot days',
      'One room is always hotter or colder than the rest',
      'Guests complain about noise from a wall-unit PTAC',
      'Energy bills climbing season after season',
      'Frequent repair calls on an aging central system',
      'Building a new cabin or finishing a loft',
    ],
    faq: [
      {
        q: 'How much does a mini-split installation cost?',
        a: 'A single-zone install typically runs $3,500 to $5,500 including equipment. Multi-zone systems for whole-cabin coverage range from $6,000 to $12,000 depending on zones and capacity. We provide a fixed quote after a site visit — no surprise charges.',
      },
      {
        q: 'How long does installation take?',
        a: 'A single-zone install is one day. A three-zone system is usually two days. We schedule around your booking calendar so guests are not in the cabin during installation.',
      },
      {
        q: 'Which mini-split brand is best for a rental cabin?',
        a: 'Mitsubishi and Daikin are the most reliable for high-use rental environments. Friedrich and LG are excellent mid-range options. We recommend based on your budget, cabin size, and how hard the system will run — not on which brand gives us the best margin.',
      },
      {
        q: 'Do mini-splits work in Smoky Mountain winters?',
        a: 'Yes. Modern cold-climate mini-splits heat efficiently down to single digits. For the coldest snaps we recommend a backup heat source, which we can integrate into the system design.',
      },
      {
        q: 'Can you add a zone to my existing mini-split?',
        a: 'Often, yes — if your outdoor unit has the capacity. We check the rated capacity and line-set limits before quoting. If the condenser is maxed out, we recommend a second single-zone system rather than overloading the existing one.',
      },
    ],
    relatedServices: [
      { name: 'HVAC Services', path: '/hvac-services' },
      { name: 'Electrical Repairs', path: '/electrical-repairs' },
      { name: 'Maintenance Packages', path: '/maintenance-packages' },
    ],
    jobPhoto: '/hvac-mini-split-installation-sevierville.webp',
    jobPhotoAlt: 'Mini-split condenser installation on a Sevierville TN cabin',
  },
  {
    slug: 'cabin-maintenance',
    name: 'Cabin Maintenance Packages',
    shortName: 'Cabin Maintenance',
    heroImage: '/Grand_Mountain_View_Great_Smoky_Mountains-28.webp',
    heroAlt: 'Smoky Mountain cabin maintenance in Sevier County TN',
    intro:
      'The cheapest repair is the one you never have to make. Our cabin maintenance packages are built for short-term rental owners in Sevier County — seasonal HVAC tune-ups, hot tub checks, plumbing inspections, and priority dispatch that catches small problems before they become guest-facing emergencies.',
    bodyParagraphs: [
      'Rental cabins are not homes — they are hospitality assets running at near-commercial occupancy. A maintenance plan designed for a primary residence misses the wear patterns unique to short-term rentals: guest-overused hot tubs, HVAC systems cycling against mountain humidity, and plumbing that gets tested by people who treat a rental like a hotel. Our plans are built around how cabins actually get used.',
      'Each plan includes scheduled visits — typically one per season — where we inspect the systems most likely to fail between bookings. We check hot tub chemistry and component health, clear mini-split drain lines, inspect visible plumbing under sinks and in crawl spaces, test smoke and CO detectors, and verify HVAC performance. You get a written report after every visit.',
      'Subscribers get priority dispatch on emergency calls and discounted parts pricing. When a guest calls at 9 PM on a Saturday because the AC stopped, you go to the front of the line — not behind a first-time caller. For owners with multiple cabins, we bundle visits to reduce trip fees and keep every property on the same maintenance rhythm.',
    ],
    services: [
      'Seasonal HVAC tune-up (spring cooling, fall heating)',
      'Hot tub component inspection and chemical check',
      'Mini-split coil cleaning and drain-line clearing',
      'Plumbing inspection under sinks, toilets, and crawl spaces',
      'Smoke and CO detector test and battery replacement',
      'Exterior walkaround — gutters, downspouts, and visible roof',
      'GUEST-readiness checklist before peak season',
      'Priority emergency dispatch',
      'Discounted parts and labor on covered repairs',
      'Written report after every visit',
    ],
    signs: [
      'You are paying for emergency repairs that a checkup would have caught',
      'Guest complaints repeating across bookings',
      'Hot tub or HVAC failing during peak season',
      'You own multiple cabins and cannot keep up with maintenance',
      'Your property manager does not inspect mechanical systems',
      'You live out of the area and need trusted local eyes on the property',
    ],
    faq: [
      {
        q: 'What is included in a cabin maintenance package?',
        a: 'Seasonal HVAC tune-ups, hot tub inspection and chemical check, plumbing walk-through, smoke and CO detector testing, exterior check, and a written report. Subscribers also get priority emergency dispatch and discounted parts pricing. Plans start at $99/month with no long-term contract.',
      },
      {
        q: 'How often do you visit?',
        a: 'Typically once per season — four visits per year. For cabins with heavy rental occupancy or multiple hot tubs, we may recommend monthly hot tub checks. We schedule around your booking calendar.',
      },
      {
        q: 'Can you coordinate with my property manager?',
        a: 'Yes. We work alongside most Sevier County property management companies and cleaning crews. We can access the cabin on turnover days and send the report to you and your manager simultaneously.',
      },
      {
        q: 'Do you cover multiple cabins?',
        a: 'Yes. We bundle multiple properties under one plan to reduce per-cabin cost and keep every cabin on the same maintenance schedule. Owners with three or more cabins see the biggest savings.',
      },
      {
        q: 'Is there a long-term contract?',
        a: 'No. Plans are month-to-month. You can pause for off-season or cancel anytime. We earn the renewal by showing up on time and catching real problems — not by locking you in.',
      },
    ],
    relatedServices: [
      { name: 'Hot Tub Repair', path: '/hot-tub-repair' },
      { name: 'HVAC Services', path: '/hvac-services' },
      { name: 'Plumbing Repairs', path: '/plumbing-repairs' },
    ],
    jobPhoto: '/Grand_Mountain_View_Great_Smoky_Mountains-28.webp',
    jobPhotoAlt: 'Smoky Mountain cabin under maintenance in Sevier County TN',
  },
  {
    slug: 'plumbing-repairs',
    name: 'Plumbing Repairs',
    shortName: 'Plumbing Repair',
    heroImage: '/cabin-plumbing-repair-sevierville.webp',
    heroAlt: 'Plumber repairing cabin pipes under a sink in Sevierville TN',
    intro:
      'A burst pipe in a cabin crawl space at 2 AM is the call every rental owner dreads. We repair leaks, water heaters, pipes, and fixtures for cabins across Sevier County — and we respond fast to the emergencies that put bookings and property at risk.',
    bodyParagraphs: [
      'Mountain plumbing fails in predictable ways. Freeze-thaw cycles crack exposed PVC and copper in unheated crawl spaces. Guest overuse jams garbage disposals and overflows toilets. Tankless heaters clog with well-water sediment. And the hard-water scale common in Sevier County slowly kills water heaters, showerheads, and washing machine valves. We know these failure modes because we see them every week.',
      'Our technicians carry pipe, fittings, a torch, a press tool, and common replacement parts for faucets, toilets, and disposals. For leaks, we trace the source before opening walls — we use moisture meters and pressure testing to avoid cutting drywall that does not need cutting. For water heaters, we diagnose whether a flush and element replacement will save the unit or whether replacement is the honest answer.',
      'For cabins on well water, we install and service sediment filters and softeners that protect tankless heaters and plumbing fixtures. And for every job, we coordinate with your property manager so the cabin is dry, working, and guest-ready before the next check-in.',
    ],
    services: [
      'Emergency leak repair and burst pipe response',
      'Water heater repair and replacement (tank and tankless)',
      'Tankless heater descale and flush',
      'Toilet repair and replacement',
      'Faucet and fixture repair and upgrade',
      'Garbage disposal repair and replacement',
      'Drain cleaning and clog removal',
      'Well-water filter and softener service',
      'Crawl-space and exposed-pipe winterization',
      'Pressure regulator and supply line replacement',
    ],
    signs: [
      'Water stain on ceiling or wall',
      'Sound of running water when nothing is on',
      'Hot water runs out fast or will not heat',
      'Toilet keeps running or will not flush',
      'Slow drain or recurring clog',
      'Wet spot in the crawl space or yard',
      'Guest complaint about low water pressure',
      'Disposal humming or not draining',
    ],
    faq: [
      {
        q: 'How fast can you respond to a burst pipe?',
        a: 'For active leaks in booked rentals, we prioritize same-day dispatch. Call 865-805-2438. We can walk your property manager through shutting off the water while we are en route to minimize damage.',
      },
      {
        q: 'Should I repair or replace my water heater?',
        a: 'If the tank is under 8 years old and the issue is an element, thermostat, or pilot assembly, repair is usually cost-effective. If the tank is older, leaking, or heavily scaled, replacement is the better value. We diagnose first and quote both options honestly.',
      },
      {
        q: 'Why does my tankless water heater cut out mid-shower?',
        a: 'Most often the flow sensor is clogged with sediment, or the heat exchanger is scaled up from hard water. We descale the unit, clean the sensor, and check the inlet filter. Annual descaling prevents the issue and protects the heat exchanger.',
      },
      {
        q: 'Can you fix a toilet that keeps running?',
        a: 'Yes — usually it is a worn flapper, a misadjusted fill valve, or a flush handle chain. We carry common parts and most running-toilet repairs take under an hour. We also replace toilets when the bowl or tank is cracked.',
      },
      {
        q: 'Do you winterize cabins for the off-season?',
        a: 'Yes. We drain and protect exposed plumbing, add antifreeze to traps, and shut down and protect water heaters. This is included for maintenance package subscribers and available as a one-time service for seasonal owners.',
      },
    ],
    relatedServices: [
      { name: 'Hot Tub Repair', path: '/hot-tub-repair' },
      { name: 'HVAC Services', path: '/hvac-services' },
      { name: 'Electrical Repairs', path: '/electrical-repairs' },
    ],
    jobPhoto: '/cabin-plumbing-repair-sevierville.webp',
    jobPhotoAlt: 'Plumber repairing cabin pipes under a sink in Sevierville TN',
  },
  {
    slug: 'electrical-repairs',
    name: 'Electrical Repairs',
    shortName: 'Electrical Repair',
    heroImage: '/electrical-panel-repair-sevierville.webp',
    heroAlt: 'Electrician repairing a cabin breaker panel in Sevierville TN',
    intro:
      'Tripping breakers, dead outlets, and flickering lights are not just annoying — in a rental cabin they are a guest-safety and fire-risk issue. We provide safe, code-compliant electrical repairs for cabins across Sevier County, from outlet and panel work to lighting and hot tub circuit upgrades.',
    bodyParagraphs: [
      'Many Smoky Mountain cabins were built decades before today appliance loads existed. A 100-amp panel that was fine in 1995 now trips when a guest runs the AC, the hot tub, the microwave, and a hair dryer at the same time. We upgrade panels and circuits to handle modern cabin loads safely — and we do it to code, with permits pulled and inspections passed.',
      'Our most common cabin calls are tripping breakers on hot tub and HVAC circuits, dead GFCI outlets in kitchens and baths, flickering lights from loose neutrals, and outdoor outlet failures from moisture intrusion. We carry GFCIs, breakers, and common receptacles on the truck, so most repairs are single-visit. For panel upgrades, we coordinate the utility company and inspector so the cabin is without power for the shortest possible window.',
      'Safety is the standard, not the upsell. If a circuit is fine, we tell you. If a panel is a fire risk, we say so clearly and quote the upgrade. Every repair is done to current NEC code, and we label every breaker so your cleaning crew and property manager know what is on what circuit.',
    ],
    services: [
      'Breaker panel inspection, repair, and upgrade',
      'GFCI and AFCI outlet replacement',
      'Hot tub and HVAC dedicated circuit installation',
      'Lighting repair and fixture replacement',
      'Wiring repair and replacement',
      'Smoke and CO detector installation and wiring',
      'Generator hookup and transfer switch install',
      'Outdoor and deck lighting installation',
      'Whole-cabin surge protection',
      'EV charger installation',
    ],
    signs: [
      'Breaker trips repeatedly',
      'Outlet dead or intermittent',
      'Lights flicker when appliances run',
      'Burning smell from an outlet or panel',
      'Outlet warm to the touch',
      'Guest complaint about a dead kitchen or bath outlet',
      'Hot tub or HVAC on a shared circuit',
      'Panel is a Federal Pacific or Zinsco (fire risk)',
    ],
    faq: [
      {
        q: 'Why does my breaker keep tripping?',
        a: 'Usually the circuit is overloaded, a component on it is shorting, or the breaker itself is weak. Hot tubs and HVAC on a shared circuit are the most common cabin culprit. We measure the load, isolate the fault, and either split the circuit or replace the failed component.',
      },
      {
        q: 'Do I need a dedicated circuit for my hot tub?',
        a: 'Yes — code requires it. A hot tub draws 30 to 50 amps and must be on its own GFCI-protected circuit. Sharing a circuit with an outlet or appliance causes nuisance trips and is a fire risk. We install dedicated spa circuits to code.',
      },
      {
        q: 'Why is my GFCI outlet not resetting?',
        a: 'A GFCI that will not reset usually means there is a ground fault downstream on the load side, moisture in the box, or the GFCI itself has failed. We trace the fault, replace the device, and confirm it trips correctly under test.',
      },
      {
        q: 'Should I upgrade my electrical panel?',
        a: 'If your panel is a Federal Pacific or Zinsco, yes — these are known fire risks. If you are adding a hot tub, mini-split, or EV charger and the panel is full or low-amperage, an upgrade is usually the right call. We assess the load and quote honestly.',
      },
      {
        q: 'Can you add outdoor outlets for deck lighting?',
        a: 'Yes. We install weather-rated GFCI outlets on decks and exterior walls, properly sealed against moisture. Great for guest convenience and holiday lighting without running extension cords through a window.',
      },
    ],
    relatedServices: [
      { name: 'Hot Tub Repair', path: '/hot-tub-repair' },
      { name: 'HVAC Services', path: '/hvac-services' },
      { name: 'Plumbing Repairs', path: '/plumbing-repairs' },
    ],
    jobPhoto: '/electrical-panel-repair-sevierville.webp',
    jobPhotoAlt: 'Electrician repairing a cabin breaker panel in Sevierville TN',
  },
];

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hickory Home and Cabin Repair',
    alternateName: [
      'Hickory Home & Cabin Repair',
      'Hickory Home Cabin Repair',
      'hickorytn.com',
    ],
    url: `${SITE_URL}/`,
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    description:
      'Fast, reliable cabin repair and maintenance for short-term rental owners in Sevier County, TN. Hot tubs, HVAC, electrical, plumbing, and maintenance packages.',
    url: SITE_URL,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    image: `${SITE_URL}/Grand_Mountain_View_Great_Smoky_Mountains-28.webp`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'TN',
      addressCountry: 'US',
      addressLocality: 'Sevierville',
      addressCounties: 'Sevier County',
    },
    areaServed: CITIES.map((c) => ({ '@type': 'City', name: c.name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      'https://www.facebook.com/p/Hickory-Home-Cabin-Repair-61571834165926/',
      'https://book.housecallpro.com/book/Hickory-LLC/7876fd7162a9406cab3af546ea714bd0?v2=true',
    ],
  };
}

export function serviceSchema(serviceName: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Sevier County, TN' },
    description,
    url: `${SITE_URL}${path}`,
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function reviewSchema(reviews: { name: string; rating: number; text: string; date: string; service: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: BUSINESS.name,
    description: 'Cabin repair and maintenance services in Sevier County, TN',
    brand: { '@type': 'Brand', name: BUSINESS.name },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: reviews.length,
      bestRating: 5,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
