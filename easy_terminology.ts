export interface TerminologyQuestion {
  id: number;
  word: string;
  options: string[];
  correct: string;
  sentence: string;
  hint: string;
}

export interface TerminologyExercise {
  title: string;
  questions: TerminologyQuestion[];
}

export const EASY_TERMINOLOGY_M1: TerminologyExercise[] = [
  {
    title: "Workplace Essentials",
    questions: [
      { id: 1, word: "Commute", options: ["Work from home", "Travel to work", "Take a break"], correct: "Travel to work", sentence: "Many people in the city have a long daily **commute** to work.", hint: "The journey between one's home and place of work." },
      { id: 2, word: "Budget", options: ["Financial plan", "Shopping list", "Bank account"], correct: "Financial plan", sentence: "We need to plan our monthly **budget** carefully to save money.", hint: "An estimate of income and expenditure for a set period." },
      { id: 3, word: "Promotion", options: ["Lower pay", "Higher position", "New office"], correct: "Higher position", sentence: "After years of hard work, she finally received a **promotion** to manager.", hint: "Advancement to a higher rank or position." },
      { id: 4, word: "Resignation", options: ["Hiring", "Meeting", "Quitting"], correct: "Quitting", sentence: "The employee handed in his **resignation** to pursue a different career path.", hint: "An act of retiring or giving up a position." },
      { id: 5, word: "Overtime", options: ["Extra hours", "Lunch break", "Holiday"], correct: "Extra hours", sentence: "I had to work three hours of **overtime** to finish the report on time.", hint: "Time worked in addition to one's normal working hours." },
      { id: 6, word: "Salary", options: ["Regular payment", "Tax penalty", "Job application"], correct: "Regular payment", sentence: "She was happy with her monthly **salary** at the new technology firm.", hint: "A fixed regular payment, typically paid on a monthly basis." },
      { id: 7, word: "Resume", options: ["Short story", "Job history document", "Tax form"], correct: "Job history document", sentence: "Please send your updated **resume** along with your application.", hint: "A brief account of a person's education, qualifications, and previous experience." },
      { id: 8, word: "Candidate", options: ["Job applicant", "Company owner", "Interviewer"], correct: "Job applicant", sentence: "The hiring committee interviewed each **candidate** for the assistant role.", hint: "A person who applies for a job or is nominated for an election." },
      { id: 9, word: "Benefit", options: ["Employee perk", "Tax charge", "Extra task"], correct: "Employee perk", sentence: "Health insurance is a key employee **benefit** offered by this company.", hint: "An advantage or profit gained from something; extra perks of employment." },
      { id: 10, word: "Contract", options: ["Verbal promise", "Informal email", "Legal agreement"], correct: "Legal agreement", sentence: "Before starting your new job, you must sign the employment **contract**.", hint: "A written or spoken agreement that is intended to be enforceable by law." }
    ]
  },
  {
    title: "Time Management I",
    questions: [
      { id: 1, word: "Deadline", options: ["Start time", "Finish time", "Break time"], correct: "Finish time", sentence: "The project **deadline** is next Friday, so we must work quickly.", hint: "The latest time or date by which something should be completed." },
      { id: 2, word: "Schedule", options: ["Result", "Meeting", "Timetable"], correct: "Timetable", sentence: "I have a very busy **schedule** this week with many appointments.", hint: "A plan for carrying out a process or procedure; list of times." },
      { id: 3, word: "Prioritize", options: ["Ignore", "Delay", "Rank by importance"], correct: "Rank by importance", sentence: "You should **prioritize** your most urgent tasks every morning.", hint: "Designate or treat something as more important than other things." },
      { id: 4, word: "Procrastinate", options: ["Delay action", "Work fast", "Plan ahead"], correct: "Delay action", sentence: "Try not to **procrastinate** when you have a difficult assignment.", hint: "Delay or postpone action; put off doing something." },
      { id: 5, word: "Efficiency", options: ["Laziness", "Productivity", "Speed"], correct: "Productivity", sentence: "The new software improved the team's **efficiency** significantly.", hint: "The state or quality of being efficient; achieving maximum productivity." },
      { id: 6, word: "Agenda", options: ["Meeting plan", "Financial book", "Employee list"], correct: "Meeting plan", sentence: "The chairperson sent the meeting **agenda** to everyone in advance.", hint: "A list of items to be discussed at a formal meeting." },
      { id: 7, word: "Duration", options: ["Time length", "Start point", "End goal"], correct: "Time length", sentence: "The **duration** of the English lecture was exactly ninety minutes.", hint: "The time during which something continues." },
      { id: 8, word: "Interval", options: ["Finish line", "Continuous work", "Break in time"], correct: "Break in time", sentence: "There was a short **interval** between the two halves of the presentation.", hint: "A space of time between events or states." },
      { id: 9, word: "Chronological", options: ["In time order", "By size order", "By random choice"], correct: "In time order", sentence: "Please list your previous work experience in **chronological** order.", hint: "Starting with the earliest and following the order in which they occurred." },
      { id: 10, word: "Punctual", options: ["On time", "Very late", "Extremely fast"], correct: "On time", sentence: "Students are expected to be **punctual** for all their classes.", hint: "Happening or doing something at the agreed or proper time." }
    ]
  },
  {
    title: "Professional Relationships",
    questions: [
      { id: 1, word: "Colleague", options: ["Co-worker", "Boss", "Client"], correct: "Co-worker", sentence: "I'm going to lunch with a **colleague** from the marketing department.", hint: "A person with whom one works in a profession or business." },
      { id: 2, word: "Feedback", options: ["Food", "Noise", "Evaluation"], correct: "Evaluation", sentence: "The manager gave me positive **feedback** on my presentation.", hint: "Information about reactions to a product or a person's performance." },
      { id: 3, word: "Mentor", options: ["Experienced advisor", "New employee", "Competitor"], correct: "Experienced advisor", sentence: "My **mentor** provided valuable guidance during my first year at the company.", hint: "An experienced and trusted adviser." },
      { id: 4, word: "Networking", options: ["Making connections", "Fixing computers", "Watching TV"], correct: "Making connections", sentence: "Professional **networking** events are great for finding new opportunities.", hint: "The action or process of interacting with others to exchange information." },
      { id: 5, word: "Conflict", options: ["Disagreement", "Agreement", "Meeting"], correct: "Disagreement", sentence: "The team had a small **conflict** regarding the project's direction.", hint: "A serious disagreement or argument." },
      { id: 6, word: "Collaboration", options: ["Working alone", "Working together", "Quitting"], correct: "Working together", sentence: "The successful product was a result of **collaboration** between two design teams.", hint: "The action of working with someone to produce or create something." },
      { id: 7, word: "Supervisor", options: ["Boss or manager", "Temporary worker", "Office client"], correct: "Boss or manager", sentence: "You must report any technical problems directly to your **supervisor**.", hint: "A person who supervises a person or an activity; director." },
      { id: 8, word: "Client", options: ["Manager", "Competitor", "Customer"], correct: "Customer", sentence: "The law firm received an email from an important corporate **client**.", hint: "A person or organization using the services of a professional person or organization." },
      { id: 9, word: "Leadership", options: ["Guidance ability", "Physical strength", "Loud voice"], correct: "Guidance ability", sentence: "Her strong **leadership** skills helped guide the startup through tough times.", hint: "The action of leading a group of people or an organization." },
      { id: 10, word: "Teamwork", options: ["Individual task", "Joint effort", "Competitive game"], correct: "Joint effort", sentence: "Excellent **teamwork** allowed the staff to complete the audit ahead of time.", hint: "The combined action of a group of people, especially when effective and efficient." }
    ]
  },
  {
    title: "Environmental Science I",
    questions: [
      { id: 1, word: "Sustainable", options: ["Eco-friendly", "Expensive", "Temporary"], correct: "Eco-friendly", sentence: "Using solar energy is a more **sustainable** way to power our homes.", hint: "Able to be maintained at a certain rate or level; conserving ecological balance." },
      { id: 2, word: "Innovation", options: ["New idea", "Old tradition", "Mistake"], correct: "New idea", sentence: "The company is known for its constant **innovation** in technology.", hint: "A new method, idea, product, etc." },
      { id: 3, word: "Renewable", options: ["Infinite supply", "Limited supply", "Broken"], correct: "Infinite supply", sentence: "Wind and sun are **renewable** sources of energy.", hint: "Not depleted when used." },
      { id: 4, word: "Conservation", options: ["Protection", "Destruction", "Usage"], correct: "Protection", sentence: "**Conservation** of water is essential during the dry summer months.", hint: "Prevention of wasteful use of a resource." },
      { id: 5, word: "Ecosystem", options: ["Biological community", "Weather pattern", "Building"], correct: "Biological community", sentence: "Pollution can damage the delicate **ecosystem** of the lake.", hint: "A biological community of interacting organisms and their physical environment." },
      { id: 6, word: "Climate", options: ["Daily weather", "Weather pattern", "Storm"], correct: "Weather pattern", sentence: "Scientists study how human activity affects the global **climate**.", hint: "The weather conditions prevailing in an area in general or over a long period." },
      { id: 7, word: "Species", options: ["Group of organisms", "Single cell", "Chemical element"], correct: "Group of organisms", sentence: "The biologist discovered a new **species** of colorful beetle in the jungle.", hint: "A group of living organisms consisting of similar individuals capable of exchanging genes." },
      { id: 8, word: "Habitat", options: ["Natural home", "Animal cage", "Eating habit"], correct: "Natural home", sentence: "Cutting down forests destroys the natural **habitat** of many birds.", hint: "The natural home or environment of an animal, plant, or other organism." },
      { id: 9, word: "Pollution", options: ["Clean air", "Harmful waste", "Ecosystem balance"], correct: "Harmful waste", sentence: "Industrial **pollution** has negatively affected the city's air quality.", hint: "The presence in or introduction into the environment of a substance or thing that has harmful effects." },
      { id: 10, word: "Recycle", options: ["Throw away", "Reuse materials", "Burn fuel"], correct: "Reuse materials", sentence: "We should **recycle** plastic bottles and paper to protect the environment.", hint: "Convert waste into reusable material." }
    ]
  },
  {
    title: "Academic Life I",
    questions: [
      { id: 1, word: "Assignment", options: ["Homework task", "Holiday trip", "Teacher's exam"], correct: "Homework task", sentence: "The history professor gave us a weekly writing **assignment**.", hint: "A task or piece of work assigned to someone as part of a course." },
      { id: 2, word: "Lecture", options: ["Class discussion", "Group project", "Teacher's talk"], correct: "Teacher's talk", sentence: "I took detailed notes during the chemistry **lecture** this morning.", hint: "An educational talk to an audience, especially to students in a university." },
      { id: 3, word: "Textbook", options: ["Course book", "Notebook", "Novel"], correct: "Course book", sentence: "You can purchase the required biology **textbook** at the school bookstore.", hint: "A book used as a standard work for the study of a particular subject." },
      { id: 4, word: "Campus", options: ["School grounds", "Town center", "City park"], correct: "School grounds", sentence: "Our university has a beautiful green **campus** with historic buildings.", hint: "The grounds and buildings of a university or college." },
      { id: 5, word: "Tuition", options: ["Living expenses", "Education fee", "Book cost"], correct: "Education fee", sentence: "Many students apply for scholarships to help pay their college **tuition**.", hint: "A sum of money charged for teaching or instruction by a school, college, or university." },
      { id: 6, word: "Faculty", options: ["Students", "Teaching staff", "Classrooms"], correct: "Teaching staff", sentence: "The university **faculty** voted to introduce a new computer science course.", hint: "The teaching staff of a university or college." },
      { id: 7, word: "Degree", options: ["Diploma or qualification", "Class schedule", "School loan"], correct: "Diploma or qualification", sentence: "He earned a master's **degree** in mechanical engineering last year.", hint: "An academic rank or title conferred by a college or university." },
      { id: 8, word: "Semester", options: ["School term", "Summer break", "Exam week"], correct: "School term", sentence: "We are taking five courses during the spring **semester**.", hint: "A half-year term in a school or college, typically lasting fifteen to eighteen weeks." },
      { id: 9, word: "Syllabus", options: ["Course plan", "Graduation ceremony", "Student card"], correct: "Course plan", sentence: "The professor handed out the **syllabus** on the first day of class.", hint: "An outline of the subjects in a course of study or teaching." },
      { id: 10, word: "Register", options: ["Drop a class", "Fail an exam", "Sign up"], correct: "Sign up", sentence: "Students must **register** for elective classes before the end of the week.", hint: "Enter or record on an official list or directory; sign up for a course." }
    ]
  },
  {
    title: "Shopping & Commerce Essentials",
    questions: [
      { id: 1, word: "Discount", options: ["Full price", "Service fee", "Price reduction"], correct: "Price reduction", sentence: "Students are eligible for a 10% **discount** on all books.", hint: "A deduction from the usual cost of something." },
      { id: 2, word: "Itinerary", options: ["Passport", "Travel plan", "Suitcase"], correct: "Travel plan", sentence: "The travel agent provided a detailed **itinerary** for our trip to Japan.", hint: "A planned route or journey." },
      { id: 3, word: "Refund", options: ["Money back", "Store credit", "Extra charge"], correct: "Money back", sentence: "If the product is faulty, you can return it for a full **refund**.", hint: "A repayment of a sum of money." },
      { id: 4, word: "Receipt", options: ["Shopping bag", "Proof of purchase", "Price tag"], correct: "Proof of purchase", sentence: "Please keep your **receipt** in case you need to exchange the shirt.", hint: "A written statement confirming that money or goods have been received." },
      { id: 5, word: "Destination", options: ["Starting point", "Travel end point", "Tour guide"], correct: "Travel end point", sentence: "After twelve hours of driving, we finally reached our holiday **destination**.", hint: "The place to which someone or something is going or being sent." },
      { id: 6, word: "Luggage", options: ["Souvenirs", "Passports", "Suitcases"], correct: "Suitcases", sentence: "The airline lost my **luggage** during my flight to London.", hint: "Suitcases or bags containing personal belongings packed for travel." },
      { id: 7, word: "Passenger", options: ["Driver", "Traveler", "Customs officer"], correct: "Traveler", sentence: "Every **passenger** on the train must purchase a valid ticket.", hint: "A traveler on a public or private conveyance other than the driver, pilot, or crew." },
      { id: 8, word: "Flight", options: ["Train ride", "Air journey", "Boat tour"], correct: "Air journey", sentence: "Our **flight** to Paris was delayed by three hours due to bad weather.", hint: "A journey made through the air, typically by an airplane." },
      { id: 9, word: "Transit", options: ["Staying at a hotel", "Passing through", "Leaving the country"], correct: "Passing through", sentence: "We had a five-hour layover in Singapore while in **transit** to Sydney.", hint: "The carrying of people or things from one place to another; passing through." },
      { id: 10, word: "Departure", options: ["Arriving", "Leaving", "Booking"], correct: "Leaving", sentence: "Passengers should check the screen for their scheduled **departure** times.", hint: "The action of leaving, especially to start a journey." }
    ]
  },
  {
    title: "Health & Daily Life I",
    questions: [
      { id: 1, word: "Nutrition", options: ["Regular sleep", "Fast food", "Healthy eating"], correct: "Healthy eating", sentence: "Good **nutrition** is essential for maintaining physical health.", hint: "The process of providing or obtaining the food necessary for health and growth." },
      { id: 2, word: "Routine", options: ["Regular habit", "Surprise event", "One-time action"], correct: "Regular habit", sentence: "I have a morning **routine** that includes yoga and meditation.", hint: "A sequence of actions regularly followed." },
      { id: 3, word: "Appointment", options: ["Random encounter", "Holiday", "Scheduled meeting"], correct: "Scheduled meeting", sentence: "I have a dentist **appointment** tomorrow at 10:00 AM.", hint: "An arrangement to meet someone at a particular time and place." },
      { id: 4, word: "Exercise", options: ["Physical activity", "Watching television", "Sleeping"], correct: "Physical activity", sentence: "Doctors recommend daily **exercise** to keep your heart healthy.", hint: "Activity requiring physical effort, carried out to sustain or improve health." },
      { id: 5, word: "Stress", options: ["Mental tension", "Happiness", "Sleepiness"], correct: "Mental tension", sentence: "Deep breathing exercises can help reduce your daily **stress**.", hint: "A state of mental or emotional strain or tension resulting from adverse circumstances." },
      { id: 6, word: "Therapy", options: ["Surgical operation", "Treatment", "Medical test"], correct: "Treatment", sentence: "Physical **therapy** helped her recover from her knee injury.", hint: "Treatment intended to relieve or heal a disorder." },
      { id: 7, word: "Symptom", options: ["Sign of illness", "Cure for disease", "Medical doctor"], correct: "Sign of illness", sentence: "A high fever is a common **symptom** of the flu.", hint: "A physical or mental feature which is regarded as indicating a condition of disease." },
      { id: 8, word: "Vaccine", options: ["Fever medicine", "Immunity medicine", "Vitamin tablet"], correct: "Immunity medicine", sentence: "The new **vaccine** offers protection against several common viruses.", hint: "A substance used to stimulate the production of antibodies and provide immunity." },
      { id: 9, word: "Hydration", options: ["Eating fiber", "Sleeping well", "Drinking water"], correct: "Drinking water", sentence: "Proper **hydration** is vital when running a marathon.", hint: "The process of causing something to absorb water; drinking enough water." },
      { id: 10, word: "Hygiene", options: ["Regular workouts", "Cleanliness habits", "Healthy diet"], correct: "Cleanliness habits", sentence: "Washing your hands frequently is an important part of personal **hygiene**.", hint: "Conditions or practices conducive to maintaining health and preventing disease, especially through cleanliness." }
    ]
  },
  {
    title: "Basic Technology Vocabulary",
    questions: [
      { id: 1, word: "Hardware", options: ["Computer programs", "Physical components", "Internet connection"], correct: "Physical components", sentence: "The computer's **hardware** includes the monitor, keyboard, and CPU.", hint: "The physical parts of a computer system." },
      { id: 2, word: "Software", options: ["Physical parts", "Computer repair", "Programs and data"], correct: "Programs and data", sentence: "You need to update your **software** to fix the security bugs.", hint: "The programs and other operating information used by a computer." },
      { id: 3, word: "Database", options: ["A type of computer", "Structured data collection", "A computer virus"], correct: "Structured data collection", sentence: "The company stores all customer information in a secure **database**.", hint: "A structured set of data held in a computer." },
      { id: 4, word: "Browser", options: ["Writing software", "Web surf tool", "Operating system"], correct: "Web surf tool", sentence: "I opened my internet **browser** to search for academic articles.", hint: "A program with a graphical user interface for displaying HTML files, used to navigate the World Wide Web." },
      { id: 5, word: "Network", options: ["Connected computers", "Single hardware unit", "Software program"], correct: "Connected computers", sentence: "All computers in the university library are connected to the same **network**.", hint: "A group of two or more computer systems linked together." },
      { id: 6, word: "Password", options: ["Public username", "Security code", "Email address"], correct: "Security code", sentence: "You must create a strong **password** to keep your account safe.", hint: "A secret word or phrase that must be used to gain admission to something." },
      { id: 7, word: "Server", options: ["Main computer", "User terminal", "Printers"], correct: "Main computer", sentence: "The office **server** is down, so we cannot access our shared files.", hint: "A computer or computer program which manages access to a centralized resource or service in a network." },
      { id: 8, word: "Interface", options: ["Internal wiring", "Display connection", "Computer mouse"], correct: "Display connection", sentence: "The website has a very simple and user-friendly **interface**.", hint: "A point where two systems, subjects, organizations, etc., meet and interact; visual layout." },
      { id: 9, word: "Download", options: ["Send to internet", "Delete files", "Get from internet"], correct: "Get from internet", sentence: "You can **download** the lecture notes directly from the student portal.", hint: "Copy data from one computer system to another, typically over the Internet." },
      { id: 10, word: "Upload", options: ["Send to internet", "Get from internet", "Turn off computer"], correct: "Send to internet", sentence: "The student will **upload** her essay submission tonight.", hint: "Transfer data from one computer to another, typically to a larger or central system." }
    ]
  },
  {
    title: "Arts & Public Culture",
    questions: [
      { id: 1, word: "Exhibit", options: ["Public display", "Art salesroom", "Concert hall"], correct: "Public display", sentence: "The dinosaur fossil **exhibit** at the museum is very popular.", hint: "An object or a collection of objects on public show in an art gallery or museum." },
      { id: 2, word: "Gallery", options: ["Art room", "Art auction", "Art paintbrush"], correct: "Art room", sentence: "They visited a modern art **gallery** in downtown New York.", hint: "A room or building for the display or sale of works of art." },
      { id: 3, word: "Performance", options: ["Writing a book", "Audience applause", "Show or act"], correct: "Show or act", sentence: "The actors gave a wonderful **performance** on the opening night of the play.", hint: "An act of staging or presenting a play, concert, or other form of entertainment." },
      { id: 4, word: "Instrument", options: ["Artist pencil", "Musical device", "Scientific lab"], correct: "Musical device", sentence: "The violin is a beautiful but difficult string **instrument** to learn.", hint: "An object or device for producing musical sounds." },
      { id: 5, word: "Review", options: ["Evaluation writeup", "Ticket booking", "Art framework"], correct: "Evaluation writeup", sentence: "The movie received a highly positive **review** in the local newspaper.", hint: "A formal assessment or examination of something with a possibility or intention of instituting change if necessary." },
      { id: 6, word: "Portrait", options: ["Face painting", "Scenery photo", "Abstract pattern"], correct: "Face painting", sentence: "The artist painted a detailed **portrait** of the famous professor.", hint: "A painting, drawing, photograph, or engraving of a person, especially one depicting only the face or head and shoulders." },
      { id: 7, word: "Audience", options: ["Actors on stage", "Stage decorations", "Spectators"], correct: "Spectators", sentence: "The **audience** cheered loudly at the end of the musical performance.", hint: "The assembled spectators or listeners at a public event such as a play, film, concert, or meeting." },
      { id: 8, word: "Genre", options: ["Creative process", "Style or category", "Classic book"], correct: "Style or category", sentence: "Science fiction is my absolute favorite **genre** of literature.", hint: "A category of artistic composition, as in music or literature, characterized by similarities in form, style, or subject matter." },
      { id: 9, word: "Classic", options: ["Modern release", "High quality standard", "Cheap copy"], correct: "High quality standard", sentence: "To Kill a Mockingbird is considered a **classic** of American literature.", hint: "Judged over a period of time to be of the highest quality and outstanding of its kind." },
      { id: 10, word: "Festival", options: ["Private party", "School exam", "Public celebration"], correct: "Public celebration", sentence: "The city hosts a popular jazz music **festival** every summer.", hint: "A day or period of celebration, typically a religious one or an organized series of cultural events." }
    ]
  },
  {
    title: "Food & Dining",
    questions: [
      { id: 1, word: "Recipe", options: ["Cooking instructions", "Shopping bag", "Restaurant menu"], correct: "Cooking instructions", sentence: "My grandmother shared her secret **recipe** for apple pie.", hint: "A set of instructions for preparing a particular dish, including a list of the ingredients required." },
      { id: 2, word: "Cuisine", options: ["Cooking stove", "Chef's uniform", "Cooking style"], correct: "Cooking style", sentence: "They love Italian **cuisine**, especially fresh pasta and pizza.", hint: "A style or method of cooking, especially as characteristic of a particular country, region, or establishment." },
      { id: 3, word: "Reservation", options: ["Bill payment", "Booked table", "Food ordering"], correct: "Booked table", sentence: "We made a dinner **reservation** at the restaurant for 7:00 PM.", hint: "An arrangement, secure seat, or table kept in advance." },
      { id: 4, word: "Ingredient", options: ["Kitchen appliance", "Food component", "Dining table"], correct: "Food component", sentence: "Fresh basil is a key **ingredient** in tomato soup.", hint: "Any of the foods or substances that are combined to make a particular dish." },
      { id: 5, word: "Flavor", options: ["Food texture", "Taste quality", "Food color"], correct: "Taste quality", sentence: "The ice cream has a strong vanilla **flavor**.", hint: "The distinctive taste of a food or drink." },
      { id: 6, word: "Beverage", options: ["Dessert", "Hot soup", "Drink"], correct: "Drink", sentence: "Coffee is a very popular morning **beverage** worldwide.", hint: "A drink other than water." },
      { id: 7, word: "Buffet", options: ["Self-service meal", "Fast food drive", "Formal dining"], correct: "Self-service meal", sentence: "The hotel serves a delicious breakfast **buffet** with many options.", hint: "A meal consisting of several dishes from which guests serve themselves." },
      { id: 8, word: "Banquet", options: ["Quick snack", "Large feast", "Kitchen pantry"], correct: "Large feast", sentence: "The king hosted a grand **banquet** for all the visiting leaders.", hint: "An elaborate and formal evening meal for many people." },
      { id: 9, word: "Organic", options: ["Chemical processed", "Naturally grown", "Frozen food"], correct: "Naturally grown", sentence: "The supermarket sells organic **organic** vegetables grown without pesticides.", hint: "Produced or involving production without the use of chemical fertilizers, pesticides, or other artificial agents." },
      { id: 10, word: "Dairy", options: ["Meat products", "Fruit crops", "Milk products"], correct: "Milk products", sentence: "Cheese, butter, and yogurt are common **dairy** products.", hint: "Containing or made from milk." }
    ]
  },
  {
    title: "Academic Life II",
    questions: [
      { id: 1, word: "Research", options: ["Detailed study", "Guessing game", "Class discussion"], correct: "Detailed study", sentence: "The scholars spent months conducting **research** on climate change.", hint: "The systematic investigation into and study of materials and sources in order to establish facts." },
      { id: 2, word: "Hypothesis", options: ["Proven fact", "Proposed explanation", "Final conclusion"], correct: "Proposed explanation", sentence: "The scientist formulated a **hypothesis** to explain the strange observations.", hint: "A supposition or proposed explanation made on the basis of limited evidence." },
      { id: 3, word: "Analyze", options: ["Ignore completely", "Erase data", "Examine in detail"], correct: "Examine in detail", sentence: "We must **analyze** the survey results to find key trends.", hint: "Examine methodically and in detail the constitution or structure of something." },
      { id: 4, word: "Source", options: ["Origin of info", "Book printing press", "Student desk"], correct: "Origin of info", sentence: "Always cite the original **source** of information in your essays.", hint: "A place, person, or document from which something obtains or originates." },
      { id: 5, word: "Citation", options: ["Spelling mistake", "Source reference", "Class grade"], correct: "Source reference", sentence: "Your paper must include a proper **citation** for every quoted text.", hint: "A quotation from or reference to a book, paper, or author, especially in a scholarly work." },
      { id: 6, word: "Plagiarism", options: ["Writing essays", "Quoting sources", "Copying work"], correct: "Copying work", sentence: "The school has a strict policy against academic **plagiarism**.", hint: "The practice of taking someone else's work or ideas and passing them off as one's own." },
      { id: 7, word: "Theory", options: ["System of ideas", "Unproven rumor", "Simple fact"], correct: "System of ideas", sentence: "We studied Darwin's **theory** of evolution in our biology class.", hint: "A supposition or a system of ideas intended to explain something." },
      { id: 8, word: "Seminar", options: ["Sports game", "Discussion class", "Graduation day"], correct: "Discussion class", sentence: "The graduate **seminar** focused on advanced environmental policies.", hint: "A conference or other meeting on a particular subject for discussion or training." },
      { id: 9, word: "Thesis", options: ["Main argument", "Course textbook", "School library"], correct: "Main argument", sentence: "The student presented a strong **thesis** statement in the introduction.", hint: "A statement or theory that is put forward as a premise to be maintained or proved." },
      { id: 10, word: "Scholar", options: ["Learned person", "Classroom teacher", "First-year student"], correct: "Learned person", sentence: "She is a respected **scholar** of medieval history.", hint: "A specialist in a particular branch of study, especially the humanities; highly educated person." }
    ]
  },
  {
    title: "Workplace Vocabulary II",
    questions: [
      { id: 1, word: "Pension", options: ["Retirement fund", "Health insurance", "Monthly salary"], correct: "Retirement fund", sentence: "Employees can contribute to a corporate **pension** plan for their future.", hint: "A regular payment made during a person's retirement from an investment fund." },
      { id: 2, word: "Vacation", options: ["Work assignment", "Holiday break", "Business trip"], correct: "Holiday break", sentence: "I am taking a two-week **vacation** to relax on the beach.", hint: "An extended period of recreation, especially one spent away from home or in traveling." },
      { id: 3, word: "Interview", options: ["Staff meeting", "Product lunch", "Question meeting"], correct: "Question meeting", sentence: "The candidate has a second **interview** with the department manager.", hint: "A formal meeting in which one or more persons question, consult, or evaluate another person." },
      { id: 4, word: "Career", options: ["Daily chore", "Life profession", "Weekend hobby"], correct: "Life profession", sentence: "She is planning a **career** in software engineering after graduation.", hint: "An occupation undertaken for a significant period of a person's life and with opportunities for progress." },
      { id: 5, word: "Strategy", options: ["Plan of action", "Financial ledger", "Random decision"], correct: "Plan of action", sentence: "The board approved a new marketing **strategy** to increase sales.", hint: "A plan of action or policy designed to achieve a major or overall aim." },
      { id: 6, word: "Proposal", options: ["Financial report", "Suggested plan", "Employment contract"], correct: "Suggested plan", sentence: "We submitted a research **proposal** to request funding from the university.", hint: "A plan or suggestion, especially a formal or written one, put forward for consideration." },
      { id: 7, word: "Marketing", options: ["Office printing", "Buying supplies", "Product promotion"], correct: "Product promotion", sentence: "The **marketing** department launched a new social media campaign.", hint: "The action or business of promoting and selling products or services, including market research and advertising." },
      { id: 8, word: "Department", options: ["Organization sector", "Office building", "Staff dining room"], correct: "Organization sector", sentence: "Please send the invoice to the accounting **department**.", hint: "A division of a large organization such as a government, university, or business." },
      { id: 9, word: "Objective", options: ["Company opinion", "Personal doubt", "Business goal"], correct: "Business goal", sentence: "Our primary **objective** is to complete the project on time and within budget.", hint: "A thing aimed at or sought; a goal." },
      { id: 10, word: "Employee", options: ["Company owner", "Office manager", "Hired worker"], correct: "Hired worker", sentence: "Every **employee** is expected to attend the annual safety training.", hint: "A person employed for wages or salary, especially at non-executive level." }
    ]
  },
  {
    title: "Daily Finance & Living",
    questions: [
      { id: 1, word: "Utility", options: ["Mortgage loan", "Public service", "Bank account"], correct: "Public service", sentence: "Electric power, water, and gas are basic **utility** bills we pay monthly.", hint: "An organization supplying the community with electricity, gas, water, or sewerage." },
      { id: 2, word: "Mortgage", options: ["House loan", "Credit card", "Car insurance"], correct: "House loan", sentence: "They took out a thirty-year **mortgage** to buy their first house.", hint: "A legal agreement by which a bank lends money at interest in exchange for taking title of the debtor's property." },
      { id: 3, word: "Insurance", options: ["Protection plan", "Shopping list", "Bank deposit"], correct: "Protection plan", sentence: "Our car **insurance** policy covers any damage from road accidents.", hint: "A practice or arrangement by which a company provides a guarantee of compensation for specified loss." },
      { id: 4, word: "Expense", options: ["Money saved", "Money spent", "Money earned"], correct: "Money spent", sentence: "Travel was a major **expense** during our summer vacation.", hint: "The cost required for something; the money spent on something." },
      { id: 5, word: "Deposit", options: ["Take money out", "Spend money", "Put money in"], correct: "Put money in", sentence: "I went to the bank to **deposit** my paycheck into my savings account.", hint: "A sum of money kept in a bank account, usually to gain interest." },
      { id: 6, word: "Interest", options: ["Extra charge or profit", "Bank fee", "Monthly rent"], correct: "Extra charge or profit", sentence: "The bank savings account pays 3% annual **interest**.", hint: "Money paid regularly at a particular rate for the use of money lent, or for delaying the repayment of a debt." },
      { id: 7, word: "Income", options: ["Money spent", "Money earned", "Tax paid"], correct: "Money earned", sentence: "Her annual **income** increased after her recent job promotion.", hint: "Money received, especially on a regular basis, for work or through investments." },
      { id: 8, word: "Asset", options: ["Valuable possession", "Financial debt", "Business tax"], correct: "Valuable possession", sentence: "Real estate is a highly valuable **asset** to own.", hint: "A useful or valuable quality, person, or thing; property owned by a person." },
      { id: 9, word: "Debt", options: ["Bank savings", "Money owed", "Tax refund"], correct: "Money owed", sentence: "He is working hard to pay off his credit card **debt**.", hint: "Something, typically money, that is owed or due." },
      { id: 10, word: "Bargain", options: ["Expensive luxury", "Cheap item purchase", "Faulty product"], correct: "Cheap item purchase", sentence: "This high-quality laptop was a real **bargain** at the sale.", hint: "An agreement between two or more parties settling what each shall give and take; a thing bought or offered for sale more cheaply than is usual." }
    ]
  },
  {
    title: "Community & Urban Spaces",
    questions: [
      { id: 1, word: "Suburb", options: ["Residential area", "City center", "Farming village"], correct: "Residential area", sentence: "They moved to a quiet **suburb** outside of Boston to raise their family.", hint: "An outlying district of a city, especially a residential one." },
      { id: 2, word: "Commuter", options: ["Daily traveler", "Transit driver", "City tourist"], correct: "Daily traveler", sentence: "The morning train was packed with **commuter** passengers going to work.", hint: "A person who travels some distance to work on a regular basis." },
      { id: 3, word: "Transit", options: ["Public transport", "Staying at home", "Holiday resort"], correct: "Public transport", sentence: "The city's mass **transit** system includes buses and subways.", hint: "The carrying of people or things from one place to another." },
      { id: 4, word: "Infrastructure", options: ["Office computers", "Public structures", "School rules"], correct: "Public structures", sentence: "The government allocated funds to repair the city's aging **infrastructure**.", hint: "The basic physical and organizational structures and facilities needed for the operation of a society." },
      { id: 5, word: "Mayor", options: ["Police chief", "National president", "City leader"], correct: "City leader", sentence: "The newly elected **mayor** promised to improve the public parks.", hint: "The elected head of a city, town, or other municipality." },
      { id: 6, word: "Citizen", options: ["Foreign tourist", "City resident", "Police officer"], correct: "City resident", sentence: "Every **citizen** has the right to vote in local municipal elections.", hint: "A legally recognized subject or national of a state or commonwealth." },
      { id: 7, word: "District", options: ["Defined area", "National border", "Public highway"], correct: "Defined area", sentence: "The historic **district** of the city is famous for its cobblestone streets.", hint: "An area of a country or city, especially one characterized by a particular feature or activity." },
      { id: 8, word: "Neighborhood", options: ["School campus", "Local community", "Shopping mall"], correct: "Local community", sentence: "Our **neighborhood** is very friendly, and we know all our neighbors.", hint: "A district, especially one considered in physical as well as social terms; community of neighbors." },
      { id: 9, word: "Pedestrian", options: ["Car driver", "Bicycle rider", "Walker"], correct: "Walker", sentence: "The driver stopped at the crosswalk to let the **pedestrian** cross safely.", hint: "A person walking along a road or in a developed area." },
      { id: 10, word: "Congestion", options: ["Traffic jam", "Empty streets", "Fast transit"], correct: "Traffic jam", sentence: "Heavy traffic **congestion** delayed our commute by thirty minutes.", hint: "The state of being congested or overcrowded; traffic block." }
    ]
  },
  {
    title: "Geographical Concepts",
    questions: [
      { id: 1, word: "Atmosphere", options: ["Underground cave", "Air layer", "Ocean floor"], correct: "Air layer", sentence: "Earth's **atmosphere** protects us from harmful ultraviolet solar rays.", hint: "The envelope of gases surrounding the earth or another planet." },
      { id: 2, word: "Fossil", options: ["Ancient remains", "Living plant", "Modern plastic"], correct: "Ancient remains", sentence: "The paleontologist discovered a leaf **fossil** embedded in the limestone.", hint: "The remains or impression of a prehistoric organism preserved in petrified form." },
      { id: 3, word: "Predator", options: ["Hunting animal", "Hunted animal", "Plant-eating insect"], correct: "Hunting animal", sentence: "The lion is a fierce **predator** that hunts zebras in the savanna.", hint: "An animal that naturally preys on others." },
      { id: 4, word: "Prey", options: ["Hunting predator", "Hunted animal", "Domestic pet"], correct: "Hunted animal", sentence: "Mice are common **prey** for owls and other birds of prey.", hint: "An animal that is hunted and killed by another for food." },
      { id: 5, word: "Glacier", options: ["Sand dune", "Water waterfall", "Ice mass"], correct: "Ice mass", sentence: "As temperatures rise globally, many polar **glacier** formations are melting.", hint: "A slowly moving mass or river of ice formed by the accumulation and compaction of snow." },
      { id: 6, word: "Erosion", options: ["Earthquake", "Wearing away of land", "Volcanic eruption"], correct: "Wearing away of land", sentence: "Wind and water caused severe **erosion** of the coastal cliffs over time.", hint: "The gradual destruction or diminution of something by wind, water, or other natural agents." },
      { id: 7, word: "Volcano", options: ["Glacial mountain", "Lava mountain", "Deep lake"], correct: "Lava mountain", sentence: "The active **volcano** erupted, sending ash columns high into the air.", hint: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are erupted." },
      { id: 8, word: "Equator", options: ["North pole", "South pole", "Middle line of Earth"], correct: "Middle line of Earth", sentence: "Countries near the **equator** typically experience warm tropical climates year-round.", hint: "An imaginary line drawn around the earth equally distant from both poles." },
      { id: 9, word: "Desert", options: ["Rainforest", "Dry land", "Frozen tundra"], correct: "Dry land", sentence: "The Sahara is the largest hot **desert** in the world.", hint: "An arid area of land with extremely low rainfall, typically sparse vegetation." },
      { id: 10, word: "Forest", options: ["Grassland", "Tree area", "Ocean coast"], correct: "Tree area", sentence: "We went hiking in a dense pine **forest** during our weekend trip.", hint: "A large area covered chiefly with trees and undergrowth." }
    ]
  },
  {
    title: "Basic Business Concepts",
    questions: [
      { id: 1, word: "Profit", options: ["Financial loss", "Financial gain", "Company tax"], correct: "Financial gain", sentence: "The business made a substantial **profit** in its first fiscal year.", hint: "A financial gain, especially the difference between the amount earned and the amount spent." },
      { id: 2, word: "Loss", options: ["Financial gain", "Sales revenue", "Financial deficit"], correct: "Financial deficit", sentence: "The startup reported a net **loss** of ten thousand dollars last quarter.", hint: "An amount of money lost by a business or organization." },
      { id: 3, word: "Retail", options: ["Sale to public", "Sale in bulk", "Online delivery"], correct: "Sale to public", sentence: "This shop sells clothes at **retail** prices directly to consumers.", hint: "The sale of goods to the public in relatively small quantities for use or consumption." },
      { id: 4, word: "Wholesale", options: ["Sale to public", "Sale in bulk", "Product exchange"], correct: "Sale in bulk", sentence: "They buy goods at **wholesale** rates and resell them in their small store.", hint: "The selling of goods in large quantities to be retailed by others." },
      { id: 5, word: "Brand", options: ["Product identity", "Company office", "Retail worker"], correct: "Product identity", sentence: "The logo helps consumers easily recognize the corporate **brand**.", hint: "A type of product manufactured by a particular company under a particular name." },
      { id: 6, word: "Target", options: ["Aimed group", "Competitor company", "Office lobby"], correct: "Aimed group", sentence: "The advertisement is designed to reach our **target** audience of young adults.", hint: "A person, object, or group selected as the focus of attention." },
      { id: 7, word: "Supply", options: ["Desire for goods", "Corporate office", "Available goods"], correct: "Available goods", sentence: "An increase in product **supply** led to lower market prices.", hint: "Make something needed or wanted available to someone; amount available." },
      { id: 8, word: "Demand", options: ["Desire for goods", "Price discount", "Available goods"], correct: "Desire for goods", sentence: "There is a very high consumer **demand** for electric cars.", hint: "An insistent and peremptory request, made as of right; desire of purchasers." },
      { id: 9, word: "Consumer", options: ["Retail seller", "Buyer", "Wholesale vendor"], correct: "Buyer", sentence: "The new consumer protection law safeguards the rights of every **consumer**.", hint: "A person who purchases goods and services for personal use." },
      { id: 10, word: "Merchant", options: ["Store buyer", "Shop owner", "Office client"], correct: "Shop owner", sentence: "The local **merchant** sold imported silk fabrics at the village market.", hint: "A person or company involved in wholesale trade, especially one dealing with foreign countries or supplying goods to a particular trade." }
    ]
  },
  {
    title: "Basic Science Principles",
    questions: [
      { id: 1, word: "Gravity", options: ["Magnetic force", "Friction resistance", "Pull force"], correct: "Pull force", sentence: "The force of **gravity** causes apples to fall from trees to the ground.", hint: "The force that attracts a body toward the center of the earth, or toward any other physical body having mass." },
      { id: 2, word: "Element", options: ["Basic substance", "Chemical compound", "Laboratory tool"], correct: "Basic substance", sentence: "Oxygen is a vital chemical **element** essential for human life.", hint: "Each of more than one hundred substances that cannot be chemically interconverted or broken down." },
      { id: 3, word: "Friction", options: ["Friction resistance", "Pull force", "Chemical reaction"], correct: "Friction resistance", sentence: "The tires create **friction** against the road surface to stop the car.", hint: "The resistance that one surface or object encounters when moving over another." },
      { id: 4, word: "Magnify", options: ["Shrink down", "Make bigger", "Filter color"], correct: "Make bigger", sentence: "We used a microscope to **magnify** the plant cell structure.", hint: "Make something appear larger than it is, especially with a lens or microscope." },
      { id: 5, word: "Laboratory", options: ["Research room", "School gym", "Office lobby"], correct: "Research room", sentence: "The scientists performed chemical experiments in the university **laboratory**.", hint: "A room or building equipped for scientific research, experiments, or measurement." },
      { id: 6, word: "Observe", options: ["Ignore results", "Watch carefully", "Erase data"], correct: "Watch carefully", sentence: "The students were asked to **observe** the insect's behavior under the magnifying glass.", hint: "Notice or perceive something and register it as being significant; watch closely." },
      { id: 7, word: "Conduct", options: ["Block energy", "Direct or transmit", "Measure speed"], correct: "Direct or transmit", sentence: "Metals like copper and aluminum can **conduct** electricity very well.", hint: "Transmit a form of energy such as heat or electricity; direct." },
      { id: 8, word: "Liquid", options: ["Vapor substance", "Solid substance", "Fluid substance"], correct: "Fluid substance", sentence: "Water turns from a **liquid** into ice when it freezes.", hint: "A substance that flows freely but is of constant volume, having a consistency like that of water." },
      { id: 9, word: "Solid", options: ["Fluid substance", "Vapor substance", "Hard substance"], correct: "Hard substance", sentence: "Rock is a **solid** material that has a fixed shape and volume.", hint: "Firm and stable in shape; not liquid or fluid." },
      { id: 10, word: "Gas", options: ["Fluid substance", "Vapor substance", "Hard substance"], correct: "Vapor substance", sentence: "Water vapor is water in the form of an invisible **gas**.", hint: "An air-like fluid substance which expands freely to fill any space available, irrespective of its quantity." }
    ]
  },
  {
    title: "Communication & Media",
    questions: [
      { id: 1, word: "Broadcast", options: ["Send out signals", "Delete message", "Write newspaper"], correct: "Send out signals", sentence: "The national network will **broadcast** the soccer game live tonight.", hint: "Transmit a program or some information by radio or television." },
      { id: 2, word: "Journal", options: ["Cooking recipe", "Daily record or magazine", "Fiction book"], correct: "Daily record or magazine", sentence: "The professor published his research paper in a prestigious medical **journal**.", hint: "A newspaper or magazine that deals with a particular subject or professional activity; diary." },
      { id: 3, word: "Editorial", options: ["Classified ad", "Opinion article", "Fact sheet"], correct: "Opinion article", sentence: "The newspaper's **editorial** discussed the benefits of the new city tax policy.", hint: "A newspaper article expressing the editor's opinion on a topical issue." },
      { id: 4, word: "Interview", options: ["Corporate memo", "Staff party", "Q&A session"], correct: "Q&A session", sentence: "The journalist conducted an **interview** with the famous movie director.", hint: "A meeting of people face to face, especially for consultation." },
      { id: 5, word: "Article", options: ["Written report", "Office memo", "Loud speech"], correct: "Written report", sentence: "I read an interesting **article** about artificial intelligence in the morning paper.", hint: "A piece of writing included with others in a newspaper, magazine, or other publication." },
      { id: 6, word: "Source", options: ["Final summary", "Originator", "Printer machine"], correct: "Originator", sentence: "The reporter refused to reveal the anonymous **source** of her information.", hint: "A place, person, or document from which something obtains or originates." },
      { id: 7, word: "Access", options: ["Denying entry", "Entry right", "Leaving early"], correct: "Entry right", sentence: "Students have full online **access** to the digital university library.", hint: "The means or opportunity to approach or enter a place." },
      { id: 8, word: "Network", options: ["Single computer", "Connection group", "Internet browser"], correct: "Connection group", sentence: "The television **network** reaches millions of viewers across the country.", hint: "A group or system of interconnected people or things." },
      { id: 9, word: "Convey", options: ["Erase message", "Express a message", "Ignore feedback"], correct: "Express a message", sentence: "The author used simple language to **convey** her complex ideas clearly.", hint: "Make an idea, impression, or feeling known or understandable to someone." },
      { id: 10, word: "Medium", options: ["Final barrier", "Channel of communication", "Printing company"], correct: "Channel of communication", sentence: "The internet is a powerful **medium** for sharing news instantly.", hint: "An agency or means of doing something; method of communication." }
    ]
  },
  {
    title: "Travel & Hospitality",
    questions: [
      { id: 1, word: "Destination", options: ["Starting point", "End place", "Flight ticket"], correct: "End place", sentence: "We packed our bags and set off for our tropical island **destination**.", hint: "The place to which someone or something is going or being sent." },
      { id: 2, word: "Passport", options: ["Driver license", "Travel document", "Boarding pass"], correct: "Travel document", sentence: "You must present your **passport** when entering a foreign country.", hint: "An official document issued by a government, certifying the holder's identity and citizenship." },
      { id: 3, word: "Booking", options: ["Airport terminal", "Hotel receipt", "Reservation"], correct: "Reservation", sentence: "I received an email confirming my hotel **booking** for three nights.", hint: "An act of reserving accommodation, a ticket, etc." },
      { id: 4, word: "Terminal", options: ["Travel station end", "Airport runway", "Luggage carrier"], correct: "Travel station end", sentence: "Our flight departs from airport **terminal** three tonight.", hint: "A departure and arrival station, or a building at an airport where passengers transfer." },
      { id: 5, word: "Route", options: ["Hotel lobby", "Travel path", "Baggage claim"], correct: "Travel path", sentence: "The scenic mountain **route** was long but had breathtaking views.", hint: "A way or course taken in getting from a starting point to a destination." },
      { id: 6, word: "Guide", options: ["Advisory director", "Travel agent", "Hotel manager"], correct: "Advisory director", sentence: "Our tour **guide** told us fascinating stories about the ancient ruins.", hint: "A person who shows the way to others, especially one employed to show tourists around interesting places." },
      { id: 7, word: "Baggage", options: ["Passports", "Souvenirs", "Suitcases"], correct: "Suitcases", sentence: "Please proceed to **baggage** claim to pick up your suitcases.", hint: "Suitcases or bags containing personal belongings packed for travel." },
      { id: 8, word: "Resort", options: ["Vacation place", "Airport station", "Restaurant kitchen"], correct: "Vacation place", sentence: "They spent their honeymoon at a luxury beach **resort** in Hawaii.", hint: "A place that is a popular destination for vacations or recreation." },
      { id: 9, word: "Passenger", options: ["Pilot", "Traveler", "Customs officer"], correct: "Traveler", sentence: "The flight attendant handed a blanket to the cold **passenger**.", hint: "A traveler on a public or private conveyance other than the driver, pilot, or crew." },
      { id: 10, word: "Customs", options: ["Border check", "Duty-free shop", "Baggage claim"], correct: "Border check", sentence: "We had to go through **customs** after landing in Australia.", hint: "The place at a port, airport, or frontier where officials check incoming goods, travelers, or luggage." }
    ]
  },
  {
    title: "Self-Development",
    questions: [
      { id: 1, word: "Goal", options: ["Hobby interest", "Desired outcome", "Daily chore"], correct: "Desired outcome", sentence: "My academic **goal** is to achieve a perfect score on the reading exam.", hint: "The object of a person's ambition or effort; an aim or desired result." },
      { id: 2, word: "Habit", options: ["Routine behavior", "One-time surprise", "Unplanned action"], correct: "Routine behavior", sentence: "Drinking a glass of water every morning is a very healthy **habit**.", hint: "A settled or regular tendency or practice, especially one that is hard to give up." },
      { id: 3, word: "Motivation", options: ["Personal worry", "Incentive force", "Physical speed"], correct: "Incentive force", sentence: "Scholarships provide great **motivation** for students to study hard.", hint: "The reason or reasons one has for acting or behaving in a particular way." },
      { id: 4, word: "Focus", options: ["Ignore detail", "Center of attention", "Random choice"], correct: "Center of attention", sentence: "During exams, you must maintain your **focus** on the test questions.", hint: "The center of interest or activity." },
      { id: 5, word: "Skill", options: ["Unlearned trait", "Physical size", "Learned ability"], correct: "Learned ability", sentence: "Public speaking is an important **skill** that can be developed over time.", hint: "The ability to do something well; expertise." },
      { id: 6, word: "Knowledge", options: ["Blank mind", "Information stored", "Personal doubt"], correct: "Information stored", sentence: "The library is an excellent place to expand your academic **knowledge**.", hint: "Facts, information, and skills acquired by a person through experience or education." },
      { id: 7, word: "Attitude", options: ["Spoken language", "Way of thinking", "Physical appearance"], correct: "Way of thinking", sentence: "Having a positive **attitude** can help you overcome difficult challenges.", hint: "A settled way of thinking or feeling about someone or something." },
      { id: 8, word: "Confidence", options: ["Self-belief", "Doubtfulness", "Laziness"], correct: "Self-belief", sentence: "Passing the test gave him the **confidence** to apply for the college program.", hint: "The feeling or belief that one can rely on someone or something; firm trust." },
      { id: 9, word: "Practice", options: ["One-time test", "Repetitive training", "Quitting early"], correct: "Repetitive training", sentence: "To become fluent in English, you must **practice** speaking every day.", hint: "Perform or exercise a skill repeatedly or regularly in order to improve or maintain one's proficiency." },
      { id: 10, word: "Achievement", options: ["Failed attempt", "Success reached", "Homework plan"], correct: "Success reached", sentence: "Graduating from college was a major **achievement** for her family.", hint: "A thing done successfully, typically by effort, courage, or skill." }
    ]
  }
];

export const EASY_TERMINOLOGY_M2: TerminologyExercise[] = [
  {
    title: "Corporate Communication",
    questions: [
      { id: 1, word: "Liaison", options: ["Manager", "Client", "Communication link"], correct: "Communication link", sentence: "She acts as a **liaison** between the marketing and sales departments.", hint: "A person who acts as a link to assist communication or cooperation." },
      { id: 2, word: "Consensus", options: ["Disagreement", "Voting", "General agreement"], correct: "General agreement", sentence: "The team reached a **consensus** after a long discussion.", hint: "A general agreement." },
      { id: 3, word: "Facilitate", options: ["Make harder", "Stop", "Make easier"], correct: "Make easier", sentence: "The new software will **facilitate** better project management.", hint: "Make (an action or process) easy or easier." },
      { id: 4, word: "Objective", options: ["Opinion", "Problem", "Goal"], correct: "Goal", sentence: "Our primary **objective** is to increase customer satisfaction.", hint: "A thing aimed at or sought; a goal." },
      { id: 5, word: "Negotiation", options: ["Company picnic", "Sales report", "Bargaining discussion"], correct: "Bargaining discussion", sentence: "The contract was signed after weeks of intense **negotiation**.", hint: "Discussion aimed at reaching an agreement." },
      { id: 6, word: "Correspondence", options: ["Written letters", "Phone calls", "Staff meetings"], correct: "Written letters", sentence: "The secretary handles all business **correspondence** with clients.", hint: "Communication by exchanging letters or emails." },
      { id: 7, word: "Memo", options: ["Short note", "Full book", "Project contract"], correct: "Short note", sentence: "The director sent a brief **memo** about the upcoming holiday hours.", hint: "A written proposal or reminder in a business office." },
      { id: 8, word: "Briefing", options: ["Social party", "Informative meeting", "Staff interview"], correct: "Informative meeting", sentence: "The manager gave a quick **briefing** before the start of the project.", hint: "A meeting for giving information or instructions." },
      { id: 9, word: "Agenda", options: ["Financial book", "Employee list", "List of topics"], correct: "List of topics", sentence: "There are five items on the meeting **agenda** today.", hint: "A list of items to be discussed at a formal meeting." },
      { id: 10, word: "Protocol", options: ["Official rules", "Office layout", "Staff lunch"], correct: "Official rules", sentence: "Following safety **protocol** is mandatory in the chemistry lab.", hint: "The official system of rules or procedures governing affairs of state or diplomatic occasions." }
    ]
  },
  {
    title: "Financial Literacy",
    questions: [
      { id: 1, word: "Revenue", options: ["Expense", "Profit", "Income"], correct: "Income", sentence: "The company's annual **revenue** exceeded expectations.", hint: "Income, especially when of a company or organization." },
      { id: 2, word: "Liability", options: ["Asset", "Profit", "Debt/Responsibility"], correct: "Debt/Responsibility", sentence: "The company is working to reduce its long-term **liability**.", hint: "The state of being responsible for something, especially by law; debts." },
      { id: 3, word: "Equity", options: ["Debt", "Cash", "Ownership value"], correct: "Ownership value", sentence: "The founders retained a significant amount of **equity** in the startup.", hint: "The value of the shares issued by a company; ownership value." },
      { id: 4, word: "Inflation", options: ["Price decrease", "Stability", "Price increase"], correct: "Price increase", sentence: "High **inflation** can erode the purchasing power of consumers.", hint: "A general increase in prices and fall in the purchasing value of money." },
      { id: 5, word: "Audit", options: ["Meeting", "Payment", "Official inspection"], correct: "Official inspection", sentence: "The firm underwent a thorough financial **audit** last month.", hint: "An official inspection of an individual's or organization's accounts." },
      { id: 6, word: "Investment", options: ["Spent money for profit", "Tax payment", "Office rental"], correct: "Spent money for profit", sentence: "Buying property can be a very safe long-term **investment**.", hint: "The action or process of investing money for profit or material result." },
      { id: 7, word: "Portfolio", options: ["Business desk", "Investment collection", "Bank loan"], correct: "Investment collection", sentence: "The financial advisor managed a diverse stock **portfolio**.", hint: "A range of investments held by a person or organization." },
      { id: 8, word: "Dividend", options: ["Tax charge", "Share of profit", "Office rent"], correct: "Share of profit", sentence: "The company paid a quarterly **dividend** to its shareholders.", hint: "A sum of money paid regularly by a company to its shareholders out of its profits." },
      { id: 9, word: "Transaction", options: ["Money transfer", "Business plan", "Staff meeting"], correct: "Money transfer", sentence: "The online bank **transaction** was completed in seconds.", hint: "An instance of buying or selling something; a business deal." },
      { id: 10, word: "Capital", options: ["Office building", "Business wealth", "Annual tax"], correct: "Business wealth", sentence: "We need more **capital** to expand our business into new markets.", hint: "Wealth in the form of money or other assets owned by a person or organization." }
    ]
  },
  {
    title: "Human Resources",
    questions: [
      { id: 1, word: "Recruitment", options: ["Firing workers", "Finding workers", "Staff training"], correct: "Finding workers", sentence: "The firm started its annual **recruitment** of young university graduates.", hint: "The action of finding new people to join an organization or support a cause." },
      { id: 2, word: "Personnel", options: ["Customers", "Offices", "Employees"], correct: "Employees", sentence: "Only authorized **personnel** are allowed in the secure server room.", hint: "People employed in an organization or active in a military service." },
      { id: 3, word: "Appraisal", options: ["Product sales", "Performance review", "Hiring decision"], correct: "Performance review", sentence: "The manager conducted my annual performance **appraisal** yesterday.", hint: "An act of assessing something or someone; evaluation." },
      { id: 4, word: "Turnover", options: ["Worker replacement rate", "Sales profit", "Working hours"], correct: "Worker replacement rate", sentence: "Good employee benefits can significantly reduce staff **turnover**.", hint: "The rate at which employees leave a workforce and are replaced." },
      { id: 5, word: "Onboarding", options: ["Retirement party", "New hire training", "Quitting early"], correct: "New hire training", sentence: "The company has a week-long **onboarding** program for new employees.", hint: "The action or process of integrating a new employee into an organization." },
      { id: 6, word: "Retrenchment", options: ["Hiring staff", "Opening offices", "Staff cutting"], correct: "Staff cutting", sentence: "Due to the economic downturn, the firm announced a major **retrenchment**.", hint: "The reduction of costs or spending in response to economic difficulty; job cuts." },
      { id: 7, word: "Compensation", options: ["Office tasks", "Pay and benefits", "Customer reviews"], correct: "Pay and benefits", sentence: "The job offer includes competitive **compensation** and dental benefits.", hint: "Something, typically money, awarded to someone as a recompense for loss, injury, or work." },
      { id: 8, word: "Grievance", options: ["Promotional offer", "Formal complaint", "Product delivery"], correct: "Formal complaint", sentence: "The employee filed a formal **grievance** regarding workplace conditions.", hint: "A real or imagined wrong or other cause for complaint or protest, especially unfair treatment." },
      { id: 9, word: "Payroll", options: ["Employee salary list", "Office supply order", "Company tax form"], correct: "Employee salary list", sentence: "The accounting department manages the monthly company **payroll**.", hint: "A list of a company's employees and the amount of money to be paid to them." },
      { id: 10, word: "Vacancy", options: ["Filled position", "Office meeting", "Unfilled job"], correct: "Unfilled job", sentence: "There is currently a job **vacancy** in our customer service team.", hint: "An unoccupied position or job." }
    ]
  },
  {
    title: "Project Management",
    questions: [
      { id: 1, word: "Milestone", options: ["Project limit", "Backup plan", "Significant event"], correct: "Significant event", sentence: "Completing the software design was a major **milestone** for the team.", hint: "A significant stage or event in the development of something." },
      { id: 2, word: "Scope", options: ["Project boundaries", "Project budget", "Project deadline"], correct: "Project boundaries", sentence: "The manager explained the project **scope** during the kick-off meeting.", hint: "The extent of the area or subject matter that something deals with or to which it is relevant." },
      { id: 3, word: "Resource", options: ["Time limit", "Useful asset", "Final result"], correct: "Useful asset", sentence: "Computers, software, and staff are key **resource** items for this task.", hint: "A stock or supply of money, materials, staff, and other assets that can be drawn on." },
      { id: 4, word: "Deliverable", options: ["Project initial idea", "Initial budget plan", "Final product"], correct: "Final product", sentence: "The primary **deliverable** of this phase is a working website prototype.", hint: "A thing that can be delivered, especially a product of a development process." },
      { id: 5, word: "Contingency", options: ["Main goal", "Backup plan", "Project cost"], correct: "Backup plan", sentence: "We created a **contingency** plan in case the main server fails.", hint: "A future event or circumstance which is possible but cannot be predicted with certainty; backup plan." },
      { id: 6, word: "Timeline", options: ["Financial ledger", "Schedule of events", "List of employees"], correct: "Schedule of events", sentence: "The project **timeline** shows when each task must be completed.", hint: "A graphic representation of the passage of time as a line; schedule." },
      { id: 7, word: "Constraint", options: ["Final reward", "Project advantage", "Limitation"], correct: "Limitation", sentence: "A tight budget is a major **constraint** for our design choices.", hint: "A limitation or restriction." },
      { id: 8, word: "Execution", options: ["Planning stage", "Carrying out a plan", "Writing a report"], correct: "Carrying out a plan", sentence: "The success of the project depended on the careful **execution** of our strategy.", hint: "The carrying out or putting into effect of a plan, order, or course of action." },
      { id: 9, word: "Stakeholder", options: ["Office clerk", "Competitor manager", "Interested party"], correct: "Interested party", sentence: "We must consult every major **stakeholder** before changing the system.", hint: "A person with an interest or concern in something, especially a business." },
      { id: 10, word: "Benchmark", options: ["Office desk", "Standard for comparison", "Project cost"], correct: "Standard for comparison", sentence: "This high-performing company is a **benchmark** for the entire industry.", hint: "A standard or point of reference against which things may be compared or assessed." }
    ]
  },
  {
    title: "Consumer Behavior",
    questions: [
      { id: 1, word: "Demographics", options: ["Office blueprints", "Weather patterns", "Population data"], correct: "Population data", sentence: "The survey gathered **demographics** like age, income, and education level.", hint: "Statistical data relating to the population and particular groups within it." },
      { id: 2, word: "Preference", options: ["Liked choice", "Disliked item", "Random selection"], correct: "Liked choice", sentence: "Many consumers show a strong **preference** for eco-friendly products.", hint: "A greater liking for one alternative over another or others." },
      { id: 3, word: "Loyalty", options: ["Refund claim", "Faithful support", "Price shopping"], correct: "Faithful support", sentence: "The store introduced a rewards card to encourage customer **loyalty**.", hint: "The quality of being loyal to someone or something; faithful support." },
      { id: 4, word: "Advertisement", options: ["Sales receipt", "Public notice", "Product design"], correct: "Public notice", sentence: "I saw an **advertisement** for the new smartphone on television.", hint: "A notice or announcement in a public medium promoting a product, service, or event." },
      { id: 5, word: "Trend", options: ["Old tradition", "Failing product", "Current fashion"], correct: "Current fashion", sentence: "Online shopping is a major consumer **trend** that continues to grow.", hint: "A general direction in which something is developing or changing." },
      { id: 6, word: "Feedback", options: ["Office payroll", "Product shipping", "Customer response"], correct: "Customer response", sentence: "We value customer **feedback** as it helps us improve our products.", hint: "Information about reactions to a product, a person's performance of a task, etc." },
      { id: 7, word: "Market", options: ["Office storage", "Buying area", "Factory floor"], correct: "Buying area", sentence: "The company plans to launch its products in the European **market**.", hint: "An area or arena in which commercial dealings are conducted." },
      { id: 8, word: "Consumerism", options: ["Retail selling", "Protection of buyers", "Wholesale supply"], correct: "Protection of buyers", sentence: "The rise of **consumerism** led to better product safety standards.", hint: "The protection or promotion of the interests of consumers." },
      { id: 9, word: "Segment", options: ["Entire market", "Part of a market", "Business budget"], correct: "Part of a market", sentence: "Our marketing strategy targets the luxury **segment** of the population.", hint: "Each of the parts into which something is or may be divided." },
      { id: 10, word: "Purchase", options: ["Sell an item", "Buy an item", "Rent an item"], correct: "Buy an item", sentence: "Customers can **purchase** tickets directly from our website.", hint: "Acquire something by paying for it; buy." }
    ]
  },
  {
    title: "Information Technology Essentials",
    questions: [
      { id: 1, word: "Cybersecurity", options: ["Computer hardware", "Data protection", "Database entry"], correct: "Data protection", sentence: "The bank invests heavily in **cybersecurity** to prevent hacking.", hint: "The state of being protected against the criminal or unauthorized use of electronic data." },
      { id: 2, word: "Algorithm", options: ["Set of rules", "Computer keyboard", "Internet website"], correct: "Set of rules", sentence: "The search engine uses a complex **algorithm** to rank web pages.", hint: "A process or set of rules to be followed in calculations or other problem-solving operations." },
      { id: 3, word: "Bandwidth", options: ["Data speed capacity", "Computer monitor", "Power source"], correct: "Data speed capacity", sentence: "Streaming high-definition video requires a lot of internet **bandwidth**.", hint: "The range of frequencies within a given band, in particular used for transmitting a signal; speed." },
      { id: 4, word: "Cloud", options: ["Remote storage servers", "Physical hardware", "Local printer"], correct: "Remote storage servers", sentence: "I store all my photos in the **cloud** so I can access them anywhere.", hint: "A network of remote servers hosted on the Internet and used to store, manage, and process data." },
      { id: 5, word: "Encryption", options: ["Deleting files", "Sharing links", "Secure coding"], correct: "Secure coding", sentence: "Data **encryption** ensures that only authorized users can read the message.", hint: "The process of converting information or data into a code, especially to prevent unauthorized access." },
      { id: 6, word: "Integration", options: ["System disconnection", "System connection", "System failure"], correct: "System connection", sentence: "The software **integration** allowed different programs to share data easily.", hint: "The act or process of combining two or more systems together." },
      { id: 7, word: "Protocol", options: ["Hardware device", "Set of data rules", "Security password"], correct: "Set of data rules", sentence: "HTTP is the standard **protocol** used for transferring web pages.", hint: "A set of rules governing the exchange or transmission of data between devices." },
      { id: 8, word: "Backup", options: ["Original file", "Copy of data", "Deleted folder"], correct: "Copy of data", sentence: "Always make a **backup** of your files before updating your computer.", hint: "A copy of a file or other directory that can be used if the original is lost or damaged." },
      { id: 9, word: "Interface", options: ["Internal wiring", "Computer mouse", "Display screen layout"], correct: "Display screen layout", sentence: "The application has a clean and simple user **interface**.", hint: "A point where two systems, subjects, organizations, etc., meet and interact; visual layout." },
      { id: 10, word: "Server", options: ["User terminal", "Printers", "Central host computer"], correct: "Central host computer", sentence: "The website went offline because the main hosting **server** crashed.", hint: "A computer or computer program which manages access to a centralized resource." }
    ]
  },
  {
    title: "Legal Vocabulary",
    questions: [
      { id: 1, word: "Legislation", options: ["Court trial", "Criminal act", "Law-making"], correct: "Law-making", sentence: "The parliament passed new environmental **legislation** to limit emissions.", hint: "Laws, considered collectively; the process of making laws." },
      { id: 2, word: "Jurisdiction", options: ["Legal authority", "Police force", "Lawsuit claim"], correct: "Legal authority", sentence: "The local court has **jurisdiction** over small financial disputes.", hint: "The official power to make legal decisions and judgments." },
      { id: 3, word: "Policy", options: ["Strict law", "Action guidelines", "Secret plan"], correct: "Action guidelines", sentence: "The university has a very strict **policy** on late exam submissions.", hint: "A course or principle of action adopted or proposed by a government, party, business, or individual." },
      { id: 4, word: "Regulation", options: ["Official rule", "Tax payment", "Court lawsuit"], correct: "Official rule", sentence: "Following building **regulation** codes is mandatory for all architects.", hint: "A rule or directive made and maintained by an authority." },
      { id: 5, word: "Compliance", options: ["Breaking rules", "Following rules", "Changing rules"], correct: "Following rules", sentence: "The firm works hard to ensure complete **compliance** with tax laws.", hint: "The action or fact of complying with a wish or command; following official rules." },
      { id: 6, word: "Litigation", options: ["Lawsuit process", "Signing contract", "Legal training"], correct: "Lawsuit process", sentence: "The dispute was settled out of court to avoid costly **litigation**.", hint: "The process of taking legal action; a lawsuit." },
      { id: 7, word: "Liability", options: ["Tax profit", "Legal responsibility", "Contract clause"], correct: "Legal responsibility", sentence: "The insurance policy protects the homeowner against personal **liability**.", hint: "The state of being responsible for something, especially by law." },
      { id: 8, word: "Breach", options: ["Broken contract", "Signed agreement", "Legal advice"], correct: "Broken contract", sentence: "Revealing confidential files was a clear **breach** of the contract.", hint: "An act of breaking or failing to observe a law, agreement, or code of conduct." },
      { id: 9, word: "Clause", options: ["Entire contract", "Section in contract", "Contract signature"], correct: "Section in contract", sentence: "The safety **clause** in the agreement protects workers' rights.", hint: "A particular and separate article, stipulation, or ingredient in a treaty, bill, or contract." },
      { id: 10, word: "Defendant", options: ["Accused person", "Legal lawyer", "Court judge"], correct: "Accused person", sentence: "The jury listened carefully to the testimony of the **defendant**.", hint: "An individual, company, or institution sued or accused in a court of law." }
    ]
  },
  {
    title: "Diplomacy & Policy",
    questions: [
      { id: 1, word: "Diplomacy", options: ["Military invasion", "National elections", "National negotiations"], correct: "National negotiations", sentence: "The international conflict was resolved through peaceful **diplomacy**.", hint: "The profession, activity, or skill of managing international relations." },
      { id: 2, word: "Treaty", options: ["Formal agreement", "Economic tax", "Diplomatic meeting"], correct: "Formal agreement", sentence: "The two neighboring countries signed a historic peace **treaty**.", hint: "A formally concluded and ratified agreement between countries." },
      { id: 3, word: "Alliance", options: ["Trade war", "Economic crisis", "Support union"], correct: "Support union", sentence: "Several nations formed a military **alliance** to guarantee safety.", hint: "A union or association formed for mutual benefit, especially between countries." },
      { id: 4, word: "Sovereignty", options: ["Foreign colony", "State alliance", "Independent power"], correct: "Independent power", sentence: "The island state fought hard to protect its national **sovereignty**.", hint: "The authority of a state to govern itself or another state." },
      { id: 5, word: "Embassy", options: ["Official building", "Military camp", "City airport"], correct: "Official building", sentence: "Citizens can renew their passports at their country's local **embassy**.", hint: "The official residence or offices of an ambassador in a foreign country." },
      { id: 6, word: "Envoy", options: ["Military general", "Diplomatic messenger", "Foreign tourist"], correct: "Diplomatic messenger", sentence: "The president sent a special **envoy** to discuss the trade agreement.", hint: "A messenger or representative, especially one on a diplomatic mission." },
      { id: 7, word: "Sanction", options: ["Economic penalty", "Trade agreement", "Diplomatic visa"], correct: "Economic penalty", sentence: "The UN imposed an economic **sanction** on the country for violating rules.", hint: "A threatened penalty for disobeying a law or rule; economic restrictions." },
      { id: 8, word: "Tariff", options: ["Travel visa", "Import tax", "Shipping cost"], correct: "Import tax", sentence: "The government placed a high **tariff** on imported steel products.", hint: "A tax or duty to be paid on a particular class of imports or exports." },
      { id: 9, word: "Protocol", options: ["Office layout", "Staff lunch", "Formal etiquette"], correct: "Formal etiquette", sentence: "During state dinners, strict diplomatic **protocol** must be followed.", hint: "The official system of rules governing affairs of state or diplomatic etiquette." },
      { id: 10, word: "Policy", options: ["Unplanned action", "Strategy plan", "Strict law"], correct: "Strategy plan", sentence: "The foreign **policy** of the country focuses on expanding trade.", hint: "A course or principle of action adopted or proposed by a government or organization." }
    ]
  },
  {
    title: "Ecology & Biosphere",
    questions: [
      { id: 1, word: "Biosphere", options: ["Deep underground", "Life zone", "Outer space"], correct: "Life zone", sentence: "All living organisms on Earth exist within the global **biosphere**.", hint: "The regions of the surface, atmosphere, and hydrosphere of the earth occupied by living organisms." },
      { id: 2, word: "Biodiversity", options: ["Single species", "Extinction rate", "Variety of life"], correct: "Variety of life", sentence: "Protecting **biodiversity** is essential for maintaining healthy ecosystems.", hint: "The variety of life in the world or in a particular habitat or ecosystem." },
      { id: 3, word: "Conservation", options: ["Protection", "Resource extraction", "Industrial growth"], correct: "Protection", sentence: "We must support **conservation** projects to protect endangered tigers.", hint: "The action of conserving something, in particular preservation of the natural environment." },
      { id: 4, word: "Degradation", options: ["Environmental recovery", "Wearing down", "Climate stability"], correct: "Wearing down", sentence: "Soil **degradation** caused by farming can lead to lower crop yields.", hint: "The state or process of being degraded or worn down." },
      { id: 5, word: "Renewable", options: ["Finite source", "Recyclable source", "Polluting source"], correct: "Recyclable source", sentence: "Wind power is a clean and **renewable** form of energy.", hint: "Capable of being renewed; not depleted when used." },
      { id: 6, word: "Sustainability", options: ["Short-term gain", "Long-term survival", "Wasteful spending"], correct: "Long-term survival", sentence: "The city's environmental **sustainability** plan focuses on reducing waste.", hint: "The ability to be maintained at a certain rate or level without depletion." },
      { id: 7, word: "Ecosystem", options: ["Single habitat", "Living web", "Weather pattern"], correct: "Living web", sentence: "Insects play a vital role in the food chain of the forest **ecosystem**.", hint: "A biological community of interacting organisms and their physical environment." },
      { id: 8, word: "Pollution", options: ["Clean energy", "Contaminant waste", "Nature preserve"], correct: "Contaminant waste", sentence: "Chemical **pollution** from factories has contaminated the river water.", hint: "The presence in or introduction into the environment of a substance that has harmful effects." },
      { id: 9, word: "Carbon", options: ["Life form", "Water compound", "Chemical element"], correct: "Chemical element", sentence: "Reducing our global **carbon** footprint can help fight climate change.", hint: "The chemical element of atomic number 6, widely distributed in all organic compounds." },
      { id: 10, word: "Deforestation", options: ["Planting trees", "Forest cutting", "Forest fire safety"], correct: "Forest cutting", sentence: "Agricultural expansion is a primary cause of tropical **deforestation**.", hint: "The action of clearing a wide area of trees." }
    ]
  },
  {
    title: "Health & Medicine",
    questions: [
      { id: 1, word: "Therapy", options: ["Surgical operation", "Medical diagnosis", "Healing treatment"], correct: "Healing treatment", sentence: "Speech **therapy** can help children overcome communication difficulties.", hint: "Treatment intended to relieve or heal a disorder." },
      { id: 2, word: "Diagnosis", options: ["Disease cure", "Illness identification", "Medical surgery"], correct: "Illness identification", sentence: "The doctor provided an accurate **diagnosis** after analyzing the blood test.", hint: "The identification of the nature of an illness or other problem by examination of the symptoms." },
      { id: 3, word: "Chronic", options: ["Short and mild", "Long-lasting", "Infectious"], correct: "Long-lasting", sentence: "Diabetes is a **chronic** condition that requires lifelong management.", hint: "Persisting for a long time or constantly recurring." },
      { id: 4, word: "Acute", options: ["Long-lasting", "Chronic illness", "Short and severe"], correct: "Short and severe", sentence: "She suffered from an **acute** headache that passed after an hour.", hint: "Of unpleasant or unwelcome situation: present or experienced to a severe or intense degree; short duration." },
      { id: 5, word: "Vaccine", options: ["Painkiller tablet", "Immunity medicine", "Fever reducer"], correct: "Immunity medicine", sentence: "The polio **vaccine** has saved millions of children from paralysis.", hint: "A substance used to stimulate the production of antibodies and provide immunity." },
      { id: 6, word: "Pathology", options: ["Study of rocks", "Study of maps", "Disease study"], correct: "Disease study", sentence: "The medical student decided to specialize in forensic **pathology**.", hint: "The science of the causes and effects of diseases, especially the branch of medicine that deals with laboratory examination." },
      { id: 7, word: "Clinical", options: ["Administrative", "Theoretical", "Related to patients"], correct: "Related to patients", sentence: "The new medicine is undergoing **clinical** trials with human patients.", hint: "Relating to the observation and treatment of actual patients rather than theoretical studies." },
      { id: 8, word: "Symptom", options: ["Disease cure", "Disease sign", "Medical doctor"], correct: "Disease sign", sentence: "A dry cough is a common **symptom** of respiratory infections.", hint: "A physical or mental feature indicating a condition of disease." },
      { id: 9, word: "Genetic", options: ["Acquired trait", "Environmental", "Hereditary code"], correct: "Hereditary code", sentence: "Eye color is a **genetic** trait passed down from parents to children.", hint: "Relating to genes or heredity." },
      { id: 10, word: "Immunity", options: ["Body defense", "Allergy reaction", "Disease symptom"], correct: "Body defense", sentence: "Getting vaccinated helps your body build active **immunity** against viruses.", hint: "The ability of an organism to resist a particular infection or toxin." }
    ]
  },
  {
    title: "Academic Discourse",
    questions: [
      { id: 1, word: "Analysis", options: ["Idea combination", "Detailed breakdown", "Random guess"], correct: "Detailed breakdown", sentence: "The professor provided a detailed **analysis** of the historic document.", hint: "Detailed examination of the elements or structure of something." },
      { id: 2, word: "Synthesis", options: ["Idea combination", "Detailed breakdown", "Simple repetition"], correct: "Idea combination", sentence: "The research paper is a **synthesis** of several opposing theories.", hint: "The combination of ideas to form a theory or system." },
      { id: 3, word: "Evaluation", options: ["Value assessment", "Ignore data", "Simple copying"], correct: "Value assessment", sentence: "The committee completed its final **evaluation** of the grant proposals.", hint: "The making of a judgment about the amount, number, or value of something." },
      { id: 4, word: "Hypothesis", options: ["Proven fact", "Final conclusion", "Educational guess"], correct: "Educational guess", sentence: "The students tested their **hypothesis** during the physics laboratory class.", hint: "A supposition or proposed explanation made on the basis of limited evidence." },
      { id: 5, word: "Methodology", options: ["Research result", "Study system", "Single textbook"], correct: "Study system", sentence: "The thesis explains the **methodology** used to gather survey data.", hint: "A system of methods used in a particular area of study or activity." },
      { id: 6, word: "Paradigm", options: ["Grammar mistake", "Concept model", "Random thought"], correct: "Concept model", sentence: "The invention of the internet created a new communication **paradigm**.", hint: "A typical example or pattern of something; a model." },
      { id: 7, word: "Correlation", options: ["Relationship link", "Cause and effect", "Direct conflict"], correct: "Relationship link", sentence: "Studies show a positive **correlation** between sleep and academic performance.", hint: "A mutual relationship or connection between two or more things." },
      { id: 8, word: "Causality", options: ["Random chance", "Correlation link", "Cause and effect"], correct: "Cause and effect", sentence: "It is difficult to prove **causality** between marketing and sales increases.", hint: "The relationship between cause and effect." },
      { id: 9, word: "Qualitative", options: ["Value of quantity", "Value of quality", "Theoretical guess"], correct: "Value of quality", sentence: "The researcher gathered **qualitative** data through patient interviews.", hint: "Relating to, measuring, or measured by the quality of something rather than its quantity." },
      { id: 10, word: "Quantitative", options: ["Value of quantity", "Value of quality", "Logical deduction"], correct: "Value of quantity", sentence: "The study used **quantitative** statistics to back up its findings.", hint: "Relating to, measuring, or measured by the quantity of something." }
    ]
  },
  {
    title: "Organizational Structure",
    questions: [
      { id: 1, word: "Hierarchy", options: ["Staff dining room", "Ranking system", "Flat workspace"], correct: "Ranking system", sentence: "The military has a very strict corporate **hierarchy** of command.", hint: "A system or organization in which people or groups are ranked one above another." },
      { id: 2, word: "Subsidiary", options: ["Main headquarters", "Secondary company", "Competitor brand"], correct: "Secondary company", sentence: "The multinational corporation owns a smaller **subsidiary** in Japan.", hint: "A company controlled by a holding company." },
      { id: 3, word: "Merger", options: ["Company union", "Company bankruptcy", "Staff cutting"], correct: "Company union", sentence: "The corporate **merger** of the two tech giants shocked the market.", hint: "A combination of two things, especially companies, into one." },
      { id: 4, word: "Acquisition", options: ["Selling a company", "Purchase of company", "Filing for taxes"], correct: "Purchase of company", sentence: "The bank expanded its operations through the **acquisition** of a local competitor.", hint: "An asset or object bought or obtained; purchasing of companies." },
      { id: 5, word: "Division", options: ["Department sector", "Office building", "Staff dining room"], correct: "Department sector", sentence: "He was promoted to director of the international sales **division**.", hint: "A division of a large organization; sector." },
      { id: 6, word: "Executive", options: ["Temporary intern", "Office clerk", "High manager"], correct: "High manager", sentence: "The chief **executive** officer made the final business decision.", hint: "A person with senior managerial responsibility in a business organization." },
      { id: 7, word: "Board", options: ["Office desk", "Directing group", "Staff dining table"], correct: "Directing group", sentence: "The **board** of directors met to discuss the annual budget.", hint: "A group of people who manage the business of an organization." },
      { id: 8, word: "Shareholder", options: ["Company customer", "Stock owner", "Office manager"], correct: "Stock owner", sentence: "Every **shareholder** voted in favor of the corporate merger.", hint: "An owner of shares in a company." },
      { id: 9, word: "Headquarters", options: ["Local branch", "Main office", "Storage warehouse"], correct: "Main office", sentence: "The tech company's global **headquarters** is located in California.", hint: "The premises of a primary organization or military unit; main office." },
      { id: 10, word: "Bureaucracy", options: ["Official system", "Flat office layout", "Staff parking lot"], correct: "Official system", sentence: "Applying for a visa involves dealing with a lot of government **bureaucracy**.", hint: "A system of government or business in which most of the important decisions are made by state officials rather than by elected representatives." }
    ]
  },
  {
    title: "Logistics & Supply",
    questions: [
      { id: 1, word: "Inventory", options: ["Delivery truck", "Sales receipt", "Stock list"], correct: "Stock list", sentence: "The store manager did a weekly **inventory** of all clothing items.", hint: "A complete list of items such as property, goods in stock, or the contents of a building." },
      { id: 2, word: "Warehouse", options: ["Storage building", "Office desk", "Retail shop"], correct: "Storage building", sentence: "The online store stores its products in a large suburban **warehouse**.", hint: "A large building where raw materials or manufactured goods may be stored before their export or sale." },
      { id: 3, word: "Distribution", options: ["Product design", "Delivery path", "Buying supplies"], correct: "Delivery path", sentence: "Improving **distribution** channels helped get products to buyers faster.", hint: "The action of sharing something out among a number of recipients; delivery." },
      { id: 4, word: "Procurement", options: ["Sourcing materials", "Selling products", "Hiring employees"], correct: "Sourcing materials", sentence: "She is in charge of raw material **procurement** for the factory.", hint: "The action of obtaining military equipment or supplies; sourcing." },
      { id: 5, word: "Transit", options: ["Staying at home", "Product display", "Cargo shipment"], correct: "Cargo shipment", sentence: "The goods were damaged while in **transit** across the ocean.", hint: "The carrying of people or things from one place to another." },
      { id: 6, word: "Vendor", options: ["Corporate manager", "Office clerk", "Product seller"], correct: "Product seller", sentence: "The software **vendor** provided a license for the company computers.", hint: "A person or company offering something for sale, especially a trader in the street." },
      { id: 7, word: "Dispatch", options: ["Store inventory", "Send off goods", "Cancel order"], correct: "Send off goods", sentence: "The warehouse will **dispatch** your ordered items tomorrow morning.", hint: "Send off to a destination or for a purpose." },
      { id: 8, word: "Consignment", options: ["Batch of goods", "Contract signature", "Tax receipt"], correct: "Batch of goods", sentence: "The store received a large **consignment** of winter coats yesterday.", hint: "A batch of goods destined for or delivered to someone." },
      { id: 9, word: "Freight", options: ["Office mail", "Passenger luggage", "Transported cargo"], correct: "Transported cargo", sentence: "Most international **freight** is transported by large cargo ships.", hint: "Goods transported in bulk by truck, train, ship, or aircraft." },
      { id: 10, word: "Surplus", options: ["Stock deficit", "Extra stock", "Broken goods"], correct: "Extra stock", sentence: "The farm sold its agricultural **surplus** to local grocery stores.", hint: "An amount of something left over when requirements have been met; extra." }
    ]
  },
  {
    title: "Marketing & Public Relations",
    questions: [
      { id: 1, word: "Campaign", options: ["Staff meeting", "Office layout", "Planned promotion"], correct: "Planned promotion", sentence: "The marketing team launched an advertising **campaign** for the new app.", hint: "An organized course of action to achieve a goal, especially commercial." },
      { id: 2, word: "Brand", options: ["Office printer", "Product identity", "Retail clerk"], correct: "Product identity", sentence: "Our company's **brand** is known for high quality and reliability.", hint: "A type of product manufactured by a particular company under a particular name." },
      { id: 3, word: "Endorsement", options: ["Public disapproval", "Product discount", "Public approval"], correct: "Public approval", sentence: "The athletic shoes received an **endorsement** from a famous athlete.", hint: "An act of giving one's public approval or support to someone or something." },
      { id: 4, word: "Slogan", options: ["Brand logo", "Corporate tax", "Catchy phrase"], correct: "Catchy phrase", sentence: "The company's marketing **slogan** is easy to remember.", hint: "A short and striking or memorable phrase used in advertising." },
      { id: 5, word: "Logo", options: ["Company staff", "Symbol of brand", "Office building"], correct: "Symbol of brand", sentence: "The designer drew a minimalist **logo** for the new coffee brand.", hint: "A symbol or other design adopted by an organization to identify its products." },
      { id: 6, word: "Target", options: ["Office lobby", "Competitor office", "Intended audience"], correct: "Intended audience", sentence: "Our primary **target** market consists of university students.", hint: "A person, object, or group selected as the focus of attention." },
      { id: 7, word: "Sponsor", options: ["Office manager", "Financial backer", "Office client"], correct: "Financial backer", sentence: "The bank agreed to **sponsor** the local high school soccer tournament.", hint: "A person or organization that provides funds for a project or activity." },
      { id: 8, word: "Outreach", options: ["Staff hiring", "Office cleaning", "Public contact"], correct: "Public contact", sentence: "The charity organization expanded its community **outreach** programs.", hint: "The extent or length of reaching out; public relations contact." },
      { id: 9, word: "Publicity", options: ["Private file", "Staff payroll", "Public attention"], correct: "Public attention", sentence: "The book release received a lot of positive **publicity** in the news.", hint: "Notice or attention given to someone or something by the media." },
      { id: 10, word: "Positioning", options: ["Product placement", "Product shipment", "Store layout"], correct: "Product placement", sentence: "The brand's **positioning** is focused on luxury and premium design.", hint: "Promote a product or service within a particular sector of a market." }
    ]
  },
  {
    title: "Sociology & Culture",
    questions: [
      { id: 1, word: "Heritage", options: ["Cultural inheritance", "Modern invention", "Personal debt"], correct: "Cultural inheritance", sentence: "We must protect our historic national **heritage** sites.", hint: "Property or traditions that are inherited from past generations." },
      { id: 2, word: "Norm", options: ["Legal law", "Social expectation", "Personal option"], correct: "Social expectation", sentence: "Following social **norm** habits is expected during formal dinners.", hint: "Something that is usual, typical, or a standard social expectation." },
      { id: 3, word: "Diversity", options: ["Single culture", "Ecosystem damage", "Variety of people"], correct: "Variety of people", sentence: "The university values **diversity** among its students and faculty.", hint: "The state of being diverse; variety of individuals." },
      { id: 4, word: "Assimilation", options: ["Cultural isolation", "Adapting to culture", "Rejecting customs"], correct: "Adapting to culture", sentence: "The immigrant family underwent gradual **assimilation** into the local community.", hint: "The process of taking in and fully understanding information or ideas; adapting." },
      { id: 5, word: "Subculture", options: ["Mainstream culture", "National border", "Small culture group"], correct: "Small culture group", sentence: "Punk music created a unique youth **subculture** in the 1970s.", hint: "A cultural group within a larger culture, often having beliefs or interests at variance with those of the larger culture." },
      { id: 6, word: "Tradition", options: ["Modern policy", "Long-held custom", "Class exam"], correct: "Long-held custom", sentence: "It is a family **tradition** to eat dinner together on Sundays.", hint: "The transmission of customs or beliefs from generation to generation." },
      { id: 7, word: "Demographic", options: ["Weather chart", "Population segment", "Office layout"], correct: "Population segment", sentence: "The product is popular among the retired **demographic** group.", hint: "A particular sector of a population." },
      { id: 8, word: "Custom", options: ["Store purchase", "Regular practice", "Written law"], correct: "Regular practice", sentence: "It is a local **custom** to shake hands when greeting someone.", hint: "A traditional and widely accepted way of behaving or doing something." },
      { id: 9, word: "Integration", options: ["Mixing communities", "Social isolation", "Tax payments"], correct: "Mixing communities", sentence: "The program encourages the social **integration** of refugee children.", hint: "The act or process of combining communities together." },
      { id: 10, word: "Etiquette", options: ["Legal policy", "Polite behavior", "Staff uniform"], correct: "Polite behavior", sentence: "Good telephone **etiquette** is essential for customer service roles.", hint: "The customary code of polite behavior in society or among members of a particular profession." }
    ]
  },
  {
    title: "Media & Journalism",
    questions: [
      { id: 1, word: "Broadcast", options: ["Turn off signal", "Signal transmission", "Office printout"], correct: "Signal transmission", sentence: "The radio station's **broadcast** is available online worldwide.", hint: "The transmission of a program or information by radio or television." },
      { id: 2, word: "Editorial", options: ["Sales catalog", "Fact list", "Opinion essay"], correct: "Opinion essay", sentence: "The magazine's **editorial** supported the city's green energy plan.", hint: "An article expressing the editor's opinion on a topical issue." },
      { id: 3, word: "Column", options: ["Full textbook", "Periodic article", "Classified ad"], correct: "Periodic article", sentence: "The journalist writes a weekly **column** about technology trends.", hint: "A recurring piece or article in a newspaper, magazine, or other publication." },
      { id: 4, word: "Headline", options: ["Textbook index", "Title of story", "News source"], correct: "Title of story", sentence: "The morning paper's front-page **headline** announced the election results.", hint: "A heading at the top of an article or page in a newspaper or magazine." },
      { id: 5, word: "Source", options: ["Final score", "Information giver", "Paper printer"], correct: "Information giver", sentence: "The reporter verified the information with a reliable **source**.", hint: "A person, book, or document that provides information." },
      { id: 6, word: "Coverage", options: ["News block", "Report of events", "News review"], correct: "Report of events", sentence: "The television network provided extensive **coverage** of the Olympics.", hint: "The treatment of an issue by the media; reportage." },
      { id: 7, word: "Bias", options: ["Objectivity", "Personal prejudice", "Fact list"], correct: "Personal prejudice", sentence: "Reporters must avoid personal **bias** to ensure objective news stories.", hint: "Prejudice in favor of or against one thing, person, or group compared with another, usually in a way considered to be unfair." },
      { id: 8, word: "Censorship", options: ["Information freedom", "Tax paid", "Info suppression"], correct: "Info suppression", sentence: "Free speech advocates argue against strict government **censorship** of the press.", hint: "The suppression or prohibition of any parts of books, films, news, etc., that are considered obscene, politically unacceptable, or a threat to security." },
      { id: 9, word: "Correspondent", options: ["Local driver", "Remote reporter", "Office secretary"], correct: "Remote reporter", sentence: "The news station sent a foreign **correspondent** to report on the war.", hint: "A person who writes letters to a person or a newspaper; remote reporter." },
      { id: 10, word: "Press", options: ["Government council", "News media", "Printing factory"], correct: "News media", sentence: "Members of the **press** attended the presidential news conference.", hint: "Newspapers or journalists collectively." }
    ]
  },
  {
    title: "Economics & Trade",
    questions: [
      { id: 1, word: "GDP", options: ["Unemployment rate", "National tax total", "National output value"], correct: "National output value", sentence: "The country's **GDP** grew by 2% during the last quarter.", hint: "Gross Domestic Product: the total value of goods produced and services provided in a country during one year." },
      { id: 2, word: "Unemployment", options: ["Jobs available", "Out of work rate", "Corporate profit"], correct: "Out of work rate", sentence: "The government introduced new job programs to reduce **unemployment**.", hint: "The state of being unemployed; out of work rate." },
      { id: 3, word: "Recession", options: ["Economic growth", "Tax payment", "Economic decline"], correct: "Economic decline", sentence: "High inflation and low sales triggered a minor economic **recession**.", hint: "A period of temporary economic decline during which trade and industrial activity are reduced." },
      { id: 4, word: "Trade", options: ["Tax penalty", "Goods exchange", "Money saving"], correct: "Goods exchange", sentence: "The trade agreement boosted international **trade** between the two nations.", hint: "The action of buying and selling goods and services." },
      { id: 5, word: "Deficit", options: ["Budget surplus", "Tax refund", "Spending excess"], correct: "Spending excess", sentence: "The government reported a multi-million dollar budget **deficit** this year.", hint: "The amount by which something, especially a sum of money, is too small; spending more than earning." },
      { id: 6, word: "Surplus", options: ["Financial deficit", "Broken stock", "Extra revenue"], correct: "Extra revenue", sentence: "Higher tax collections resulted in a corporate budget **surplus**.", hint: "An amount of something left over when requirements have been met." },
      { id: 7, word: "Index", options: ["Sales tax", "Performance tracker", "Bank ledger"], correct: "Performance tracker", sentence: "The consumer price **index** is used to measure national inflation.", hint: "An indicator, sign, or measure of something; performance tracker." },
      { id: 8, word: "Fiscal", options: ["Local community", "Tax and spend policy", "Sales campaign"], correct: "Tax and spend policy", sentence: "The government announced its new **fiscal** policy for the coming year.", hint: "Relating to government revenue, especially taxes." },
      { id: 9, word: "Currency", options: ["Trade deficit", "Money system", "Bank vault"], correct: "Money system", sentence: "The euro is the official **currency** of many European countries.", hint: "A system of money in common use in a country." },
      { id: 10, word: "Consumer", options: ["Retail vendor", "Buyer of goods", "Wholesale supplier"], correct: "Buyer of goods", sentence: "The new tax policy will directly affect average **consumer** prices.", hint: "A person who purchases goods and services for personal use." }
    ]
  },
  {
    title: "Travel & Leisure",
    questions: [
      { id: 1, word: "Destination", options: ["Starting point", "Flight ticket", "End point of trip"], correct: "End point of trip", sentence: "Rome is a very popular travel **destination** for history lovers.", hint: "The place to which someone or something is going or being sent." },
      { id: 2, word: "Excursion", options: ["Flight delay", "Short outing", "Hotel check-in"], correct: "Short outing", sentence: "We took a weekend **excursion** to see the mountain lake.", hint: "A short journey or trip, especially one engaged in as a leisure activity." },
      { id: 3, word: "Hospitality", options: ["Airport customs", "Transport system", "Guest services"], correct: "Guest services", sentence: "The resort staff is famous for their warm and generous **hospitality**.", hint: "The friendly and generous reception and entertainment of guests, visitors, or strangers." },
      { id: 4, word: "Itinerary", options: ["Passport passport", "Travel timeline", "Flight ticket"], correct: "Travel timeline", sentence: "The tourist checked her travel **itinerary** to see the next stop.", hint: "A planned route or journey; timeline of events." },
      { id: 5, word: "Transit", options: ["Staying at resort", "Passport control", "Passing through place"], correct: "Passing through place", sentence: "Our baggage was lost while in **transit** between Paris and London.", hint: "The carrying of people or things from one place to another." },
      { id: 6, word: "Passport", options: ["Boarding pass", "Travel permission", "Driver license"], correct: "Travel permission", sentence: "Keep your **passport** safe while traveling in a foreign country.", hint: "An official document certifying the holder's identity and citizenship." },
      { id: 7, word: "Booking", options: ["Reservation confirmation", "Airport terminal", "Hotel receipt"], correct: "Reservation confirmation", sentence: "Please print your hotel **booking** details for verification.", hint: "An act of reserving accommodation, a ticket, etc." },
      { id: 8, word: "Terminal", options: ["Luggage bag", "Airport runway", "Station gate end"], correct: "Station gate end", sentence: "The train pulled into the central passenger **terminal**.", hint: "The departure and arrival building at an airport or station." },
      { id: 9, word: "Baggage", options: ["Traveler suitcases", "Airport tickets", "Souvenirs"], correct: "Traveler suitcases", sentence: "The airline placed our **baggage** on the wrong flight.", hint: "Suitcases or bags containing personal belongings packed for travel." },
      { id: 10, word: "Keepsake", options: ["Price discount", "Flight ticket", "Memory keepsake"], correct: "Memory keepsake", sentence: "I bought a small wooden box as a travel **keepsake** from Switzerland.", hint: "A small item kept in memory of a person or event; souvenir." }
    ]
  },
  {
    title: "Arts & Literature",
    questions: [
      { id: 1, word: "Narrative", options: ["Poetry rhythm", "Character role", "Story account"], correct: "Story account", sentence: "The novel has a fascinating first-person **narrative**.", hint: "A spoken or written account of connected events; a story." },
      { id: 2, word: "Protagonist", options: ["Evil villain", "Secondary actor", "Main character"], correct: "Main character", sentence: "Harry Potter is the primary **protagonist** of the fantasy series.", hint: "The leading character or one of the major characters in a drama, movie, novel, or other fictional text." },
      { id: 3, word: "Metaphor", options: ["Literal sentence", "Comparison phrase", "Spelling error"], correct: "Comparison phrase", sentence: "The phrase 'time is a thief' is a famous literary **metaphor**.", hint: "A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." },
      { id: 4, word: "Genre", options: ["Creative process", "Style category", "Story plot"], correct: "Style category", sentence: "Mystery is a highly popular **genre** of modern fiction.", hint: "A category of artistic composition, characterized by similarities in form, style, or subject matter." },
      { id: 5, word: "Anthology", options: ["Book collection", "Author biography", "Literary review"], correct: "Book collection", sentence: "The professor published an **anthology** of short classic stories.", hint: "A published collection of poems or other pieces of writing." },
      { id: 6, word: "Motif", options: ["Main protagonist", "Plot twist", "Recurring theme"], correct: "Recurring theme", sentence: "Water is a recurring **motif** used throughout the poem.", hint: "A decorative design or pattern; a dominant or recurring idea or image in an artistic work." },
      { id: 7, word: "Perspective", options: ["Story timeline", "Viewpoint angle", "Book printing"], correct: "Viewpoint angle", sentence: "The story is told from the unique **perspective** of a young child.", hint: "A particular attitude toward or way of regarding something; a point of view." },
      { id: 8, word: "Dialogue", options: ["Character speech", "Stage background", "Story chapter"], correct: "Character speech", sentence: "The play features very witty and engaging **dialogue** between the characters.", hint: "Conversation between two or more people as a feature of a book, play, or movie." },
      { id: 9, word: "Adaptation", options: ["Copy version", "Remade version", "Original manuscript"], correct: "Remade version", sentence: "The movie is a wonderful cinematic **adaptation** of the famous novel.", hint: "A movie, television drama, or play that has been portrayed from another written work." },
      { id: 10, word: "Manuscript", options: ["Library bookshelf", "Printed novel", "Written text draft"], correct: "Written text draft", sentence: "The author sent her completed book **manuscript** to the publisher.", hint: "A book, document, or piece of music written by hand rather than typed or printed." }
    ]
  },
  {
    title: "Wellness & Mind",
    questions: [
      { id: 1, word: "Stress", options: ["Sleepiness", "Happiness", "Mental pressure"], correct: "Mental pressure", sentence: "A heavy workload can cause a lot of emotional **stress**.", hint: "A state of mental or emotional strain or tension resulting from adverse circumstances." },
      { id: 2, word: "Resilience", options: ["Weakness", "Bouncing back ability", "Physical size"], correct: "Bouncing back ability", sentence: "Her mental **resilience** helped her stay calm and recover after the failure.", hint: "The capacity to recover quickly from difficulties; toughness." },
      { id: 3, word: "Cognition", options: ["Physical workout", "Emotional outburst", "Thinking processes"], correct: "Thinking processes", sentence: "The science course studied human **cognition** and memory patterns.", hint: "The mental action or process of acquiring knowledge and understanding." },
      { id: 4, word: "Perception", options: ["Senses interpretation", "Reality itself", "Dreams in sleep"], correct: "Senses interpretation", sentence: "Our **perception** of temperature can vary depending on humidity.", hint: "The ability to see, hear, or become aware of something through the senses." },
      { id: 5, word: "Motivation", options: ["Personal doubt", "Physical speed", "Drive to act"], correct: "Drive to act", sentence: "His primary **motivation** for exercising was to improve his physical health.", hint: "The reason or reasons one has for acting or behaving in a particular way." },
      { id: 6, word: "Behavior", options: ["Inner thoughts", "Outer actions", "Dreams in sleep"], correct: "Outer actions", sentence: "The teacher praised the students' excellent classroom **behavior**.", hint: "The way in which one acts or conducts oneself, especially toward others." },
      { id: 7, word: "Emotion", options: ["Physical touch", "Feeling state", "Logical opinion"], correct: "Feeling state", sentence: "Love, anger, and happiness are common types of **emotion**.", hint: "A strong feeling deriving from one's circumstances, mood, or relationships with others." },
      { id: 8, word: "Therapy", options: ["Surgical exam", "Healing counseling", "Painkiller medicine"], correct: "Healing counseling", sentence: "Cognitive behavioral **therapy** is a very effective mental health treatment.", hint: "Treatment intended to relieve or heal a disorder." },
      { id: 9, word: "Empathy", options: ["Personal anger", "Selfish attitude", "Understanding others"], correct: "Understanding others", sentence: "Showing **empathy** is essential for building strong professional relationships.", hint: "The ability to understand and share the feelings of another." },
      { id: 10, word: "Mindfulness", options: ["Sleepiness", "Present awareness", "Memory recall"], correct: "Present awareness", sentence: "Practicing **mindfulness** meditation can help calm your busy mind.", hint: "The quality or state of being conscious or aware of something; present-moment focus." }
    ]
  }
];
