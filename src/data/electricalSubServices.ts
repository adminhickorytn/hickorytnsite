export interface ElectricalSubService {
  slug: string;
  title: string;
  seoTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  services: string[];
  whenNeeded: string[];
  relatedServices: { label: string; path: string }[];
}

export const electricalSubServices: ElectricalSubService[] = [
  {
    slug: 'electrical-panel-replacement',
    title: 'Electrical Panel Replacement',
    seoTitle: 'Electrical Panel Replacement in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Electrical panel and breaker box replacement for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Licensed TN Electrical Contractor CE #86291. Call 865-805-2438.',
    h1: 'Electrical Panel & Breaker Box Replacement in Sevierville, TN',
    intro:
      'Your electrical panel is one of the most important components of your property\'s electrical system. If it is outdated, damaged, overloaded, or no longer provides the capacity your property needs, it may be time for a replacement. We provide electrical panel and breaker box replacement for vacation rental cabins and properties throughout Sevier County, performed under Tennessee CE Electrical Contractor License #86291.',
    services: [
      'Breaker box replacement',
      'Electrical panel replacement',
      'Panel upgrades for additional capacity',
      'Circuit breaker replacement',
      'Adding circuits to an existing panel',
      'Panel troubleshooting',
      'Replacement of damaged or overheated components',
      'Subpanel installation',
      'Electrical load considerations',
    ],
    whenNeeded: [
      'The panel is outdated and no longer meets the property\'s electrical demands',
      'Breakers trip frequently under normal loads',
      'The panel shows signs of overheating, corrosion, or damage',
      'A renovation or addition requires additional circuit capacity',
      'The panel is a brand or model with known reliability issues',
      'New equipment — hot tubs, HVAC, EV chargers — exceeds the panel\'s capacity',
    ],
    relatedServices: [
      { label: 'Subpanel Installation', path: '/subpanel-installation' },
      { label: 'Electrical Service Upgrades', path: '/electrical-service-upgrades' },
      { label: 'Cabin Electrical Repair', path: '/cabin-electrical-repair' },
      { label: 'Main Electrical Page', path: '/electrical-repairs' },
    ],
  },
  {
    slug: 'subpanel-installation',
    title: 'Subpanel Installation',
    seoTitle: 'Subpanel Installation in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Subpanel installation and electrical distribution work for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Licensed TN Electrical Contractor CE #86291. Call 865-805-2438.',
    h1: 'Subpanel Installation in Sevierville, TN',
    intro:
      'Adding equipment to a vacation rental can create additional electrical demand. Hot tubs, HVAC systems, EV chargers, workshops, outdoor equipment, and property additions may require additional circuits or electrical capacity. A properly installed subpanel provides additional circuit capacity while keeping the electrical system organized and appropriately distributed. We provide subpanel installation throughout Sevier County under Tennessee CE Electrical Contractor License #86291.',
    services: [
      'Subpanel installation and electrical distribution work',
      'Additional circuit capacity for hot tubs and spas',
      'EV charger subpanels',
      'HVAC system subpanels',
      'Workshop and detached building subpanels',
      'Electrical system evaluation',
      'Load calculation and distribution planning',
    ],
    whenNeeded: [
      'The main panel does not have enough available circuits for new equipment',
      'A hot tub, EV charger, or HVAC system requires a dedicated circuit',
      'A detached building, garage, or workshop needs power',
      'The property addition requires additional electrical capacity',
      'You want to organize circuits by area or equipment type',
    ],
    relatedServices: [
      { label: 'Electrical Panel Replacement', path: '/electrical-panel-replacement' },
      { label: 'Electrical Service Upgrades', path: '/electrical-service-upgrades' },
      { label: 'Hot Tub Electrical Repair', path: '/hot-tub-electrical-repair' },
      { label: 'Main Electrical Page', path: '/electrical-repairs' },
    ],
  },
  {
    slug: 'underground-electrical',
    title: 'Underground Electrical Service & Conduit',
    seoTitle: 'Underground Electrical & Conduit Installation in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Underground electrical conduit and service runs for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Licensed TN Electrical Contractor CE #86291. Call 865-805-2438.',
    h1: 'Underground Electrical Service & Conduit in Sevierville, TN',
    intro:
      'We provide underground electrical work and electrical conduit installation for qualifying projects throughout Sevier County. Underground electrical installations require proper planning, materials, installation methods, and coordination with the applicable utility and permitting authorities. Whether you\'re adding power to a new structure or replacing an existing underground run, we can evaluate the project and determine the appropriate solution.',
    services: [
      'Underground electrical conduit',
      'Underground electrical runs',
      'Electrical service connections',
      'Electrical feeders',
      'Conduit installation',
      'Electrical connections between structures',
      'Power to detached buildings',
      'Power to garages, workshops, and other structures',
      'Electrical service for outdoor equipment',
      'Replacement of damaged underground electrical components',
    ],
    whenNeeded: [
      'You need power run to a detached building, garage, or workshop',
      'An existing underground electrical run has been damaged',
      'New outdoor equipment requires underground electrical service',
      'You want to replace overhead wiring with underground conduit',
      'A new structure on the property needs electrical service',
    ],
    relatedServices: [
      { label: 'Electrical Service Upgrades', path: '/electrical-service-upgrades' },
      { label: 'Subpanel Installation', path: '/subpanel-installation' },
      { label: 'Cabin Electrical Repair', path: '/cabin-electrical-repair' },
      { label: 'Main Electrical Page', path: '/electrical-repairs' },
    ],
  },
  {
    slug: 'electrical-service-upgrades',
    title: 'Electrical Service Upgrades',
    seoTitle: 'Electrical Service Upgrades in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Electrical service upgrades and new service installations for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Licensed TN Electrical Contractor CE #86291. Call 865-805-2438.',
    h1: 'Electrical Service Upgrades in Sevierville, TN',
    intro:
      'Building or renovating a cabin can require new electrical service or modifications to an existing electrical system. We provide electrical service upgrades and new service installations for vacation rental cabins and properties throughout Sevier County, performed under Tennessee CE Electrical Contractor License #86291. We can also coordinate electrical work with other contractors when a larger cabin project requires multiple trades.',
    services: [
      'New electrical service installations',
      'Electrical service upgrades',
      'Service equipment',
      'Electrical feeders',
      'Service connections',
      'Disconnects',
      'New circuits',
      'Subpanels',
      'Electrical connections for new equipment',
      'Cabin renovation electrical work',
    ],
    whenNeeded: [
      'A cabin renovation or addition requires more electrical capacity',
      'The existing service is insufficient for the property\'s current equipment load',
      'New equipment — hot tubs, HVAC, EV chargers — requires service upgrades',
      'A property is being converted from a residence to a vacation rental with higher demand',
      'The existing service equipment is outdated or damaged',
    ],
    relatedServices: [
      { label: 'Electrical Panel Replacement', path: '/electrical-panel-replacement' },
      { label: 'Subpanel Installation', path: '/subpanel-installation' },
      { label: 'Underground Electrical', path: '/underground-electrical' },
      { label: 'Main Electrical Page', path: '/electrical-repairs' },
    ],
  },
  {
    slug: 'cabin-electrical-repair',
    title: 'Cabin Electrical Repair',
    seoTitle: 'Cabin Electrical Repair in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Electrical troubleshooting and repair for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Breakers, outlets, wiring, lighting, GFCI, and more. Licensed TN Electrical Contractor CE #86291. Call 865-805-2438.',
    h1: 'Cabin Electrical Repair in Sevierville, TN',
    intro:
      'Vacation rental cabins have different electrical demands than a typical residential home. Multiple HVAC systems, hot tubs, large kitchen appliances, multiple televisions, game rooms, outdoor lighting, and high guest occupancy all place demands on the electrical system. We provide electrical troubleshooting and repair for vacation rental cabins throughout Sevier County, performed under Tennessee CE Electrical Contractor License #86291.',
    services: [
      'Electrical troubleshooting',
      'Breaker problems and tripped breakers',
      'Loss of power to outlets or circuits',
      'Electrical shorts',
      'Faulty wiring',
      'GFCI and AFCI issues',
      'Lighting and fixture problems',
      'Electrical problems affecting HVAC and hot tubs',
      'Circuit problems',
      'Electrical connections and terminations',
    ],
    whenNeeded: [
      'Guests report that the breaker keeps tripping',
      'Half the cabin has no power',
      'Outlets have stopped working',
      'The electrical panel is making noise',
      'Something smells like it\'s burning',
      'New equipment keeps tripping the breaker',
      'Lighting or fixtures are not working properly',
    ],
    relatedServices: [
      { label: 'Hot Tub Electrical Repair', path: '/hot-tub-electrical-repair' },
      { label: 'Electrical Panel Replacement', path: '/electrical-panel-replacement' },
      { label: 'HVAC Services', path: '/hvac-services' },
      { label: 'Main Electrical Page', path: '/electrical-repairs' },
    ],
  },
];
