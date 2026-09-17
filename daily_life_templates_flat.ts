// Daily Life Reading Comprehension templates flat list generator
// Provides 20 exercises x 10 steps = 200 unique daily-life reading scenarios per level.
// Uses deterministic placeholder hydration to ensure 100% unique passages and choices.

export interface DailyLifeStep {
  title: string;
  passage: string;
  question: string;
  options: string[];
  correct: string;
  hint: string;
  explanation: string;
  highlight?: string;
}

// Deterministic hash utility to get stable selections from placeholder lists
const getPlaceholder = (list: string[], seed: number): string => {
  return list[seed % list.length];
};

// Rich placeholder pools for realistic campus/suburban settings
const NAMES = ["Sarah", "James", "Emily", "Michael", "David", "Jessica", "Robert", "Linda", "John", "Patricia", "Jennifer", "William", "Elizabeth", "Thomas", "Daniel", "Sophia", "Matthew", "Chloe"];
const COLORS = ["blue", "red", "green", "yellow", "orange", "purple", "silver", "white", "black", "gray"];
const STOPS = ["Central Station", "North Gate", "Oak Street", "South Campus", "Grand Avenue", "River Road", "Pine Hill", "West Square", "East Terminal", "University Boulevard"];
const TIMES = ["7:30 AM", "8:15 AM", "9:00 AM", "10:30 AM", "11:15 AM", "1:15 PM", "2:30 PM", "3:45 PM", "4:30 PM", "5:15 PM", "6:00 PM", "7:30 PM", "8:45 PM", "10:00 PM"];
const PRICES = ["$1.50", "$2.25", "$3.50", "$4.75", "$5.00", "$6.50", "$7.20", "$8.00", "$10.50", "$12.00", "$15.00", "$18.50"];
const PAYMENTS = ["transit card", "credit card", "mobile app", "smart watch", "student ID", "contactless payment"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const FRUITS = ["fresh apples", "sweet bananas", "ripe strawberries", "juicy oranges", "green grapes", "organic peaches"];
const DRINKS = ["almond milk", "organic orange juice", "black coffee", "green tea", "cold lemonade", "iced tea", "apple cider"];
const CAFES = ["Green Garden", "Morning Brew", "The Daily Grind", "Corner Cafe", "Lakeside Bistro", "Urban Cup", "Daily Grind"];
const PASTRIES = ["butter croissant", "blueberry muffin", "chocolate danish", "apple turnover", "cinnamon roll", "warm scone", "bagel with cream cheese"];
const ITEMS = ["backpack", "notebook", "water bottle", "laptop sleeve", "umbrella", "lunchbox", "ceramic mug", "textbook"];
const DETAILS = ["silver monogram", "stripes", "leather strap", "keychain", "waterproof seal", "zipper pocket"];
const LOCATIONS = ["Main Library", "Student Union", "Science Lab", "Gymnasium", "Dining Hall", "Administration Building", "Auditorium", "Campus Bookstore"];
const FACILITIES = ["outdoor pool", "tennis courts", "running track", "recreation lawn", "climbing wall", "cycling studio"];
const QUANTITIES = ["three", "four", "five", "six", "eight", "ten"];
const EVENTS = ["department banquet", "study group session", "career fair", "volunteer orientation", "alumni dinner", "club workshop"];
const BOOKS = ["Modern History", "Introduction to Calculus", "Principles of Physics", "Macroeconomic Analysis", "Organic Chemistry", "Introduction to Sociology"];
const MOVIES = ["The Cosmic Journey", "Beyond the Horizon", "Legends of Yesterday", "The Digital Age", "Echoes of Time", "Silent Shadows"];
const WEATHER = ["rain showers", "thunderstorms", "heavy snow", "gale-force winds", "dense fog", "hailstorms"];
const PETS = ["cat", "dog", "rabbit", "golden retriever", "poodle", "husky"];
const FOOD_TYPES = ["premium dry", "organic canned", "veterinary diet", "protein-rich", "grain-free"];
const WALK_TIMES = ["early morning", "late afternoon", "cool evening", "afternoon twilight"];

// Base templates for the 10 steps per difficulty level.
// Each difficulty has 10 structural templates.
// Placeholder syntax: {{PLACEHOLDER}} will be replaced deterministically.

const EASY_BASE_TEMPLATES = [
  // Step 1: Bus transit
  {
    title: "Campus Transit Schedule",
    text: "The {{COLOR}} bus arrives at the {{STOP}} bus stop at {{TIME}} every morning. Passengers must pay the fare of {{PRICE}} using a {{PAYMENT}} before boarding.",
    question: "According to the transit notice, how can passengers pay the fare?",
    options: ["By using a {{PAYMENT}}", "With a paper coupon", "By showing a receipt", "At the booking window"],
    correct: "By using a {{PAYMENT}}",
    hint: "Read the second sentence carefully to find payment methods.",
    explanation: "The transit notice explicitly mentions that passengers must pay the fare of {{PRICE}} using a {{PAYMENT}}.",
    highlight: "{{PAYMENT}}"
  },
  // Step 2: Grocery trip
  {
    title: "Grocery Shopping",
    text: "Every {{DAY}} afternoon, {{NAME}} goes to the local market to buy {{FRUIT}} and {{DRINK}}. The market always closes early at {{TIME}} on that day.",
    question: "What time does the market close early on {{DAY}}?",
    options: ["At {{TIME}}", "At noon", "At 9:00 PM", "At midnight"],
    correct: "At {{TIME}}",
    hint: "Look at the final sentence for the closing time.",
    explanation: "The text states that the local market closes early at {{TIME}} on {{DAY}} afternoons.",
    highlight: "{{TIME}}"
  },
  // Step 3: Cafe order
  {
    title: "Morning Routine at the Cafe",
    text: "{{NAME}} loves to sit at the outdoor table of {{CAFE}} cafe. They always order a warm {{PASTRY}} and a hot cup of {{DRINK}} for a total of {{PRICE}}.",
    question: "What does {{NAME}} order to eat at the cafe?",
    options: ["A warm {{PASTRY}}", "A chocolate cookie", "A slice of apple pie", "A toasted sandwich"],
    correct: "A warm {{PASTRY}}",
    hint: "Find the pastry name in the second sentence.",
    explanation: "The text specifies that {{NAME}} always orders a warm {{PASTRY}} and a hot cup of {{DRINK}}.",
    highlight: "{{PASTRY}}"
  },
  // Step 4: Lost and found
  {
    title: "Lost Item Announcement",
    text: "Lost: A {{COLOR}} {{ITEM}} with a {{DETAIL}}. It was last seen in the {{LOCATION}} on {{DAY}} morning. If found, please return it to {{NAME}}.",
    question: "Where was the lost {{ITEM}} last seen?",
    options: ["In the {{LOCATION}}", "Near the parking lot", "In the local park", "At the bus station"],
    correct: "In the {{LOCATION}}",
    hint: "Check the second sentence for the last known location.",
    explanation: "The announcement states that the {{COLOR}} {{ITEM}} was last seen in the {{LOCATION}} on {{DAY}} morning.",
    highlight: "{{LOCATION}}"
  },
  // Step 5: Gym closure
  {
    title: "Gymnasium Cleaning Schedule",
    text: "The campus gym is closed for cleaning on {{DAY}} from {{TIME}} to 6:00 PM. Members can use the outdoor {{FACILITY}} during this time.",
    question: "Which alternative area is open to gym members during cleaning?",
    options: ["The outdoor {{FACILITY}}", "The indoor squash courts", "The swimming pool hall", "The fitness wellness room"],
    correct: "The outdoor {{FACILITY}}",
    hint: "Identify the alternative facility mentioned in the second sentence.",
    explanation: "The text confirms that members can use the outdoor {{FACILITY}} while the gym is closed for cleaning.",
    highlight: "{{FACILITY}}"
  },
  // Step 6: Simple email
  {
    title: "Helpful Favor",
    text: "Hi {{NAME}}, could you please pick up {{QUANTITY}} bottles of {{DRINK}} from the store? I need them for the {{EVENT}} tonight. Thanks!",
    question: "For what event are the bottles of {{DRINK}} needed?",
    options: ["The {{EVENT}} tonight", "A family breakfast", "The weekend birthday party", "An afternoon study session"],
    correct: "The {{EVENT}} tonight",
    hint: "Check the second sentence for the event name.",
    explanation: "The writer asks to pick up {{DRINK}} because they need them for the {{EVENT}} tonight.",
    highlight: "{{EVENT}}"
  },
  // Step 7: Library notice
  {
    title: "Academic Library Policy",
    text: "Please return the borrowed textbook '{{BOOK}}' by {{DAY}}. If returned after {{TIME}}, a late fee of {{PRICE}} per day will be charged.",
    question: "What happens if '{{BOOK}}' is returned late?",
    options: ["A late fee of {{PRICE}} per day is charged", "The student account is suspended", "The book must be purchased", "A verbal warning is issued"],
    correct: "A late fee of {{PRICE}} per day is charged",
    hint: "Read the final sentence about returning the book after {{TIME}}.",
    explanation: "The library policy states that a late fee of {{PRICE}} per day will be charged for returns after {{TIME}}.",
    highlight: "{{PRICE}} per day"
  },
  // Step 8: Movie details
  {
    title: "Campus Theater Screening",
    text: "The special screening of '{{MOVIE}}' starts tonight at {{TIME}} in Hall B. Student tickets are priced at {{PRICE}} upon presenting a valid ID.",
    question: "What is the price of a student ticket for '{{MOVIE}}'?",
    options: ["{{PRICE}}", "$2.50", "Free of charge", "$15.00"],
    correct: "{{PRICE}}",
    hint: "Look at the second sentence for pricing details.",
    explanation: "The notice states that student tickets are priced at {{PRICE}} upon presenting a valid ID.",
    highlight: "{{PRICE}}"
  },
  // Step 9: Weather alert
  {
    title: "Severe Weather Warning",
    text: "Heavy {{WEATHER}} is predicted on {{DAY}} starting at {{TIME}}. Residents should avoid traveling near {{LOCATION}} due to safety concerns.",
    question: "When is the heavy {{WEATHER}} expected to begin?",
    options: ["On {{DAY}} at {{TIME}}", "Early in the morning", "Next weekend", "During the afternoon commute"],
    correct: "On {{DAY}} at {{TIME}}",
    hint: "Identify the start time and day in the first sentence.",
    explanation: "The weather alert warns that heavy {{WEATHER}} is predicted on {{DAY}} starting at {{TIME}}.",
    highlight: "starting at {{TIME}}"
  },
  // Step 10: Pet care instruction
  {
    title: "Pet Sitting Guidelines",
    text: "Remember to feed the {{PET}} named {{NAME}} twice a day. She needs her {{FOOD_TYPE}} food in the morning and a short walk in the {{WALK_TIME}}.",
    question: "What type of food should the {{PET}} receive in the morning?",
    options: ["{{FOOD_TYPE}} food", "Table scraps", "Warm wet broth", "Organic vegetable biscuits"],
    correct: "{{FOOD_TYPE}} food",
    hint: "Look for the specific food type mentioned in the second sentence.",
    explanation: "The guidelines state that the {{PET}} needs her {{FOOD_TYPE}} food in the morning.",
    highlight: "{{FOOD_TYPE}} food"
  }
];

const NORMAL_BASE_TEMPLATES = [
  // Step 1: Workspace booking
  {
    title: "Workspace Booking Policy",
    text: "To reserve a collaborative room in the {{LOCATION}}, students must log in to the portal using their student credentials. Individual bookings are limited to {{QUANTITY}} hours per session. Cancellations must be made at least {{TIME}} before the reservation to avoid account locking.",
    question: "What is the maximum duration for a single collaborative room booking?",
    options: ["{{QUANTITY}} hours per session", "Two hours only", "An entire day", "One hour per week"],
    correct: "{{QUANTITY}} hours per session",
    hint: "Look for the duration limit in the second sentence.",
    explanation: "The room booking policy clearly limits individual bookings to {{QUANTITY}} hours per session.",
    highlight: "{{QUANTITY}} hours"
  },
  // Step 2: Policy amendment
  {
    title: "Dining Hall Amendment",
    text: "Effective {{DAY}}, the dining hall near {{LOCATION}} will implement a strict reusable container policy. Patrons who bring their own containers will receive a {{PRICE}} discount on their purchase. Conversely, single-use boxes will carry a surcharge.",
    question: "How can patrons receive a discount on their dining purchases?",
    options: ["By bringing their own reusable containers", "By dining in during off-peak hours", "By presenting a student ID", "By purchasing a meal voucher"],
    correct: "By bringing their own reusable containers",
    hint: "Identify the requirement associated with the discount in the second sentence.",
    explanation: "The notice states that patrons who bring their own containers will receive a {{PRICE}} discount.",
    highlight: "bring their own containers"
  },
  // Step 3: Package collection
  {
    title: "Package Pickup Notification",
    text: "A package from {{NAME}} has been delivered to the {{LOCATION}} sorting center. It contains a fragile {{ITEM}} wrapped in a protective {{DETAIL}}. Please collect this package before {{TIME}} to prevent automatic return.",
    question: "What is the deadline for picking up the fragile package?",
    options: ["Before {{TIME}}", "By end of the week", "Within 24 hours", "Before the office closes"],
    correct: "Before {{TIME}}",
    hint: "Check the third sentence for the exact pickup time constraint.",
    explanation: "The notification specifies to collect the package before {{TIME}} to prevent its automatic return.",
    highlight: "before {{TIME}}"
  },
  // Step 4: Maintenance alert
  {
    title: "Emergency Maintenance Notice",
    text: "Due to emergency repairs on the water lines, water supply in the {{LOCATION}} will be shut down on {{DAY}} from {{TIME}} to 4:00 PM. Residents are advised to store sufficient water for basic hygiene.",
    question: "Why is the water supply being shut down in the {{LOCATION}}?",
    options: ["Due to emergency water line repairs", "For routine aesthetic cleaning", "To upgrade the campus pool", "Because of water conservation testing"],
    correct: "Due to emergency water line repairs",
    hint: "Read the first clause of the sentence to find the reason.",
    explanation: "The notice begins by explaining that the shutdown is 'due to emergency repairs on the water lines'.",
    highlight: "emergency repairs"
  },
  // Step 5: Office hours change
  {
    title: "Professor's Office Hours Change",
    text: "Please note that Dr. {{NAME}} has rescheduled her office hours for this week. Instead of Wednesday, she will be available in {{LOCATION}} on {{DAY}} from {{TIME}} to 3:00 PM to consult on the upcoming project.",
    question: "When is Dr. {{NAME}} available for consultation this week?",
    options: ["On {{DAY}} from {{TIME}} to 3:00 PM", "On Wednesday afternoon", "Every morning at 9:00 AM", "Only during the scheduled class time"],
    correct: "On {{DAY}} from {{TIME}} to 3:00 PM",
    hint: "Look for the new consulting time and location in the second sentence.",
    explanation: "The text explains that she is available in {{LOCATION}} on {{DAY}} from {{TIME}} to 3:00 PM.",
    highlight: "on {{DAY}} from {{TIME}}"
  },
  // Step 6: Seminar invitation
  {
    title: "Academic Seminar Invitation",
    text: "The Department of Science is hosting a guest lecture on '{{BOOK}}' in the {{LOCATION}} on {{DAY}} at {{TIME}}. Attendance is highly recommended for graduate students. Register via the portal for a free lunch.",
    question: "What is the topic of the guest lecture being hosted?",
    options: ["'{{BOOK}}'", "Modern Urban Architecture", "Global Climate Trends", "Effective Technical Writing"],
    correct: "'{{BOOK}}'",
    hint: "Locate the title of the lecture enclosed in quotation marks.",
    explanation: "The lecture topic is explicitly given as '{{BOOK}}' in the first sentence.",
    highlight: "'{{BOOK}}'"
  },
  // Step 7: Parking permit notice
  {
    title: "Vehicle Parking Regulation",
    text: "All vehicles parked in the {{STOP}} lot must display a valid {{COLOR}} permit on the windshield. Unpermitted parking will incur a fine of {{PRICE}} and potential towing at the owner's expense starting {{DAY}}.",
    question: "What color of permit must be displayed on the windshield in the {{STOP}} lot?",
    options: ["{{COLOR}}", "Bright yellow", "Deep green", "Neon blue"],
    correct: "{{COLOR}}",
    hint: "Look for the adjective qualifying 'permit' in the first sentence.",
    explanation: "The regulation states that parked vehicles must display a valid {{COLOR}} permit.",
    highlight: "{{COLOR}} permit"
  },
  // Step 8: Course refund policy
  {
    title: "Course Cancellation Refund",
    text: "Students who withdraw from the '{{BOOK}}' course before {{DATE}} are eligible for a full refund of their registration fee. Withdrawals processed after this date will incur a processing fee of {{PRICE}}.",
    question: "What is the fee for withdrawing from the course after {{DATE}}?",
    options: ["A processing fee of {{PRICE}}", "No fee is charged", "The full course fee is forfeited", "A penalty of $50.00"],
    correct: "A processing fee of {{PRICE}}",
    hint: "Check the last sentence for fees applicable after the specified deadline.",
    explanation: "The policy clarifies that withdrawals processed after {{DATE}} will incur a processing fee of {{PRICE}}.",
    highlight: "fee of {{PRICE}}"
  },
  // Step 9: IT system update
  {
    title: "Campus Wi-Fi Upgrade",
    text: "The campus IT department will perform a system upgrade on {{DAY}} at {{TIME}}. During this maintenance window, wireless access in the {{LOCATION}} will be offline. Please save your work prior to this event.",
    question: "Which location will experience a temporary Wi-Fi outage during maintenance?",
    options: ["The {{LOCATION}}", "The entire city block", "Only the administrative staff rooms", "The parking lot"],
    correct: "The {{LOCATION}}",
    hint: "Find the specific building or area mentioned in the second sentence.",
    explanation: "The announcement states that wireless access in the {{LOCATION}} will be offline during the upgrade.",
    highlight: "offline in the {{LOCATION}}"
  },
  // Step 10: Event volunteering
  {
    title: "Volunteer Orientation Call",
    text: "Volunteers for the {{EVENT}} must attend a mandatory briefing session on {{DAY}} at {{TIME}} in the {{LOCATION}}. Please bring your student ID and wear a {{COLOR}} shirt for group identification.",
    question: "What items or clothing should volunteers bring/wear to the orientation?",
    options: ["Student ID and a {{COLOR}} shirt", "A notepad and a red jacket", "Comfortable sneakers and water", "No specific items are required"],
    correct: "Student ID and a {{COLOR}} shirt",
    hint: "Read the final sentence for guidelines regarding ID and dress code.",
    explanation: "The briefing instruction specifies to 'bring your student ID and wear a {{COLOR}} shirt'.",
    highlight: "student ID and wear a {{COLOR}} shirt"
  }
];

const HARD_BASE_TEMPLATES = [
  // Step 1: Corporate email
  {
    title: "Corporate Security Protocol Amendment",
    text: "Following recent security assessments, the administration of {{LOCATION}} is enforcing a revised data access directive, effective {{DATE}}. All personnel utilizing remote workspaces must activate MFA via the {{PAYMENT}} software. Failure to complete registration by {{TIME}} on {{DAY}} will result in administrative locking of network profiles.",
    question: "What action is required of remote personnel to comply with the revised safety directive?",
    options: ["Activate multi-factor authentication via {{PAYMENT}}", "Attend an offline security tutorial", "Submit a signed physical waiver", "Change their system passwords immediately"],
    correct: "Activate multi-factor authentication via {{PAYMENT}}",
    hint: "Examine the second sentence detailing the specific security measure remote staff must take.",
    explanation: "The protocol amendment specifies that remote staff must activate MFA via the {{PAYMENT}} software.",
    highlight: "MFA via the {{PAYMENT}}"
  },
  // Step 2: Health bulletin
  {
    title: "Occupational Wellness Guidelines",
    text: "To mitigate ergonomic strain among remote employees in {{LOCATION}}, health advocates recommend taking a mandatory five-minute break every sixty minutes of display usage. In addition, purchasing specialized ergonomic accessories, priced up to {{PRICE}} at corporate discounts, can significantly reduce spinal fatigue. Detailed catalogs can be requested from {{NAME}}.",
    question: "What main duration advice does the wellness bulletin offer to reduce physical strain?",
    options: ["A five-minute break every sixty minutes", "A thirty-minute afternoon nap", "Frequent stretching every two hours", "Walking outside for an hour daily"],
    correct: "A five-minute break every sixty minutes",
    hint: "Look for the specific frequency and length of the break suggested in the first sentence.",
    explanation: "The guidelines suggest taking 'a mandatory five-minute break every sixty minutes of display usage'.",
    highlight: "five-minute break every sixty minutes"
  },
  // Step 3: Equipment check
  {
    title: "Facility Calibration Notice",
    text: "On {{DAY}} morning, the laboratory apparatus in the {{LOCATION}} will undergo structural recalibration. Staff members must ensure that the delicate {{ITEM}} with the {{DETAIL}} is powered down by {{TIME}} to prevent voltage surges during diagnostic cycles.",
    question: "What must laboratory staff do prior to {{TIME}} on the day of recalibration?",
    options: ["Power down the delicate {{ITEM}}", "Perform a data backup of the research", "Vacate the administrative offices", "Re-calibrate the high-temperature ovens"],
    correct: "Power down the delicate {{ITEM}}",
    hint: "Check the instructions regarding what to do with the delicate machinery by the stated time.",
    explanation: "The notice states that staff must ensure the delicate {{ITEM}} with the {{DETAIL}} is powered down by {{TIME}}.",
    highlight: "power down by {{TIME}}"
  },
  // Step 4: Library reservation change
  {
    title: "Academic Resource Reservation Notice",
    text: "Due to high demand during the final exam period, Dr. {{NAME}} has secured a reservation on the textbook '{{BOOK}}' for reserve desk usage. Students can access this textbook for a maximum of {{QUANTITY}} hours per session. A deposit of {{PRICE}} is required, which is fully refundable if returned on time.",
    question: "What is the restriction placed on using the reserved textbook '{{BOOK}}'?",
    options: ["Maximum of {{QUANTITY}} hours per session", "It can only be used on weekends", "No copy machines may be used", "Only doctoral candidates can reserve it"],
    correct: "Maximum of {{QUANTITY}} hours per session",
    hint: "Look for the temporal usage constraint in the third sentence.",
    explanation: "The reservation notice states that students can access the textbook for a maximum of {{QUANTITY}} hours per session.",
    highlight: "maximum of {{QUANTITY}} hours"
  },
  // Step 5: Procurement directive
  {
    title: "Departmental Procurement Guidelines",
    text: "All requests for office equipment purchases exceeding {{PRICE}} must be submitted through the department portal before {{DATE}}. The requisition form must include a quote for the {{ITEM}} showing the protective {{DETAIL}} coating option to ensure compliance with our environmental standards.",
    question: "What specific form feature must be submitted for purchases exceeding {{PRICE}}?",
    options: ["A quote for the {{ITEM}} with the {{DETAIL}} coating", "An approval signature from Dr. Elizabeth", "An alternative vendor cost comparison", "A shipping fee calculation table"],
    correct: "A quote for the {{ITEM}} with the {{DETAIL}} coating",
    hint: "Identify the mandatory enclosure mentioned in the second sentence for requisitions.",
    explanation: "The guideline states that the requisition form must include a quote for the {{ITEM}} showing the protective {{DETAIL}} coating.",
    highlight: "quote for the {{ITEM}}"
  },
  // Step 6: Transit construction
  {
    title: "Transit Reconstruction Detour",
    text: "Starting {{DAY}}, the light rail transit near {{STOPS}} will experience a service diversion. Shuttles painted in distinctive {{COLOR}} will transport commuters to {{STOPS}} every fifteen minutes. Commuters should prepare for an additional transit time of up to twenty minutes.",
    question: "How are the alternative shuttle vehicles identified?",
    options: ["They are painted in distinctive {{COLOR}}", "They have digital banner displays", "They are marked with yellow stripes", "They operate only after dark"],
    correct: "They are painted in distinctive {{COLOR}}",
    hint: "Look at the second sentence for visual indicators of the alternative shuttles.",
    explanation: "The transit advisory mentions that 'shuttles painted in distinctive {{COLOR}}' will carry commuters.",
    highlight: "painted in distinctive {{COLOR}}"
  },
  // Step 7: Seminar cancellation
  {
    title: "Symposium Rescheduling Memo",
    text: "The upcoming symposium on '{{BOOK}}' originally scheduled for the {{LOCATION}} on {{DAY}} has been postponed. The organizing committee, led by Dr. {{NAME}}, has announced that the new date will be broadcast on the portal by {{TIME}} tonight.",
    question: "Who is the primary contact or lead organizer of the postponed symposium?",
    options: ["Dr. {{NAME}}", "The university chancellor", "The head librarian of Main Library", "The student council representative"],
    correct: "Dr. {{NAME}}",
    hint: "Scan the second sentence for the leader of the organizing committee.",
    explanation: "The memo mentions that the organizing committee is 'led by Dr. {{NAME}}'.",
    highlight: "led by Dr. {{NAME}}"
  },
  // Step 8: Retail policy
  {
    title: "Merchandise Return Policy Update",
    text: "Customers returning defective {{ITEM}} items purchased during the holiday campaign must present the original receipt before {{DATE}}. A restocking fee of {{PRICE}} is applied to items returned without original {{DETAIL}} packaging, with no exceptions.",
    question: "Under what condition is the restocking fee of {{PRICE}} waived or applied?",
    options: ["If the item is returned without original {{DETAIL}} packaging", "If the product is returned within two days", "If the buyer holds a premium membership card", "If the return is made on {{DAY}}"],
    correct: "If the item is returned without original {{DETAIL}} packaging",
    hint: "Look for the prepositional phrase specifying when the {{PRICE}} fee applies.",
    explanation: "The policy specifies that a restocking fee of {{PRICE}} is applied to items returned without original {{DETAIL}} packaging.",
    highlight: "without original {{DETAIL}} packaging"
  },
  // Step 9: Rental agreement
  {
    title: "Residence Lease Amendment",
    text: "The management of {{LOCATION}} apartments has updated the residential guidelines regarding pet occupancy. Residents wishing to keep a {{PET}} must pay a non-refundable cleaning deposit of {{PRICE}} by {{DATE}} and ensure that only {{FOOD_TYPE}} food is kept in outer storage bins.",
    question: "What is the non-refundable cleaning deposit amount required for keeping a {{PET}}?",
    options: ["{{PRICE}}", "$50.00", "The equivalent of one month's rent", "$200.00"],
    correct: "{{PRICE}}",
    hint: "Check the first sentence of the lease amendment for financial figures.",
    explanation: "The amendment states that residents wishing to keep a {{PET}} must pay a non-refundable cleaning deposit of {{PRICE}}.",
    highlight: "deposit of {{PRICE}}"
  },
  // Step 10: Environmental update
  {
    title: "Backyard Conservation Directive",
    text: "To protect local wildlife from the severe {{WEATHER}} expected this winter, local ecologists suggest placing an insulated shelter near {{LOCATION}}. Homeowners can obtain complimentary feeding materials on {{DAY}} at {{TIME}} from the administrative office.",
    question: "What resource is being distributed for free on {{DAY}}?",
    options: ["Complimentary feeding materials", "Insulated wildlife shelters", "Waterproof raincoats", "An organic composting guide"],
    correct: "Complimentary feeding materials",
    hint: "Look for the word 'complimentary' in the final sentence of the directive.",
    explanation: "The notice states that homeowners can obtain 'complimentary feeding materials' on {{DAY}}.",
    highlight: "complimentary feeding materials"
  }
];

const ADVANCED_BASE_TEMPLATES = [
  // Step 1: Corporate regulatory
  {
    title: "Regulatory Compliance Directive",
    text: "In accordance with the municipal energy directive, the facilities at {{LOCATION}} must undergo rigorous thermal optimization audits starting {{DATE}}. Any department failing to submit its internal consumption data to Dr. {{NAME}} by {{TIME}} on {{DAY}} will be subject to a compliance fine of {{PRICE}} per day.",
    question: "What penalty is imposed for departments failing to submit consumption data on time?",
    options: ["A compliance fine of {{PRICE}} per day", "Immediate termination of facilities water supply", "A written administrative censure from the dean", "Suspension of departmental funding resources"],
    correct: "A compliance fine of {{PRICE}} per day",
    hint: "Analyze the consequences of non-compliance mentioned in the final sentence of the directive.",
    explanation: "The directive establishes that non-compliant departments 'will be subject to a compliance fine of {{PRICE}} per day'.",
    highlight: "fine of {{PRICE}} per day"
  },
  // Step 2: Scientific analysis
  {
    title: "Ergonomic Strain Assessment",
    text: "Recent biomechanical research conducts a thorough examination of clerical health inside {{LOCATION}}. The researchers, led by Dr. {{NAME}}, claim that adopting five-minute active breaks every sixty minutes reduces lumbar disc compression. Furthermore, utilizing adjustable desk surfaces, which cost roughly {{PRICE}} under corporate subsidies, significantly mitigates thoracic discomfort.",
    question: "According to Dr. {{NAME}}'s research team, what reduces lumbar disc compression?",
    options: ["Adopting five-minute active breaks every sixty minutes", "Investing in high-end orthopedic braces", "Limiting keyboard usage to three hours daily", "Drinking at least eight glasses of ice water"],
    correct: "Adopting five-minute active breaks every sixty minutes",
    hint: "Identify the specific intervention recommended to minimize physical stress in the second sentence.",
    explanation: "The assessment claims that 'adopting five-minute active breaks every sixty minutes reduces lumbar disc compression'.",
    highlight: "five-minute active breaks"
  },
  // Step 3: Equipment validation
  {
    title: "High-Frequency Calibration Protocol",
    text: "Prior to initiating the complex experiments on {{DAY}}, researchers in {{LOCATION}} must validate the alignment of the {{ITEM}} with the {{DETAIL}}. The calibration cycle, starting at {{TIME}}, must run continuously for at least three hours to ensure scientific validity and prevent experimental drifts.",
    question: "What is the minimum duration required for the calibration cycle of the {{ITEM}}?",
    options: ["At least three hours", "Exactly sixty minutes", "Until {{TIME}} tonight", "Twelve hours of continuous run"],
    correct: "At least three hours",
    hint: "Identify the temporal duration threshold specified in the second sentence.",
    explanation: "The protocol mandates that the calibration cycle 'must run continuously for at least three hours'.",
    highlight: "at least three hours"
  },
  // Step 4: Library licensing
  {
    title: "Digital Database Licensing Terms",
    text: "Under the newly renegotiated institutional agreement, the textbook '{{BOOK}}' will be available on the reserve server for all active researchers. Faculty members are permitted to download up to {{QUANTITY}} chapters per session for private analysis. Any commercial redistribution will result in a penalty of {{PRICE}} per infraction.",
    question: "What is the penalty for unauthorized commercial redistribution of chapters from '{{BOOK}}'?",
    options: ["A penalty of {{PRICE}} per infraction", "Revocation of all database library access privileges", "A written reprimand from the vice chancellor", "A mandatory administrative copyright hearing"],
    correct: "A penalty of {{PRICE}} per infraction",
    hint: "Look for the financial legal penalties detailed in the last sentence of the terms.",
    explanation: "The licensing agreement clarifies that commercial redistribution 'will result in a penalty of {{PRICE}} per infraction'.",
    highlight: "penalty of {{PRICE}}"
  },
  // Step 5: Procurement compliance
  {
    title: "Environmental Procurement Compliance",
    text: "Requisitions for advanced capital equipment exceeding {{PRICE}} must undergo strict administrative triage before {{DATE}}. Requisitions for the {{ITEM}} with the custom {{DETAIL}} must include a signed carbon-offset affidavit from the primary supplier, or the request will be automatically denied.",
    question: "What documentation must accompany requisitions for the {{ITEM}} to avoid automatic rejection?",
    options: ["A signed carbon-offset affidavit from the supplier", "A three-year extended warranty certificate", "A detailed cost-benefit analysis statement", "A recommendation letter from the department head"],
    correct: "A signed carbon-offset affidavit from the supplier",
    hint: "Identify the supplementary compliance document required in the second sentence of the terms.",
    explanation: "The procurement compliance policy states that requisitions must include 'a signed carbon-offset affidavit from the primary supplier'.",
    highlight: "carbon-offset affidavit"
  },
  // Step 6: Transit infrastructure
  {
    title: "Transit Infrastructure Expansion Review",
    text: "The proposed extension of the transit corridor near {{STOPS}} has raised environmental concerns. According to the impact review, implementing electric shuttles painted in visible {{COLOR}} will decrease emissions by thirty percent. However, this initiative requires an initial investment of {{PRICE}} from municipal bonds.",
    question: "What is the primary benefit of deploying electric shuttles in the corridor near {{STOPS}}?",
    options: ["To decrease carbon emissions by thirty percent", "To reduce the ticket fare for students", "To shorten the daily commuter times", "To increase transit authority revenue metrics"],
    correct: "To decrease carbon emissions by thirty percent",
    hint: "Scan the second sentence for the ecological metric linked to the electric shuttles.",
    explanation: "The review mentions that implementing electric shuttles 'will decrease emissions by thirty percent'.",
    highlight: "decrease emissions by thirty percent"
  },
  // Step 7: Seminar symposium
  {
    title: "Advanced Scientific Colloquium Agenda",
    text: "The special symposium discussing '{{BOOK}}' is rescheduled for {{DAY}} at {{TIME}} in the {{LOCATION}} hall. Dr. {{NAME}} will deliver the keynote address regarding research ethics, followed by a peer-reviewed poster session. Registration is restricted to registered symposium delegates.",
    question: "Who will deliver the keynote address regarding research ethics at the colloquium?",
    options: ["Dr. {{NAME}}", "A delegation of graduate researchers", "The principal software engineer of the IT lab", "A representative from the science journal"],
    correct: "Dr. {{NAME}}",
    hint: "Check the second sentence for the name of the keynote speaker.",
    explanation: "The agenda states that 'Dr. {{NAME}} will deliver the keynote address regarding research ethics'.",
    highlight: "Dr. {{NAME}} will deliver the keynote"
  },
  // Step 8: Return logistics
  {
    title: "Supply Chain Return Logistics Policy",
    text: "Distributors returning heavy capital components of the {{ITEM}} line must submit an authorized RMA request before {{DATE}}. If returned after this threshold, a late restocking fee of {{PRICE}} is applied. Furthermore, items must retain their original {{DETAIL}} markings to qualify for any core refund.",
    question: "What requirement must returned capital components fulfill to qualify for a core refund?",
    options: ["They must retain their original {{DETAIL}} markings", "They must be shipped via express transit lines", "They must have less than twelve hours of usage", "They must be hand-delivered to the warehouse"],
    correct: "They must retain their original {{DETAIL}} markings",
    hint: "Look at the final sentence for qualifications related to refunds.",
    explanation: "The return logistics policy specifies that 'items must retain their original {{DETAIL}} markings to qualify for any core refund'.",
    highlight: "original {{DETAIL}} markings"
  },
  // Step 9: Asset lease
  {
    title: "Commercial Property Lease Agreement",
    text: "The commercial lease for the cafeteria facility in {{LOCATION}} has been modified. Under the new guidelines, the vendor must pay a seasonal sanitation deposit of {{PRICE}} by {{DATE}} and guarantee that only premium {{FOOD_TYPE}} ingredients are processed on site to meet health compliance.",
    question: "What requirement must the cafeteria vendor satisfy regarding food processing?",
    options: ["Guarantee that only premium {{FOOD_TYPE}} ingredients are used", "Conduct daily bacteriological water tests", "Employ only certified dietary technicians", "Provide student discount meal programs on {{DAY}}"],
    correct: "Guarantee that only premium {{FOOD_TYPE}} ingredients are used",
    hint: "Read the latter half of the second sentence concerning health compliance guidelines.",
    explanation: "The agreement mandates that the vendor must 'guarantee that only premium {{FOOD_TYPE}} ingredients are processed on site'.",
    highlight: "premium {{FOOD_TYPE}} ingredients"
  },
  // Step 10: Urban ecology
  {
    title: "Urban Ecological Preservation Review",
    text: "In response to the extreme {{WEATHER}} predicted to impact local fauna, ecologists have authorized an emergency preservation plan. Under this directive, homeowners near {{LOCATION}} can pick up specialized wildlife protection feeds on {{DAY}} at {{TIME}} at the community library.",
    question: "Where can homeowners pick up the specialized wildlife protection feeds?",
    options: ["At the community library", "At the municipal greenhouse", "At the administration building", "At the primary school gymnasium"],
    correct: "At the community library",
    hint: "Scan the final sentence for the distribution location of the protective resources.",
    explanation: "The review states that homeowners can pick up specialized feeds 'at the community library'.",
    highlight: "at the community library"
  }
];

// Hydrator function: Replaces placeholders deterministically using a seed derived from exercise number and step.
export const getDailyLifeExerciseSteps = (level: string, exerciseNumber: number, cycleOffset: number = 0): DailyLifeStep[] => {
  const normalizedLvl = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
  let baseTemplates = EASY_BASE_TEMPLATES;
  if (normalizedLvl === "Normal") baseTemplates = NORMAL_BASE_TEMPLATES;
  if (normalizedLvl === "Hard") baseTemplates = HARD_BASE_TEMPLATES;
  if (normalizedLvl === "Advanced") baseTemplates = ADVANCED_BASE_TEMPLATES;

  // We generate exactly 10 steps (one for each template in the array)
  return baseTemplates.map((tpl, stepIdx) => {
    // Generate a unique seed for this specific exercise, cycle offset, and step to get different placeholder values
    const effectiveExNumber = exerciseNumber + cycleOffset;
    const seed = effectiveExNumber * 19 + stepIdx * 37 + cycleOffset * 101;

    const valName = getPlaceholder(NAMES, seed);
    const valColor = getPlaceholder(COLORS, seed);
    const valStop = getPlaceholder(STOPS, seed);
    const valTime = getPlaceholder(TIMES, seed);
    const valEndTime = getPlaceholder(TIMES, seed + 1);
    const valPrice = getPlaceholder(PRICES, seed);
    const valPayment = getPlaceholder(PAYMENTS, seed);
    const valDay = getPlaceholder(DAYS, seed);
    const valFruit = getPlaceholder(FRUITS, seed);
    const valDrink = getPlaceholder(DRINKS, seed);
    const valCafe = getPlaceholder(CAFES, seed);
    const valPastry = getPlaceholder(PASTRIES, seed);
    const valItem = getPlaceholder(ITEMS, seed);
    const valDetail = getPlaceholder(DETAILS, seed);
    const valLocation = getPlaceholder(LOCATIONS, seed);
    const valFacility = getPlaceholder(FACILITIES, seed);
    const valQuantity = getPlaceholder(QUANTITIES, seed);
    const valEvent = getPlaceholder(EVENTS, seed);
    const valBook = getPlaceholder(BOOKS, seed);
    const valMovie = getPlaceholder(MOVIES, seed);
    const valWeather = getPlaceholder(WEATHER, seed);
    const valPet = getPlaceholder(PETS, seed);
    const valFoodType = getPlaceholder(FOOD_TYPES, seed);
    const valWalkTime = getPlaceholder(WALK_TIMES, seed);

    const valDate = `${getPlaceholder(["October", "November", "December", "January", "February", "March", "April", "May", "June", "July"], seed)} ${1 + (seed % 28)}`;

    const hydrate = (str: string): string => {
      if (!str) return str;
      return str
        .replace(/{{NAME}}/g, valName)
        .replace(/{{COLOR}}/g, valColor)
        .replace(/{{STOP}}/g, valStop)
        .replace(/{{STOPS}}/g, valStop)
        .replace(/{{TIME}}/g, valTime)
        .replace(/{{START_TIME}}/g, valTime)
        .replace(/{{END_TIME}}/g, valEndTime)
        .replace(/{{PRICE}}/g, valPrice)
        .replace(/{{PAYMENT}}/g, valPayment)
        .replace(/{{DAY}}/g, valDay)
        .replace(/{{FRUIT}}/g, valFruit)
        .replace(/{{DRINK}}/g, valDrink)
        .replace(/{{CAFE}}/g, valCafe)
        .replace(/{{PASTRY}}/g, valPastry)
        .replace(/{{ITEM}}/g, valItem)
        .replace(/{{DETAIL}}/g, valDetail)
        .replace(/{{LOCATION}}/g, valLocation)
        .replace(/{{FACILITY}}/g, valFacility)
        .replace(/{{QUANTITY}}/g, valQuantity)
        .replace(/{{HOURS}}/g, valQuantity)
        .replace(/{{EVENT}}/g, valEvent)
        .replace(/{{BOOK}}/g, valBook)
        .replace(/{{MOVIE}}/g, valMovie)
        .replace(/{{WEATHER}}/g, valWeather)
        .replace(/{{PET}}/g, valPet)
        .replace(/{{FOOD_TYPE}}/g, valFoodType)
        .replace(/{{WALK_TIME}}/g, valWalkTime)
        .replace(/{{DATE}}/g, valDate);
    };

    const hydratedText = hydrate(tpl.text);
    const hydratedQuestion = hydrate(tpl.question);
    const hydratedOptions = tpl.options.map(opt => hydrate(opt));
    const hydratedCorrect = hydrate(tpl.correct);
    const hydratedHint = hydrate(tpl.hint);
    const hydratedExplanation = hydrate(tpl.explanation);
    const hydratedHighlight = tpl.highlight ? hydrate(tpl.highlight) : undefined;

    return {
      title: tpl.title,
      passage: hydratedText,
      question: hydratedQuestion,
      options: hydratedOptions,
      correct: hydratedCorrect,
      hint: hydratedHint,
      explanation: hydratedExplanation,
      highlight: hydratedHighlight
    };
  });
};
