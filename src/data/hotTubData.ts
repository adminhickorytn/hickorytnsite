export interface HotTubProblem {
  title: string;
  symptom: string;
  causes: string[];
  explanation: string;
}

export const hotTubProblems: HotTubProblem[] = [
  {
    title: 'Hot Tub Won\'t Heat',
    symptom: 'The hot tub runs but the water never reaches temperature or loses heat quickly.',
    causes: ['Heater element failure', 'Circulation problems', 'Temperature sensor issues', 'Spa pack faults', 'Electrical supply problems', 'Low water flow'],
    explanation:
      'A hot tub that won\'t heat is one of the most common calls we get from cabin owners. The cause can range from a failed heating element inside the spa pack to a circulation pump that isn\'t moving enough water across the heater. Temperature sensors, high-limit switches, and even low water flow from a clogged filter can all prevent the heater from turning on. We troubleshoot the full chain — from the breaker and GFCI to the spa pack, sensors, and pump — rather than guessing and swapping parts.',
  },
  {
    title: 'Hot Tub Keeps Tripping the Breaker',
    symptom: 'The GFCI breaker trips when the hot tub tries to heat, run the pump, or turn on at all.',
    causes: ['Wet or failed heater element', 'Pump motor short', 'Wiring issues', 'GFCI breaker wear', 'Moisture in the spa pack', 'Component ground faults'],
    explanation:
      'When a hot tub repeatedly trips the breaker, something inside the system is drawing fault current. The most common culprit is a wet or degraded heater element, but pump motors, wiring connections, and moisture inside the spa pack can all cause it. Repeatedly resetting the breaker without diagnosing the cause is not a fix — it can damage components and create a safety hazard. We isolate each component to find the actual source of the fault before replacing anything.',
  },
  {
    title: 'Hot Tub Is Leaking',
    symptom: 'Water is pooling around the hot tub, the water level drops over time, or you see dripping from the equipment area.',
    causes: ['Pump seal failures', 'Broken barbed fittings', 'Loose plumbing connections', 'Valve leaks', 'Heater manifold cracks', 'Worn O-rings and gaskets'],
    explanation:
      'Leaks can appear at pumps, fittings, plumbing connections, valves, heaters, or anywhere water travels through the system. We start by removing the equipment access panels and inspecting the pump area, where broken barbed fittings and worn shaft seals are common. From there we trace the plumbing to isolate the source. Some leaks are slow drips that worsen over time; others drain the tub quickly. Either way, finding the exact source matters — adding leak stop chemicals rarely fixes the underlying problem.',
  },
  {
    title: 'Hot Tub Pump Is Not Working',
    symptom: 'The pump doesn\'t turn on, makes a humming noise, or runs but doesn\'t move water.',
    causes: ['Failed pump motor', 'Bad capacitor', 'Electrical supply issues', 'Air lock in the pump', 'Control board problems', 'Debris in the impeller'],
    explanation:
      'A pump that hums but doesn\'t spin often has a failed capacitor or a seized motor. A pump that doesn\'t turn on at all may have an electrical supply issue, a tripped breaker, or a control board that isn\'t sending the signal. Sometimes the pump is fine but an air lock prevents water from reaching the impeller. We test the motor, capacitor, voltage at the pump, and control signals to determine whether the pump needs replacement or whether the problem is elsewhere.',
  },
  {
    title: 'Hot Tub Has Weak Jets',
    symptom: 'Jets are barely flowing, some jets have no flow, or the water circulation feels weak.',
    causes: ['Clogged filter', 'Blocked plumbing', 'Air locks', 'Pump performance issues', 'Debris in the system', 'Closed or misaligned diverter valves', 'Worn jet internals'],
    explanation:
      'Weak jet flow usually traces back to a flow problem somewhere in the system. A clogged or saturated filter is the first thing to check. From there, air locks, debris in the plumbing, diverter valves that are partially closed, and pump performance all play a role. In older tubs, the jet internals themselves can wear out and reduce flow even when everything else is working. We trace the flow path from the skimmer and filter through the pump and into the jet system to find the restriction.',
  },
  {
    title: 'Hot Tub Control Panel Is Not Working',
    symptom: 'The topside display is blank, showing an error code, or buttons aren\'t responding.',
    causes: ['Failed topside control', 'Spa pack communication issues', 'Wiring problems between the control and spa pack', 'Moisture damage', 'Control board faults'],
    explanation:
      'The control panel — or topside control — communicates with the spa pack to operate the pump, heater, and other functions. A blank display can mean the topside itself has failed, but it can also mean the spa pack isn\'t sending power or data to it. We test the wiring connection, the voltage at the control, and the spa pack output to determine whether the topside needs replacement or the problem is in the main board.',
  },
];

export interface HotTubCaseStudy {
  title: string;
  report: string;
  finding: string;
  diagnosis: string;
  repair: string;
  result: string;
}

export const hotTubCaseStudies: HotTubCaseStudy[] = [
  {
    title: 'Pump Fitting Leak at a Sevierville Rental Cabin',
    report: 'The property manager reported that the hot tub had nearly drained completely between guest stays. By the time we arrived, the water level was well below the skimmer.',
    finding: 'After removing the equipment access panels, we found water dripping from the pump area. The barbed fitting connecting the plumbing to the pump had cracked, allowing water to escape under pressure whenever the pump ran.',
    diagnosis: 'The cracked fitting was the original installation fitting, which had become brittle over years of heat cycling and vibration. The pump seal itself was intact — the leak was entirely at the fitting connection.',
    repair: 'We replaced the broken barbed fitting, reconnected the plumbing, and verified the joint under pressure. The pump was reinstalled and the tub was refilled and restarted.',
    result: 'The leak stopped immediately. The tub held water through the next several guest stays with no further calls about water loss.',
  },
  {
    title: 'Heating Element Failure in a Gatlinburg Cabin',
    report: 'Guests reported that the hot tub was cold. The owner checked and confirmed the tub was running but the water temperature was well below the set point.',
    finding: 'The pump and circulation were working normally. We tested the heater circuit at the spa pack and found voltage at the element terminals, but the element was not producing heat. A continuity test confirmed the heating element was open.',
    diagnosis: 'The heating element had failed — a common issue in older spa packs, especially when the tub has been through multiple winter seasons without consistent maintenance.',
    repair: 'We replaced the heating element, verified the new element\'s continuity and resistance, and confirmed the GFCI and high-limit circuit were functioning properly before restarting.',
    result: 'The hot tub reached set temperature within a few hours and held heat through the guest stay. No further issues reported.',
  },
  {
    title: 'Spa Pack Replacement at a Pigeon Forge Rental',
    report: 'The hot tub control panel was displaying an error code and the tub would not heat or run the pump. A previous company had attempted to reset the system but the error returned.',
    finding: 'We pulled the error code from the spa pack and tested the board. The spa pack had internal board-level damage — the relay controlling the heater circuit had failed, and the board showed signs of heat damage.',
    diagnosis: 'The spa pack was beyond component-level repair. A full spa pack replacement was the appropriate solution.',
    repair: 'We sourced a compatible spa pack for the tub model, replaced the unit, reconnected the pump, heater, sensor, and topside control wiring, and verified all functions after startup.',
    result: 'All error codes cleared, the heater and pump cycled normally, and the tub was back in service for the next guest check-in.',
  },
  {
    title: 'Temperature Sensor Replacement in a Wears Valley Cabin',
    report: 'The hot tub was overheating — the water was significantly hotter than the set temperature, and the high-limit switch kept shutting the tub down.',
    finding: 'We tested the temperature sensor at the spa pack and found the resistance reading was out of spec for the water temperature. The sensor was reporting a lower temperature than actual, causing the heater to run longer than it should.',
    diagnosis: 'A failed temperature sensor was causing the spa pack to overheat the water. The high-limit switch was doing its job by shutting the system down for safety.',
    repair: 'We replaced the temperature sensor with a compatible unit, verified the resistance reading matched the actual water temperature, and confirmed the heater cycled off correctly at the set point.',
    result: 'The tub held temperature accurately and the high-limit shutdowns stopped. The guests were able to use the tub safely for the remainder of their stay.',
  },
  {
    title: 'Breaker Tripping — Electrical Troubleshooting in Sevierville',
    report: 'The hot tub tripped the GFCI breaker every time it tried to heat. The owner had been resetting it repeatedly but the problem kept returning.',
    finding: 'We isolated each component at the spa pack. The pump ran fine on its own. The breaker tripped only when the heater circuit was energized. We pulled the heater element and found moisture had penetrated the element housing.',
    diagnosis: 'A wet heater element was causing a ground fault that tripped the GFCI whenever the heater engaged. The element itself was degraded and needed replacement.',
    repair: 'We replaced the heating element, verified the GFCI held with the new element under a full heat cycle, and inspected the spa pack cover and seal to prevent future moisture intrusion.',
    result: 'The breaker stopped tripping, the tub heated normally, and the owner was advised to keep the spa pack cover sealed to prevent recurrence.',
  },
  {
    title: 'Jet Debris Problem in a Cosby Cabin',
    report: 'Guests reported that several jets in the hot tub were not working and the water flow was very weak.',
    finding: 'We inspected the filter and found it was heavily saturated. After removing and inspecting the pump, we found debris had passed through and partially blocked the impeller. Several jet internals also had mineral buildup restricting flow.',
    diagnosis: 'The combination of a clogged filter, debris in the pump impeller, and mineral scale in the jets was restricting water flow throughout the system.',
    repair: 'We cleaned the pump impeller, replaced the filter, and flushed the plumbing. The affected jet internals were cleaned and reinstalled. We advised the owner on a filter replacement schedule.',
    result: 'Full jet flow was restored and the tub operated normally for subsequent guest stays.',
  },
];

export interface HotTubFAQ {
  q: string;
  a: string;
}

export const hotTubFAQs: HotTubFAQ[] = [
  {
    q: 'Do you repair hot tubs at vacation rental cabins?',
    a: 'Yes. We specialize in hot tub repair for vacation rental cabins throughout Sevier County. We work with cabin owners, property managers, and cabin management companies to keep hot tubs running for guests.',
  },
  {
    q: 'Do you work with cabin management companies?',
    a: 'Yes. We work with cabin management companies and property managers throughout the Smoky Mountain area. We provide priority service, repair documentation, and communication designed for managing multiple rental properties.',
  },
  {
    q: 'Why does my hot tub keep tripping the breaker?',
    a: 'A hot tub that repeatedly trips the GFCI breaker usually has a ground fault somewhere in the system. The most common cause is a wet or failed heater element, but pump motors, wiring, and moisture in the spa pack can also cause it. We isolate each component to find the source rather than repeatedly resetting the breaker.',
  },
  {
    q: 'Why is my hot tub not heating?',
    a: 'A hot tub that won\'t heat can have a failed heating element, a circulation problem, a faulty temperature sensor, or an issue with the spa pack. We troubleshoot the full system — from the breaker to the spa pack to the pump — to identify the actual cause.',
  },
  {
    q: 'Can you repair leaking hot tubs?',
    a: 'Yes. We find and repair leaks at pumps, fittings, plumbing connections, valves, heaters, and other components. We trace the leak to its source rather than adding chemical stop-leak products that rarely fix the underlying problem.',
  },
  {
    q: 'Do you repair hot tub pumps?',
    a: 'Yes. We diagnose and repair pump problems including failed motors, bad capacitors, air locks, electrical supply issues, and debris in the impeller. When a pump needs full replacement, we can source and install a compatible unit.',
  },
  {
    q: 'Do you work on spa packs?',
    a: 'Yes. We troubleshoot spa pack problems including heater circuit failures, relay damage, control board faults, and sensor issues. When a spa pack is beyond component-level repair, we can replace it with a compatible unit.',
  },
  {
    q: 'Can you troubleshoot hot tub electrical problems?',
    a: 'Yes. As a Tennessee Licensed Electrical Contractor (CE #86291), we can troubleshoot and repair electrical problems associated with hot tubs, including GFCI breakers, spa disconnects, wiring, and electrical circuits.',
  },
  {
    q: 'Are you a licensed electrical contractor?',
    a: 'Yes. Hickory Home and Cabin Repair is a Tennessee Licensed Electrical Contractor — CE License #86291. This allows us to perform electrical work associated with hot tubs, including GFCI protection, disconnects, wiring, and new circuits where appropriate.',
  },
  {
    q: 'Do you service cabins in Gatlinburg and Pigeon Forge?',
    a: 'Yes. We provide hot tub repair for vacation rental cabins in Gatlinburg, Pigeon Forge, Sevierville, and throughout Sevier County and the surrounding Smoky Mountain area.',
  },
];

export interface HotTubSubService {
  slug: string;
  title: string;
  seoTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  symptoms: string[];
  causes: string[];
  repairProcess: string[];
  whenToReplace: string;
  relatedServices: { label: string; path: string }[];
}

export const hotTubSubServices: HotTubSubService[] = [
  {
    slug: 'hot-tub-heater-repair',
    title: 'Hot Tub Heater Repair',
    seoTitle: 'Hot Tub Heater Repair in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Professional hot tub heater repair for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Heating elements, sensors, spa pack troubleshooting. Call 865-805-2438.',
    h1: 'Hot Tub Heater Repair in Sevierville, TN',
    intro:
      'A hot tub that won\'t heat is one of the most common service calls we receive from cabin owners and property managers. When guests are expecting a warm spa and the water is cold, it can lead to complaints, canceled reservations, and negative reviews. We diagnose and repair heater problems for vacation rental cabins throughout Sevier County and the Smoky Mountain area.',
    symptoms: [
      'Hot tub runs but water never reaches temperature',
      'Water temperature drops over time or fluctuates',
      'Error code related to heater or temperature on the display',
      'Heater indicator is on but water stays cold',
      'High-limit switch keeps shutting the tub down',
    ],
    causes: [
      'Failed or degraded heating element',
      'Faulty temperature sensor reporting incorrect readings',
      'Circulation pump not moving enough water across the heater',
      'Spa pack relay or control board not energizing the heater circuit',
      'Low water flow from a clogged filter triggering the flow switch',
      'High-limit switch tripping due to overheating or sensor error',
    ],
    repairProcess: [
      'Test the heater circuit at the spa pack for proper voltage',
      'Check the heating element for continuity and resistance',
      'Inspect the temperature sensor and high-limit switch readings',
      'Verify water flow through the heater manifold',
      'Test the spa pack relay and control board signals',
      'Replace the failed component and verify the heater cycles correctly',
    ],
    whenToReplace:
      'When a heating element has failed due to age, moisture intrusion, or mineral buildup, replacement is typically more reliable than attempting a repair. If the spa pack itself has board-level damage affecting the heater circuit, a full spa pack replacement may be the better long-term solution — especially for older tubs that have been through multiple winter seasons.',
    relatedServices: [
      { label: 'Hot Tub Pump Repair', path: '/hot-tub-pump-repair' },
      { label: 'Spa Pack Replacement', path: '/hot-tub-spa-pack-replacement' },
      { label: 'Hot Tub Electrical Repair', path: '/hot-tub-electrical-repair' },
      { label: 'Main Hot Tub Repair Page', path: '/hot-tub-repair' },
    ],
  },
  {
    slug: 'hot-tub-pump-repair',
    title: 'Hot Tub Pump Repair',
    seoTitle: 'Hot Tub Pump Repair in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Hot tub pump and motor repair for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Circulation pumps, main pumps, capacitors, leaks, and replacements. Call 865-805-2438.',
    h1: 'Hot Tub Pump Repair in Sevierville, TN',
    intro:
      'The pump is the heart of your hot tub — it circulates water through the heater, filter, and jets. When the pump fails, the hot tub can\'t heat, filter, or provide jet action. We diagnose and repair pump problems for vacation rental cabins throughout Sevier County, including circulation pumps, main pumps, and the electrical and mechanical issues that affect them.',
    symptoms: [
      'Pump hums but doesn\'t spin',
      'Pump doesn\'t turn on at all',
      'Loud grinding or squealing noise from the pump',
      'Water leaking from the pump area',
      'Pump runs but jets have little or no flow',
      'Breaker trips when the pump starts',
    ],
    causes: [
      'Failed run or start capacitor',
      'Seized or worn pump motor',
      'Air lock preventing water from reaching the impeller',
      'Debris blocking the impeller',
      'Failed pump shaft seal causing water leaks',
      'Electrical supply issue — breaker, wiring, or control board',
      'Worn pump bearings causing noise',
    ],
    repairProcess: [
      'Test voltage at the pump to confirm electrical supply',
      'Check the capacitor for proper capacitance and resistance',
      'Inspect the impeller for debris or blockage',
      'Test for air locks and verify water flow to the pump',
      'Inspect the shaft seal and pump housing for leaks',
      'Determine whether the motor, capacitor, or full pump needs replacement',
    ],
    whenToReplace:
      'If the motor has seized or the bearings are worn beyond repair, a pump replacement is usually more cost-effective than rebuilding. For older pumps where parts are difficult to source, a full replacement with a compatible unit is the practical solution. We can source and install the right pump for your hot tub model.',
    relatedServices: [
      { label: 'Hot Tub Heater Repair', path: '/hot-tub-heater-repair' },
      { label: 'Hot Tub Leak Repair', path: '/hot-tub-leak-repair' },
      { label: 'Hot Tub Electrical Repair', path: '/hot-tub-electrical-repair' },
      { label: 'Main Hot Tub Repair Page', path: '/hot-tub-repair' },
    ],
  },
  {
    slug: 'hot-tub-leak-repair',
    title: 'Hot Tub Leak Repair',
    seoTitle: 'Hot Tub Leak Repair in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Hot tub leak detection and repair for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Pump seals, fittings, plumbing, valves, and heater leaks. Call 865-805-2438.',
    h1: 'Hot Tub Leak Repair in Sevierville, TN',
    intro:
      'A leaking hot tub can waste water, damage the equipment area, and eventually drain the tub to the point where the pump runs dry and the heater can\'t function. For vacation rental cabins, a leak between guest stays can mean the tub is empty when the next guests arrive. We find and repair leaks throughout the hot tub system for cabins across Sevier County.',
    symptoms: [
      'Water level dropping over time',
      'Water pooling around the hot tub or equipment area',
      'Dripping from the pump, heater, or plumbing connections',
      'Tub has nearly drained between guest stays',
      'Air in the jets or inconsistent flow',
    ],
    causes: [
      'Cracked or broken barbed fittings at the pump',
      'Failed pump shaft seal',
      'Loose or degraded plumbing connections',
      'Worn O-rings and gaskets at unions and valves',
      'Cracked heater manifold or plumbing',
      'Valve leaks from worn seals',
    ],
    repairProcess: [
      'Remove equipment access panels and inspect the pump and heater area',
      'Trace the plumbing to identify the source of the leak',
      'Pressurize the plumbing if needed to isolate hard-to-find leaks',
      'Inspect fittings, unions, valves, and seals',
      'Repair or replace the failed component',
      'Verify the repair under pressure and refill the tub',
    ],
    whenToReplace:
      'When a fitting is cracked or a pump shaft seal has failed, the component needs replacement — leak stop chemicals rarely fix the underlying problem and can damage equipment. If multiple plumbing connections are degraded from age, replacing the affected section is more reliable than patching individual leaks.',
    relatedServices: [
      { label: 'Hot Tub Pump Repair', path: '/hot-tub-pump-repair' },
      { label: 'Hot Tub Jet Repair', path: '/hot-tub-jet-repair' },
      { label: 'Main Hot Tub Repair Page', path: '/hot-tub-repair' },
    ],
  },
  {
    slug: 'hot-tub-spa-pack-replacement',
    title: 'Spa Pack Replacement',
    seoTitle: 'Hot Tub Spa Pack Replacement in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Spa pack replacement and repair for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Control board, heater, relay, and full spa pack replacement. Call 865-805-2438.',
    h1: 'Hot Tub Spa Pack Replacement in Sevierville, TN',
    intro:
      'The spa pack is the control center of your hot tub — it manages the heater, pump, blower, sensors, and topside control. When the spa pack fails, the tub may not heat, the pump may not run, or the display may show error codes that won\'t clear. We troubleshoot spa pack problems and replace them when repair isn\'t practical for vacation rental cabins throughout Sevier County.',
    symptoms: [
      'Error codes on the control panel that won\'t clear',
      'Heater or pump not activating when it should',
      'Spa pack shows signs of heat damage or burnt connections',
      'Topside control is blank or unresponsive',
      'Breaker trips when specific functions are called',
    ],
    causes: [
      'Failed relay on the heater circuit',
      'Control board damage from heat or moisture',
      'Corroded or burnt connections inside the spa pack',
      'Failed transformer or low-voltage supply to the topside',
      'Sensor input failures causing the board to shut down',
      'Age and heat cycling degrading internal components',
    ],
    repairProcess: [
      'Pull and document all error codes from the spa pack',
      'Test the heater circuit, pump circuit, and sensor inputs at the board',
      'Inspect the spa pack for heat damage, corrosion, or moisture',
      'Determine whether the issue is a replaceable component or board-level failure',
      'If replacement is needed, source a compatible spa pack for the tub model',
      'Replace the unit, reconnect all wiring, and verify every function after startup',
    ],
    whenToReplace:
      'When a spa pack has board-level damage — burnt relays, heat-damaged circuits, or corroded traces — component-level repair is rarely reliable. A full spa pack replacement is the better long-term solution, especially for rental cabins where downtime means guest complaints. We source compatible spa packs and handle the full replacement and startup.',
    relatedServices: [
      { label: 'Hot Tub Control Panel Repair', path: '/hot-tub-control-panel-repair' },
      { label: 'Hot Tub Heater Repair', path: '/hot-tub-heater-repair' },
      { label: 'Hot Tub Electrical Repair', path: '/hot-tub-electrical-repair' },
      { label: 'Main Hot Tub Repair Page', path: '/hot-tub-repair' },
    ],
  },
  {
    slug: 'hot-tub-control-panel-repair',
    title: 'Hot Tub Control Panel Repair',
    seoTitle: 'Hot Tub Control Panel Repair in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Hot tub control panel and topside control repair for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Blank displays, error codes, and button failures. Call 865-805-2438.',
    h1: 'Hot Tub Control Panel Repair in Sevierville, TN',
    intro:
      'The control panel — or topside control — is how guests and owners operate the hot tub. When it goes blank, displays error codes, or stops responding to button presses, the tub can become unusable. We troubleshoot and repair control panel problems for vacation rental cabins throughout Sevier County, determining whether the issue is the topside itself or the spa pack it communicates with.',
    symptoms: [
      'Topside display is blank or flickering',
      'Buttons don\'t respond or respond intermittently',
      'Error codes displayed that don\'t correspond to an obvious problem',
      'Display shows incorrect temperature or settings',
      'Topside works intermittently and then goes blank',
    ],
    causes: [
      'Failed topside control from moisture or age',
      'Wiring issue between the topside and the spa pack',
      'Spa pack not sending power or data to the topside',
      'Control board output failure',
      'Corroded connection at the spa pack or topside plug',
    ],
    repairProcess: [
      'Test the wiring connection between the topside and spa pack',
      'Check voltage and data signals at the topside plug',
      'Inspect for corrosion or loose connections at the spa pack',
      'Test the spa pack output to determine if it\'s sending proper signals',
      'Replace the topside control if it has failed, or address the spa pack if it\'s the source',
      'Verify all functions respond correctly after repair',
    ],
    whenToReplace:
      'Topside controls are sealed units — when they fail from moisture intrusion or internal degradation, they need replacement. If the spa pack is the source of the communication problem, the spa pack may need repair or replacement. We determine which component has failed so you don\'t replace parts that are still working.',
    relatedServices: [
      { label: 'Spa Pack Replacement', path: '/hot-tub-spa-pack-replacement' },
      { label: 'Hot Tub Heater Repair', path: '/hot-tub-heater-repair' },
      { label: 'Main Hot Tub Repair Page', path: '/hot-tub-repair' },
    ],
  },
  {
    slug: 'hot-tub-electrical-repair',
    title: 'Hot Tub Electrical Repair',
    seoTitle: 'Hot Tub Electrical Repair in Sevierville, TN | Licensed Electrical Contractor',
    metaDesc: 'Hot tub electrical repair by a Tennessee Licensed Electrical Contractor (CE #86291). GFCI breakers, spa disconnects, wiring, and circuits for cabins in Sevierville, Gatlinburg, and Pigeon Forge.',
    h1: 'Hot Tub Electrical Repair in Sevierville, TN',
    intro:
      'Hot tubs are one of the biggest electrical loads at a vacation rental cabin, and electrical problems are often the root cause when a tub won\'t run, keeps tripping the breaker, or has lost power. As a Tennessee Licensed Electrical Contractor — CE License #86291 — we can troubleshoot and repair the electrical supply side of the system, not just the equipment.',
    symptoms: [
      'GFCI breaker trips when the hot tub tries to heat or run',
      'Hot tub has no power at all',
      'Breaker trips intermittently',
      'Spa disconnect won\'t stay engaged',
      'Voltage drops or fluctuations at the tub',
    ],
    causes: [
      'Wet or failed heater element causing a ground fault',
      'GFCI breaker worn or degraded from age',
      'Wiring issues at the spa disconnect or spa pack',
      'Moisture in the spa pack causing electrical faults',
      'Undersized or overloaded circuit for the tub\'s requirements',
      'Loose or corroded connections at the breaker or disconnect',
    ],
    repairProcess: [
      'Test voltage at the spa disconnect and spa pack',
      'Isolate the heater, pump, and blower circuits to find the fault source',
      'Inspect the GFCI breaker and test for proper function',
      'Check wiring connections at the disconnect, breaker, and spa pack',
      'Inspect for moisture intrusion in the spa pack or disconnect',
      'Repair or replace the failed electrical component and verify under load',
    ],
    whenToReplace:
      'A GFCI breaker that has degraded from age or repeated tripping should be replaced rather than reset repeatedly. If the circuit is undersized for the tub\'s load — common when a larger replacement tub has been installed — a new circuit with the correct wire size and breaker may be needed. We can evaluate the electrical system and determine what\'s required.',
    relatedServices: [
      { label: 'Electrical Repairs', path: '/electrical-repairs' },
      { label: 'Electrical Panel Replacement', path: '/electrical-panel-replacement' },
      { label: 'Spa Pack Replacement', path: '/hot-tub-spa-pack-replacement' },
      { label: 'Main Hot Tub Repair Page', path: '/hot-tub-repair' },
    ],
  },
  {
    slug: 'hot-tub-jet-repair',
    title: 'Hot Tub Jet Repair',
    seoTitle: 'Hot Tub Jet Repair in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Hot tub jet repair for vacation rental cabins in Sevierville, Gatlinburg, and Pigeon Forge. Weak jets, blocked plumbing, air locks, debris, and worn jet internals. Call 865-805-2438.',
    h1: 'Hot Tub Jet Repair in Sevierville, TN',
    intro:
      'When guests turn on the hot tub and the jets are weak, missing, or not working at all, it\'s a common source of complaints. Jet problems can range from a simple clogged filter to blocked plumbing, air locks, or worn jet internals. We trace the flow path to find the restriction and restore full jet action for vacation rental cabins throughout Sevier County.',
    symptoms: [
      'Jets are weak or barely flowing',
      'Some jets have no flow at all',
      'Jets work intermittently',
      'Water circulation feels weak overall',
      'Air in the jet stream or sputtering',
    ],
    causes: [
      'Clogged or saturated filter restricting water flow',
      'Air lock in the pump preventing water from reaching the impeller',
      'Debris in the plumbing or pump impeller',
      'Diverter valves partially closed or misaligned',
      'Worn or mineral-scaled jet internals',
      'Pump not producing adequate flow',
    ],
    repairProcess: [
      'Inspect and clean or replace the filter',
      'Check for and clear any air locks in the pump',
      'Inspect the pump impeller for debris',
      'Trace the plumbing for blockages or restrictions',
      'Check diverter valve positions and operation',
      'Clean or replace worn jet internals if needed',
    ],
    whenToReplace:
      'Jet internals that have mineral scale buildup or worn bearings may need replacement rather than cleaning. If the pump is producing adequate flow but the jets are still weak, the jet internals are likely the issue. We can source replacement jets for most common tub models.',
    relatedServices: [
      { label: 'Hot Tub Pump Repair', path: '/hot-tub-pump-repair' },
      { label: 'Hot Tub Leak Repair', path: '/hot-tub-leak-repair' },
      { label: 'Main Hot Tub Repair Page', path: '/hot-tub-repair' },
    ],
  },
];

export interface HotTubLocationData {
  slug: string;
  city: string;
  seoTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  localContext: string;
  commonIssues: string[];
  faqs: { q: string; a: string }[];
}

export const hotTubLocationData: HotTubLocationData[] = [
  {
    slug: 'hot-tub-repair-sevierville',
    city: 'Sevierville',
    seoTitle: 'Hot Tub Repair in Sevierville, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Professional hot tub repair for vacation rental cabins in Sevierville, TN. Heaters, pumps, leaks, spa packs, electrical problems, and jets. Same-day service available. Call 865-805-2438.',
    h1: 'Hot Tub Repair in Sevierville, TN',
    intro:
      'Sevierville is the county seat of Sevier County and a major gateway to the Great Smoky Mountains. With a high concentration of vacation rental cabins along the mountain roads and valleys surrounding the city, hot tub problems are a frequent reason cabin owners and property managers call for service. We provide hot tub repair throughout Sevierville and the surrounding area, often with same-day or next-day response.',
    localContext:
      'Sevierville\'s position at the northern entrance to the national park means many of its rental cabins sit on steep terrain with long driveways and exposed utility runs. Hot tubs at these properties face temperature swings through the seasons, and the combination of winter freezes and summer rental demand means equipment works hard year-round. We\'re based locally and can reach Sevierville properties quickly, which matters when guests are checking in and the tub is cold.',
    commonIssues: [
      'Heater failures during peak winter rental season',
      'GFCI breaker tripping from moisture in aging spa packs',
      'Pump fitting leaks from vibration and temperature cycling',
      'Clogged filters reducing jet flow between guest stays',
      'Electrical supply issues at properties with older service panels',
    ],
    faqs: [
      {
        q: 'How fast can you get to my cabin in Sevierville?',
        a: 'We offer same-day and next-day hot tub repair service for Sevierville cabin owners and property managers. Call 865-805-2438 and we\'ll prioritize getting a technician out as quickly as possible.',
      },
      {
        q: 'Do you work with Sevierville cabin management companies?',
        a: 'Yes. We work with several cabin management companies in the Sevierville area. We provide priority service, repair documentation, and communication designed for managing multiple rental properties.',
      },
      {
        q: 'Can you fix a hot tub that keeps tripping the breaker at my Sevierville cabin?',
        a: 'Yes. As a Tennessee Licensed Electrical Contractor (CE #86291), we can troubleshoot the electrical side of the system — GFCI breakers, spa disconnects, wiring, and circuits — as well as the hot tub equipment itself.',
      },
    ],
  },
  {
    slug: 'hot-tub-repair-gatlinburg',
    city: 'Gatlinburg',
    seoTitle: 'Hot Tub Repair in Gatlinburg, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Hot tub repair for vacation rental cabins in Gatlinburg, TN. Heaters, pumps, leaks, spa packs, jets, and electrical problems. Same-day service for cabin owners and managers. Call 865-805-2438.',
    h1: 'Hot Tub Repair in Gatlinburg, TN',
    intro:
      'Gatlinburg is the heart of the Smoky Mountain tourism corridor, with thousands of short-term rental cabins lining the hillsides and mountain roads. A broken hot tub at a Gatlinburg rental cabin can mean guest complaints, bad reviews, and lost bookings. We provide hot tub repair for cabin owners and property managers throughout Gatlinburg and the surrounding mountain area.',
    localContext:
      'Gatlinburg\'s cabins are often perched on steep hillsides with dramatic views — and challenging access for service vehicles. Many of these properties were built decades ago, and their hot tubs and electrical systems have been through years of freeze-thaw cycles. The high volume of weekly guest turnover means hot tubs at Gatlinburg rentals get heavy use, and equipment failures are common during peak season. We know the area and can navigate the mountain roads to reach properties quickly.',
    commonIssues: [
      'Heating element failures from years of winter exposure',
      'Spa pack failures in older tubs at established rental properties',
      'Pump seal leaks and broken fittings from vibration on mountain decks',
      'Control panel failures from moisture intrusion in humid mountain conditions',
      'Breaker tripping at properties with aging electrical service',
    ],
    faqs: [
      {
        q: 'How fast can you get to my cabin in Gatlinburg?',
        a: 'We provide same-day and next-day hot tub repair for Gatlinburg cabin owners and property managers. We know the mountain roads and can reach properties throughout the Gatlinburg area quickly. Call 865-805-2438.',
      },
      {
        q: 'Do you work with Gatlinburg cabin management companies?',
        a: 'Yes. We work with cabin management companies throughout the Gatlinburg area, providing priority service, repair documentation, and communication designed for properties with high guest turnover.',
      },
      {
        q: 'My Gatlinburg cabin hot tub keeps tripping the breaker. Can you help?',
        a: 'Yes. We troubleshoot both the electrical supply and the hot tub equipment. As a Tennessee Licensed Electrical Contractor (CE #86291), we can diagnose GFCI, wiring, and circuit issues as well as heater and pump faults.',
      },
    ],
  },
  {
    slug: 'hot-tub-repair-pigeon-forge',
    city: 'Pigeon Forge',
    seoTitle: 'Hot Tub Repair in Pigeon Forge, TN | Hickory Home and Cabin Repair',
    metaDesc: 'Hot tub repair for vacation rental cabins in Pigeon Forge, TN. Pumps, heaters, leaks, spa packs, jets, and electrical troubleshooting. Same-day service available. Call 865-805-2438.',
    h1: 'Hot Tub Repair in Pigeon Forge, TN',
    intro:
      'Pigeon Forge is one of the busiest cabin rental markets in the country, with a dense concentration of vacation rental properties serving the millions of visitors who come to the area each year. When a hot tub breaks at a Pigeon Forge rental, getting it repaired quickly is essential to protect guest reviews and booking revenue. We provide hot tub repair for cabin owners and property managers throughout Pigeon Forge.',
    localContext:
      'Pigeon Forge\'s rental cabins range from modest one-bedroom properties to large luxury lodges with multiple hot tubs. The volume of weekly guests means hot tubs at these properties run nearly constantly, and wear on pumps, heaters, and spa packs is accelerated. Many Pigeon Forge cabins also have multiple HVAC systems, kitchen appliances, and other equipment running simultaneously, which can stress older electrical panels and contribute to breaker problems. We understand the demands these properties place on their systems.',
    commonIssues: [
      'Pump and heater failures from constant guest-use cycles',
      'Spa pack failures at high-occupancy properties with heavy tub usage',
      'Jet flow problems from clogged filters between guest stays',
      'Breaker tripping at properties with multiple high-draw appliances',
      'Leaks from plumbing connections stressed by heavy use and vibration',
    ],
    faqs: [
      {
        q: 'How fast can you get to my cabin in Pigeon Forge?',
        a: 'We offer same-day and next-day hot tub repair for Pigeon Forge cabin owners and property managers. We\'re locally based and can reach Pigeon Forge properties quickly. Call 865-805-2438.',
      },
      {
        q: 'Do you work with Pigeon Forge cabin management companies?',
        a: 'Yes. We work with cabin management companies throughout the Pigeon Forge area. We understand the pace of the Pigeon Forge rental market and provide the priority service and communication that high-turnover properties require.',
      },
      {
        q: 'Can you repair the spa pack at my Pigeon Forge cabin?',
        a: 'Yes. We troubleshoot spa pack problems — including heater circuits, relays, control boards, and sensor inputs — and replace the spa pack when component-level repair isn\'t practical.',
      },
    ],
  },
];
