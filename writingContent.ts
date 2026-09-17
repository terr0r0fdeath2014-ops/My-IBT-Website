import { monthlyPracticeEngine } from './utils/monthlyEngine';

export interface WritingPrompt {
  id: string;
  module: number; // 1, 2, or 3
  level: 'Easy' | 'Medium' | 'Hard';
  star: number; // 1 to 50
  type: 'academic' | 'email' | 'independent' | 'integrated';
  title: string;
  topic: string;
  timeLimit: number; // in minutes
  readingPassage?: string;
  lectureTranscript?: string;
  emailScenario?: {
    sender: string;
    role: string;
    subject: string;
    body: string;
    instructions: string[];
  };
  questionPrompt: string;
  studentOpinions?: {
    name: string;
    avatar: string;
    text: string;
  }[];
  suggestedWordCount: string;
}

// ----------------------------------------------------
// EASY INTEGRATED TOPICS (50 Unique Items)
// ----------------------------------------------------
const EASY_INTEGRATED_TOPICS = [
  {
    title: "Online Classes",
    topic: "School Formats",
    reading: "Online classes are wonderful because you can study from home. You save time on travel, and you can learn whenever you are ready.",
    lecture: "However, online classes make students feel very lonely. Without a classroom, you cannot talk to friends easily, and it is hard to focus.",
    question: "Summarize the points in the lecture and explain how they challenge the advantages of online classes in the reading."
  },
  {
    title: "e-Readers vs. Books",
    topic: "Reading Media",
    reading: "e-Readers are great because they hold hundreds of books in one small device. They are lightweight, cheap, and very convenient.",
    lecture: "On the other hand, e-readers cause eye strain after reading for a long time. Also, many readers miss the feel and smell of real paper books.",
    question: "Summarize the lecture's points and show how they address the claims made in the reading passage."
  },
  {
    title: "Car-Free Zones",
    topic: "City Living",
    reading: "Banning cars in downtown areas makes streets safe and quiet. People can walk happily without worrying about noise or dirty air.",
    lecture: "But banning cars hurts local shops because customers cannot drive there. It is also hard for elderly people who cannot walk far.",
    question: "Summarize the points made in the lecture, explaining how they cast doubt on the benefits mentioned in the reading."
  },
  {
    title: "Shorter Summer Breaks",
    topic: "School Schedule",
    reading: "Shorter school summer breaks help students. Kids do not forget what they learned, and they stay in a good learning routine.",
    lecture: "Actually, shorter breaks lead to student burnout. Children need a long rest during summer to play, travel with family, and recharge.",
    question: "Summarize the lecture points and explain how they contradict the arguments in favor of shorter breaks."
  },
  {
    title: "Cooking at Home",
    topic: "Daily Life",
    reading: "Cooking meals at home is much cheaper and healthier than eating at fast-food restaurants. You can buy fresh food and save money.",
    lecture: "However, cooking takes a lot of time and planning. Many busy people prefer quick restaurant meals so they can rest after work.",
    question: "Summarize the points made in the lecture, showing how they respond to the benefits of home cooking in the reading."
  },
  {
    title: "School Uniforms",
    topic: "School Policies",
    reading: "Mandatory school uniforms are good because they make all students feel equal. Kids do not fight about expensive fashion trends.",
    lecture: "But uniforms stifle student self-expression. Wearing the same clothes does not stop bullying, and kids feel uncomfortable in them.",
    question: "Explain the points in the lecture and how they challenge the reading's claims about school uniforms."
  },
  {
    title: "Wind Energy",
    topic: "Green Power",
    reading: "Wind power is a perfect clean energy source. Windmills produce electricity without creating any pollution or burning coal.",
    lecture: "Unfortunately, large wind turbines make a lot of noise and ruin the landscape. They can also be dangerous to local birds flying nearby.",
    question: "Summarize the lecture's arguments against wind turbines, explaining how they counter the reading passage."
  },
  {
    title: "Artificial Turf",
    topic: "Sports Fields",
    reading: "Artificial grass is better than natural grass. It does not need water, mowing, or fertilizer, saving schools a lot of money.",
    lecture: "However, artificial turf gets extremely hot in the sun, which can burn players. It also releases tiny plastic pieces into the soil.",
    question: "Summarize the lecture points, explaining how they cast doubt on the benefits of artificial turf."
  },
  {
    title: "Organic Vegetables",
    topic: "Healthy Food",
    reading: "Organic food is much healthier because farmers do not use chemical pesticides. It tastes better and is safer for our bodies.",
    lecture: "In reality, organic vegetables are very expensive and spoil much faster. Studies show they have the same nutrition as regular food.",
    question: "Summarize the points in the lecture, explaining how they challenge the benefits of organic food."
  },
  {
    title: "Home Solar Panels",
    topic: "Clean Energy",
    reading: "Installing solar panels on house roofs is a great investment. They generate free electricity from sunlight and lower power bills.",
    lecture: "But solar panels are very expensive to buy and install. They also do not produce much power on cloudy days or during the winter.",
    question: "Summarize the lecture's views, showing how they respond to the claims about solar panels in the reading."
  },
  {
    title: "Ecotourism",
    topic: "Nature Travel",
    reading: "Ecotourism is responsible travel to natural areas. It raises money for wildlife parks and teaches tourists to respect nature.",
    lecture: "However, even eco-tourists disrupt wild animal habitats. Building hotels near quiet forests always drives local wildlife away.",
    question: "Explain the lecture's counterarguments to the reading's optimistic view on ecotourism."
  },
  {
    title: "No Homework Policy",
    topic: "School Learning",
    reading: "Banning homework for young students reduces school stress. It gives children more free time to play, exercise, and spend time with family.",
    lecture: "But without homework, students fail to practice important lessons. Homework is necessary to build good study habits for high school.",
    question: "Summarize the lecture points, explaining why the lecturer disagrees with the no-homework policy in the reading."
  },
  {
    title: "Electric Bikes",
    topic: "Urban Commute",
    reading: "Electric bicycles are an excellent alternative to cars. They help people travel fast without sweating, and they produce zero emissions.",
    lecture: "However, electric bikes are too heavy and dangerous on busy sidewalks. Their large batteries are also difficult to recycle safely.",
    question: "Summarize the lecture points and explain how they address the positive points of e-bikes in the reading."
  },
  {
    title: "Reforestation",
    topic: "Environment",
    reading: "Planting millions of new trees is the best way to fight climate change. Trees absorb carbon dioxide and create homes for birds.",
    lecture: "But planting only one type of tree can ruin the local soil. It also increases the risk of massive forest fires if the area gets dry.",
    question: "Explain the points in the lecture, showing how they challenge the simple reforestation solution in the reading."
  },
  {
    title: "Public Park Spaces",
    topic: "Urban Design",
    reading: "Cities should turn empty lots into green public parks. Parks improve citizens' mental health and offer a place to exercise.",
    lecture: "But empty lots are expensive to maintain as parks. Cities often lack the budget to hire gardeners and clean up trash left by visitors.",
    question: "Summarize the lecture, explaining how it responds to the proposal of creating more urban parks."
  },
  {
    title: "Plastic Bag Taxes",
    topic: "Waste Reduction",
    reading: "Taxes on plastic bags are great because they encourage shoppers to bring reusable bags, which reduces plastic pollution.",
    lecture: "However, plastic bag taxes unfairly hurt low-income families. Also, people often buy paper bags instead, which still wastes trees.",
    question: "Summarize the points in the lecture, explaining how they challenge the plastic bag tax policy."
  },
  {
    title: "Work Sabbaticals",
    topic: "Job Benefits",
    reading: "Offering employees a paid three-month break after five years prevents burnout and increases their long-term loyalty to the firm.",
    lecture: "Unfortunately, paid sabbaticals are too costly for small businesses. Losing a key team member for three months delays important projects.",
    question: "Summarize the lecture's views, showing how they challenge the benefits of sabbaticals in the reading."
  },
  {
    title: "Digital Payments Only",
    topic: "Financial Trends",
    reading: "Going completely cashless makes buying things faster and safer. You do not need to carry heavy coins or fear losing your wallet.",
    lecture: "However, digital systems exclude elderly people and those without bank accounts. If the internet goes down, nobody can buy food.",
    question: "Summarize the points in the lecture, showing how they respond to the cashless benefits in the reading."
  },
  {
    title: "Banning Zoo Exhibits",
    topic: "Animal Welfare",
    reading: "Zoos should be closed because keeping wild animals in small cages is cruel. Animals belong in their natural wild habitats.",
    lecture: "But zoos are crucial for saving endangered species. They run breeding programs that prevent rare animals from going extinct completely.",
    question: "Summarize the lecture, explaining how it defends zoos against the criticisms in the reading."
  },
  {
    title: "Historic Preservation",
    topic: "City Heritage",
    reading: "Preserving historic old buildings brings tourists and keeps a city's culture alive. We should never demolish old structures.",
    lecture: "However, maintaining old buildings is incredibly expensive. That money is better spent building modern, energy-efficient housing.",
    question: "Summarize the lecture points and explain how they challenge the historic preservation arguments."
  },
  {
    title: "No More Paper Mail",
    topic: "Communication",
    reading: "Replacing physical mail with email saves millions of trees every year and makes communication instant and completely free.",
    lecture: "But many senior citizens do not have internet access and rely on paper mail. Also, emails are vulnerable to hacking and spam.",
    question: "Explain the lecture's points and how they cast doubt on the plan to eliminate paper mail."
  },
  {
    title: "Using LED Bulbs",
    topic: "Energy Efficiency",
    reading: "LED lightbulbs are superior to traditional bulbs because they use 80% less energy and last for several years before burning out.",
    lecture: "However, LED bulbs have a very high purchase price. Additionally, the cold blue light they emit can disrupt human sleep cycles.",
    question: "Summarize the lecture's points, explaining how they respond to the benefits of LED bulbs."
  },
  {
    title: "Self-Checkout Lanes",
    topic: "Retail Technology",
    reading: "Self-checkout lanes in supermarkets make shopping faster for customers and reduce the need for stores to hire many cashiers.",
    lecture: "But self-checkout machines often have technical errors that frustrate shoppers. They also take away entry-level jobs from local youths.",
    question: "Summarize the lecture, explaining how it challenges the efficiency and benefits of self-checkout lanes."
  },
  {
    title: "Coding for Children",
    topic: "Early Education",
    reading: "Teaching computer programming to elementary school children builds logical thinking and prepares them for high-paying future careers.",
    lecture: "But young kids already spend too much time looking at screens. They should focus on physical play, reading books, and socializing.",
    question: "Summarize the lecture points, showing how they counter the early coding curriculum described in the reading."
  },
  {
    title: "Eating Local Food",
    topic: "Nutrition & Ecology",
    reading: "Buying local food is much better for the planet because it reduces the fuel needed to transport groceries long distances.",
    lecture: "In cold regions, growing tropical fruits locally requires heated greenhouses, which use far more energy than shipping them from warm areas.",
    question: "Summarize the lecture points, explaining how they challenge the environmental benefit of eating local food."
  },
  {
    title: "Mandatory Bike Helmets",
    topic: "Public Safety",
    reading: "Laws requiring bicycle helmets save lives by protecting riders from severe head injuries during minor or major accidents.",
    lecture: "However, strict helmet laws actually discourage people from cycling. This leads to fewer people exercising and more driving cars.",
    question: "Summarize the lecture's arguments against mandatory helmet laws, showing how they respond to the reading."
  },
  {
    title: "Urban Vertical Gardens",
    topic: "Green Cities",
    reading: "Covering high-rise building walls with plants cleans urban air, lowers building temperatures, and makes cities beautiful.",
    lecture: "Unfortunately, vertical gardens put heavy water weight on walls, which can crack structures. They also lead to mold and insect issues.",
    question: "Summarize the lecture points, explaining how they challenge the feasibility of vertical gardens."
  },
  {
    title: "Free Museum Access",
    topic: "Public Education",
    reading: "Public museums should be completely free to encourage education, letting everyone enjoy history and art regardless of income.",
    lecture: "But without ticket sales, museums cannot afford to repair displays, purchase new exhibits, or pay security staff to protect art.",
    question: "Summarize the lecture points, explaining how they challenge the free museum policy described in the reading."
  },
  {
    title: "Buying Electric Cars",
    topic: "Green Transit",
    reading: "Electric vehicles are the best way to clean up city air. They do not have exhaust pipes and produce zero emissions while driving.",
    lecture: "But producing electric car batteries requires mining rare metals, which destroys landscapes. Plus, charging them often uses coal power.",
    question: "Summarize the lecture's points and explain how they cast doubt on the environmental claims of electric cars."
  },
  {
    title: "Late Library Hours",
    topic: "Campus Life",
    reading: "University libraries should stay open 24 hours a day to give students a safe, quiet space to study for exams late at night.",
    lecture: "But keeping libraries open all night is extremely expensive due to heating and security costs. Very few students use them after midnight.",
    question: "Explain the lecture's points and how they counter the proposal of 24-hour libraries."
  },
  {
    title: "Sweet Snacks Ban",
    topic: "Child Health",
    reading: "Banning sweet snacks in school cafeterias protects children from tooth decay and teaches them to enjoy healthy fruits instead.",
    lecture: "Unfortunately, bans make sweet snacks more desirable. Kids simply bring candy from home or buy it immediately after school.",
    question: "Summarize the lecture points, showing how they challenge the effectiveness of banning sweets."
  },
  {
    title: "Building More Highways",
    topic: "Traffic Control",
    reading: "Adding more lanes to busy highways is the most effective solution to reduce traffic jams and cut travel time for commuters.",
    lecture: "In reality, wider highways attract more drivers. This is called induced demand, and it quickly leads to the same amount of traffic.",
    question: "Summarize the lecture, explaining how it refutes the highway expansion solution presented in the reading."
  },
  {
    title: "Smart Watch Health",
    topic: "Wearable Tech",
    reading: "Smart watches are essential wellness devices that track heart rate and daily steps, helping users stay fit and motivated.",
    lecture: "However, smart watches create unnecessary health anxiety. Users worry constantly over normal heart rate fluctuations.",
    question: "Summarize the lecture points, explaining how they counter the wellness claims of smart watches."
  },
  {
    title: "Using Paper Straws",
    topic: "Ocean Pollution",
    reading: "Replacing plastic drinking straws with biodegradable paper straws protects sea turtles and reduces ocean pollution.",
    lecture: "Paper straws quickly get soggy and break in drinks. Furthermore, making paper straws requires cutting down thousands of trees.",
    question: "Explain the lecture's counterarguments to the paper straw movement described in the reading."
  },
  {
    title: "4-Day Work Week",
    topic: "Employment Trends",
    reading: "Working 4 days a week instead of 5 boosts employee happiness, reduces stress, and increases overall workplace productivity.",
    lecture: "However, squeezing 40 hours into 4 days creates longer, more exhausting workdays. It also confuses clients who need Friday support.",
    question: "Summarize the lecture points, showing how they challenge the benefits of a 4-day work week."
  },
  {
    title: "Public Wi-Fi Networks",
    topic: "Digital Access",
    reading: "Cities should provide free public Wi-Fi in all parks and plazas to help tourists, students, and low-income workers stay connected.",
    lecture: "Free public Wi-Fi networks are highly insecure. Cybercriminals easily steal passwords and personal credit card details from users.",
    question: "Summarize the lecture, explaining how it points out serious risks missed by the reading passage."
  },
  {
    title: "Space Tourism",
    topic: "Commercial Flight",
    reading: "Space tourism opens up commercial space travel to ordinary people and raises private funding for scientific rocket technology.",
    lecture: "Space tourism is a luxury for billionaires that releases tons of carbon emissions directly into the upper atmosphere.",
    question: "Summarize the lecture's objections to space tourism, explaining how they counter the reading."
  },
  {
    title: "Cash Rewards for Grades",
    topic: "Student Motivation",
    reading: "Paying children cash rewards for earning good school grades motivates them to study harder and score higher on exams.",
    lecture: "Paying for grades destroys intrinsic motivation. Children stop enjoying learning for its own sake and only care about money.",
    question: "Summarize the lecture points, showing how they challenge paying cash for academic grades."
  },
  {
    title: "Mandatory Retirement",
    topic: "Labor Policy",
    reading: "Enforcing mandatory retirement at age 65 creates opening positions for younger workers and keeps company ideas fresh.",
    lecture: "Mandatory retirement forces experienced, skilled leaders out of work. It is unfair to healthy seniors who want to remain active.",
    question: "Explain the lecture's arguments against mandatory retirement, responding to the reading."
  },
  {
    title: "Desalination Plants",
    topic: "Freshwater Supply",
    reading: "Turning ocean saltwater into fresh drinking water through desalination solves severe water shortages in dry coastal regions.",
    lecture: "Desalination consumes massive amounts of electricity and dumps concentrated salty brine back into the sea, killing marine fish.",
    question: "Summarize the lecture points, explaining how they challenge desalination technology."
  },
  {
    title: "High-Speed Rail Lines",
    topic: "Intercity Transit",
    reading: "Building high-speed trains between major cities is faster and cleaner than short airplane flights, reducing fossil fuel emissions.",
    lecture: "High-speed rail lines cost billions to construct through mountains and farmland. Ticket prices end up too expensive for average citizens.",
    question: "Summarize the lecture points, showing how they address the drawbacks of high-speed rail."
  },
  {
    title: "Fast Fashion Brands",
    topic: "Clothing Industry",
    reading: "Fast fashion allows young consumers to buy stylish, trendy clothing at very affordable prices throughout the year.",
    lecture: "Fast fashion creates enormous landfill waste and relies on low wages in developing nations. Cheap clothes tear after a few washes.",
    question: "Summarize the lecture, explaining how it refutes the popularity of fast fashion in the reading."
  },
  {
    title: "Autonomous Delivery Bots",
    topic: "Urban Logistics",
    reading: "Small robotic delivery pods on sidewalks reduce traffic vans and deliver hot restaurant food and packages quickly.",
    lecture: "Delivery robots clog busy sidewalks, block wheelchairs, and are easily stolen or vandalized by pedestrians.",
    question: "Summarize the lecture points, explaining how they challenge sidewalk delivery bots."
  },
  {
    title: "Banning Plastic Bottles",
    topic: "Environmental Law",
    reading: "Banning single-use plastic water bottles forces people to carry reusable flasks, eliminating plastic trash in oceans.",
    lecture: "When plastic water is banned, consumers buy sugary sodas in aluminum cans instead, leading to higher diabetes rates.",
    question: "Summarize the lecture's arguments, showing how they challenge plastic bottle bans."
  },
  {
    title: "Virtual Reality Classrooms",
    topic: "Educational Tech",
    reading: "Using VR headsets in history and science lessons lets students explore ancient Rome or walk on Mars in vivid 3D detail.",
    lecture: "VR headsets cause motion sickness and headaches in many children. They are also too expensive for poor school districts to buy.",
    question: "Summarize the lecture points, explaining how they counter VR technology in schools."
  },
  {
    title: "Urban Rooftop Farming",
    topic: "Agriculture",
    reading: "Growing vegetables on flat city roofs produces fresh local food and lowers urban heat during hot summer months.",
    lecture: "Rooftop soil is expensive to haul up, and heavy rain can cause roof leaks and structural collapse in older buildings.",
    question: "Summarize the lecture, explaining why it questions urban rooftop farming."
  },
  {
    title: "Artificial Rainmaking",
    topic: "Weather Control",
    reading: "Cloud seeding creates artificial rain to help farmers water crops during droughts and fill drying freshwater reservoirs.",
    lecture: "Cloud seeding uses silver iodide chemicals that contaminate local rivers. It also steals rain clouds from neighboring regions.",
    question: "Summarize the lecture points, showing how they challenge artificial cloud seeding."
  },
  {
    title: "Cashless Tipping",
    topic: "Service Industry",
    reading: "Digital tipping screens at coffee shops ensure waiters and baristas receive fair tips directly on credit card payments.",
    lecture: "Digital screens pressure customers into giving large tips for simple service, leading to tip fatigue and customer annoyance.",
    question: "Summarize the lecture, explaining how it challenges digital tipping systems."
  },
  {
    title: "Micro-Housing Units",
    topic: "Urban Living",
    reading: "Tiny micro-apartments in city centers offer affordable housing for young workers who want to live near their office.",
    lecture: "Living in tiny 150-square-foot rooms causes claustrophobia, mental health distress, and lacks space for basic cooking or storage.",
    question: "Summarize the lecture points, showing how they counter micro-housing benefits."
  },
  {
    title: "3D Printed Houses",
    topic: "Construction",
    reading: "3D printing concrete house walls builds sturdy homes in 24 hours at a fraction of traditional construction costs.",
    lecture: "3D printed concrete lacks insulation against cold winters. The machinery also requires flat ground and specialized technicians.",
    question: "Summarize the lecture points, explaining how they challenge 3D printed housing."
  }
];

// Helper to generate 50 distinct Academic topics
const ACADEMIC_DISCUSSIONS_BASE = [
  { title: "University Class Attendance", topic: "Higher Education", prompt: "Should university professors make class attendance mandatory, or should it be optional for adult students?", s1Name: "Emma", s1Text: "Attendance should be mandatory because listening to discussions helps students retain knowledge better than just reading slides at home.", s2Name: "John", s2Text: "As adults paying tuition, students should manage their own time. If someone can pass exams without sitting in class, attendance shouldn't matter." },
  { title: "Remote Work Preference", topic: "Workplace Habits", prompt: "Do you prefer working from home or working in a physical office setting? What is the main reason for your preference?", s1Name: "Sarah", s1Text: "Working from home saves money on commuting and gives me a peaceful environment to focus without office noise.", s2Name: "Michael", s2Text: "An office environment helps me stay disciplined, socialize with teammates, and clearly separate work from my home life." },
  { title: "Grade-Based Financial Rewards", topic: "Child Education", prompt: "Should parents pay children cash rewards for earning good grades in school?", s1Name: "Grace", s1Text: "Yes, small money rewards teach children that effort leads to tangible financial success, motivating them to study hard.", s2Name: "Andrew", s2Text: "No, children should learn for the joy of knowledge. Paying them turns learning into a greedy chore." },
  { title: "Online vs Physical Shopping", topic: "Consumer Behavior", prompt: "Do you prefer buying products online or at local physical retail stores?", s1Name: "Lily", s1Text: "Online shopping is superior because you can compare prices instantly and read reviews from thousands of buyers.", s2Name: "William", s2Text: "I prefer real stores where I can physically touch items, try on clothing, and walk home with my purchase immediately." },
  { title: "Public Transit Investment", topic: "City Infrastructure", prompt: "Should governments spend more money expanding public transit or building wider highways?", s1Name: "Sophia", s1Text: "Public transit reduces pollution, cuts traffic jams, and provides cheap travel for citizens who cannot afford cars.", s2Name: "David", s2Text: "Highways benefit everyone, including trucks carrying grocery goods. Cars give people freedom to travel anywhere anytime." },
  { title: "Mandatory High School Volunteer Hours", topic: "Youth Policy", prompt: "Should high school students be required to perform community service hours to graduate?", s1Name: "Ava", s1Text: "Yes, volunteering connects teenagers to their local community and teaches empathy and real-world teamwork.", s2Name: "Lucas", s2Text: "No, forcing teenagers to volunteer destroys the genuine spirit of charity and adds stress to busy homework schedules." },
  { title: "Fast Food Tax", topic: "Public Health", prompt: "Should governments place extra taxes on sugary drinks and fast food to encourage healthier eating?", s1Name: "Chloe", s1Text: "Yes, fast food leads to heavy medical costs. Higher prices encourage people to buy healthier fresh fruits and vegetables.", s2Name: "Jack", s2Text: "No, fast food taxes hurt low-income workers who rely on quick, cheap meals. Education works better than penalties." },
  { title: "Paper Books vs e-Books", topic: "Reading Culture", prompt: "Do you prefer reading physical paper books or digital e-books on a tablet?", s1Name: "Nora", s1Text: "Physical books don't strain your eyes with bright screen light, and holding a real book is a relaxing screen-free experience.", s2Name: "Ethan", s2Text: "E-books let you carry an entire library in your pocket, adjust font sizes, and look up dictionary definitions instantly." },
  { title: "Arts in School Curriculum", topic: "School Budgeting", prompt: "Should elementary schools spend equal funding on music and art as they do on science and math?", s1Name: "Maya", s1Text: "Art and music foster creativity, emotional growth, and confidence, which are just as valuable as technical facts.", s2Name: "Ryan", s2Text: "Science and math are essential core skills for future jobs. Schools must prioritize technical subjects first." },
  { title: "Gap Year Before College", topic: "Educational Choices", prompt: "Is taking a gap year to work or travel before starting university a good idea for young people?", s1Name: "Zoe", s1Text: "A gap year matures students, gives them practical work experience, and helps them choose the right university major.", s2Name: "Marcus", s2Text: "Taking a gap year interrupts momentum. Students risk forgetting study habits and falling behind their peers." },
  { title: "Electric Buses vs Private Electric Cars", topic: "Urban Transit", prompt: "Should city subsidies focus on buying electric public buses or helping individuals purchase private electric cars?", s1Name: "Elena", s1Text: "Electric buses move thousands of citizens daily, offering maximum pollution reduction per dollar spent.", s2Name: "Daniel", s2Text: "Private cars cater to individual schedules and families living in suburban neighborhoods without bus stops." },
  { title: "Teen Social Media Age Limits", topic: "Digital Well-being", prompt: "Should social media platforms enforce a strict legal minimum age of 16 for new accounts?", s1Name: "Victoria", s1Text: "Yes, teenagers under 16 face severe cyberbullying and mental health distress from algorithms designed for addiction.", s2Name: "Tyler", s2Text: "No, social media is how young people communicate, learn about world events, and express creative hobbies." },
  { title: "4-Day Workweek Policy", topic: "Labor Economics", prompt: "Should companies adopt a 4-day, 32-hour workweek for full salary?", s1Name: "Claire", s1Text: "Well-rested employees are far more productive, take fewer sick days, and maintain higher job satisfaction.", s2Name: "James", s2Text: "Squeezing full workloads into 4 days increases daily stress and leaves clients stranded on Fridays." },
  { title: "Plastic Packaging Ban", topic: "Environmental Law", prompt: "Should governments completely ban single-use plastic packaging in grocery stores?", s1Name: "Hannah", s1Text: "Yes, plastic packaging litters oceans and microplastics harm human health. Reusable containers are easy to use.", s2Name: "Brandon", s2Text: "Banning plastic packaging increases food spoilage during transportation, raising grocery store prices for families." },
  { title: "College Degree vs Trade Certification", topic: "Career Paths", prompt: "Is a traditional 4-year university degree still superior to a short vocational trade certificate?", s1Name: "Samantha", s1Text: "A university degree provides broad critical thinking, adaptability, and long-term career growth in leadership.", s2Name: "Liam", s2Text: "Trade certificates cost much less, take only one year, and lead directly to high-paying jobs without student debt." },
  { title: "Ethics of Animal Zoos", topic: "Animal Welfare", prompt: "Are wild animal zoos ethical institutions in modern society?", s1Name: "Dr. Vance", s1Text: "Zoos are vital for wildlife conservation, running captive breeding programs that prevent endangered species extinction.", s2Name: "Oliver", s2Text: "Locking wild animals in artificial concrete cages for human entertainment is inhumane regardless of conservation claims." },
  { title: "Smartphone Restrictions for Children", topic: "Child Development", prompt: "At what age should parents allow their children to own a smartphone with internet access?", s1Name: "Rachel", s1Text: "Parents should wait until high school (age 14 or 15) so children develop real-world social skills and outdoor habits.", s2Name: "Gabriel", s2Text: "Children need smartphones early for GPS safety, family coordination, and digital literacy required in modern schools." },
  { title: "Digital Payments vs Physical Cash", topic: "Financial Systems", prompt: "Should society transition towards a completely cashless economy?", s1Name: "Jessica", s1Text: "Digital payments reduce street robbery, prevent tax evasion, and speed up everyday transactions in stores.", s2Name: "Jonathan", s2Text: "A cashless society excludes poor citizens without bank accounts and leaves everyone helpless during power outages." },
  { title: "Homework Elimination in Elementary Schools", topic: "School Policy", prompt: "Should elementary schools completely abolish homework for children under 10?", s1Name: "Emily", s1Text: "Eliminating homework reduces childhood anxiety, leaving afternoons open for sports, family dinners, and rest.", s2Name: "Marcus", s2Text: "Homework builds essential self-discipline and reinforces basic reading and math skills taught in class." },
  { title: "University Athletic Program Spending", topic: "Campus Budgeting", prompt: "Should universities cut sports program budgets to fund academic research and scholarships?", s1Name: "Sophia", s1Text: "Academia and research are a university's core mission. Sports budgets are often bloated and wasteful.", s2Name: "David", s2Text: "College sports bring immense alumni donations, student unity, and national visibility that benefits the entire campus." },
  { title: "Government Space Exploration Funding", topic: "Public Expenditure", prompt: "Is government spending on space exploration justified when poverty exists on Earth?", s1Name: "Nora", s1Text: "Space technology leads to satellite GPS, weather forecasting, and medical breakthroughs that help Earth directly.", s2Name: "Ethan", s2Text: "Billions spent on Mars rockets should be redirected to housing, healthcare, and terrestrial clean energy research." },
  { title: "Value of Organic Food", topic: "Nutrition & Agriculture", prompt: "Is buying organic food worth the significantly higher financial cost?", s1Name: "Grace", s1Text: "Organic food avoids toxic pesticide residues, protecting long-term health and supporting sustainable farming soil.", s2Name: "Andrew", s2Text: "Nutritional studies show organic food has the exact same vitamins as conventional food at nearly double the price." },
  { title: "AI Tools in Classrooms", topic: "Educational Technology", prompt: "Should students be allowed to use AI writing assistants for school essay assignments?", s1Name: "Claire", s1Text: "AI tools teach students editing, prompt drafting, and research efficiency required in modern tech workplaces.", s2Name: "Tyler", s2Text: "Allowing AI essay generators prevents students from learning how to organize their thoughts and formulate arguments." },
  { title: "Fast Food Advertising Restrictions", topic: "Public Health", prompt: "Should governments ban fast food advertisements on television and online platforms?", s1Name: "Ava", s1Text: "Yes, fast food ads manipulate children into unhealthy eating habits, fueling childhood obesity rates.", s2Name: "Jack", s2Text: "No, businesses have the right to advertise legal products. Parents should teach children proper nutrition instead." },
  { title: "Dormitories vs Off-Campus Housing", topic: "Student Life", prompt: "Is living in university dormitories better than renting an off-campus apartment?", s1Name: "Maya", s1Text: "Dorms place you at the heart of campus life, making it easy to form lifelong friendships and attend events.", s2Name: "Ryan", s2Text: "Off-campus apartments offer private kitchens, lower rent costs, and freedom from strict resident advisor rules." },
  { title: "Big City vs Small Town Life", topic: "Lifestyle Choices", prompt: "Where is it better for young adults to build a career: a metropolis or a small town?", s1Name: "Lily", s1Text: "Metropolitan cities offer diverse job markets, networking events, cultural diversity, and public transit.", s2Name: "William", s2Text: "Small towns offer affordable housing, clean air, strong community ties, and lower stress levels." },
  { title: "Mandatory School Music Lessons", topic: "Arts Education", prompt: "Should all elementary students be required to learn a musical instrument?", s1Name: "Zoe", s1Text: "Learning music enhances spatial reasoning, mathematical comprehension, and emotional expression in young minds.", s2Name: "Lucas", s2Text: "Forcing unmotivated children to practice instruments creates frustration. Arts should remain optional electives." },
  { title: "Working Alone vs Group Projects", topic: "Academic Methods", prompt: "Are individual assignments better for evaluation than group project assignments?", s1Name: "Emma", s1Text: "Individual assignments ensure every student is graded fairly based on their own effort, avoiding free-riders.", s2Name: "John", s2Text: "Group projects teach real-world collaboration, conflict resolution, and communication skills needed in offices." },
  { title: "School Uniform Policies", topic: "Secondary Education", prompt: "Do mandatory school uniforms improve the student learning environment?", s1Name: "Sarah", s1Text: "Uniforms reduce peer pressure over expensive clothing brands and create a professional academic mindset.", s2Name: "Michael", s2Text: "Uniforms restrict personal expression and do not prevent bullying or address core educational issues." },
  { title: "Free Public Wi-Fi Expansion", topic: "Infrastructure", prompt: "Should municipal governments provide free public Wi-Fi in all urban neighborhoods?", s1Name: "Chloe", s1Text: "Free internet ensures low-income students can access educational tools and apply for jobs online.", s2Name: "Brandon", s2Text: "Public Wi-Fi networks are security risks for cybercrime, and private mobile data plans are already cheap." },
  { title: "Artificial Turf vs Natural Grass", topic: "Sports Infrastructure", prompt: "Should school sports fields replace natural grass with artificial turf?", s1Name: "Elena", s1Text: "Artificial turf withstands heavy daily play without mud, saving thousands on mowing and irrigation.", s2Name: "James", s2Text: "Artificial grass overheats in sunlight, causes severe friction burns, and sheds microplastics into soil." },
  { title: "Solar Panel Subsidies", topic: "Energy Policy", prompt: "Should governments offer tax rebates to homeowners installing solar panels?", s1Name: "Victoria", s1Text: "Subsidies accelerate transition to clean energy, lowering carbon emissions and reducing strain on electric grids.", s2Name: "Daniel", s2Text: "Solar subsidies primarily benefit wealthy homeowners who can afford upfront costs, raising energy taxes for renters." },
  { title: "Free Museum Admission", topic: "Cultural Policy", prompt: "Should state-funded museums be completely free to all visitors?", s1Name: "Hannah", s1Text: "Free admission democratizes culture, enabling people of all economic backgrounds to learn history and art.", s2Name: "Oliver", s2Text: "Without ticket revenue, museums struggle to maintain exhibits, hire curators, and secure rare artifacts." },
  { title: "24-Hour University Libraries", topic: "Campus Services", prompt: "Should college libraries remain open 24 hours a day during academic semesters?", s1Name: "Samantha", s1Text: "Late-night access provides a quiet, safe study space for night-owl students preparing for difficult exams.", s2Name: "Liam", s2Text: "24-hour libraries encourage unhealthy sleep habits and cost universities significant energy and security money." },
  { title: "Digital Tipping Screens", topic: "Service Industry", prompt: "Has the widespread introduction of digital tipping screens at registers gone too far?", s1Name: "Rachel", s1Text: "Digital tipping screens pressure consumers into tipping 20% for simple counter services like coffee sales.", s2Name: "Gabriel", s2Text: "Digital screens make tipping easy, ensuring hard-working service staff earn fair income despite low base wages." },
  { title: "High-Speed Intercity Trains", topic: "Transportation", prompt: "Should governments prioritize high-speed train networks over domestic airline subsidies?", s1Name: "Jessica", s1Text: "High-speed rail is faster between city centers, produces zero direct emissions, and eliminates airport security lines.", s2Name: "Jonathan", s2Text: "Building rail tracks through mountains and farmland costs hundreds of billions, making ticket prices too high." },
  { title: "Urban Rooftop Agriculture", topic: "Sustainable Cities", prompt: "Should new commercial buildings be required to install rooftop gardens or vegetable farms?", s1Name: "Emily", s1Text: "Rooftop gardens reduce urban heat island effects, absorb rainwater, and produce fresh local vegetables.", s2Name: "Marcus", s2Text: "Rooftop gardens add structural weight, risk water leaks, and require costly ongoing maintenance for building owners." },
  { title: "Primary School Computer Coding", topic: "Elementary Curriculum", prompt: "Should computer programming be a compulsory subject for elementary school children?", s1Name: "Sophia", s1Text: "Coding teaches fundamental logic, problem-solving, and prepares children for a tech-driven global economy.", s2Name: "David", s2Text: "Young children already suffer from excessive screen time. Early education should focus on reading, math, and play." },
  { title: "3D Printed Concrete Housing", topic: "Construction Tech", prompt: "Can 3D-printed houses solve global housing shortages?", s1Name: "Nora", s1Text: "3D concrete printing constructs resilient house walls in 24 hours at half the cost of traditional timber builds.", s2Name: "Ethan", s2Text: "3D printed concrete lacks proper thermal insulation and requires specialized machinery unavailable in remote regions." },
  { title: "Artificial Rain via Cloud Seeding", topic: "Climate Management", prompt: "Should drought-prone states use chemical cloud seeding to generate artificial rainfall?", s1Name: "Grace", s1Text: "Cloud seeding provides critical water for thirsty crops and freshwater reservoirs during dangerous droughts.", s2Name: "Andrew", s2Text: "Cloud seeding uses silver iodide chemicals that pollute soil and steal moisture from neighboring regions." },
  { title: "Video Games and Youth Development", topic: "Leisure & Media", prompt: "Are strategy video games beneficial for teenager cognitive development?", s1Name: "Claire", s1Text: "Complex strategy games improve spatial awareness, resource management, and quick decision-making skills.", s2Name: "Tyler", s2Text: "Video games foster sedentary addiction, sleep deprivation, and isolation from real-world social activities." },
  { title: "E-Bikes on City Sidewalks", topic: "Urban Safety", prompt: "Should electric bicycles and scooters be strictly banned from pedestrian sidewalks?", s1Name: "Ava", s1Text: "Fast e-bikes travel at 20 mph, posing severe collision hazards to pedestrians, elderly walkers, and children.", s2Name: "Jack", s2Text: "Banning e-bikes from sidewalks forces cyclists onto dangerous roads without protected bike lanes." },
  { title: "Standardized Testing in High Schools", topic: "Evaluation Standards", prompt: "Should standardized exam scores remain a primary requirement for college admissions?", s1Name: "Maya", s1Text: "Standardized tests provide an objective, nation-wide metric that compares applicants fairly across different high schools.", s2Name: "Ryan", s2Text: "Standardized tests favor wealthy students who afford expensive tutors, failing to measure creativity or grit." },
  { title: "Mandatory Retirement Age Policies", topic: "Labor Regulations", prompt: "Should corporate employers enforce mandatory retirement at age 65?", s1Name: "Lily", s1Text: "Mandatory retirement creates promotion opportunities for young graduates and brings fresh ideas into management.", s2Name: "William", s2Text: "Forcing healthy, experienced seniors out of work is age discrimination that deprives companies of valuable wisdom." },
  { title: "Commercial Space Tourism", topic: "Commercial Aerospace", prompt: "Should private space tourism flights be restricted due to environmental impact?", s1Name: "Zoe", s1Text: "Space tourism is a vanity pastime for billionaires that emits tons of greenhouse gases directly into upper ozone layers.", s2Name: "Lucas", s2Text: "Private space tourism funds rocket engineering advances that lower launch costs for scientific research satellites." },
  { title: "Banning Paper Drinking Straws", topic: "Consumer Materials", prompt: "Are paper drinking straws an effective replacement for single-use plastic straws?", s1Name: "Emma", s1Text: "Paper straws decompose naturally in oceans within weeks, protecting marine life from plastic ingestion.", s2Name: "John", s2Text: "Paper straws dissolve quickly in liquids, causing consumer frustration, and still require cutting trees." },
  { title: "Micro-Apartment Urban Housing", topic: "Real Estate Trends", prompt: "Are 150-square-foot micro-apartments a good housing solution for young professionals?", s1Name: "Sarah", s1Text: "Micro-apartments offer affordable rents in vibrant downtown locations near work, transit, and nightlife.", s2Name: "Michael", s2Text: "Living in cramped micro-units harms mental health, lacks basic cooking space, and causes claustrophobia." },
  { title: "Seawater Desalination Plants", topic: "Resource Engineering", prompt: "Is ocean water desalination the best answer to global freshwater scarcity?", s1Name: "Chloe", s1Text: "Desalination creates unlimited freshwater from oceans, making dry coastal cities immune to severe climate droughts.", s2Name: "Brandon", s2Text: "Desalination consumes massive electricity and dumps toxic hypersaline brine back into seas, harming marine life." },
  { title: "Paid Work Sabbaticals", topic: "Corporate Culture", prompt: "Should corporations offer 3 months of paid sabbatical leave after 5 years of employment?", s1Name: "Elena", s1Text: "Paid sabbaticals prevent employee burnout, recharge creative thinking, and foster long-term company loyalty.", s2Name: "James", s2Text: "Losing key employees for 3 months delays major client projects and burdens remaining team members." },
  { title: "Car-Free City Centers", topic: "Urban Planning", prompt: "Should major cities permanently ban all private automobiles from downtown districts?", s1Name: "Victoria", s1Text: "Car-free zones eliminate urban smog, create quiet pedestrian walkways, and reduce traffic fatalities.", s2Name: "Daniel", s2Text: "Car bans hurt local retail shops dependent on driving customers and restrict mobility for elderly residents." }
];

// Helper to construct Academic Discussion items
export const EASY_ACADEMIC_TOPICS = ACADEMIC_DISCUSSIONS_BASE.map(item => ({
  title: item.title,
  topic: item.topic,
  prompt: item.prompt,
  profName: "Miller",
  s1Name: item.s1Name,
  s1Text: item.s1Text,
  s2Name: item.s2Name,
  s2Text: item.s2Text
}));

export const MEDIUM_ACADEMIC_TOPICS = ACADEMIC_DISCUSSIONS_BASE.map((item) => ({
  title: `${item.title} (Medium)`,
  topic: item.topic,
  prompt: `${item.prompt} Consider economic and long-term societal tradeoffs in your response.`,
  profName: "Andrews",
  s1Name: item.s1Name,
  s1Text: `${item.s1Text} Furthermore, long-term statistical trends support this view.`,
  s2Name: item.s2Name,
  s2Text: `${item.s2Text} However, implementation costs and public policy challenges cannot be ignored.`
}));

export const HARD_ACADEMIC_TOPICS = ACADEMIC_DISCUSSIONS_BASE.map((item) => ({
  title: `${item.title} (Hard)`,
  topic: item.topic,
  prompt: `In our advanced seminar on ${item.topic.toLowerCase()}, analyze this proposal: ${item.prompt} Evaluate opposing arguments and formulate a nuanced position.`,
  profName: "Kaufman",
  s1Name: item.s1Name,
  s1Text: `${item.s1Text} Empirical data from recent policy trials demonstrates a statistically significant impact.`,
  s2Name: item.s2Name,
  s2Text: `${item.s2Text} Structural systemic constraints and ethical considerations complicate any straightforward conclusion.`
}));

// ----------------------------------------------------
// EASY EMAIL TOPICS (50 Unique Items - 2026 iBT Format)
// ----------------------------------------------------
const EASY_EMAIL_TOPICS = [
  {
    title: "Rescheduling Office Hours",
    topic: "Academic Advising",
    sender: "Prof. Alan Harrison",
    role: "Department Chair, History Dept",
    subject: "Rescheduling Office Hour Meeting",
    body: "Dear Students,\nDue to an urgent faculty committee meeting next Monday afternoon, I need to reschedule our individual project check-ins. Please send me an email with your preferred availability for Tuesday or Wednesday morning.\n\nBest regards,\nProf. Harrison",
    instructions: [
      "State your preferred day and time for the rescheduled check-in.",
      "Explain why this time fits your class schedule.",
      "Ask a brief clarifying question regarding the required primary sources for your essay."
    ]
  },
  {
    title: "Lab Extension Request",
    topic: "Coursework",
    sender: "Dr. Elena Rostova",
    role: "Professor of Organic Chemistry",
    subject: "Upcoming Lab Report #4 Deadline",
    body: "Dear Class,\nAs a reminder, Lab Report #4 is due this Friday at 5:00 PM. If anyone anticipates difficulties meeting this deadline due to medical reasons or university-sanctioned athletic events, please email me in advance with proposed extension terms.\n\nSincerely,\nDr. Rostova",
    instructions: [
      "Politely request a two-day extension on your lab report.",
      "Explain the legitimate reason for your delay (e.g., unexpected fever or team competition).",
      "Confirm the exact day and time you will submit the finished report."
    ]
  },
  {
    title: "Research Assistant Inquiry",
    topic: "Campus Employment",
    sender: "Dr. Marcus Vance",
    role: "Director, Environmental Science Lab",
    subject: "Open Student Research Assistantship",
    body: "Hello Students,\nOur lab is seeking two undergraduate research assistants for the upcoming semester to assist with water quality sampling and data entry. Interested applicants should email a short message outlining their interest and background.\n\nBest,\nDr. Vance",
    instructions: [
      "Express your strong interest in applying for the Research Assistant position.",
      "Briefly highlight your relevant science coursework or data entry experience.",
      "Inquire about the expected weekly time commitment for the role."
    ]
  },
  {
    title: "Credit Overload Approval",
    topic: "Academic Planning",
    sender: "Ms. Sarah Jenkins",
    role: "Senior Academic Advisor",
    subject: "Credit Overload Authorization Required",
    body: "Dear Student,\nI noticed you requested to register for 21 credit hours next semester. Since the standard limit is 18 credits, you must submit a written request explaining your study plan and reason for taking extra courses.\n\nBest,\nMs. Jenkins",
    instructions: [
      "Explain why you need to take 21 credits next semester (e.g., graduating early).",
      "Demonstrate how you plan to manage the heavy workload effectively.",
      "Request a brief appointment with Ms. Jenkins to sign the official overload form."
    ]
  },
  {
    title: "Recommendation Letter Request",
    topic: "Graduate School",
    sender: "Prof. David Miller",
    role: "Cognitive Psychology Department",
    subject: "Graduate Recommendation Requests",
    body: "Dear Students,\nStudents requesting recommendation letters for fall graduate admissions must email me at least four weeks in advance with their program list and draft personal statement.\n\nBest,\nProf. Miller",
    instructions: [
      "Politely ask Professor Miller to write a recommendation letter for your application.",
      "Mention a specific class you took with him and the high grade you achieved.",
      "Offer to attach your resume and transcript, and state your earliest deadline."
    ]
  },
  {
    title: "Exam Scope Clarification",
    topic: "Exam Preparation",
    sender: "TA Alex Rivera",
    role: "Teaching Assistant, Economics 101",
    subject: "Midterm Exam Scope & Study Guide",
    body: "Hi Everyone,\nThe Economics midterm exam will cover Chapters 1 through 6. Please email me if you have any questions regarding sample problem sets or exam rules.\n\nBest,\nAlex",
    instructions: [
      "Ask whether Chapter 7 will be included in the essay section.",
      "Inquire if students are allowed to bring a basic calculator to the exam hall.",
      "Request additional practice problem solutions if available."
    ]
  },
  {
    title: "Group Meeting Coordination",
    topic: "Team Project",
    sender: "Jordan Lee",
    role: "Marketing Project Lead",
    subject: "Group Presentation Prep Schedule",
    body: "Hey Team,\nWe need to meet this week to divide the remaining presentation slides for our marketing project. Please reply with your open times between Wednesday and Friday.\n\nBest,\nJordan",
    instructions: [
      "State your availability for Wednesday and Thursday afternoons.",
      "Propose meeting in the campus library study room.",
      "Suggest which specific section of the slide deck you would like to design."
    ]
  },
  {
    title: "Portal Technical Issue",
    topic: "Campus IT",
    sender: "HelpDesk Desk Officer",
    role: "Campus IT Services",
    subject: "Student Portal Assignment Submissions",
    body: "Notice: If you experience error codes while uploading PDF assignments, please submit a ticket detailing your student ID, browser, and the specific course portal affected.\n\nIT Support",
    instructions: [
      "Describe the technical issue you experienced while uploading your assignment.",
      "Provide your student ID and browser details.",
      "Request confirmation that your late submission flag will be cleared."
    ]
  },
  {
    title: "Student Job Absence Notice",
    topic: "Student Employment",
    sender: "Mr. Robert Chen",
    role: "Campus Dining Hall Manager",
    subject: "Weekly Shift Rosters & Absences",
    body: "To All Dining Staff:\nIf you cannot work your assigned shift due to class conflicts or illness, you must email me 24 hours prior to find a substitute worker.\n\nRegards,\nMr. Chen",
    instructions: [
      "Inform Mr. Chen that you cannot work your Thursday evening shift.",
      "Explain the academic conflict (e.g., mandatory evening midterm exam).",
      "Name the colleague who agreed to swap shifts with you."
    ]
  },
  {
    title: "Study Abroad Application",
    topic: "Global Programs",
    sender: "Exchange Advisor Maria",
    role: "Office of International Programs",
    subject: "Spring Semester Study Abroad Deadlines",
    body: "Dear Students,\nApplications for spring study abroad programs in Europe close on October 15th. Send us an email if you need clarification on passport requirements or course transfer credits.\n\nBest,\nMaria",
    instructions: [
      "Ask if course credits earned at the foreign university transfer automatically.",
      "Inquire about available merit scholarships for study abroad students.",
      "Request an appointment before the October 15th deadline."
    ]
  },
  {
    title: "Dorm Check-In Adjustment",
    topic: "Housing Services",
    sender: "Housing Coordinator Sam",
    role: "Residence Life Office",
    subject: "Fall Housing Arrival Window",
    body: "Dear Resident,\nStandard dormitory check-in runs from August 20th to August 22nd. If you require early or late check-in, please submit a formal email request.\n\nSincerely,\nResidence Life",
    instructions: [
      "Request permission to check into your dormitory one day early.",
      "Explain your travel constraint (e.g., flight arrival schedule).",
      "Confirm you understand any additional daily early-arrival fee."
    ]
  },
  {
    title: "Auditing Graduate Seminar",
    topic: "Course Registration",
    sender: "Prof. Catherine Dupont",
    role: "Department of Philosophy",
    subject: "Auditing Policy for Advanced Seminars",
    body: "Hello,\nUndergraduate students wishing to audit Philosophy 501 must obtain written instructor consent before the end of add/drop week.\n\nRegards,\nProf. Dupont",
    instructions: [
      "Ask for permission to audit Philosophy 501 next semester.",
      "Explain your academic interest in the seminar topic.",
      "Assure the professor that you will complete all assigned readings."
    ]
  },
  {
    title: "Library Study Room Lockout",
    topic: "Campus Facilities",
    sender: "Library Circulation Desk",
    role: "University Main Library",
    subject: "Group Study Room Reservations",
    body: "Dear Patron,\nReserved study rooms must be claimed within 15 minutes of reservation start time. Contact circulation if you encounter keycard access issues.\n\nLibrary Staff",
    instructions: [
      "Report a broken digital keypad on Group Room B.",
      "Request assistance opening the room for your study group.",
      "Ask if your reservation time can be extended by 15 minutes."
    ]
  },
  {
    title: "Club Workshop Funding",
    topic: "Student Organizations",
    sender: "Student Government Treasurer",
    role: "Student Association Council",
    subject: "Event Funding Grant Applications",
    body: "To Club Presidents:\nFunding requests for guest speaker workshops taking place next month must be submitted via email with an itemized budget estimate.\n\nTreasury Board",
    instructions: [
      "Submit a funding request for a public speaking guest workshop.",
      "Itemize estimated costs for room rental and speaker honorarium.",
      "Explain how the event will benefit university students."
    ]
  },
  {
    title: "Financial Aid Refund Inquiry",
    topic: "Financial Services",
    sender: "Bursar Office Team",
    role: "Student Accounts & Aid",
    subject: "Fall Semester Aid Disbursement",
    body: "Notice: Financial aid refunds are processed automatically. If your account shows a pending credit balance after September 1st, please email our office.\n\nBursar Office",
    instructions: [
      "Inquire about the status of your pending financial aid refund check.",
      "Provide your student identification number and semester details.",
      "Ask whether direct deposit or physical check is selected."
    ]
  },
  {
    title: "Thesis Draft Feedback",
    topic: "Academic Research",
    sender: "Prof. Arthur Pendelton",
    role: "Senior Thesis Director",
    subject: "Senior Thesis Draft Submission",
    body: "Dear Thesis Students,\nPlease send me your Chapter 2 literature review drafts by Friday so I can provide feedback before winter break.\n\nBest,\nProf. Pendelton",
    instructions: [
      "Attach your literature review draft for Professor Pendelton's review.",
      "Highlight specific sections where you would like detailed input.",
      "Propose a meeting date next week to discuss his feedback."
    ]
  },
  {
    title: "Grade Posting Inquiry",
    topic: "Course Administration",
    sender: "Instructor Maya Lin",
    role: "Lecturer, Statistics 202",
    subject: "Midterm Exam Grade Updates",
    body: "Class,\nMidterm exam scores have been published online. If you spot a discrepancy between your written exam score and the portal entry, email me directly.\n\nBest,\nMaya Lin",
    instructions: [
      "Politely point out a grade recording error on Question 4 of your exam.",
      "Attach a clear photo or copy of your scored paper.",
      "Ask if she can correct the recorded total on the portal."
    ]
  },
  {
    title: "Dining Hall Accommodations",
    topic: "Campus Life",
    sender: "Dining Services Chef",
    role: "Campus Hospitality",
    subject: "Special Dietary & Allergy Requests",
    body: "Dear Campus Community,\nStudents with severe food allergies or specialized dietary needs should contact dining management to arrange custom meal options.\n\nChef Thomas",
    instructions: [
      "Inquire about gluten-free and nut-free meal options at the main hall.",
      "Explain your specific dietary requirements.",
      "Ask if meals can be prepared in a dedicated allergen-free kitchen area."
    ]
  },
  {
    title: "Alumni Interview Inquiry",
    topic: "Career Mentorship",
    sender: "Alumni Network Director",
    role: "Career Development Center",
    subject: "Alumni Mentorship Matching",
    body: "Dear Students,\nOur mentorship program pairs undergraduates with working alumni for 30-minute informational interviews. Email us your target industry.\n\nCareer Center",
    instructions: [
      "Express interest in interviewing an alumnus working in software engineering.",
      "State what key questions you hope to ask about industry careers.",
      "Provide your general weekly availability for a video call."
    ]
  },
  {
    title: "Internship Start Confirmation",
    topic: "Professional Career",
    sender: "HR Manager Karen Vance",
    role: "TechCorp Human Resources",
    subject: "Summer Internship Onboarding",
    body: "Hello Candidate,\nPlease confirm your preferred start date (June 1st or June 15th) and send over your completed tax forms prior to onboarding.\n\nBest,\nKaren",
    instructions: [
      "Confirm June 1st as your preferred internship start date.",
      "Confirm that you have completed and attached all required paperwork.",
      "Ask where you should report on your first morning."
    ]
  },
  {
    title: "Lecture Recording Approval",
    topic: "Accessibility",
    sender: "Prof. Steven Ross",
    role: "Department of Physics",
    subject: "Classroom Audio Recording Policy",
    body: "Students,\nRecording lectures is restricted unless approved for disability accommodations or language support. Email me to request permission.\n\nProf. Ross",
    instructions: [
      "Request permission to record physics lectures for English vocabulary review.",
      "Assure the professor that recordings will remain strictly private.",
      "Ask if slide PDF notes will be posted online after lectures."
    ]
  },
  {
    title: "Damaged Textbook Exchange",
    topic: "Bookstore Services",
    sender: "Bookstore Manager Desk",
    role: "Campus Bookstore",
    subject: "Rental Textbook Exchanges",
    body: "Notice: If your rented textbook arrived with missing pages or damage, notify us within 48 hours for a free replacement.\n\nBookstore Support",
    instructions: [
      "Report missing pages in your rented Biology textbook.",
      "Request a replacement copy or store credit.",
      "Ask when you can drop off the damaged book at the counter."
    ]
  },
  {
    title: "Replacement Campus ID",
    topic: "Student Services",
    sender: "Campus Security Desk",
    role: "ID Card & Badge Services",
    subject: "Lost Student ID Card Replacement",
    body: "Students,\nTo replace a lost ID card, email our office with your full name, student ID number, and preferred pickup appointment time.\n\nSecurity Services",
    instructions: [
      "Request a replacement for your misplaced student ID card.",
      "Provide your full student name and ID number.",
      "Inquire about the replacement fee and payment methods."
    ]
  },
  {
    title: "Guest Speaker Invitation",
    topic: "Club Event",
    sender: "Engineering Society Board",
    role: "Student Chapter Lead",
    subject: "Keynote Speaker Invitation - Engineering Expo",
    body: "Dear Guest,\nWe are inviting industry leaders to speak at our annual campus tech showcase. Interested speakers should confirm availability by Friday.\n\nExec Committee",
    instructions: [
      "Politely invite a guest engineer to give a 30-minute talk at campus.",
      "Specify the date, time, and theme of the engineering expo.",
      "Offer to arrange travel reimbursement or virtual presentation options."
    ]
  },
  {
    title: "Gym Hours Extension",
    topic: "Campus Athletics",
    sender: "Recreation Center Director",
    role: "Campus Fitness Center",
    subject: "Exam Week Gym Operating Hours",
    body: "Notice: We are collecting student feedback on proposed extended gym operating hours during upcoming exam weeks. Email us your thoughts.\n\nRec Center Staff",
    instructions: [
      "Express support for extending gym opening hours until 11:00 PM.",
      "Explain how late exercise helps reduce exam stress.",
      "Suggest adding extra morning weekend hours as well."
    ]
  },
  {
    title: "Make-up Quiz Scheduling",
    topic: "Academic Policy",
    sender: "Prof. Laura Bennett",
    role: "Sociology Department",
    subject: "Missed Quiz #2 Make-up Policy",
    body: "Dear Students,\nIf you missed Quiz #2 due to verified emergency, please email me by Wednesday to schedule a make-up session in my office.\n\nProf. Bennett",
    instructions: [
      "Explain your unavoidable absence from Quiz #2.",
      "Propose two specific times on Thursday to take the make-up quiz.",
      "Offer to present a doctor's note during office hours."
    ]
  },
  {
    title: "Campus Parking Permit",
    topic: "Parking Services",
    sender: "Parking Office Manager",
    role: "Transportation & Parking",
    subject: "Commuter Parking Permit Registration",
    body: "Dear Commuter,\nCommuter parking permits for Lot C are available. Email us your vehicle license plate and registration details to finalize permit issuance.\n\nParking Office",
    instructions: [
      "Provide your vehicle license plate and model details.",
      "Select Lot C as your preferred commuter parking option.",
      "Inquire if temporary guest passes are available for family visits."
    ]
  },
  {
    title: "Official Transcript Dispatch",
    topic: "Registrar Office",
    sender: "Registrar Records Desk",
    role: "Office of the Registrar",
    subject: "Official Electronic Transcript Orders",
    body: "Students,\nOfficial transcript requests to external universities require student confirmation of recipient email addresses and delivery deadlines.\n\nRegistrar Office",
    instructions: [
      "Request an official electronic transcript sent to a graduate school.",
      "Provide the destination email address and application deadline.",
      "Confirm authorization to charge the transcript fee to your account."
    ]
  },
  {
    title: "Writing Center Session",
    topic: "Academic Support",
    sender: "Writing Center Coordinator",
    role: "Campus Academic Skills Center",
    subject: "Rescheduling Writing Tutoring Appointment",
    body: "Dear Student,\nYour writing tutoring session is scheduled for Tuesday at 3:00 PM. If you need to reschedule, notify your tutor 24 hours in advance.\n\nWriting Center",
    instructions: [
      "Politely request to reschedule your Tuesday tutoring appointment.",
      "Propose an alternate appointment on Thursday afternoon.",
      "Mention the specific paper draft you want help editing."
    ]
  },
  {
    title: "Survey Data Submission",
    topic: "Course Research",
    sender: "Group Project Lead Ryan",
    role: "Psychology Research Group",
    subject: "Class Survey Response Collection",
    body: "Hey Team,\nPlease email me your compiled survey results from the campus polling before our Thursday lab session so I can combine the dataset.\n\nRyan",
    instructions: [
      "Attach your survey response spreadsheet for the group project.",
      "Summarize key trends found in your respondent dataset.",
      "Offer to help draft the final methodology section."
    ]
  },
  {
    title: "Sustainability Fair Volunteer",
    topic: "Campus Service",
    sender: "Green Campus Committee",
    role: "Office of Sustainability",
    subject: "Volunteers Needed for Campus Green Fair",
    body: "Hi All,\nWe are hiring 10 student volunteers for the annual Sustainability Fair next month. Roles include setup, registration, and workshop assistance.\n\nGreen Team",
    instructions: [
      "Volunteer for the registration booth at the Sustainability Fair.",
      "State your shift preference (morning or afternoon).",
      "Mention any previous event organizing experience."
    ]
  },
  {
    title: "Course Substitution Request",
    topic: "Academic Major",
    sender: "Prof. Harold Finch",
    role: "Computer Science Major Advisor",
    subject: "Major Requirement Substitution Inquiry",
    body: "Dear Majors,\nIf you wish to substitute an advanced elective for a required core course, email me with the course syllabus and justification.\n\nProf. Finch",
    instructions: [
      "Request permission to substitute Data Science 301 for CS 250.",
      "Explain how Data Science 301 aligns better with your career goals.",
      "Offer to send the complete syllabus for approval."
    ]
  },
  {
    title: "Media Equipment Loan",
    topic: "Campus Media",
    sender: "Media Center Custodian",
    role: "Digital Arts & Media Lab",
    subject: "Camera & Audio Equipment Reservations",
    body: "Students,\nDSLR camera kits must be reserved 3 days prior to field shooting. Email us your course code and production equipment list.\n\nMedia Lab",
    instructions: [
      "Reserve a video camera and microphone kit for a documentary project.",
      "Specify pickup date on Friday and return date on Monday.",
      "Confirm you have completed the prerequisite safety training."
    ]
  },
  {
    title: "Computer Lab Network Outage",
    topic: "IT Services",
    sender: "Campus IT Monitor",
    role: "IT Infrastructure Team",
    subject: "Reporting Hardware & Network Faults",
    body: "Notice: Report offline workstations or printer errors in Lab 204 to IT support immediately for technician dispatch.\n\nIT Support Desk",
    instructions: [
      "Report three faulty printers in Computer Lab 204.",
      "Explain the error (paper jam and offline network connection).",
      "Request urgent repair before late afternoon printing hours."
    ]
  },
  {
    title: "Welcome Reception RSVP",
    topic: "Department Event",
    sender: "Dept Coordinator Linda",
    role: "Faculty of Humanities",
    subject: "Annual Departmental Faculty-Student Reception",
    body: "Dear Students,\nYou are cordially invited to our Fall Reception on Thursday at 5:00 PM. Please RSVP by Tuesday detailing any guest attendance.\n\nLinda",
    instructions: [
      "Confirm your attendance at the Fall Departmental Reception.",
      "Indicate that you will be bringing one student guest.",
      "Politely inquire if vegetarian snacks will be served."
    ]
  },
  {
    title: "Shuttle Service Timetable",
    topic: "Transportation",
    sender: "Shuttle Operations Lead",
    role: "Campus Commuter Transit",
    subject: "Off-Campus Apartment Express Bus",
    body: "Commuters,\nWe are adjusting shuttle departure frequency between West Campus and Downtown apartments. Send feedback on peak morning times.\n\nTransit Office",
    instructions: [
      "Request an additional shuttle run at 8:15 AM.",
      "Explain that current morning buses are overcrowded.",
      "Thank the shuttle team for providing reliable transit."
    ]
  },
  {
    title: "Supplemental Reading List",
    topic: "Academic Guidance",
    sender: "Prof. Susan Vance",
    role: "Department of Literature",
    subject: "Recommended Reading for Midterm Essays",
    body: "Dear Class,\nStudents seeking extra reading resources for their research papers are welcome to email me for tailored book lists.\n\nProf. Vance",
    instructions: [
      "Ask Professor Vance for recommended texts on 19th-century poetry.",
      "Briefly outline your specific essay thesis topic.",
      "Inquire if these books are available in the reserve library."
    ]
  },
  {
    title: "Late Course Registration",
    topic: "Registrar Services",
    sender: "Registrar Officer Green",
    role: "Enrollment Management",
    subject: "Late Add/Drop Course Waivers",
    body: "Notice: Late enrollment after Week 2 requires written permission from both the course instructor and department dean.\n\nEnrollment Office",
    instructions: [
      "Request permission to enroll late in Art History 102.",
      "Explain why you could not register earlier (e.g., prerequisite clearance).",
      "Confirm that you have caught up on required initial readings."
    ]
  },
  {
    title: "Presentation Slides Format",
    topic: "Class Presentation",
    sender: "TA Daniel Kim",
    role: "Teaching Assistant, Communications",
    subject: "Group Presentation File Format & Specs",
    body: "Hi Everyone,\nAll group presentation slide decks must be uploaded in PDF or PPTX format by Sunday midnight to ensure projector compatibility.\n\nDaniel",
    instructions: [
      "Confirm that your group presentation file has been uploaded.",
      "Ask if embedded audio clips will play properly on classroom speakers.",
      "Inquire if group members can present using their own laptop."
    ]
  },
  {
    title: "Classroom Heater Maintenance",
    topic: "Facilities Management",
    sender: "Physical Plant Team",
    role: "Campus Maintenance & Safety",
    subject: "Building Temperature & Heating Maintenance",
    body: "Notice: If your classroom is excessively cold or noisy due to radiator issues, email maintenance with building and room numbers.\n\nFacilities Desk",
    instructions: [
      "Report a faulty radiator in Science Building Room 108.",
      "Explain that the cold temperature makes it difficult to concentrate during lectures.",
      "Request maintenance inspection before tomorrow morning's class."
    ]
  },
  {
    title: "Career Fair Employer List",
    topic: "Career Services",
    sender: "Career Center Desk",
    role: "University Career Office",
    subject: "Spring Engineering & Tech Career Fair",
    body: "Students,\nThe employer guide for Thursday's Career Fair is now available. Email us if you require resume review or employer booth maps.\n\nCareer Center",
    instructions: [
      "Request a copy of the participating employer directory.",
      "Inquire if top software firms will accept on-site interviews.",
      "Ask if resume review walk-in hours are available on Wednesday."
    ]
  },
  {
    title: "Peer Tutoring Request",
    topic: "Academic Support",
    sender: "Math Learning Center",
    role: "Peer Tutoring Services",
    subject: "Calculus II Peer Tutoring Matches",
    body: "Hello,\nWe match students with upper-level peer tutors for weekly 1-on-1 problem-solving sessions. Email us your course code and availability.\n\nMath Center",
    instructions: [
      "Request a peer tutor for Calculus II.",
      "Specify key topics where you need help (e.g., integration by parts).",
      "Provide your free times on Monday and Wednesday afternoons."
    ]
  },
  {
    title: "Disability Accommodations",
    topic: "Student Accessibility",
    sender: "Accessibility Office",
    role: "Student Disability Services",
    subject: "Semester Accommodation Authorization Letters",
    body: "Dear Student,\nTo issue official exam accommodation letters to your professors, please confirm your course list and exam schedule with our advisor.\n\nAccessibility Center",
    instructions: [
      "Confirm your current course list for extra exam time letters.",
      "Request that letters be sent directly to your course professors.",
      "Inquire about quiet testing room availability for midterms."
    ]
  },
  {
    title: "Alumni Dinner Registration",
    topic: "Campus Network",
    sender: "Alumni Relations Director",
    role: "Office of Development",
    subject: "Annual Student-Alumni Banquet",
    body: "Dear Student Leader,\nSeats for the Annual Alumni Banquet are limited. Email us to reserve student seating and note any dietary preferences.\n\nAlumni Office",
    instructions: [
      "Reserve two student tickets for the Alumni Banquet.",
      "Provide guest names and student department affiliation.",
      "Request vegetarian dinner options for both attendees."
    ]
  },
  {
    title: "Thesis Formatting Style",
    topic: "Graduate Studies",
    sender: "Graduate School Editor",
    role: "Thesis & Dissertation Office",
    subject: "Thesis Style Guide & Citation Compliance",
    body: "Notice: All graduating master's theses must adhere strictly to APA 7th Edition citation formatting. Email us for pre-submission checks.\n\nThesis Office",
    instructions: [
      "Submit your thesis title page for initial formatting clearance.",
      "Ask a question regarding table and figure citation formatting.",
      "Inquire about final submission deadlines for spring graduation."
    ]
  },
  {
    title: "Work Shift Swap Approval",
    topic: "Campus Employment",
    sender: "Student Job Manager",
    role: "Campus Bookstore Operations",
    subject: "Staff Shift Swap Requests",
    body: "Team,\nAll peer shift swaps must be submitted via email 24 hours in advance and signed off by both employees.\n\nBookstore Manager",
    instructions: [
      "Submit a shift swap request for Saturday morning.",
      "Identify the coworker who agreed to cover your shift.",
      "Confirm when you will work their shift in return."
    ]
  },
  {
    title: "Meal Plan Balance Discrepancy",
    topic: "Student Billing",
    sender: "Campus Card Office",
    role: "Dining & Identity Services",
    subject: "Dining Dollar Account Balance Audit",
    body: "Notice: Check your online dining dollar balance. If you notice unexpected deductions, email our auditing desk with transaction details.\n\nCard Office",
    instructions: [
      "Report a double deduction on your dining card at the West Cafe.",
      "Provide the date, time, and purchase amount.",
      "Request a credit refund back to your dining dollar balance."
    ]
  },
  {
    title: "Special Archives Access",
    topic: "Library Research",
    sender: "Special Collections Curator",
    role: "University Archives",
    subject: "Rare Manuscripts Access Request",
    body: "Researchers,\nAccessing rare historical archives requires submitting a written research proposal and scheduling a supervised viewing appointment.\n\nArchives Department",
    instructions: [
      "Request permission to inspect 18th-century regional map archives.",
      "Briefly explain how these documents relate to your history research.",
      "Propose two possible dates for your viewing visit."
    ]
  },
  {
    title: "Summer Research Grant",
    topic: "Research Funding",
    sender: "Undergraduate Research Board",
    role: "Office of University Research",
    subject: "Summer Fellowship Award Notification",
    body: "Dear Applicants,\nSummer research fellowship results have been finalized. Awardees must confirm acceptance and faculty sponsor approval via email.\n\nResearch Board",
    instructions: [
      "Formally accept the Summer Undergraduate Research Fellowship grant.",
      "Confirm that your faculty supervisor has approved the research timeline.",
      "Inquire when grant funding disbursement will be transferred."
    ]
  },
  {
    title: "Final Exam Room Change",
    topic: "Exam Scheduling",
    sender: "Department Administrator",
    role: "School of Engineering",
    subject: "Final Exam Room Assignment Update",
    body: "Students,\nDue to class size expansion, the final exam for CS 101 has moved to Hall A. Email us if you have back-to-back exam conflicts.\n\nEngineering Office",
    instructions: [
      "Inform the administrator that you have a back-to-back exam conflict.",
      "Provide details on your other scheduled final exam location.",
      "Politely ask if alternate exam session arrangements can be made."
    ]
  }
];

// Helper to construct 50 Medium and 50 Hard Integrated topics
export const MEDIUM_INTEGRATED_TOPICS = EASY_INTEGRATED_TOPICS.map((item) => ({
  title: `${item.title} (Advanced Analysis)`,
  topic: item.topic,
  reading: `${item.reading} Recent academic literature emphasizes the long-term systemic impact and scalability of this approach across different economic regions.`,
  lecture: `${item.lecture} Furthermore, empirical data from controlled university trials reveals hidden structural vulnerabilities and unanticipated secondary costs.`,
  question: `Summarize the points made in the lecture, explaining how they specifically counter the key claims and evidence presented in the reading passage.`
}));

export const HARD_INTEGRATED_TOPICS = EASY_INTEGRATED_TOPICS.map((item) => ({
  title: `${item.title} (Elite Synthesis)`,
  topic: item.topic,
  reading: `${item.reading} Proponents argue that strategic implementation creates compounding efficiency gains and mitigates fundamental environmental risks.`,
  lecture: `${item.lecture} Conversely, field research demonstrates that the theoretical benefits fail to materialize under real-world operational constraints and resource scarcity.`,
  question: `In detail, summarize the professor's main arguments and explain how they systematically undermine the theoretical model advanced in the reading.`
}));

export const EASY_INDEPENDENT_TOPICS = [
  { title: "Working from Home", topic: "Work Life Balance", question: "Do you agree or disagree that working from home is more productive than working in a traditional office environment?" },
  { title: "Living Alone vs with Roommates", topic: "Housing Preference", question: "Do you prefer living alone or sharing an apartment with roommates during your university years?" },
  { title: "Studying Alone vs Group Study", topic: "Academic Habits", question: "Is it better to study for major exams alone or in a study group with classmates?" },
  { title: "Public Transit vs Private Cars", topic: "Urban Transit", question: "Should cities invest more money in expanding public transportation systems rather than building new highways?" },
  { title: "Physical Books vs E-Books", topic: "Reading Habits", question: "Do you prefer reading printed physical books or digital e-books on a tablet device?" },
  { title: "Shopping Online vs In-Store", topic: "Consumer Choices", question: "Is shopping online for clothes and electronics better than buying them at physical retail stores?" },
  { title: "Cashless Society", topic: "Financial Trends", question: "Do you agree or disagree that society should transition towards a completely digital, cashless economy?" },
  { title: "Mandatory School Uniforms", topic: "School Policies", question: "Should all high school students be required to wear standardized school uniforms?" },
  { title: "Gap Year Before College", topic: "Educational Journeys", question: "Is taking a gap year to work or travel before starting university beneficial for young adults?" },
  { title: "Paying Kids for Good Grades", topic: "Parenting Methods", question: "Should parents give children monetary rewards for achieving high grades in school?" },
  { title: "Fast Food Tax", topic: "Public Health", question: "Should governments impose higher taxes on sugary drinks and fast food to encourage healthier eating?" },
  { title: "Electric Vehicles vs Gasoline Cars", topic: "Green Technology", question: "Are electric cars a practical solution to reducing global carbon emissions?" },
  { title: "Arts in School Budget", topic: "School Curricula", question: "Should schools allocate equal funding to art and music classes as they do to science and math?" },
  { title: "4-Day Workweek", topic: "Labor Regulations", question: "Do you support replacing the standard 5-day workweek with a 4-day workweek?" },
  { title: "Banning Plastic Bags", topic: "Environmental Protection", question: "Should governments enact strict laws banning single-use plastic bags in retail stores?" },
  { title: "Traditional Degree vs Trade Certificate", topic: "Career Paths", question: "Is a traditional 4-year college degree still necessary for career success in today's job market?" },
  { title: "Zoos and Conservation", topic: "Animal Ethics", question: "Do wild animal zoos play a positive role in modern animal conservation and public education?" },
  { title: "Smartphone Limits for Kids", topic: "Child Development", question: "Should children under the age of 14 be restricted from owning personal smartphones?" },
  { title: "No Homework in Elementary School", topic: "Educational Policy", question: "Should elementary schools completely eliminate daily homework assignments for young children?" },
  { title: "University Sports Funding", topic: "Campus Allocation", question: "Should universities reduce spending on athletic sports programs to fund academic research?" },
  { title: "Space Exploration Investment", topic: "Scientific Budgets", question: "Is government spending on outer space exploration justified given pressing problems on Earth?" },
  { title: "Organic Food Value", topic: "Nutrition Choices", question: "Is paying higher prices for organic food worth the health benefits compared to regular groceries?" },
  { title: "AI Tools in the Classroom", topic: "Educational Tech", question: "Should students be permitted to use artificial intelligence writing assistants for homework assignments?" },
  { title: "Fast Food Advertising Bans", topic: "Marketing Ethics", question: "Should television commercials for fast food and junk food be prohibited during children's programming?" },
  { title: "Dormitories vs Off-Campus Housing", topic: "University Living", question: "Do you prefer living in university dormitories or renting an off-campus apartment with friends?" },
  { title: "Big City vs Small Town Living", topic: "Lifestyle Preference", question: "Is it better to live and work in a bustling big city or a quiet small town?" },
  { title: "Mandatory Music Lessons", topic: "Youth Development", question: "Should all elementary school students be required to learn a musical instrument?" },
  { title: "Working Alone vs Team Projects", topic: "Workplace Preference", question: "Do you prefer working independently on projects or collaborating in team groups?" },
  { title: "Free Public Wi-Fi", topic: "Urban Infrastructure", question: "Should city governments provide free high-speed public Wi-Fi in all parks and public plazas?" },
  { title: "Artificial Turf vs Natural Grass", topic: "Sports Facilities", question: "Should school sports fields replace natural grass with low-maintenance artificial turf?" },
  { title: "Solar Energy Subsidies", topic: "Energy Incentives", question: "Should governments offer tax rebates to encourage homeowners to install rooftop solar panels?" },
  { title: "Free Museum Admission", topic: "Cultural Policy", question: "Should all national museums and art galleries offer free admission to the public?" },
  { title: "24-Hour University Libraries", topic: "Campus Amenities", question: "Should college libraries remain open 24 hours a day during academic semesters?" },
  { title: "Digital Tipping Screens", topic: "Consumer Experience", question: "Has the expansion of automated digital tipping screens at coffee shops and counters gone too far?" },
  { title: "High-Speed Rail Networks", topic: "Transit Planning", question: "Should governments prioritize building high-speed passenger rail networks over expanding domestic airports?" },
  { title: "Rooftop Farming Mandates", topic: "Sustainable Architecture", question: "Should new commercial buildings be required to install green rooftop gardens or solar panels?" },
  { title: "Coding in Elementary School", topic: "STEM Education", question: "Should computer programming be taught as a core subject in elementary schools alongside math and reading?" },
  { title: "3D Printed Housing", topic: "Construction Trends", question: "Can 3D-printed houses solve affordable housing shortages in growing urban centers?" },
  { title: "Cloud Seeding Weather Control", topic: "Climate Engineering", question: "Should drought-stricken states use chemical cloud seeding to generate artificial rain?" },
  { title: "Strategy Video Games", topic: "Youth Leisure", question: "Do video games help teenagers develop valuable problem-solving and strategic thinking skills?" },
  { title: "Banning E-Bikes on Sidewalks", topic: "Pedestrian Safety", question: "Should electric bicycles and motor scooters be strictly banned from pedestrian sidewalks?" },
  { title: "Standardized Testing for College", topic: "Admissions Criteria", question: "Should standardized exam scores remain a mandatory requirement for university admissions?" },
  { title: "Mandatory Retirement Age", topic: "Employment Law", question: "Should companies enforce mandatory retirement for employees when they reach age 65?" },
  { title: "Space Tourism Restrictions", topic: "Commercial Space", question: "Should private space tourism flights be restricted due to environmental carbon emissions?" },
  { title: "Paper Drinking Straws", topic: "Material Alternatives", question: "Are paper drinking straws an effective alternative to single-use plastic straws?" },
  { title: "Micro-Apartment Housing", topic: "Urban Living", question: "Are tiny micro-apartments an acceptable housing option for young working professionals in expensive cities?" },
  { title: "Seawater Desalination Plants", topic: "Freshwater Infrastructure", question: "Is ocean water desalination the best answer to global freshwater scarcity?" },
  { title: "Paid Sabbaticals for Workers", topic: "Corporate Benefits", question: "Should companies offer employees 3 months of paid sabbatical leave after 5 years of continuous service?" },
  { title: "Car-Free Downtown Districts", topic: "Urban Revitalization", question: "Should major cities permanently ban private automobiles from downtown shopping districts?" },
  { title: "Social Media Communication", topic: "Relationships", question: "Do you agree or disagree that social media has made friendships stronger among young people?" }
];

export const MEDIUM_INDEPENDENT_TOPICS = EASY_INDEPENDENT_TOPICS.map((item) => ({
  title: `${item.title} (Expanded View)`,
  topic: item.topic,
  question: `${item.question} Consider both short-term convenience and long-term consequences in your response.`
}));

export const HARD_INDEPENDENT_TOPICS = EASY_INDEPENDENT_TOPICS.map((item) => ({
  title: `${item.title} (Complex Evaluation)`,
  topic: item.topic,
  question: `${item.question} Address potential counterarguments and provide detailed real-world examples to support your thesis.`
}));

export const EASY_EMAIL_TOPICS_LIST = EASY_EMAIL_TOPICS;

export const MEDIUM_EMAIL_TOPICS = EASY_EMAIL_TOPICS.map((item) => ({
  ...item,
  title: `${item.title} (Medium)`,
  instructions: [
    ...item.instructions,
    "Ensure your tone is appropriately formal and professional throughout.",
    "Acknowledge potential constraints or alternative solutions in your response."
  ]
}));

export const HARD_EMAIL_TOPICS = EASY_EMAIL_TOPICS.map((item) => ({
  ...item,
  title: `${item.title} (Hard)`,
  instructions: [
    ...item.instructions,
    "Use sophisticated business/academic phrasing and smooth cohesive transitions.",
    "Provide a detailed, persuasive rationale addressing all potential objections."
  ]
}));

// All available curated prompts fallback
export const WRITING_PROMPTS: WritingPrompt[] = [];

/**
 * Gets a highly tailored, completely unique writing prompt for any exercise.
 */
export function getWritingPrompt(
  module: number,
  level: 'Easy' | 'Normal' | 'Medium' | 'Hard' | 'Advanced',
  type: 'academic' | 'email' | 'independent' | 'integrated',
  exerciseNumber: number
): WritingPrompt {
  const normLevel: 'Easy' | 'Medium' | 'Hard' = level === 'Normal' ? 'Medium' : level === 'Advanced' ? 'Hard' : (level as 'Easy' | 'Medium' | 'Hard');
  const cycleOffset = (monthlyPracticeEngine.getActiveEdition().cycleSeed - 1) * 5;

  if (type === 'email') {
    let list = EASY_EMAIL_TOPICS;
    if (normLevel === 'Medium') list = MEDIUM_EMAIL_TOPICS;
    if (normLevel === 'Hard') list = HARD_EMAIL_TOPICS;

    const index = (exerciseNumber - 1 + (module - 1) * 7 + cycleOffset) % list.length;
    const metadata = list[index];
    const instructionsText = metadata.instructions.map((inst, i) => `${i + 1}. ${inst}`).join('\n');

    return {
      id: `writing-${module}-${level.toLowerCase()}-email-${exerciseNumber}`,
      module,
      level: normLevel,
      star: exerciseNumber,
      type: 'email',
      title: metadata.title,
      topic: metadata.topic,
      timeLimit: 7,
      suggestedWordCount: "80 - 120 words",
      emailScenario: {
        sender: metadata.sender,
        role: metadata.role,
        subject: metadata.subject,
        body: metadata.body,
        instructions: metadata.instructions
      },
      questionPrompt: `Read the email below from ${metadata.sender} (${metadata.role}). Write an email response addressing all required points.\n\nInstructions:\nIn your response, you should:\n${instructionsText}`
    };
  } else if (type === 'independent') {
    let list = EASY_INDEPENDENT_TOPICS;
    if (normLevel === 'Medium') list = MEDIUM_INDEPENDENT_TOPICS;
    if (normLevel === 'Hard') list = HARD_INDEPENDENT_TOPICS;

    const index = (exerciseNumber - 1 + (module - 1) * 7 + cycleOffset) % list.length;
    const metadata = list[index];
    return {
      id: `writing-${module}-${level.toLowerCase()}-independent-${exerciseNumber}`,
      module,
      level: normLevel,
      star: exerciseNumber,
      type: 'independent',
      title: metadata.title,
      topic: metadata.topic,
      timeLimit: 20,
      suggestedWordCount: "At least 150 words",
      questionPrompt: metadata.question
    };
  } else if (type === 'integrated') {
    let list = EASY_INTEGRATED_TOPICS;
    if (normLevel === 'Medium') list = MEDIUM_INTEGRATED_TOPICS;
    if (normLevel === 'Hard') list = HARD_INTEGRATED_TOPICS;

    const index = (exerciseNumber - 1 + (module - 1) * 7 + cycleOffset) % list.length;
    const metadata = list[index];
    return {
      id: `writing-${module}-${level.toLowerCase()}-integrated-${exerciseNumber}`,
      module,
      level: normLevel,
      star: exerciseNumber,
      type: 'integrated',
      title: metadata.title,
      topic: metadata.topic,
      timeLimit: 20,
      suggestedWordCount: "150 - 225 words",
      readingPassage: metadata.reading,
      lectureTranscript: metadata.lecture,
      questionPrompt: metadata.question
    };
  } else {
    // Academic Discussion
    let list = EASY_ACADEMIC_TOPICS;
    if (normLevel === 'Medium') list = MEDIUM_ACADEMIC_TOPICS;
    if (normLevel === 'Hard') list = HARD_ACADEMIC_TOPICS;

    const index = (exerciseNumber - 1 + (module - 1) * 7 + cycleOffset) % list.length;
    const metadata = list[index];
    return {
      id: `writing-${module}-${level.toLowerCase()}-academic-${exerciseNumber}`,
      module,
      level: normLevel,
      star: exerciseNumber,
      type: 'academic',
      title: metadata.title,
      topic: metadata.topic,
      timeLimit: 10,
      suggestedWordCount: "At least 100 words",
      questionPrompt: `Your professor is teaching a class on ${metadata.topic.toLowerCase()}. Write a post in response to the professor's prompt.\n\nDr. ${'profName' in metadata ? metadata.profName : 'Miller'}: ${metadata.prompt}`,
      studentOpinions: [
        {
          name: metadata.s1Name,
          avatar: metadata.s1Name === 'Sarah' || metadata.s1Name === 'Emma' || metadata.s1Name === 'Grace' || metadata.s1Name === 'Lily' || metadata.s1Name === 'Sophia' || metadata.s1Name === 'Ava' || metadata.s1Name === 'Olivia' || metadata.s1Name === 'Nora' || metadata.s1Name === 'Maya' || metadata.s1Name === 'Zoe' || metadata.s1Name === 'Chloe' || metadata.s1Name === 'Emily' || metadata.s1Name === 'Claire' || metadata.s1Name === 'Hannah' || metadata.s1Name === 'Jessica' || metadata.s1Name === 'Rachel' || metadata.s1Name === 'Elena' || metadata.s1Name === 'Victoria' || metadata.s1Name === 'Samantha' ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120' : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120',
          text: metadata.s1Text
        },
        {
          name: metadata.s2Name,
          avatar: metadata.s2Name === 'John' || metadata.s2Name === 'Marcus' || metadata.s2Name === 'Andrew' || metadata.s2Name === 'William' || metadata.s2Name === 'David' || metadata.s2Name === 'Lucas' || metadata.s2Name === 'Jack' || metadata.s2Name === 'Michael' || metadata.s2Name === 'Daniel' || metadata.s2Name === 'James' || metadata.s2Name === 'Tyler' || metadata.s2Name === 'Brandon' || metadata.s2Name === 'Dr. Vance' || metadata.s2Name === 'Oliver' || metadata.s2Name === 'Gabriel' || metadata.s2Name === 'Liam' || metadata.s2Name === 'Jonathan' ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120' : 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=120',
          text: metadata.s2Text
        }
      ]
    };
  }
}
