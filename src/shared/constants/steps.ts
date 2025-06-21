import type { FunnelStepType } from '../types/funnelStep';

export const SIGNUP_STEPS = [
  'profileImage',
  'nickName',
  'age',
  'interest',
  'realNameAuth',
  'confirm',
] as const;

export const STEP_KEYS: Record<
  Extract<FunnelStepType, 'nickName' | 'age' | 'interest'>,
  (typeof SIGNUP_STEPS)[number]
> = {
  nickName: 'nickName',
  age: 'age',
  interest: 'interest',
};
