import { monthlyPracticeEngine, getMonthlyName } from './utils/monthlyEngine';

export interface GrammarQuestion {
  id: number;
  question: string;
  sentenceWithBlank?: string;
  options: { id: string; text: string; isCorrect: boolean; explanation: string }[];
  hint?: string;
  ruleTip?: string;
}

export interface NounPronounTopic {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  keyRule: string;
  formula?: string;
  examples: string[];
}

export const NOUN_PRONOUN_TOPICS: NounPronounTopic[] = [
  {
    id: 'subject_pronouns',
    title: 'Subject Pronouns',
    subtitle: 'I, you, he, she, it, we, they',
    badge: '7 Forms',
    description: 'Subject pronouns replace the subject noun (the person or thing doing the action in a sentence).',
    keyRule: 'Subject pronouns always come BEFORE the main verb: [Pronoun] + [Verb].',
    examples: ['I am a student.', 'She works in a hospital.', 'They live in London.']
  },
  {
    id: 'object_pronouns',
    title: 'Object Pronouns',
    subtitle: 'me, you, him, her, it, us, them',
    badge: '7 Forms',
    description: 'Object pronouns receive the action of the verb or come after prepositions (to, with, for, at, about, behind, from).',
    keyRule: 'Object pronouns come AFTER the verb or preposition: [Verb/Preposition] + [Object Pronoun].',
    examples: ['Can you help me?', 'I called him yesterday.', 'Listen to us.', 'Give it to them.']
  },
  {
    id: 'possessive_adjectives',
    title: 'Possessive Adjectives',
    subtitle: 'my, your, his, her, its, our, their',
    badge: '7 Forms',
    description: 'Possessive adjectives show ownership and MUST be followed directly by a noun.',
    keyRule: 'Always followed by a noun: [Possessive Adj] + [Noun]. Never used alone without a noun.',
    examples: ['This is my notebook.', 'Her car is blue.', 'Our house is near the park.', 'The cat licked its paws.']
  },
  {
    id: 'possessive_pronouns',
    title: 'Possessive Pronouns',
    subtitle: 'mine, yours, his, hers, ours, theirs',
    badge: '6 Forms',
    description: 'Possessive pronouns replace both the possessive adjective and the noun so you do not repeat the noun.',
    keyRule: 'Used ALONE without a noun following it: "This jacket is mine" (not "mine jacket").',
    examples: ['That bag is mine.', 'Is this pen yours?', 'The victory is ours.', 'This laptop is his.']
  },
  {
    id: 'possessive_s',
    title: "Possessive 's",
    subtitle: "John's car, Sarah's books, parents' house, children's toys",
    badge: "'s & s'",
    description: "Add apostrophe + s ('s) to singular nouns and irregular plurals, and apostrophe only (') to regular plural nouns ending in -s to show ownership.",
    keyRule: "Singular: [Name/Noun] + 's (Tom's dog). Regular Plural: [Nouns] + ' (my parents' house). Irregular Plural: [Noun] + 's (children's toys).",
    examples: ["This is Peter's laptop.", "My brother's name is Leo.", "The students' teacher is kind.", "The women's meeting is at 3 PM."]
  },
  {
    id: 'singular_plural_nouns',
    title: 'Singular & Plural Nouns',
    subtitle: 'Regular (-s, -es, -ies, -ves) / Irregular (man/men, child/children, person/people)',
    badge: 'Number Forms',
    description: 'Nouns change form from one (singular) to more than one (plural). Most take -s, while others follow spelling rules or have irregular vowel changes.',
    keyRule: 'Regular: book -> books, bus -> buses, city -> cities, leaf -> leaves. Irregular: child -> children, man -> men, woman -> women, foot -> feet, person -> people, mouse -> mice, tooth -> teeth.',
    examples: ['One child -> three children', 'A book -> two books', 'One person -> many people', 'One city -> five cities']
  },
  {
    id: 'demonstratives',
    title: 'Demonstratives',
    subtitle: 'this, that, these, those',
    badge: '4 Pointers',
    description: 'Demonstratives point to specific items based on physical or temporal distance (Near vs. Far) and quantity (Singular vs. Plural).',
    keyRule: 'Near: This (singular), These (plural). Far: That (singular), Those (plural).',
    examples: ['This apple here is sweet.', 'That car over there is fast.', 'These shoes on my feet are comfortable.', 'Those mountains on the horizon are high.']
  }
];

// Helper deterministic generator with monthly content rotation
export function getStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'subject_pronouns':
      return generateSubjectPronounQuestions(starNumber, mSeed);
    case 'object_pronouns':
      return generateObjectPronounQuestions(starNumber, mSeed);
    case 'possessive_adjectives':
      return generatePossessiveAdjectiveQuestions(starNumber, mSeed);
    case 'possessive_pronouns':
      return generatePossessivePronounQuestions(starNumber, mSeed);
    case 'possessive_s':
      return generatePossessiveSQuestions(starNumber, mSeed);
    case 'singular_plural_nouns':
      return generateSingularPluralQuestions(starNumber, mSeed);
    case 'demonstratives':
      return generateDemonstrativeQuestions(starNumber, mSeed);
    default:
      return generateSubjectPronounQuestions(starNumber, mSeed);
  }
}

// 1. Subject Pronouns Questions (I, you, he, she, it, we, they)
function generateSubjectPronounQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { target: 'She', name: 'Dr. Maria Lopez', verb: 'works as a surgeon in the regional hospital', wrong: ['He', 'They', 'It'], note: 'Dr. Maria Lopez is a female singular person -> "She".' },
    { target: 'They', name: 'Tom and Jerry', verb: 'are playing football in the neighborhood park', wrong: ['He', 'We', 'She'], note: 'Tom and Jerry are two people (third-person plural) -> "They".' },
    { target: 'It', name: 'The Persian cat', verb: 'is resting quietly on the warm sofa', wrong: ['He', 'They', 'We'], note: 'A single animal uses the pronoun "It".' },
    { target: 'We', name: 'My sister and I', verb: 'are preparing a homemade Italian dinner', wrong: ['They', 'You', 'She'], note: '"My sister and I" includes the speaker -> "We".' },
    { target: 'He', name: 'Engineer David', verb: 'designs aerospace components for commercial planes', wrong: ['She', 'They', 'It'], note: 'David is a male singular person -> "He".' },
    { target: 'I', name: 'The speaker', verb: 'am delighted to participate in this educational program', wrong: ['He', 'She', 'They'], note: 'The verb "am" always pairs with the subject pronoun "I".' },
    { target: 'You', name: 'The listener', verb: 'are eligible to join the university robotics club', wrong: ['He', 'It', 'She'], note: 'Direct address to the listener takes "You".' },
    { target: 'They', name: 'The science textbooks', verb: 'are placed on the top library shelf', wrong: ['It', 'He', 'She'], note: 'Plural inanimate objects ("textbooks") use "They".' },
    { target: 'She', name: 'Professor Eleanor', verb: 'lectures on ancient Mediterranean history', wrong: ['He', 'It', 'They'], note: 'Professor Eleanor (female singular) -> "She".' },
    { target: 'He', name: 'Architect Samuel', verb: 'created the blueprint for the new museum', wrong: ['They', 'She', 'It'], note: 'Samuel (male singular) -> "He".' },
    { target: 'It', name: 'The morning weather', verb: 'is pleasant with a gentle cool breeze', wrong: ['She', 'They', 'We'], note: 'Weather conditions use "It".' },
    { target: 'We', name: 'Lucas and I', verb: 'often study together in the campus cafeteria', wrong: ['They', 'You', 'He'], note: '"Lucas and I" equals the subject pronoun "We".' },
    { target: 'They', name: 'The energetic children', verb: 'are building a sandcastle by the seashore', wrong: ['He', 'It', 'She'], note: '"Children" is plural, so replace with "They".' },
    { target: 'He', name: 'Uncle Benjamin', verb: 'travels abroad three times every summer', wrong: ['She', 'It', 'We'], note: 'Uncle Benjamin (male relative) -> "He".' },
    { target: 'She', name: 'Violinist Sophia', verb: 'performed a breathtaking classical solo', wrong: ['He', 'They', 'It'], note: 'Sophia (female musician) -> "She".' },
    { target: 'It', name: 'The smart thermostat', verb: 'automatically regulates room temperature', wrong: ['He', 'She', 'They'], note: 'A single device/machine uses "It".' },
    { target: 'They', name: 'The international tourists', verb: 'are admiring the historic cathedral architecture', wrong: ['He', 'It', 'She'], note: 'Plural people ("tourists") -> "They".' },
    { target: 'We', name: 'My family and I', verb: 'plan to visit the national park this weekend', wrong: ['They', 'He', 'She'], note: '"My family and I" includes myself -> "We".' },
    { target: 'He', name: 'Coach Marcus', verb: 'trains the junior basketball athletes every evening', wrong: ['She', 'They', 'It'], note: 'Coach Marcus (male singular) -> "He".' },
    { target: 'She', name: 'The pharmacist', verb: 'explained how to take the prescribed medication safely', wrong: ['They', 'It', 'He'], note: 'Female singular healthcare worker -> "She".' },
    { target: 'They', name: 'The autumn leaves', verb: 'fall gently onto the paved garden walkway', wrong: ['It', 'He', 'She'], note: 'Plural objects ("leaves") -> "They".' },
    { target: 'It', name: 'The red sports car', verb: 'accelerates smoothly on the open highway', wrong: ['He', 'She', 'They'], note: 'A single vehicle uses "It".' },
    { target: 'We', name: 'My colleagues and I', verb: 'submitted the quarterly progress report on time', wrong: ['They', 'You', 'She'], note: 'Speaker and colleagues -> "We".' },
    { target: 'He', name: 'Chef Antonio', verb: 'bakes fresh sourdough bread early every morning', wrong: ['She', 'They', 'It'], note: 'Chef Antonio (male singular) -> "He".' },
    { target: 'She', name: 'Flight attendant Chloe', verb: 'welcomed passengers aboard the airplane', wrong: ['He', 'They', 'It'], note: 'Chloe (female singular) -> "She".' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 7 + mSeed * 11) % pool.length;
    const c = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: c.target, isCorrect: true, explanation: `Correct! ${c.note}` },
      ...c.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" does not agree with the subject "${c.name}".` }))
    ].sort(() => 0.5 - ((idx * 7 + star + mSeed + 1) % 3) / 2);

    return {
      id: qNum,
      question: `Choose the correct subject pronoun to replace "${c.name}":`,
      sentenceWithBlank: `_____ ${c.verb}.`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Determine if "${c.name}" is singular/plural, male/female/thing, and whether it includes "I".`,
      ruleTip: 'Subject pronouns come BEFORE the verb: I, you, he, she, it, we, they.'
    };
  });
}

// 2. Object Pronouns Questions (me, you, him, her, it, us, them)
function generateObjectPronounQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { stem: 'I forgot where I put my car keys. Have you seen', target: 'them', wrong: ['they', 'their', 'theirs'], referent: 'my car keys (plural objects)', isQuestion: true },
    { stem: 'Professor Alan is in the conference room. Please give this document to', target: 'him', wrong: ['he', 'his', 'himself'], referent: 'Professor Alan (male singular)', isQuestion: false },
    { stem: 'Dr. Rebecca is available right now. You can consult', target: 'her', wrong: ['she', 'hers', 'their'], referent: 'Dr. Rebecca (female singular)', isQuestion: false },
    { stem: 'Our grandparents are arriving at the train station. Let\'s go welcome', target: 'them', wrong: ['they', 'their', 'theirs'], referent: 'grandparents (plural)', isQuestion: false },
    { stem: 'I found an interesting article online. Would you like to read', target: 'it', wrong: ['him', 'them', 'her'], referent: 'the article (singular object)', isQuestion: true },
    { stem: 'We are unfamiliar with this campus. Could you guide', target: 'us', wrong: ['we', 'our', 'ours'], referent: 'we (the speaker and others)', isQuestion: true },
    { stem: 'I am standing right next to the entrance. Do you see', target: 'me', wrong: ['I', 'my', 'mine'], referent: 'I (the speaker)', isQuestion: true },
    { stem: 'Mr. Henderson invited my brother and me to visit', target: 'him', wrong: ['he', 'his', 'they'], referent: 'Mr. Henderson (male singular)', isQuestion: false },
    { stem: 'Look at those rescued kittens! The shelter wants to find homes for', target: 'them', wrong: ['they', 'it', 'their'], referent: 'kittens (plural)', isQuestion: false },
    { stem: 'Laura has an exam tomorrow. We wished', target: 'her', wrong: ['she', 'hers', 'him'], referent: 'Laura (female)', isQuestion: false },
    { stem: 'Here is your hot chamomile tea. Drink', target: 'it', wrong: ['he', 'them', 'him'], referent: 'tea (singular item)', isQuestion: false },
    { stem: 'The supervisor assigned the urgent task to all of', target: 'us', wrong: ['we', 'our', 'ours'], referent: 'we -> us after preposition "of"', isQuestion: false },
    { stem: 'Can you please explain this algebraic formula to', target: 'me', wrong: ['I', 'my', 'mine'], referent: 'I -> me after preposition "to"', isQuestion: true },
    { stem: 'Daniel is waiting outside the library. Please go tell', target: 'him', wrong: ['he', 'his', 'they'], referent: 'Daniel (male)', isQuestion: false },
    { stem: 'The tour guide described the historical monuments to', target: 'them', wrong: ['they', 'their', 'theirs'], referent: 'tourists (plural)', isQuestion: false },
    { stem: 'My mother baked fresh blueberry muffins. Would you like to taste', target: 'them', wrong: ['they', 'it', 'their'], referent: 'muffins (plural)', isQuestion: true },
    { stem: 'Natalie mislaid her train ticket. We helped', target: 'her', wrong: ['she', 'hers', 'him'], referent: 'Natalie (female)', isQuestion: false },
    { stem: 'Where is your winter coat? You left', target: 'it', wrong: ['him', 'her', 'them'], referent: 'coat (singular thing)', isQuestion: false },
    { stem: 'The director scheduled a meeting with both of', target: 'us', wrong: ['we', 'our', 'ours'], referent: 'we -> us', isQuestion: false },
    { stem: 'The phone rang three times before I answered', target: 'it', wrong: ['him', 'them', 'her'], referent: 'the phone (thing)', isQuestion: false },
    { stem: 'The coach called all the soccer players and praised', target: 'them', wrong: ['they', 'their', 'theirs'], referent: 'players (plural)', isQuestion: false },
    { stem: 'I don\'t understand this paragraph. Can you translate', target: 'it', wrong: ['him', 'them', 'her'], referent: 'paragraph (thing)', isQuestion: true },
    { stem: 'Liam received a promotion at work. Send a congratulations message to', target: 'him', wrong: ['he', 'his', 'himself'], referent: 'Liam (male)', isQuestion: false },
    { stem: 'Rachel is celebrating her graduation. We brought a special gift for', target: 'her', wrong: ['she', 'hers', 'him'], referent: 'Rachel (female)', isQuestion: false }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 5 + mSeed * 7) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const punct = itm.isQuestion ? '?' : '.';
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! Use the object pronoun "${itm.target}" to replace ${itm.referent}.` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" cannot function as an object pronoun here.` }))
    ].sort(() => 0.5 - ((idx * 5 + star + mSeed + 2) % 3) / 2);

    return {
      id: qNum,
      question: `Select the correct object pronoun to complete the sentence:`,
      sentenceWithBlank: `${itm.stem} _____ ${punct}`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Object pronouns (me, you, him, her, it, us, them) follow action verbs and prepositions.`,
      ruleTip: 'Verb/Preposition + Object Pronoun (e.g. call him, listen to her, help us).'
    };
  });
}

// 3. Possessive Adjectives Questions (my, your, his, her, its, our, their)
function generatePossessiveAdjectiveQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { firstSentence: 'I ride an electric scooter to school.', target: 'My', wrong: ['Mine', 'Me', 'I'], nounPhrase: 'scooter is very eco-friendly.', note: 'I -> My + noun' },
    { firstSentence: 'You have a fantastic presentation style.', target: 'Your', wrong: ['Yours', 'You', 'You\'re'], nounPhrase: 'slides look clean and professional.', note: 'You -> Your + noun' },
    { firstSentence: 'Julian bought a new sports motorcycle.', target: 'His', wrong: ['He', 'Him', 'His\'s'], nounPhrase: 'helmet matches the bike.', note: 'Julian (he) -> His + noun' },
    { firstSentence: 'Claire loves classical painting.', target: 'Her', wrong: ['Hers', 'She', 'Him'], nounPhrase: 'artwork is displayed in the gallery.', note: 'Claire (she) -> Her + noun' },
    { firstSentence: 'The peacock opened all its feathers.', target: 'Its', wrong: ['It\'s', 'Their', 'Theirs'], nounPhrase: 'plumage is bright and colorful.', note: 'Animal/Thing -> Its (no apostrophe) + noun' },
    { firstSentence: 'We live in an energy-efficient apartment.', target: 'Our', wrong: ['Ours', 'Us', 'We'], nounPhrase: 'building has solar panels.', note: 'We -> Our + noun' },
    { firstSentence: 'The researchers published their findings.', target: 'Their', wrong: ['Theirs', 'There', 'They\'re'], nounPhrase: 'study won a prestigious award.', note: 'They -> Their + noun' },
    { firstSentence: 'I washed my hands before eating.', target: 'My', wrong: ['Mine', 'Me', 'I'], nounPhrase: 'fingers were clean and dry.', note: 'I -> My' },
    { firstSentence: 'Victoria combed her brown hair.', target: 'Her', wrong: ['Hers', 'She', 'Him'], nounPhrase: 'hair looks very shiny today.', note: 'Victoria (she) -> Her' },
    { firstSentence: 'Ethan repaired his broken watch.', target: 'His', wrong: ['He', 'Him', 'Her'], nounPhrase: 'watch is working perfectly now.', note: 'Ethan (he) -> His' },
    { firstSentence: 'The bank upgraded its online mobile app.', target: 'Its', wrong: ['It\'s', 'Their', 'Hers'], nounPhrase: 'security features are advanced.', note: 'The bank (singular institution) -> Its' },
    { firstSentence: 'We packed our luggage carefully.', target: 'Our', wrong: ['Ours', 'Us', 'We'], nounPhrase: 'bags are ready for departure.', note: 'We -> Our' },
    { firstSentence: 'The students brought scientific calculators.', target: 'Their', wrong: ['Theirs', 'They', 'Themself'], nounPhrase: 'devices were fully charged.', note: 'Students (they) -> Their' },
    { firstSentence: 'Did you finish your research paper?', target: 'Your', wrong: ['Yours', 'You', 'You\'re'], nounPhrase: 'draft is due tomorrow morning.', note: 'You -> Your' },
    { firstSentence: 'Oliver parked his hybrid car in the garage.', target: 'His', wrong: ['He', 'Him', 'Hers'], nounPhrase: 'vehicle is charging overnight.', note: 'Oliver (he) -> His' },
    { firstSentence: 'Amelia greeted her kindergarten teacher warmly.', target: 'Her', wrong: ['Hers', 'She', 'His'], nounPhrase: 'smile was radiant and cheerful.', note: 'Amelia (she) -> Her' },
    { firstSentence: 'The swallow constructed a mud nest under the roof.', target: 'Its', wrong: ['It\'s', 'Their', 'His'], nounPhrase: 'nest is safe from the rain.', note: 'The bird -> Its' },
    { firstSentence: 'We take great pride in our university history.', target: 'Our', wrong: ['Ours', 'Us', 'We'], nounPhrase: 'campus was founded over a century ago.', note: 'We -> Our' },
    { firstSentence: 'The gardeners watered their vegetable patches.', target: 'Their', wrong: ['Theirs', 'There', 'Them'], nounPhrase: 'crops are growing vigorously.', note: 'Gardeners (they) -> Their' },
    { firstSentence: 'I misplaced my pair of reading glasses.', target: 'My', wrong: ['Mine', 'Me', 'I'], nounPhrase: 'vision is slightly blurry without them.', note: 'I -> My' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 9) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.note}. Possessive adjectives always come immediately before a noun.` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" cannot be used as a possessive adjective here.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 3) % 3) / 2);

    return {
      id: qNum,
      question: `Choose the correct possessive adjective for the second sentence:`,
      sentenceWithBlank: `${itm.firstSentence} _____ ${itm.nounPhrase}`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Possessive adjectives (my, your, his, her, its, our, their) must have a noun right after them.`,
      ruleTip: '[Possessive Adjective] + [Noun] (e.g., my book, her car, our classroom).'
    };
  });
}

// 4. Possessive Pronouns Questions (mine, yours, his, hers, ours, theirs)
function generatePossessivePronounQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { context: 'This blue backpack belongs to me. It is', target: 'mine', wrong: ['my', 'me', 'mines'], note: 'Replaces "my backpack" -> mine.', isQuestion: false },
    { context: 'I have found my laboratory notebook, but where is', target: 'yours', wrong: ['your', 'your\'s', 'you'], note: 'Replaces "your notebook" -> yours.', isQuestion: true },
    { context: 'That silver digital camera belongs to Helen. It is', target: 'hers', wrong: ['her', 'her\'s', 'she'], note: 'Replaces "her camera" -> hers.', isQuestion: false },
    { context: 'This black umbrella was left by Arthur. It is', target: 'his', wrong: ['him', 'his\'s', 'he'], note: 'Replaces "his umbrella" -> his.', isQuestion: false },
    { context: 'That cozy countryside cottage belongs to our family. It is', target: 'ours', wrong: ['our', 'our\'s', 'us'], note: 'Replaces "our cottage" -> ours.', isQuestion: false },
    { context: 'Those boarding passes belong to Jack and Jill. They are', target: 'theirs', wrong: ['their', 'their\'s', 'them'], note: 'Replaces "their passes" -> theirs.', isQuestion: false },
    { context: 'I have shown my ticket to the inspector; now show', target: 'yours', wrong: ['your', 'you', 'yours\''], note: 'Yours = your ticket.', isQuestion: false },
    { context: 'Her winter coat is burgundy, while', target: 'mine', wrong: ['my', 'me', 'I'], note: 'Mine = my coat.', isQuestion: false },
    { context: 'My smartphone is fully charged, but Sarah cannot find', target: 'hers', wrong: ['her', 'her\'s', 'she'], note: 'Hers = her smartphone.', isQuestion: false },
    { context: 'Our swimming pool is small, whereas', target: 'theirs', wrong: ['their', 'them', 'they'], note: 'Theirs = their pool.', isQuestion: false },
    { context: 'Is this insulated water bottle', target: 'yours', wrong: ['your', 'you', 'you\'re'], note: 'Yours stands alone at the end of a question.', isQuestion: true },
    { context: 'You took my scientific calculator by mistake; this one is', target: 'mine', wrong: ['my', 'me', 'mines'], note: 'Mine = my calculator.', isQuestion: false },
    { context: 'David located his house keys, but Emma still searched for', target: 'hers', wrong: ['her', 'her\'s', 'she'], note: 'Hers = her keys.', isQuestion: false },
    { context: 'We parked our hybrid vehicle next to', target: 'theirs', wrong: ['their', 'there', 'they'], note: 'Theirs = their vehicle.', isQuestion: false },
    { context: 'Your pencil sketch is good, but the winning artwork is', target: 'his', wrong: ['he', 'him', 'his\'s'], note: 'His = his artwork.', isQuestion: false },
    { context: 'This championship trophy isn\'t just for one player, it is', target: 'ours', wrong: ['our', 'us', 'we'], note: 'Ours = our trophy.', isQuestion: false },
    { context: 'I found a patterned silk scarf on the chair. Is it', target: 'yours', wrong: ['your', 'you', 'your\'s'], note: 'Yours = your scarf.', isQuestion: true },
    { context: 'My espresso is steaming hot, but', target: 'hers', wrong: ['her', 'her\'s', 'she'], note: 'Hers = her espresso.', isQuestion: false },
    { context: 'Their debate team scored well yesterday, and today', target: 'ours', wrong: ['our', 'us', 'our\'s'], note: 'Ours = our team.', isQuestion: false },
    { context: 'Please don\'t eat that slice of chocolate cake, it is', target: 'mine', wrong: ['my', 'me', 'mines'], note: 'Mine = my slice.', isQuestion: false }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 5 + mSeed * 13) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const punct = itm.isQuestion ? '?' : '.';
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.note}. Possessive pronouns stand alone without a following noun.` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" cannot stand alone as a possessive pronoun here.` }))
    ].sort(() => 0.5 - ((idx * 3 + star + mSeed + 1) % 3) / 2);

    return {
      id: qNum,
      question: `Choose the correct possessive pronoun to complete the sentence:`,
      sentenceWithBlank: `${itm.context} _____ ${punct}`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Possessive pronouns (mine, yours, his, hers, ours, theirs) replace [possessive adjective + noun].`,
      ruleTip: 'Never place a noun after a possessive pronoun: "This is mine" (NOT "mine notebook").'
    };
  });
}

// 5. Possessive 's Questions (John's car, parents' house, children's toys)
function generatePossessiveSQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { stem: 'The mountain bicycle belonging to Jonathan', target: "Jonathan's bicycle", wrong: ["Jonathans' bicycle", "Jonathans bicycle", "Jonathan bicycle"], rule: "Singular proper noun + 's" },
    { stem: 'The staff lounge of the teachers (plural teachers)', target: "the teachers' lounge", wrong: ["the teacher's lounge", "the teachers's lounge", "the teachers lounge"], rule: "Regular plural ending in -s takes only an apostrophe: teachers'" },
    { stem: 'The wooden toys of the children (irregular plural)', target: "the children's toys", wrong: ["the childrens' toys", "the childrens toys", "the child's toys"], rule: "Irregular plural not ending in -s takes 's: children's" },
    { stem: 'The modern suburban home of my parents', target: "my parents' home", wrong: ["my parent's home", "my parents's home", "my parents home"], rule: "Plural ending in -s takes an apostrophe only: parents'" },
    { stem: 'The laptop belonging to Sarah', target: "Sarah's laptop", wrong: ["Sarahs' laptop", "Sarahs laptop", "Sarah laptop"], rule: "Singular name + 's: Sarah's" },
    { stem: 'The surgical clinic of the doctor', target: "the doctor's clinic", wrong: ["the doctors' clinic", "the doctors clinic", "the doctor clinic"], rule: "Singular noun + 's" },
    { stem: 'The tailored suits of the business men (irregular plural)', target: "the men's suits", wrong: ["the mens' suits", "the mens suits", "the man's suits"], rule: "Irregular plural takes 's: men's" },
    { stem: 'The academic essays of the students (multiple students)', target: "the students' essays", wrong: ["the student's essays", "the students's essays", "the students essays"], rule: "Plural students + ' = students'" },
    { stem: 'The new smartphone of my brother', target: "my brother's smartphone", wrong: ["my brothers' smartphone", "my brothers smartphone", "my brother smartphone"], rule: "Singular noun: brother's" },
    { stem: 'The evening dresses of the women (irregular plural)', target: "the women's dresses", wrong: ["the womens' dresses", "the womens dresses", "the woman's dresses"], rule: "Irregular plural takes 's: women's" },
    { stem: 'The leather collar of the dog (one dog)', target: "the dog's collar", wrong: ["the dogs' collar", "the dogs collar", "the dog collar"], rule: "Singular: dog's" },
    { stem: 'The elevated nest of the migratory birds (many birds)', target: "the birds' nest", wrong: ["the bird's nest", "the birds's nest", "the birds nest"], rule: "Plural: birds'" },
    { stem: 'The corner office of Director Davis', target: "Director Davis's office", wrong: ["Director Davises office", "Director Davis office", "Director Davises's office"], rule: "Singular proper noun ending in s takes 's: Davis's" },
    { stem: 'The science project of the boys (plural)', target: "the boys' project", wrong: ["the boy's project", "the boys's project", "the boys project"], rule: "Plural boys + ' = boys'" },
    { stem: 'The collective rights of all people (irregular plural)', target: "the people's rights", wrong: ["the peoples' rights", "the peoples rights", "the person's rights"], rule: "Irregular plural takes 's: people's" },
    { stem: 'The fluffy tail of the kitten (one kitten)', target: "the kitten's tail", wrong: ["the kittens' tail", "the kittens tail", "the kitten tail"], rule: "Singular: kitten's" },
    { stem: 'The acoustic guitars of the musicians (plural musicians)', target: "the musicians' guitars", wrong: ["the musician's guitars", "the musicians's guitars", "the musicians guitars"], rule: "Plural musicians + ' = musicians'" },
    { stem: 'The car keys belonging to Michael', target: "Michael's keys", wrong: ["Michaels' keys", "Michaels keys", "Michael keys"], rule: "Singular proper noun: Michael's" },
    { stem: 'The colorful nursery of the twin babies (plural)', target: "the babies' nursery", wrong: ["the baby's nursery", "the babies's nursery", "the babies nursery"], rule: "Plural babies + ' = babies'" },
    { stem: 'The executive decision of the company boss', target: "the boss's decision", wrong: ["the bosses decision", "the boss decision", "the bosses's decision"], rule: "Singular noun ending in ss takes 's: boss's" }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 11) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.rule}.` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" does not follow the correct apostrophe possession rule.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 2) % 3) / 2);

    return {
      id: qNum,
      question: `What is the correct possessive form of "${itm.stem}"?`,
      sentenceWithBlank: `This is _____ .`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Singular noun -> 's. Regular plural ending in s -> ' only. Irregular plural (children, men, people) -> 's.`,
      ruleTip: "Singular: John's book. Regular Plural: parents' house. Irregular Plural: children's toys."
    };
  });
}

// 6. Singular & Plural Nouns Questions (Regular & Irregular)
function generateSingularPluralQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { singular: 'child', plural: 'children', wrong: ['childs', 'childrens', 'childes'], type: 'Irregular' },
    { singular: 'city', plural: 'cities', wrong: ['citys', 'cityes', 'citiess'], type: 'Consonant + y -> -ies' },
    { singular: 'man', plural: 'men', wrong: ['mans', 'mens', 'manes'], type: 'Irregular vowel change' },
    { singular: 'woman', plural: 'women', wrong: ['womans', 'womens', 'womanes'], type: 'Irregular vowel change' },
    { singular: 'box', plural: 'boxes', wrong: ['boxs', 'boxies', 'boxxen'], type: 'Ends in -x -> -es' },
    { singular: 'bus', plural: 'buses', wrong: ['buss', 'busies', 'bussies'], type: 'Ends in -s -> -es' },
    { singular: 'person', plural: 'people', wrong: ['persons', 'peoples', 'persones'], type: 'Irregular' },
    { singular: 'tooth', plural: 'teeth', wrong: ['tooths', 'toothes', 'teeths'], type: 'Irregular vowel change' },
    { singular: 'foot', plural: 'feet', wrong: ['foots', 'feets', 'footes'], type: 'Irregular vowel change' },
    { singular: 'leaf', plural: 'leaves', wrong: ['leafs', 'leafes', 'leavs'], type: 'Ends in -f -> -ves' },
    { singular: 'knife', plural: 'knives', wrong: ['knifes', 'knifves', 'knifees'], type: 'Ends in -fe -> -ves' },
    { singular: 'mouse', plural: 'mice', wrong: ['mouses', 'mices', 'mousees'], type: 'Irregular' },
    { singular: 'baby', plural: 'babies', wrong: ['babys', 'babyes', 'babiess'], type: 'Consonant + y -> -ies' },
    { singular: 'tomato', plural: 'tomatoes', wrong: ['tomatos', 'tomatoies', 'tomates'], type: 'Ends in -o -> -es' },
    { singular: 'watch', plural: 'watches', wrong: ['watchs', 'watchies', 'watchses'], type: 'Ends in -ch -> -es' },
    { singular: 'dish', plural: 'dishes', wrong: ['dishs', 'dishies', 'dishses'], type: 'Ends in -sh -> -es' },
    { singular: 'party', plural: 'parties', wrong: ['partys', 'partyes', 'partyies'], type: 'Consonant + y -> -ies' },
    { singular: 'shelf', plural: 'shelves', wrong: ['shelfs', 'shelfes', 'shelvess'], type: 'Ends in -f -> -ves' },
    { singular: 'life', plural: 'lives', wrong: ['lifes', 'lifves', 'livees'], type: 'Ends in -fe -> -ves' },
    { singular: 'country', plural: 'countries', wrong: ['countrys', 'countryes', 'countris'], type: 'Consonant + y -> -ies' },
    { singular: 'wolf', plural: 'wolves', wrong: ['wolfs', 'wolfes', 'wolvs'], type: 'Ends in -f -> -ves' },
    { singular: 'hero', plural: 'heroes', wrong: ['heros', 'heroies', 'heroess'], type: 'Ends in -o -> -es' },
    { singular: 'sandwich', plural: 'sandwiches', wrong: ['sandwichs', 'sandwichies', 'sandwichses'], type: 'Ends in -ch -> -es' },
    { singular: 'story', plural: 'stories', wrong: ['storys', 'storyes', 'storis'], type: 'Consonant + y -> -ies' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 5 + mSeed * 7) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.plural, isCorrect: true, explanation: `Correct! The plural of "${itm.singular}" is "${itm.plural}" (${itm.type}).` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" is not the correct plural spelling for "${itm.singular}".` }))
    ].sort(() => 0.5 - ((idx * 5 + star + mSeed + 1) % 3) / 2);

    return {
      id: qNum,
      question: `What is the plural form of the noun "${itm.singular}"?`,
      sentenceWithBlank: `One ${itm.singular} -> Three _____ .`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Check the ending rule: -s, -es (-ch, -sh, -x, -s, -o), consonant+y -> -ies, -f/-fe -> -ves, or irregular vowel change.`,
      ruleTip: 'Irregular plurals: man->men, woman->women, child->children, person->people, foot->feet, tooth->teeth, mouse->mice.'
    };
  });
}

// 7. Demonstratives Questions (this, that, these, those)
function generateDemonstrativeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { target: 'This', distance: 'near (holding in hand)', quantity: 'singular', noun: 'apple', verb: 'is crisp and juicy', wrong: ['These', 'Those', 'That'] },
    { target: 'That', distance: 'far (across the street)', quantity: 'singular', noun: 'building', verb: 'is the historic town hall', wrong: ['This', 'These', 'Those'] },
    { target: 'These', distance: 'near (here on the desk)', quantity: 'plural', noun: 'documents', verb: 'require your signature', wrong: ['This', 'That', 'Those'] },
    { target: 'Those', distance: 'far (high in the sky)', quantity: 'plural', noun: 'eagles', verb: 'are soaring above the canyon', wrong: ['These', 'This', 'That'] },
    { target: 'This', distance: 'near (drinking right now)', quantity: 'singular', noun: 'coffee', verb: 'has an aromatic hazelnut flavor', wrong: ['These', 'Those', 'That'] },
    { target: 'That', distance: 'far (on the top bookstore shelf)', quantity: 'singular', noun: 'encyclopedia', verb: 'contains rare scientific illustrations', wrong: ['This', 'These', 'Those'] },
    { target: 'These', distance: 'near (in my grocery cart)', quantity: 'plural', noun: 'organic oranges', verb: 'are freshly harvested', wrong: ['This', 'That', 'Those'] },
    { target: 'Those', distance: 'far (on the distant mountainside)', quantity: 'plural', noun: 'pine trees', verb: 'are covered in fresh winter snow', wrong: ['These', 'This', 'That'] },
    { target: 'This', distance: 'near (wearing right now)', quantity: 'singular', noun: 'woolen sweater', verb: 'keeps me warm in chilly weather', wrong: ['These', 'Those', 'That'] },
    { target: 'That', distance: 'far (parked at the far end of the lot)', quantity: 'singular', noun: 'electric SUV', verb: 'belongs to Professor Miller', wrong: ['This', 'These', 'Those'] },
    { target: 'These', distance: 'near (shoes currently on my feet)', quantity: 'plural', noun: 'running shoes', verb: 'provide excellent arch support', wrong: ['This', 'That', 'Those'] },
    { target: 'Those', distance: 'far (dark storm clouds on the horizon)', quantity: 'plural', noun: 'cumulus clouds', verb: 'indicate heavy rain tonight', wrong: ['These', 'This', 'That'] },
    { target: 'This', distance: 'near (holding in palm)', quantity: 'singular', noun: 'photograph', verb: 'was taken during our family vacation', wrong: ['These', 'Those', 'That'] },
    { target: 'That', distance: 'far (hanging on the far museum wall)', quantity: 'singular', noun: 'oil painting', verb: 'was created in the nineteenth century', wrong: ['This', 'These', 'Those'] },
    { target: 'These', distance: 'near (holding in both hands)', quantity: 'plural', noun: 'freshly cut roses', verb: 'have a delightful fragrance', wrong: ['This', 'That', 'Those'] },
    { target: 'Those', distance: 'far (passengers waiting at gate 14)', quantity: 'plural', noun: 'travelers', verb: 'are preparing to board the flight', wrong: ['These', 'This', 'That'] },
    { target: 'This', distance: 'near (sitting on right now)', quantity: 'singular', noun: 'armchair', verb: 'is extremely comfortable for reading', wrong: ['These', 'Those', 'That'] },
    { target: 'That', distance: 'far (peak visible through telescope)', quantity: 'singular', noun: 'alpine peak', verb: 'rises above three thousand meters', wrong: ['This', 'These', 'Those'] },
    { target: 'These', distance: 'near (freshly baked on the counter)', quantity: 'plural', noun: 'chocolate cookies', verb: 'smell absolutely delicious', wrong: ['This', 'That', 'Those'] },
    { target: 'Those', distance: 'far (stars visible in the night sky)', quantity: 'plural', noun: 'constellations', verb: 'are exceptionally clear tonight', wrong: ['These', 'This', 'That'] }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 9) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! Use "${itm.target}" for ${itm.quantity} items that are ${itm.distance}.` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" does not match the ${itm.distance} + ${itm.quantity} context.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 2) % 3) / 2);

    return {
      id: qNum,
      question: `Choose the correct demonstrative (${itm.distance}, ${itm.quantity} "${itm.noun}"):`,
      sentenceWithBlank: `_____ ${itm.noun} ${itm.verb}.`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Near: This (singular), These (plural). Far: That (singular), Those (plural).`,
      ruleTip: 'Singular: This (Near) / That (Far). Plural: These (Near) / Those (Far).'
    };
  });
}

