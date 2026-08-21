export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-vacation-cabin-hot-tubs-stop-heating',
    title: 'Why Vacation Cabin Hot Tubs Stop Heating (and How to Fix It)',
    excerpt: 'A cold hot tub is the fastest way to a bad guest review. Here are the most common reasons rental cabin hot tubs stop heating — and what to do about each one.',
    date: '2026-08-01',
    readTime: '5 min read',
    category: 'Hot Tub Repair',
    content: [
      'When a guest calls to say the hot tub is cold, the clock starts ticking. In a short-term rental cabin, a broken hot tub is not just a maintenance issue — it is a refund waiting to happen and a one-star review in the making. Understanding why cabin hot tubs stop heating helps you respond faster and prevent the next failure.',
      'The most common cause is a failed heater element. In rental cabins, hot tubs run harder than any residential spa — back-to-back guests, fluctuating chemical levels, and mountain freeze-thaw cycles all stress the element. A multimeter test confirms whether the element is drawing current. If not, replacement is straightforward and most units are back online the same day.',
      'The second most common culprit is a tripped high-limit switch. This safety device cuts power to the heater when the water gets too hot or the flow is too low. A dirty filter, a clogged plumbing line, or a bad circulation pump can all trigger the high-limit. Resetting the switch gets the tub running again, but the underlying flow issue needs to be fixed or the switch will keep tripping.',
      'A bad temperature sensor is the third frequent cause. The sensor tells the control board how warm the water is. If it reads incorrectly — reporting 104°F when the water is actually 80°F — the board never calls for heat. Sensor replacement is a quick, inexpensive fix.',
      'Finally, a control board fault can prevent heating. This is the most expensive diagnosis, but it is also the least common. Before replacing a board, a technician should verify the heater, high-limit, and sensor are all working — because a board swap will not fix a bad element.',
      'The best way to prevent heating failures is seasonal maintenance. A technician checking the element, cleaning the filter, and verifying sensor readings twice a year catches most issues before a guest ever notices. Our maintenance package includes hot tub inspection at every seasonal visit — and subscribers get priority dispatch when something does go wrong.',
    ],
  },
  {
    slug: 'how-to-keep-rental-cabins-guest-ready',
    title: 'How to Keep Rental Cabins Guest-Ready Between Bookings',
    excerpt: 'A guest-ready cabin is a profitable cabin. Here is the maintenance checklist that keeps your short-term rental running smoothly between every booking.',
    date: '2026-07-25',
    readTime: '6 min read',
    category: 'Maintenance',
    content: [
      'The difference between a five-star cabin and a three-star cabin is rarely the view or the decor — it is whether everything works. Guests who arrive to a cold hot tub, a flickering light, or a slow drain do not care that the property manager was short-staffed. They care that their vacation was disrupted. A guest-ready maintenance routine prevents those disruptions.',
      'Start with the hot tub. It is the amenity guests use hardest and complain about most. Between every turnover, the cleaning crew should check water level, clarity, and temperature. A weekly or bi-weekly professional check of chemistry and components catches problems before a guest ever touches the water. If the tub takes more than two hours to heat, something is wrong — do not wait for a guest to find it.',
      'HVAC is the second priority. In a Smoky Mountain cabin, the AC runs hard from May through September and the heat runs hard from November through March. Change filters monthly during peak season — not quarterly. A clogged filter restricts airflow, ices the coil, and eventually kills the compressor. A $15 filter change prevents a $2,000 compressor replacement.',
      'Plumbing checks are quick but critical. After every turnover, run every faucet and flush every toilet. Look under sinks for moisture. A slow drip under a bathroom vanity can rot the cabinet floor before anyone notices — and a burst pipe in a crawl space during a January freeze is the most expensive call a cabin owner will ever make.',
      'Electrical safety checks are often overlooked. Test every GFCI outlet in kitchens, baths, and exterior walls monthly. Replace smoke and CO detector batteries at every daylight saving time change. If a breaker trips more than once, do not just reset it — have a technician find out why. Recurring trips mean a fault that will eventually cause a fire.',
      'Finally, walk the exterior. Check gutters and downspouts for blockage, look for missing shingles, and clear any tree limbs touching the roof. A clogged gutter sends water down the foundation wall and into the crawl space — and that is how mold problems start in mountain cabins.',
      'If you own multiple cabins or live out of the area, a professional maintenance package is the most reliable way to keep every property guest-ready. Our seasonal visits cover all of the above, and subscribers get a written report after every check — plus priority dispatch when something does break.',
    ],
  },
  {
    slug: 'common-hvac-problems-gatlinburg-cabins',
    title: 'Common HVAC Problems in Gatlinburg Cabins (and How to Prevent Them)',
    excerpt: 'Gatlinburg cabins are hard on HVAC systems. Here are the most common failures we see — and the maintenance that prevents them.',
    date: '2026-07-18',
    readTime: '5 min read',
    category: 'HVAC',
    content: [
      'Gatlinburg sits at 1,300 feet elevation surrounded by dense forest and high humidity. That combination is brutal on HVAC equipment. We repair more mini-splits and central systems in Gatlinburg than anywhere else in Sevier County — and the same failures repeat across nearly every cabin.',
      'The number-one issue is a clogged mini-split drain line. Gatlinburg humidity means the indoor coil pulls gallons of water out of the air every day. That water carries mold spores and sediment that build up in the drain line until it backs up. Water overflows the drain pan, runs down the wall, and ruins drywall and flooring. The fix is a annual drain-line clearing and coil cleaning — a 30-minute service call that prevents thousands in water damage.',
      'The second most common problem is a failed capacitor. The capacitor starts the compressor and the fan motor. In Gatlinburg, the AC runs almost continuously from June through August, and the heat and vibration degrade the capacitor until it fails. A weak capacitor makes the compressor struggle, draws excess current, and eventually burns out the motor. Replacing a capacitor costs under $200. Replacing a compressor costs over $2,000.',
      'Dirty condenser coils are the third recurring issue. Cabins tucked into the tree line have leaves, pollen, and pine needles that pack into the outdoor unit. A clogged coil cannot release heat, so the system runs longer, cools less, and consumes more power. A annual coil cleaning with a chemical foaming cleaner restores full capacity.',
      'Refrigerant leaks are less common but more serious. A slow leak means the system loses cooling capacity over weeks. Guests complain the AC cannot keep up on hot days. A technician with gauges can detect the leak, seal it, and recharge the system. If the leak is in the indoor or outdoor coil, replacement may be the better value on an older unit.',
      'The preventive fix for all of these is a spring tune-up. Our maintenance package includes a full cooling-season prep: filter change, coil cleaning, drain-line clearing, capacitor test, and refrigerant level check. Gatlinburg cabin owners on the plan rarely need emergency AC repair — because the tune-up catches every common failure before the first guest arrives.',
    ],
  },
  {
    slug: 'dehumidifier-setup-smoky-mountain-cabins',
    title: 'Best Dehumidifier Setup for Smoky Mountain Cabins',
    excerpt: 'Mountain humidity is the hidden enemy of cabin owners. Here is how to set up a dehumidifier system that protects your property and keeps guests comfortable.',
    date: '2026-07-10',
    readTime: '7 min read',
    category: 'HVAC',
    content: [
      'The Smoky Mountains earn their name from the persistent humidity that clings to the forests. For cabin owners, that humidity is more than a comfort issue — it is a structural threat. Mold, mildew, warped wood, and musty smells all trace back to excess moisture. A proper dehumidifier setup is one of the best investments a rental cabin owner can make.',
      'The first question is whether your HVAC system is handling humidity on its own. A correctly sized mini-split or central system does dehumidify as a byproduct of cooling. But in shoulder seasons — spring and fall — when the cabin does not need much cooling, the HVAC runs less and humidity climbs. That is where a standalone dehumidifier earns its keep.',
      'For most cabins, a 50-70 pint portable dehumidifier placed in the main living area is the right starting point. Look for a unit with a built-in pump or a drain hose connection — you do not want your cleaning crew emptying a bucket every turnover. Run the drain hose to a utility sink, a floor drain, or directly outside through a wall penetration sealed with silicone.',
      'For cabins with a crawl space or basement, a second dehumidifier downstairs is essential. Crawl spaces in Sevier County are naturally damp, and that moisture migrates up into the living space. A 30-50 pint unit with a continuous drain keeps the crawl space below 50% relative humidity and prevents the moldy smell that guests notice before anything else.',
      'Set the target humidity between 45% and 50%. Below 40% the air feels dry and guests may complain about static. Above 55% mold growth begins. A hygrometer placed in the main living area tells you what the dehumidifier is actually achieving — do not trust the built-in display on the unit, which only measures humidity right next to the machine.',
      'The most common setup mistake is placing the dehumidifier in a closed-off room. Dehumidifiers work by circulating air through the unit. If the unit is in a laundry room with the door shut, it dehumidifies the laundry room and nothing else. Place it in the open living area, away from walls and furniture, with at least 12 inches of clearance on all sides for airflow.',
      'Maintenance is minimal but important. Clean the air filter monthly during humid months — a clogged filter cuts capacity in half. Check the drain hose for kinks or clogs at every turnover. If the unit has a pump, test it by pouring a cup of water into the reservoir and confirming it pumps out. A failed pump means water backs up and spills onto the floor.',
      'For whole-cabin protection, consider integrating the dehumidifier with your smart thermostat. Some systems can trigger the dehumidifier based on humidity readings from a smart sensor, so it only runs when needed. This saves energy and prevents over-drying. We can install and configure smart humidity controls as part of an HVAC service visit.',
    ],
  },
];
