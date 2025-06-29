import type { AGE_OPTIONS, AGE_DETAIL_OPTIONS, INTEREST_OPTIONS } from '../constants';

export type InterestType = (typeof INTEREST_OPTIONS)[number]['label'];
export type AgeDetailType = (typeof AGE_DETAIL_OPTIONS)[number]['value'];
export type AgeType = (typeof AGE_OPTIONS)[number]['label'];
