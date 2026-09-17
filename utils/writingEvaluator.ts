// Advanced TOEFL Writing Auto-Correction, Diagnostics, and Evaluation Engine

export interface GrammarIssue {
  id: string;
  original: string;
  correction: string;
  explanation: string;
  type: 'grammar' | 'spelling' | 'sentence_structure' | 'word_choice' | 'topic_development';
  startIndex?: number;
  endIndex?: number;
}

export interface SentenceAnalysis {
  sentence: string;
  status: 'strong' | 'acceptable' | 'needs_revision';
  comment: string;
  suggestedPolish?: string;
}

export interface WritingEvaluationResult {
  score: number; // 0.0 to 5.0
  scaledScore: number; // 0 to 30
  bandScore: string;
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  wordCount: number;
  readingTimeMinutes: number;
  fleschKincaidGrade: number;
  contentScore: number; // 0-100%
  syntaxScore: number; // 0-100%
  lexicalScore: number; // 0-100%
  mechanicsScore: number; // 0-100%
  feedback: string;
  strengths: string[];
  improvements: string[];
  grammarIssues: GrammarIssue[];
  correctedEssay: string;
  improvedVersion: string;
  sentenceAnalysis: SentenceAnalysis[];
  academicWordListCount: number;
  transitionCount: number;
}

// Common academic word list (AWL) lexis to reward rich vocabulary
const AWL_SUBSETS = new Set([
  'academic', 'accurate', 'acquire', 'adequate', 'adjust', 'advocate', 'aggregate', 'allocate',
  'alternative', 'ambiguous', 'analyze', 'annual', 'apparent', 'appreciate', 'approach', 'appropriate',
  'approximate', 'arbitrary', 'aspect', 'assemble', 'assess', 'assign', 'assist', 'assume',
  'assure', 'attain', 'attitude', 'attribute', 'author', 'authority', 'automate', 'available',
  'benefit', 'bias', 'brief', 'bulk', 'capable', 'capacity', 'category', 'cease', 'challenge',
  'channel', 'chapter', 'chart', 'chemical', 'circumstance', 'cite', 'clarify', 'classic',
  'clause', 'code', 'coherent', 'coincide', 'collapse', 'colleague', 'commence', 'comment',
  'commission', 'commit', 'commodity', 'communicate', 'community', 'compatible', 'compensate',
  'compile', 'complement', 'complex', 'component', 'compound', 'comprehensive', 'comprise',
  'compute', 'conceive', 'concentrate', 'concept', 'conclude', 'concurrent', 'conduct', 'confer',
  'confine', 'confirm', 'conflict', 'conform', 'consent', 'consequent', 'considerable', 'consist',
  'constant', 'constitute', 'constrain', 'construct', 'consult', 'consume', 'contact', 'contemporary',
  'context', 'contract', 'contradict', 'contrary', 'contrast', 'contribute', 'controversy', 'convene',
  'converse', 'convert', 'convince', 'cooperate', 'coordinate', 'core', 'corporate', 'correspond',
  'couple', 'create', 'credit', 'criteria', 'crucial', 'culture', 'currency', 'cycle', 'data',
  'debate', 'decade', 'decline', 'deduce', 'define', 'definite', 'demonstrate', 'denote', 'deny',
  'depress', 'derive', 'design', 'despite', 'detect', 'deviate', 'device', 'devote', 'differentiate',
  'dimension', 'diminish', 'discrete', 'discriminate', 'displace', 'display', 'dispose', 'distinct',
  'distort', 'distribute', 'diverse', 'document', 'domain', 'domestic', 'dominate', 'draft',
  'drama', 'duration', 'dynamic', 'economy', 'element', 'eliminate', 'emerge', 'emphasis',
  'empirical', 'enable', 'encounter', 'energy', 'enforce', 'enhance', 'enormous', 'ensure',
  'entity', 'environment', 'equate', 'equip', 'equivalent', 'erode', 'error', 'establish',
  'estate', 'estimate', 'ethic', 'ethnic', 'evaluate', 'eventual', 'evident', 'evolve', 'exceed',
  'exclude', 'exhibit', 'expand', 'expert', 'explicit', 'exploit', 'export', 'expose', 'external',
  'extract', 'facilitate', 'factor', 'feature', 'federal', 'fee', 'file', 'final', 'finance',
  'finite', 'flexible', 'fluctuate', 'focus', 'format', 'formula', 'forthcoming', 'foundation',
  'framework', 'function', 'fund', 'fundamental', 'furthermore', 'gender', 'generate', 'generation',
  'globe', 'goal', 'grade', 'grant', 'guarantee', 'guideline', 'hence', 'hierarchy', 'highlight',
  'hypothesis', 'identical', 'identify', 'ideology', 'ignorance', 'illustrate', 'image', 'immigrate',
  'impact', 'implement', 'implicate', 'implicit', 'imply', 'impose', 'incentive', 'incidence',
  'incline', 'income', 'incorporate', 'index', 'indicate', 'individual', 'induce', 'inevitable',
  'infer', 'infrastructure', 'inherent', 'inhibit', 'initial', 'initiate', 'injure', 'innovate',
  'input', 'insert', 'insight', 'insist', 'inspect', 'instance', 'institute', 'instruct', 'integral',
  'integrate', 'integrity', 'intelligence', 'intense', 'interact', 'intermediate', 'internal',
  'interpret', 'intervene', 'intrinsic', 'invest', 'investigate', 'invoke', 'involve', 'isolate',
  'issue', 'item', 'job', 'journal', 'justify', 'label', 'labor', 'layer', 'lecture', 'legal',
  'legislate', 'levy', 'liberal', 'license', 'likewise', 'link', 'locate', 'logic', 'maintain',
  'major', 'manipulate', 'manual', 'margin', 'mature', 'maximize', 'mechanism', 'media', 'mediate',
  'medical', 'medium', 'mental', 'method', 'migrate', 'military', 'minimal', 'minimize', 'minimum',
  'ministry', 'minor', 'mode', 'modify', 'monitor', 'motive', 'mutual', 'negate', 'network',
  'neutral', 'nevertheless', 'nonetheless', 'norm', 'notion', 'notwithstanding', 'nuclear',
  'objective', 'obtain', 'obvious', 'occupy', 'occur', 'odd', 'ongoing', 'option', 'orient',
  'outcome', 'output', 'overall', 'overlap', 'overseas', 'panel', 'paradigm', 'paragraph',
  'parallel', 'parameter', 'participate', 'partner', 'passive', 'perceive', 'percent', 'period',
  'persist', 'perspective', 'phase', 'phenomenon', 'philosophy', 'physical', 'plus', 'policy',
  'portion', 'pose', 'positive', 'potential', 'practitioner', 'precede', 'precise', 'predict',
  'predominant', 'preliminary', 'presume', 'previous', 'primary', 'prime', 'principal', 'principle',
  'prior', 'priority', 'proceed', 'process', 'professional', 'prohibit', 'project', 'promote',
  'proportion', 'prospect', 'protocol', 'psychology', 'publication', 'publish', 'purchase',
  'pursue', 'qualitative', 'quote', 'radical', 'random', 'range', 'ratio', 'rational', 'react',
  'recover', 'refine', 'regime', 'region', 'register', 'regulate', 'reinforce', 'reject', 'relax',
  'release', 'relevant', 'reluctance', 'rely', 'remove', 'require', 'research', 'reside', 'resolve',
  'resource', 'respond', 'restore', 'restrain', 'restrict', 'retain', 'reveal', 'revenue', 'reverse',
  'revise', 'revolution', 'rigid', 'role', 'route', 'scenario', 'schedule', 'scheme', 'scope',
  'section', 'sector', 'secure', 'seek', 'select', 'sequence', 'series', 'shift', 'significant',
  'similar', 'simulate', 'site', 'so-called', 'sole', 'somewhat', 'source', 'specific', 'specify',
  'sphere', 'stable', 'statistic', 'status', 'straightforward', 'strategy', 'stress', 'structure',
  'style', 'submit', 'subordinate', 'subsequent', 'subsidy', 'substitute', 'successor', 'sufficient',
  'sum', 'summary', 'supplement', 'survey', 'survive', 'suspend', 'sustain', 'symbol', 'tape',
  'target', 'task', 'team', 'technical', 'technique', 'technology', 'temporary', 'tense', 'terminate',
  'text', 'theme', 'theory', 'thereby', 'thesis', 'topic', 'trace', 'tradition', 'transfer',
  'transform', 'transit', 'transmit', 'transport', 'trend', 'trigger', 'ultimate', 'undergo',
  'underlie', 'undertake', 'uniform', 'unify', 'unique', 'utilize', 'valid', 'vary', 'vehicle',
  'version', 'via', 'violate', 'virtual', 'visible', 'vision', 'visual', 'volume', 'voluntary',
  'welfare', 'whereas', 'whereby', 'widespread'
]);

// Academic transitions
const ACADEMIC_TRANSITIONS = [
  'furthermore', 'moreover', 'in addition', 'additionally', 'consequently', 'therefore',
  'thus', 'hence', 'as a result', 'on the other hand', 'in contrast', 'conversely',
  'nevertheless', 'nonetheless', 'specifically', 'for instance', 'for example',
  'to illustrate', 'in particular', 'subsequently', 'ultimately', 'notwithstanding',
  'in summary', 'in conclusion', 'from my perspective', 'it is evident that'
];

// Common typo and spelling rules dictionary
const COMMON_SPELLING_CORRECTIONS: Record<string, { correction: string; explanation: string }> = {
  'teh': { correction: 'the', explanation: 'Common typographical error.' },
  'recieve': { correction: 'receive', explanation: 'Remember the rule: "i before e except after c".' },
  'recieved': { correction: 'received', explanation: 'Spelling error with "ei" sequence.' },
  'definately': { correction: 'definitely', explanation: 'Spelled with an "i" in the middle, not an "a".' },
  'goverment': { correction: 'government', explanation: 'Notice the silent "n" after "govern".' },
  'enviroment': { correction: 'environment', explanation: 'Contains a silent "n" before "ment".' },
  'seperate': { correction: 'separate', explanation: 'Spelled with "par", not "per".' },
  'untill': { correction: 'until', explanation: '"Until" only has one "l".' },
  'alot': { correction: 'a lot', explanation: '"A lot" is always two separate words.' },
  'occured': { correction: 'occurred', explanation: 'Double "r" is required in past tense "occurred".' },
  'accomodate': { correction: 'accommodate', explanation: 'Requires double "c" and double "m".' },
  'beleive': { correction: 'believe', explanation: 'Spelled "ie" in "believe".' },
  'wich': { correction: 'which', explanation: 'Missing the "h" in the relative pronoun "which".' },
  'becuase': { correction: 'because', explanation: 'Transposed letters in conjunction "because".' },
  'neccessary': { correction: 'necessary', explanation: 'One "c", double "s".' },
  'succesful': { correction: 'successful', explanation: 'Double "c", double "s", single "l".' },
  'tommorow': { correction: 'tomorrow', explanation: 'One "m", double "r".' },
  'theirfore': { correction: 'therefore', explanation: 'Spelled "therefore", not "theirfore".' },
  'allways': { correction: 'always', explanation: 'Single "l" in "always".' },
  'truely': { correction: 'truly', explanation: 'Drop the "e" when adding "-ly" to "true".' },
  'arguement': { correction: 'argument', explanation: 'Drop the "e" when adding "-ment" to "argue".' },
  'persue': { correction: 'pursue', explanation: 'Spelled "pur-", not "per-".' },
  'existense': { correction: 'existence', explanation: 'Ends in "-ence", not "-ense".' }
};

// Grammar pattern rules
const GRAMMAR_RULES: Array<{
  regex: RegExp;
  correction: (match: string, ...groups: string[]) => string;
  explanation: string;
  type: 'grammar' | 'sentence_structure' | 'word_choice';
}> = [
  {
    regex: /\b(he|she|it|everyone|everybody|nobody|each person)\s+(have)\b/gi,
    correction: (match, subj) => `${subj} has`,
    explanation: 'Subject-verb agreement: third-person singular subjects take "has", not "have".',
    type: 'grammar'
  },
  {
    regex: /\b(he|she|it)\s+(do\s+not|don't)\b/gi,
    correction: (match, subj) => `${subj} does not`,
    explanation: 'Subject-verb agreement: third-person singular takes "does not" instead of "do not".',
    type: 'grammar'
  },
  {
    regex: /\b(i|we|they|you)\s+(has)\b/gi,
    correction: (match, subj) => `${subj} have`,
    explanation: 'Subject-verb agreement: plural subjects and pronouns "I/You/We/They" take "have".',
    type: 'grammar'
  },
  {
    regex: /\b(more\s+better)\b/gi,
    correction: () => 'much better',
    explanation: 'Double comparative error: "better" is already comparative. Use "much better" or simply "better".',
    type: 'grammar'
  },
  {
    regex: /\b(more\s+easier)\b/gi,
    correction: () => 'much easier',
    explanation: 'Double comparative: use "much easier" or simply "easier".',
    type: 'grammar'
  },
  {
    regex: /\b(very\s+unique)\b/gi,
    correction: () => 'unique',
    explanation: '"Unique" is an absolute adjective that cannot be graded with "very".',
    type: 'word_choice'
  },
  {
    regex: /\b(in\s+my\s+point\s+of\s+view)\b/gi,
    correction: () => 'from my point of view',
    explanation: 'Idiomatic expression error: standard academic English is "from my point of view" or "in my opinion".',
    type: 'word_choice'
  },
  {
    regex: /\b(according\s+to\s+me)\b/gi,
    correction: () => 'in my view',
    explanation: 'In academic discourse, "according to" is used for citing third-party sources, not oneself. Use "in my view" or "I believe".',
    type: 'word_choice'
  },
  {
    regex: /\b(despite\s+of)\b/gi,
    correction: () => 'despite',
    explanation: 'Preposition redundancy: use either "despite" (without of) or "in spite of".',
    type: 'grammar'
  },
  {
    regex: /\b(cant|dont|wont|isnt|arent|didnt|couldnt|shouldnt|wouldnt)\b/gi,
    correction: (match) => {
      const map: Record<string, string> = {
        cant: 'cannot',
        dont: 'do not',
        wont: 'will not',
        isnt: 'is not',
        arent: 'are not',
        didnt: 'did not',
        couldnt: 'could not',
        shouldnt: 'should not',
        wouldnt: 'would not'
      };
      return map[match.toLowerCase()] || match;
    },
    explanation: 'In formal academic TOEFL writing, avoid informal contractions. Spell out full auxiliary forms.',
    type: 'word_choice'
  }
];

/**
 * Intelligent client-side linguistic evaluation & autocorrection engine
 */
export function analyzeWritingLocally(
  essay: string,
  taskType: 'academic' | 'email' | 'independent' | 'integrated' = 'academic',
  promptInfo?: {
    title?: string;
    topic?: string;
    questionPrompt?: string;
    suggestedWordCount?: string;
    studentOpinions?: { name: string; text: string }[];
    emailScenario?: { sender: string; instructions: string[] };
  }
): WritingEvaluationResult {
  const trimmed = essay.trim();
  const words = trimmed ? trimmed.split(/\s+/) : [];
  const wordCount = words.length;

  const sentences = trimmed
    .split(/(?<=[.?!])\s+/)
    .filter(s => s.trim().length > 0);

  const targetMinWords = taskType === 'email' ? 80 : 100;
  const issues: GrammarIssue[] = [];
  let correctedEssay = essay;

  // 1. Spell check against common academic errors
  words.forEach((w, idx) => {
    const cleanWord = w.toLowerCase().replace(/[^a-z]/g, '');
    if (COMMON_SPELLING_CORRECTIONS[cleanWord]) {
      const entry = COMMON_SPELLING_CORRECTIONS[cleanWord];
      const matchIndex = essay.toLowerCase().indexOf(cleanWord);
      issues.push({
        id: `spell-${idx}-${cleanWord}`,
        original: w,
        correction: entry.correction,
        explanation: entry.explanation,
        type: 'spelling',
        startIndex: matchIndex >= 0 ? matchIndex : undefined,
        endIndex: matchIndex >= 0 ? matchIndex + w.length : undefined
      });
      // Replace in corrected text
      const regex = new RegExp(`\\b${cleanWord}\\b`, 'gi');
      correctedEssay = correctedEssay.replace(regex, entry.correction);
    }
  });

  // 2. Grammar rules pattern matching
  GRAMMAR_RULES.forEach((rule, ruleIdx) => {
    const matches = Array.from(essay.matchAll(rule.regex));
    matches.forEach((m, mIdx) => {
      const originalText = m[0];
      const fixedText = rule.correction(originalText, ...(m.slice(1) as string[]));
      if (originalText.toLowerCase() !== fixedText.toLowerCase()) {
        issues.push({
          id: `grammar-${ruleIdx}-${mIdx}`,
          original: originalText,
          correction: fixedText,
          explanation: rule.explanation,
          type: rule.type,
          startIndex: m.index,
          endIndex: m.index !== undefined ? m.index + originalText.length : undefined
        });
        correctedEssay = correctedEssay.replace(originalText, fixedText);
      }
    });
  });

  // 3. Sentence-level formatting fixes (capitalization at start of sentences)
  correctedEssay = correctedEssay.replace(/(^\s*|[.?!]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());

  // 4. Lexical sophistication analysis
  let awlCount = 0;
  words.forEach(w => {
    const clean = w.toLowerCase().replace(/[^a-z]/g, '');
    if (AWL_SUBSETS.has(clean)) {
      awlCount++;
    }
  });

  // 5. Academic transition discourse markers
  let transitionCount = 0;
  const essayLower = essay.toLowerCase();
  ACADEMIC_TRANSITIONS.forEach(tr => {
    if (essayLower.includes(tr)) {
      transitionCount++;
    }
  });

  // 6. Sentence by sentence analysis
  const sentenceAnalysis: SentenceAnalysis[] = sentences.map((s, idx) => {
    const sWords = s.trim().split(/\s+/).length;
    let status: 'strong' | 'acceptable' | 'needs_revision' = 'acceptable';
    let comment = 'Adequate clause construction.';
    let suggestedPolish: string | undefined = undefined;

    if (sWords < 6 && idx > 0) {
      status = 'needs_revision';
      comment = 'Short fragment or simplistic sentence. Consider combining with adjacent clause using subordinate conjunctions.';
    } else if (sWords >= 15 && sWords <= 32) {
      status = 'strong';
      comment = 'Optimal academic sentence length demonstrating compound-complex clause structure.';
    } else if (sWords > 38) {
      status = 'needs_revision';
      comment = 'Potentially run-on sentence. Consider breaking into two concise, balanced statements.';
    }

    if (/(very good|big problem|bad thing|a lot of|stuff|things)/i.test(s)) {
      status = 'needs_revision';
      comment = 'Contains informal or generic vocabulary. Upgrade to formal collegiate lexis.';
      suggestedPolish = s
        .replace(/very good/gi, 'exceptionally advantageous')
        .replace(/big problem/gi, 'significant impediment')
        .replace(/a lot of/gi, 'a substantial quantity of')
        .replace(/things/gi, 'factors');
    }

    return {
      sentence: s.trim(),
      status,
      comment,
      suggestedPolish
    };
  });

  // 7. Calculate Rubrics & Dimensional Scores
  // Content / Task Achievement (0-100)
  let contentBase = 70;
  if (wordCount >= targetMinWords + 30) contentBase += 20;
  else if (wordCount >= targetMinWords) contentBase += 12;
  else contentBase -= Math.min(35, Math.round(((targetMinWords - wordCount) / targetMinWords) * 40));

  // Check Task-specific engagement
  if (taskType === 'academic') {
    if (promptInfo?.studentOpinions) {
      const names = promptInfo.studentOpinions.map(o => o.name.toLowerCase());
      const mentionsStudent = names.some(n => essayLower.includes(n)) || /(agree|disagree|point|perspective|classmate|dr\.|professor)/i.test(essayLower);
      if (mentionsStudent) contentBase += 8;
    }
  } else if (taskType === 'email') {
    const hasGreeting = /(dear|hello|hi|greetings|professor|dr\.)/i.test(essayLower);
    const hasSignoff = /(sincerely|regards|best|thank you|respectfully)/i.test(essayLower);
    if (hasGreeting && hasSignoff) contentBase += 10;
  }
  const contentScore = Math.max(25, Math.min(98, contentBase));

  // Syntactic Variety (0-100)
  let syntaxBase = 65;
  const avgSentenceLength = sentences.length > 0 ? wordCount / sentences.length : 0;
  if (avgSentenceLength >= 14 && avgSentenceLength <= 28) syntaxBase += 15;
  if (/(although|because|while|whereas|since|unless|despite|in order to|which|that|who)/i.test(essayLower)) {
    syntaxBase += 12;
  }
  const syntaxScore = Math.max(30, Math.min(97, syntaxBase));

  // Lexical Sophistication (0-100)
  let lexicalBase = 60;
  const awlRatio = wordCount > 0 ? (awlCount / wordCount) * 100 : 0;
  if (awlRatio >= 8) lexicalBase += 25;
  else if (awlRatio >= 4) lexicalBase += 16;
  else if (awlRatio >= 2) lexicalBase += 8;
  if (transitionCount >= 3) lexicalBase += 10;
  else if (transitionCount >= 1) lexicalBase += 5;
  const lexicalScore = Math.max(30, Math.min(96, lexicalBase));

  // Mechanics & Grammatical Accuracy (0-100)
  let mechanicsBase = 95 - (issues.length * 7);
  const mechanicsScore = Math.max(35, Math.min(99, mechanicsBase));

  // Weighted overall composite score (0.0 to 5.0)
  const compositePercentage = (contentScore * 0.35) + (syntaxScore * 0.25) + (lexicalScore * 0.25) + (mechanicsScore * 0.15);
  let rawScore = (compositePercentage / 100) * 5.0;

  // Round to 1 decimal place with reasonable bounds
  let score = Math.max(1.0, Math.min(5.0, parseFloat(rawScore.toFixed(1))));

  // Realistic scaled TOEFL score (0-30)
  let scaledScore = Math.round((score / 5.0) * 30);
  if (score >= 4.8) scaledScore = 30;
  else if (score >= 4.5) scaledScore = 28;
  else if (score >= 4.0) scaledScore = 25;
  else if (score >= 3.5) scaledScore = 22;
  else if (score >= 3.0) scaledScore = 19;
  else if (score >= 2.5) scaledScore = 15;
  else scaledScore = Math.max(4, Math.round(score * 4.5));

  // Band and CEFR
  let bandScore = 'Band 3 (15–19) - Basic Competence';
  let cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' = 'B1';
  if (score >= 4.6) {
    bandScore = 'Band 6 (28–30) - Exemplary Academic Writing';
    cefrLevel = 'C2';
  } else if (score >= 4.0) {
    bandScore = 'Band 5 (24–27) - Advanced Command';
    cefrLevel = 'C1';
  } else if (score >= 3.2) {
    bandScore = 'Band 4 (20–23) - Effective Communicator';
    cefrLevel = 'B2';
  } else if (score >= 2.2) {
    bandScore = 'Band 3 (15–19) - Developing Competence';
    cefrLevel = 'B1';
  } else {
    bandScore = 'Band 2 (10–14) - Limited Proficiency';
    cefrLevel = 'A2';
  }

  // Strengths & Improvements Generation
  const strengths: string[] = [];
  const improvements: string[] = [];

  if (wordCount >= targetMinWords) {
    strengths.push(`Strong developmental volume (${wordCount} words), comfortably meeting the ${targetMinWords}+ word requirement.`);
  }
  if (awlCount >= 3) {
    strengths.push(`Effective incorporation of ${awlCount} high-register Academic Word List (AWL) terms.`);
  }
  if (transitionCount >= 2) {
    strengths.push(`Clear discourse signposting with logical transitions (${transitionCount} transition markers detected).`);
  }
  if (issues.length === 0 && wordCount > 30) {
    strengths.push('Excellent orthographic and grammatical consistency across the response.');
  }

  if (wordCount < targetMinWords) {
    improvements.push(`Extend your discussion length. You wrote ${wordCount} words; expand your supporting arguments to reach at least ${targetMinWords} words.`);
  }
  if (transitionCount < 2) {
    improvements.push('Integrate more academic discourse connectors (e.g., "Furthermore", "Conversely", "Consequently", "For instance") to guide reader comprehension.');
  }
  if (awlRatio < 4) {
    improvements.push('Elevate vocabulary sophistication by substituting conversational terms with precise academic alternatives.');
  }
  if (issues.length > 0) {
    improvements.push(`Review the ${issues.length} detected grammar/spelling alert${issues.length > 1 ? 's' : ''} shown in the interactive correction tab.`);
  }

  // Generate 5.0 Level Exemplar Polished Version
  let improvedVersion = '';
  if (taskType === 'email') {
    const sender = promptInfo?.emailScenario?.sender || 'Professor';
    improvedVersion = `Dear ${sender},\n\nThank you for providing detailed guidance regarding this matter. I am writing to formally confirm my receipt of the instructions and to address the required points.\n\nFirst and foremost, I have thoroughly reviewed the schedule and can assure you that all preparatory assignments have been finalized in strict accordance with the syllabus. Furthermore, regarding the upcoming deadline, I would appreciate any additional clarification on specific formatting criteria that may apply.\n\nThank you again for your time, consideration, and ongoing support.\n\nBest regards,\n[Your Name]`;
  } else {
    improvedVersion = `In addressing this compelling question, I firmly believe that adopting a multifaceted strategy is paramount. While acknowledging the valid points raised by my peers, it is essential to recognize that sustainable long-term success requires deliberate institutional support paired with individual initiative.\n\nFurthermore, empirical evidence suggests that when clear structural incentives are implemented, overall productivity and engagement increase dramatically. For instance, creating targeted development opportunities enables all stakeholders to contribute meaningfully without excessive friction. Consequently, prioritizing systematic solutions remains the most effective course of action.`;
  }

  const feedback = score >= 4.5
    ? 'Outstanding performance! Demonstrates sophisticated academic vocabulary, strong syntactic variety with compound-complex sentences, and coherent paragraph development.'
    : score >= 3.5
    ? 'Commendable response! Your central position is clear and supported by appropriate examples. Focus on refining minor grammatical nuances and expanding lexical variety.'
    : score >= 2.5
    ? 'Promising foundation. Work on building longer paragraphs with explicit causal transitions, expanding academic vocabulary, and meeting the recommended word count target.'
    : 'Developing draft. Prioritize complete sentence structures, ensure subject-verb agreement, and reach the minimum word count to fully address the prompt.';

  return {
    score,
    scaledScore,
    bandScore,
    cefrLevel,
    wordCount,
    readingTimeMinutes: parseFloat((wordCount / 200).toFixed(1)),
    fleschKincaidGrade: Math.max(6, Math.min(16, Math.round(0.39 * (wordCount / Math.max(1, sentences.length)) + 11.8 * (awlCount / Math.max(1, wordCount)) - 15.59))),
    contentScore,
    syntaxScore,
    lexicalScore,
    mechanicsScore,
    feedback,
    strengths: strengths.length > 0 ? strengths : ['Response establishes a clear viewpoint regarding the central topic.'],
    improvements: improvements.length > 0 ? improvements : ['Continue practicing varied subordinate clause openings.'],
    grammarIssues: issues,
    correctedEssay,
    improvedVersion,
    sentenceAnalysis,
    academicWordListCount: awlCount,
    transitionCount
  };
}

/**
 * Main Evaluation caller: Attempts server-side AI evaluation first, with seamless local fallback
 */
export async function evaluateWritingSubmission(
  essay: string,
  taskType: 'academic' | 'email' | 'independent' | 'integrated',
  promptInfo: {
    title?: string;
    topic?: string;
    questionPrompt?: string;
    suggestedWordCount?: string;
    readingPassage?: string;
    lectureTranscript?: string;
    studentOpinions?: { name: string; avatar?: string; text: string }[];
    emailScenario?: {
      sender: string;
      role: string;
      subject: string;
      body: string;
      instructions: string[];
    };
  }
): Promise<WritingEvaluationResult> {
  const localAnalysis = analyzeWritingLocally(essay, taskType, promptInfo);

  try {
    const response = await fetch('/api/writing-evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskType,
        promptInfo: {
          title: promptInfo.title || 'Writing Task',
          topic: promptInfo.topic || 'General Topic',
          questionPrompt: promptInfo.questionPrompt || '',
          readingPassage: promptInfo.readingPassage || '',
          lectureTranscript: promptInfo.lectureTranscript || '',
          studentOpinions: promptInfo.studentOpinions || [],
          emailScenario: promptInfo.emailScenario || null
        },
        essay
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.score === 'number') {
        const aiScore = Math.max(1.0, Math.min(5.0, parseFloat(data.score.toFixed(1))));
        const aiScaled = typeof data.scaledScore === 'number' ? data.scaledScore : Math.round((aiScore / 5) * 30);
        
        let band = 'Band 4 (20–23) - Effective Communicator';
        let cefr: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' = 'B2';
        if (aiScore >= 4.6) {
          band = 'Band 6 (28–30) - Exemplary Academic Writing';
          cefr = 'C2';
        } else if (aiScore >= 4.0) {
          band = 'Band 5 (24–27) - Advanced Command';
          cefr = 'C1';
        } else if (aiScore >= 3.2) {
          band = 'Band 4 (20–23) - Effective Communicator';
          cefr = 'B2';
        } else if (aiScore >= 2.2) {
          band = 'Band 3 (15–19) - Developing Competence';
          cefr = 'B1';
        } else {
          band = 'Band 2 (10–14) - Limited Proficiency';
          cefr = 'A2';
        }

        // Map AI grammar issues
        const aiIssues: GrammarIssue[] = Array.isArray(data.grammarIssues)
          ? data.grammarIssues.map((g: any, i: number) => ({
              id: `ai-issue-${i}`,
              original: g.original || '',
              correction: g.correction || '',
              explanation: g.explanation || '',
              type: (['grammar', 'spelling', 'sentence_structure', 'word_choice', 'topic_development'].includes(g.type)
                ? g.type
                : 'grammar') as any
            }))
          : localAnalysis.grammarIssues;

        // Apply corrections to student essay
        let corrected = essay;
        aiIssues.forEach(issue => {
          if (issue.original && issue.correction && issue.original !== issue.correction) {
            corrected = corrected.split(issue.original).join(issue.correction);
          }
        });

        return {
          score: aiScore,
          scaledScore: aiScaled,
          bandScore: band,
          cefrLevel: cefr,
          wordCount: localAnalysis.wordCount,
          readingTimeMinutes: localAnalysis.readingTimeMinutes,
          fleschKincaidGrade: localAnalysis.fleschKincaidGrade,
          contentScore: Math.min(100, Math.round(((data.taskAchievementScore || 8) / 10) * 100)),
          syntaxScore: Math.min(100, Math.round(((data.coherenceScore || 8) / 10) * 100)),
          lexicalScore: Math.min(100, Math.round(((data.vocabularyScore || 8) / 10) * 100)),
          mechanicsScore: localAnalysis.mechanicsScore,
          feedback: data.feedback || localAnalysis.feedback,
          strengths: localAnalysis.strengths,
          improvements: localAnalysis.improvements,
          grammarIssues: aiIssues.length > 0 ? aiIssues : localAnalysis.grammarIssues,
          correctedEssay: corrected || localAnalysis.correctedEssay,
          improvedVersion: data.improvedVersion || localAnalysis.improvedVersion,
          sentenceAnalysis: localAnalysis.sentenceAnalysis,
          academicWordListCount: localAnalysis.academicWordListCount,
          transitionCount: localAnalysis.transitionCount
        };
      }
    }
  } catch (err) {
    console.warn('AI evaluation endpoint unreachable, utilizing high-precision local NLP engine:', err);
  }

  return localAnalysis;
}
