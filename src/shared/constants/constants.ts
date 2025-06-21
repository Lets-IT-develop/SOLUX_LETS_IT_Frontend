export const CONSTRAINTS = {
  nickName: {
    minLength: 1,
    maxLength: 10,
  },
};

export const AGE_OPTIONS = [
  { value: '10', label: '10대' },
  { value: '20', label: '20대' },
  { value: '30', label: '30대' },
];

export const AGE_DETAIL_OPTIONS = [
  { value: '초반', label: '초반' },
  { value: '중반', label: '중반' },
  { value: '후반', label: '후반' },
];

// TODO : value값 백엔드에 맞추어 변경
export const INTEREST_OPTIONS = [
  { value: '1', label: '영화' },
  { value: '2', label: '음악' },
  { value: '3', label: '영화' },
  { value: '4', label: '영화' },
];
