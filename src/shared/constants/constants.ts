export const AGE_OPTIONS: { value: string; label: (typeof AGE_LABELS)[number] }[] = [
  { value: '10', label: '10대' },
  { value: '20', label: '20대' },
  { value: '30', label: '30대' },
];

export const AGE_LABELS = ['10대', '20대', '30대'] as const;

export const AGE_DETAIL_OPTIONS: { value: string; label: (typeof AGE_DETAIL_LABELS)[number] }[] = [
  { value: '초반', label: '초반' },
  { value: '중반', label: '중반' },
  { value: '후반', label: '후반' },
];

export const AGE_DETAIL_LABELS = ['초반', '중반', '후반'] as const;

// TODO : value값 백엔드에 맞추어 변경
export const INTEREST_OPTIONS: { value: string; label: (typeof INTEREST_LABELS)[number] }[] = [
  { value: '1', label: '기획자' },
  { value: '2', label: '개발자' },
  { value: '3', label: '디자이너' },
  { value: '4', label: '데이터 엔지니어' },
  { value: '5', label: 'AI 엔지니어' },
  {
    value: '6',
    label: 'ML 엔지니어',
  },
];

export const INTEREST_LABELS = [
  '기획자',
  '개발자',
  '디자이너',
  '데이터 엔지니어',
  'AI 엔지니어',
  'ML 엔지니어',
] as const;
