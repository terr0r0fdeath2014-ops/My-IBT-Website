import { SpellingExercise } from './spellingData';
import { A1_SPELLING_EXERCISES } from './spellingData';
import { A2_SPELLING_EXERCISES, B1_SPELLING_EXERCISES } from './spellingA2B1';
import { B2_SPELLING_EXERCISES } from './spellingB2';
import { C1_SPELLING_EXERCISES } from './spellingC1';
import { C2_SPELLING_EXERCISES } from './spellingC2';

export const ALL_SPELLING_EXERCISES_BY_LEVEL: Record<string, SpellingExercise[]> = {
  'A1': A1_SPELLING_EXERCISES,
  'A2': A2_SPELLING_EXERCISES,
  'B1': B1_SPELLING_EXERCISES,
  'B2': B2_SPELLING_EXERCISES,
  'C1': C1_SPELLING_EXERCISES,
  'C2': C2_SPELLING_EXERCISES
};

export const ALL_SPELLING_EXERCISES: SpellingExercise[] = [
  ...A1_SPELLING_EXERCISES,
  ...A2_SPELLING_EXERCISES,
  ...B1_SPELLING_EXERCISES,
  ...B2_SPELLING_EXERCISES,
  ...C1_SPELLING_EXERCISES,
  ...C2_SPELLING_EXERCISES
];
