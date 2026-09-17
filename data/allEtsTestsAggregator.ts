import { ETSFormalTest, ETS_FORMAL_TESTS } from '../etsFormalMockData';
import { ETS_TESTS_11_TO_20 } from './etsTests11To20';
import { MORE_ETS_TESTS } from './moreEtsTests';
import { ETS_TESTS_16_TO_30 } from './etsTests16To30';
import { ETS_TESTS_21_TO_30 } from './etsTests21To30';

// Tests 1 to 10 from etsFormalMockData
// Tests 11 to 13 from etsTests11To20
// Tests 14 to 15 from moreEtsTests
// Tests 16 to 20 from etsTests16To30
// Tests 21 to 30 from etsTests21To30
export const ALL_30_ETS_FORMAL_TESTS: ETSFormalTest[] = [
  ...ETS_FORMAL_TESTS,
  ...ETS_TESTS_11_TO_20,
  ...MORE_ETS_TESTS,
  ...ETS_TESTS_16_TO_30,
  ...ETS_TESTS_21_TO_30
];
