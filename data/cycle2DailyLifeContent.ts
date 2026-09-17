/**
 * TOEFL iBT Cycle 2 - 20 Authentic Daily Life Campus Realia Passages & Exercises
 * Topics: Campus services, labs, library policies, student housing, advising, and student life.
 */

export interface Cycle2DailyLifeItem {
  title: string;
  text: string;
  question: string;
  options: string[];
  correct: string;
  hint: string;
  explanation: string;
  highlight: string;
}

export const CYCLE2_DAILY_LIFE_PASSAGES: Cycle2DailyLifeItem[] = [
  {
    title: "Campus High-Performance Computing (HPC) Cluster Access",
    text: "Notice to Graduate Researchers: The Turing Supercomputing Cluster will undergo annual firmware optimization beginning September 12 at 11:00 PM and concluding September 14 at 6:00 AM. During this scheduled window, all batch GPU queuing systems will be suspended. Researchers with compute jobs requiring more than 24 hours of execution time must submit their batch scripts by September 10 at 5:00 PM to ensure completion before the system freeze. Storage partitions in the /scratch directory will remain accessible via read-only SSH protocols.",
    question: "When must researchers submit batch jobs running longer than 24 hours to prevent interruption?",
    options: [
      "By September 10 at 5:00 PM",
      "By September 12 at 11:00 PM",
      "By September 14 at 6:00 AM",
      "On the first day of the academic semester"
    ],
    correct: "By September 10 at 5:00 PM",
    hint: "Check the deadline specified for compute jobs requiring more than 24 hours.",
    explanation: "The announcement states that 'Researchers with compute jobs requiring more than 24 hours of execution time must submit their batch scripts by September 10 at 5:00 PM'.",
    highlight: "must submit their batch scripts by September 10 at 5:00 PM to ensure completion"
  },
  {
    title: "University Health Services: Autumn Immunization Clinic",
    text: "University Health Center Bulletin: Mandatory international student health screenings and seasonal influenza immunizations will take place in the Student Pavilion Multipurpose Room from September 8 through September 22. Walk-in appointments are reserved exclusively for undergraduate students between 8:30 AM and 11:30 AM on weekdays. Graduate students, postdoctoral fellows, and visiting scholars must schedule an appointment through the MyHealth portal at least 48 hours in advance. Please bring your government photo ID, university student card, and proof of medical insurance.",
    question: "Who is eligible for walk-in immunization appointments between 8:30 AM and 11:30 AM?",
    options: [
      "Undergraduate students exclusively",
      "Graduate students and visiting scholars",
      "Local neighborhood residents and alumni",
      "Any student who forgets their university card"
    ],
    correct: "Undergraduate students exclusively",
    hint: "Read the sentence concerning walk-in hours and undergraduate student restrictions.",
    explanation: "The notice explicitly states: 'Walk-in appointments are reserved exclusively for undergraduate students between 8:30 AM and 11:30 AM on weekdays'.",
    highlight: "Walk-in appointments are reserved exclusively for undergraduate students between 8:30 AM and 11:30 AM"
  },
  {
    title: "Biological Sciences Subterranean Greenhouse Volunteer Shifts",
    text: "The Department of Ecology and Evolutionary Biology invites student volunteers to assist with the climate-controlled orchid and mycorrhizal root system research project in Greenhouse Complex C. Shifts are scheduled on Tuesdays and Thursdays from 2:00 PM to 5:00 PM. Tasks include soil moisture telemetry calibration, foliar nutrient misting, and sterile seed cataloging. No previous botany experience is required, but participants must complete an online Hazardous Materials Safety Module before their first shift.",
    question: "What prerequisite must students fulfill before their initial greenhouse volunteer shift?",
    options: [
      "Complete an online Hazardous Materials Safety Module",
      "Earn an undergraduate degree in botany or agriculture",
      "Purchase their own automated soil moisture sensors",
      "Work at least forty hours in the main library archives"
    ],
    correct: "Complete an online Hazardous Materials Safety Module",
    hint: "Check the final sentence describing requirements before the first shift.",
    explanation: "The announcement clarifies that while no experience is needed, 'participants must complete an online Hazardous Materials Safety Module before their first shift'.",
    highlight: "participants must complete an online Hazardous Materials Safety Module before their first shift."
  },
  {
    title: "MakerSpace Rapid Prototyping Laboratory Guidelines",
    text: "Engineering MakerSpace Circular: Beginning the fall term, priority access to the stereolithography (SLA) resin 3D printers will be allocated through a weekly reservation lottery drawn every Sunday evening. Print files in .STL format must be uploaded to the lab queue by Friday at 5:00 PM. Prints requiring longer than eight hours may only be initiated during the overnight production block between 10:00 PM and 7:00 AM. Users who fail to clean the resin vat after completion will forfeit lab reservation privileges for two consecutive weeks.",
    question: "When are print jobs requiring over eight hours permitted to run?",
    options: [
      "During the overnight block between 10:00 PM and 7:00 AM",
      "Only on Sunday mornings during the lottery drawing",
      "Anytime between 8:00 AM and 5:00 PM on weekdays",
      "Exclusively during university holidays"
    ],
    correct: "During the overnight block between 10:00 PM and 7:00 AM",
    hint: "Look for the rule concerning prints exceeding eight hours.",
    explanation: "The guidelines specify that 'Prints requiring longer than eight hours may only be initiated during the overnight production block between 10:00 PM and 7:00 AM'.",
    highlight: "initiated during the overnight production block between 10:00 PM and 7:00 AM."
  },
  {
    title: "Rare Manuscripts Special Collections Vault Policies",
    text: "University Special Collections Library: Patrons consulting pre-1800 archival codices in the Climate-Controlled Reading Room must store all coats, backpacks, and mechanical pens in exterior biometric lockers. Only pencils and loose-leaf archival paper supplied by the library desk are permitted within the reading perimeter. To protect fragile vellum bindings, documents must rest upon plush foam cradles with weighted velvet snake ribbons. Digital photography without flash is permitted only after obtaining written curator authorization.",
    question: "What writing instruments are allowed inside the special collections reading room?",
    options: [
      "Pencils provided by the library desk",
      "Standard fountain pens with archival ink",
      "Permanent markers for highlighting folio margins",
      "Personal mechanical pens stored in lockers"
    ],
    correct: "Pencils provided by the library desk",
    hint: "Identify the permitted writing utensil listed in the second sentence.",
    explanation: "The policy clearly states: 'Only pencils and loose-leaf archival paper supplied by the library desk are permitted within the reading perimeter.'",
    highlight: "Only pencils and loose-leaf archival paper supplied by the library desk are permitted"
  },
  {
    title: "Campus Transit Biodiesel Shuttle Schedule & Game Day Routes",
    text: "Transportation & Parking Notice: During varsity football home games, the North Campus Express biodiesel shuttle will reroute around Stadium Boulevard between 11:00 AM and 6:30 PM. Passengers seeking transit to the Engineering Quad should board the Blue Loop shuttle at Transit Center Bay 4 instead of Bay 1. Frequency will increase from fifteen-minute intervals to continuous eight-minute departures to accommodate stadium pedestrian congestion.",
    question: "Where should passengers board transit to the Engineering Quad during varsity home games?",
    options: [
      "At Transit Center Bay 4",
      "Along Stadium Boulevard entrance gate",
      "At Transit Center Bay 1",
      "Outside the athletic field locker rooms"
    ],
    correct: "At Transit Center Bay 4",
    hint: "Check which bay is designated for the alternative Blue Loop route.",
    explanation: "The notice indicates that riders traveling to the Engineering Quad should 'board the Blue Loop shuttle at Transit Center Bay 4 instead of Bay 1.'",
    highlight: "board the Blue Loop shuttle at Transit Center Bay 4 instead of Bay 1."
  },
  {
    title: "Graduate Writing Center Dissertation Sprint Workshops",
    text: "The Graduate Writing Center is hosting a five-day intensive Dissertation Sprint in the East Tower Collaborative Lounge from October 5 to October 9. Participants are provided with dedicated quiet writing desks, daily consultations with developmental editors, and catered working luncheons. To qualify for admittance, graduate candidates must have achieved formal candidacy status and submit a faculty advisor endorsement form by September 25.",
    question: "What must doctoral candidates provide by September 25 to participate in the Dissertation Sprint?",
    options: [
      "A faculty advisor endorsement form",
      "A complete initial draft of all dissertation chapters",
      "A paid fee invoice receipt from the bursar",
      "A published peer-reviewed journal reprint"
    ],
    correct: "A faculty advisor endorsement form",
    hint: "Look at the eligibility requirement mentioned at the end of the text.",
    explanation: "Candidates must have achieved candidacy status and 'submit a faculty advisor endorsement form by September 25.'",
    highlight: "submit a faculty advisor endorsement form by September 25."
  },
  {
    title: "Residence Hall Radiator Bleeding & Facilities Maintenance",
    text: "Housing Facilities Alert: Annual radiator bleeding and hydronic system pressure testing for West Quad dormitories will take place from September 15 to September 18 between 9:00 AM and 4:30 PM. Technicians accompanied by residential staff will enter resident suites to release trapped air pockets from cast-iron valves. Residents must clear a three-foot perimeter around all radiator units. Personal belongings obstructing heater vents will be relocated to the center of the room by maintenance personnel.",
    question: "What are residents instructed to do prior to the maintenance visits?",
    options: [
      "Clear a three-foot area around all heating radiators",
      "Turn off all building electrical circuits manually",
      "Vacate the dormitory building for the entire four days",
      "Bleed the valve mechanisms themselves using private wrenches"
    ],
    correct: "Clear a three-foot area around all heating radiators",
    hint: "Locate the explicit instruction given directly to residents.",
    explanation: "The notice states: 'Residents must clear a three-foot perimeter around all radiator units.'",
    highlight: "Residents must clear a three-foot perimeter around all radiator units."
  },
  {
    title: "University Herbarium Plant Specimen Digital Archiving",
    text: "The University Herbarium has commenced a large-scale digitization initiative to scan 120,000 pressed botanical specimens from the Pacific Northwest collection. Student scanning technicians will capture high-resolution imagery using overhead medium-format cameras and transcribe collector field labels into the Darwin Core database. Shifts are available in four-hour blocks, and paid training on fragile specimen handling is provided during the first week of employment.",
    question: "What task will student technicians perform in addition to capturing specimen photography?",
    options: [
      "Transcribing collector field labels into a botanical database",
      "Harvesting wild floral specimens from regional alpine meadows",
      "Refurbishing mechanical air conditioning compressors in the basement",
      "Delivering live flora to campus administrative banquet halls"
    ],
    correct: "Transcribing collector field labels into a botanical database",
    hint: "Look at the dual duties listed for student scanning technicians.",
    explanation: "Technicians will 'capture high-resolution imagery... and transcribe collector field labels into the Darwin Core database.'",
    highlight: "transcribe collector field labels into the Darwin Core database."
  },
  {
    title: "Student Financial Services Federal Work-Study Deadlines",
    text: "Payroll Notice: All undergraduate students holding Federal Work-Study (FWS) appointments must record their biweekly hours in the Kronos electronic timesheet system before 11:59 PM on alternate Sundays. Supervisors must authorize submitted timecards by Monday at noon to prevent payroll disbursement delays. Students whose total earnings reach within $200 of their semester allocation limit will receive an automated alert notification advising them to adjust their weekly schedule.",
    question: "When are student employees required to submit their biweekly electronic timesheets?",
    options: [
      "Before 11:59 PM on alternate Sundays",
      "Every Friday afternoon at 5:00 PM",
      "By Monday at 12:00 PM noon",
      "At the conclusion of the final exam period"
    ],
    correct: "Before 11:59 PM on alternate Sundays",
    hint: "Identify the submission deadline designated for student employees.",
    explanation: "The text specifies that students 'must record their biweekly hours in the Kronos electronic timesheet system before 11:59 PM on alternate Sundays.'",
    highlight: "before 11:59 PM on alternate Sundays."
  },
  {
    title: "Campus Recreation Aquatic Center Lap Swim & Cleaning Schedules",
    text: "Aquatic Center Notice: The Olympic competition pool will be closed for quarterly chemical sanitization and deep filter backwashing on the first Monday of every month from 5:00 AM to 1:00 PM. During this maintenance window, morning lap swimmers may utilize the adjacent four-lane warm-up pool, where lanes will be designated for slow, medium, and fast pacing. Lockers and dry sauna facilities will remain open to all recreation center members throughout the sanitization period.",
    question: "Where can morning lap swimmers swim while the Olympic competition pool is being sanitized?",
    options: [
      "In the adjacent four-lane warm-up pool",
      "At the outdoor community municipal reservoir",
      "In the university diving well exclusively",
      "Lap swimming is entirely prohibited during the first Monday"
    ],
    correct: "In the adjacent four-lane warm-up pool",
    hint: "Find where lap swimmers are directed during the 5:00 AM to 1:00 PM closure.",
    explanation: "The bulletin notes that 'morning lap swimmers may utilize the adjacent four-lane warm-up pool'.",
    highlight: "morning lap swimmers may utilize the adjacent four-lane warm-up pool"
  },
  {
    title: "Office of Academic Advising Course Drop/Add & Audit Deadlines",
    text: "Registrar Bulletin: The deadline to add courses or change grade grading status from standard letter grade to Pass/No Credit is Friday, September 18 at 5:00 PM. After this deadline, course withdrawals will result in a 'W' designation on the student's official transcript and require written approval from the departmental undergraduate dean. Students auditing courses must complete attendance verification with the instructor of record by the third week of instruction.",
    question: "What happens if a student withdraws from a course after the September 18 deadline?",
    options: [
      "A 'W' will appear on their transcript and dean approval is required",
      "They will immediately fail the course with an indelible 'F'",
      "They are refunded one hundred percent of their tuition fees",
      "Their student visa will automatically be revoked"
    ],
    correct: "A 'W' will appear on their transcript and dean approval is required",
    hint: "Look at the consequence of withdrawing past the deadline.",
    explanation: "The policy clarifies: 'course withdrawals will result in a 'W' designation on the student's official transcript and require written approval from the departmental undergraduate dean.'",
    highlight: "result in a 'W' designation on the student's official transcript and require written approval"
  },
  {
    title: "University Dining Services Reusable Container Green Box Initiative",
    text: "Sustainability Advisory: In an effort to eliminate single-use takeout plastics, all residential dining halls have transitioned to the OZZI reusable eco-container program. Students receive one complimentary green token during move-in check-in. Exchanging this token at dining cashier stations provides an approved sanitizable polypropylene container. When returning the rinsed container to automated deposit kiosks in the student union, a new token is instantly dispensed.",
    question: "How do students obtain an eco-container at the dining cashier stations?",
    options: [
      "By exchanging a green token provided during move-in",
      "By paying a mandatory ten-dollar cash surcharge each meal",
      "By presenting an endorsement letter from their biology professor",
      "By washing dishes in the kitchen for thirty minutes"
    ],
    correct: "By exchanging a green token provided during move-in",
    hint: "Check the procedure described for checking out a reusable container.",
    explanation: "The text explains: 'Students receive one complimentary green token during move-in check-in. Exchanging this token at dining cashier stations provides an approved sanitizable polypropylene container.'",
    highlight: "Exchanging this token at dining cashier stations provides an approved sanitizable polypropylene container."
  },
  {
    title: "Chemistry Department Cryogenic Nitrogen Refill Protocols",
    text: "Department of Chemistry Safety Memo: Liquid nitrogen dispensing tanks in Hallway Sub-Basement B are restricted to certified laboratory personnel between 1:00 PM and 3:30 PM on weekdays. Operators must wear insulated cryogenic leather gloves, a full-face polycarbonate blast shield, and closed-toe leather footwear. Transfer dewar flasks must possess an uncompromised vacuum relief valve and must never be sealed with non-venting rubber stoppers, which can cause catastrophic over-pressurization.",
    question: "What protective equipment is required when dispensing liquid nitrogen?",
    options: [
      "Insulated cryogenic gloves and a full-face polycarbonate shield",
      "Sterile cloth surgical masks and latex examination gloves",
      "Welding goggles and rubber rain boots",
      "Standard polarized reading glasses and an apron"
    ],
    correct: "Insulated cryogenic gloves and a full-face polycarbonate shield",
    hint: "Locate the sentence detailing operator attire requirements.",
    explanation: "The safety rules state: 'Operators must wear insulated cryogenic leather gloves, a full-face polycarbonate blast shield, and closed-toe leather footwear.'",
    highlight: "must wear insulated cryogenic leather gloves, a full-face polycarbonate blast shield"
  },
  {
    title: "Student Legal Services Off-Campus Lease Review Clinics",
    text: "Student Government Notice: Student Legal Services provides free legal contract reviews for undergraduates negotiating private off-campus apartment leases. Appointments must be scheduled online three business days prior to signing any binding agreement. Staff attorneys will examine lease documents to verify security deposit escrow conditions, subletting covenants, and landlord maintenance liabilities. Students should bring a complete unexecuted lease copy and landlord contact credentials.",
    question: "What service does Student Legal Services offer free of charge?",
    options: [
      "Reviewing off-campus private apartment rental contracts",
      "Paying overdue utility bills for delinquent student renters",
      "Providing free moving truck transport across the municipality",
      "Purchasing furniture for undergraduate off-campus apartments"
    ],
    correct: "Reviewing off-campus private apartment rental contracts",
    hint: "Read the opening sentence outlining the clinic's core mission.",
    explanation: "The announcement states that 'Student Legal Services provides free legal contract reviews for undergraduates negotiating private off-campus apartment leases.'",
    highlight: "provides free legal contract reviews for undergraduates negotiating private off-campus apartment leases."
  },
  {
    title: "University Observatory Public Astronomy Nights & Telescope Access",
    text: "Department of Astronomy Announcement: The Meyer-Womble Observatory will host open public observation sessions on the second and fourth Friday of each month, weather permitting. Visitors may view Saturn's ring system and deep-sky emission nebulae through the historic 24-inch Cassegrain reflecting telescope. Viewing sessions are contingent upon clear sky conditions; in the event of dense overcast or precipitation, a planetarium presentation will be conducted in Lecture Hall 101.",
    question: "What occurs if weather conditions prevent telescope observation?",
    options: [
      "A planetarium presentation will take place in Lecture Hall 101",
      "The observatory is shuttered and all visitors are sent home",
      "Students must take an exam on celestial coordinates",
      "Telescopes will be relocated to the basement library"
    ],
    correct: "A planetarium presentation will take place in Lecture Hall 101",
    hint: "Check the contingency plan mentioned in the final sentence.",
    explanation: "The text explains: 'in the event of dense overcast or precipitation, a planetarium presentation will be conducted in Lecture Hall 101.'",
    highlight: "in the event of dense overcast or precipitation, a planetarium presentation will be conducted in Lecture Hall 101."
  },
  {
    title: "International Student Scholar Services (ISSS) CPT Workshops",
    text: "Immigration Compliance Bulletin: F-1 visa holders interested in undertaking paid off-campus internships during the spring term must attend a mandatory Curricular Practical Training (CPT) workshop before November 1. Workshops cover I-20 endorsement procedures, prerequisite academic credit enrollment, and employer cooperative agreement letters. Internships cannot commence until an updated SEVIS Form I-20 with authorized CPT dates has been issued by a Designated School Official (DSO).",
    question: "What document must an international student receive before commencing an internship?",
    options: [
      "An updated Form I-20 with authorized CPT dates from a DSO",
      "A full United States passport with employment stamps",
      "A written recommendation signed by the university chancellor",
      "A permanent state social security card without restrictions"
    ],
    correct: "An updated Form I-20 with authorized CPT dates from a DSO",
    hint: "Locate the authorization requirement specified in the closing sentence.",
    explanation: "The compliance bulletin mandates: 'Internships cannot commence until an updated SEVIS Form I-20 with authorized CPT dates has been issued by a Designated School Official (DSO).'",
    highlight: "updated SEVIS Form I-20 with authorized CPT dates has been issued by a Designated School Official (DSO)."
  },
  {
    title: "Central Library Automated Book Retrieval System (ARS) Holds",
    text: "Library User Notice: Over 800,000 bound journal volumes and monograph monographs published prior to 1990 have been transferred to the subterranean Automated Retrieval System (ARS). Patrons can request items via the online catalog using their library barcode credentials. Robotic crane retrieval delivers requested books to the Central Circulation Desk within fifteen minutes of submission during operating hours. Requested volumes are held on the pickup shelves for five consecutive business days before returning to deep storage.",
    question: "How long are ARS retrieved books held at the circulation desk before return?",
    options: [
      "For five consecutive business days",
      "For only fifteen minutes after arrival",
      "Until the conclusion of the academic year",
      "For exactly twenty-four hours"
    ],
    correct: "For five consecutive business days",
    hint: "Identify the hold duration period stated at the end of the bulletin.",
    explanation: "The announcement states: 'Requested volumes are held on the pickup shelves for five consecutive business days before returning to deep storage.'",
    highlight: "held on the pickup shelves for five consecutive business days before returning to deep storage."
  },
  {
    title: "Undergraduate Research Symposium Poster Submission Guidelines",
    text: "Undergraduate Research Opportunities Program (UROP): Submissions for the Annual Spring Undergraduate Research Symposium are due by 11:59 PM on October 20. Abstracts must not exceed 250 words and must outline primary research objectives, methodology, and preliminary empirical findings. Poster boards measuring 36 inches high by 48 inches wide will be provided on exhibition day. Students requiring audio-visual electrical hookups must specify equipment needs on their initial registration submission.",
    question: "What is the maximum word count allowed for symposium abstract submissions?",
    options: [
      "250 words",
      "500 words",
      "1,000 words",
      "No maximum word limit applies"
    ],
    correct: "250 words",
    hint: "Look for the abstract word length limit in the second sentence.",
    explanation: "The guidelines stipulate: 'Abstracts must not exceed 250 words and must outline primary research objectives, methodology, and preliminary empirical findings.'",
    highlight: "Abstracts must not exceed 250 words and must outline primary research objectives"
  },
  {
    title: "Campus Center Lost & Found Asset Disposition & Auction Schedule",
    text: "Student Union Operations: Unclaimed property surrendered to the Campus Center Lost and Found is logged into an electronic public inventory. High-value electronics, including laptops and cellular tablets, are retained in secure storage for sixty calendar days. Items not claimed within this period are securely wiped of all digital memory in accordance with institutional data privacy policies and donated to the annual campus student emergency scholarship auction.",
    question: "What happens to unclaimed electronic devices after sixty days in storage?",
    options: [
      "Their memory is wiped and they are donated to a scholarship auction",
      "They are discarded immediately into municipal recycling trash bins",
      "They are claimed automatically by student union front desk staff",
      "They are mailed back to the computer hardware manufacturer"
    ],
    correct: "Their memory is wiped and they are donated to a scholarship auction",
    hint: "Read the final sentence detailing the disposition of uncollected items.",
    explanation: "The policy notes: 'Items not claimed within this period are securely wiped of all digital memory... and donated to the annual campus student emergency scholarship auction.'",
    highlight: "securely wiped of all digital memory in accordance with institutional data privacy policies and donated to the annual campus student emergency scholarship auction."
  }
];
