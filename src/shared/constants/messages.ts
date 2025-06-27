import { CONSTRAINTS } from './constraints';

export const HIGHLIGHT_MARK = '{{highlight}}';

export const STATIC_SIGNUP_MESSAGES = {
  profileImage: `🎉 렛츠잇에 오신 것을 환영해요!\n${HIGHLIGHT_MARK}를 설정해주세요.`,
  nickName: `💬 렛츠잇에서 사용할 ${HIGHLIGHT_MARK}을 작성해주세요.`,
  realNameAuth: `✅ 프로젝트에 참여하기 위해서는\n ${HIGHLIGHT_MARK}이 필요해요.`,
  confirm: '📢 프로필 설정이 완료되었어요!\n마이페이지에서 수정할 수 있어요.',
} as const;

export const DYNAMIC_SIGNUP_MESSAGES = {
  age: (nickname: string) => `🔎 ${nickname} 님의 ${HIGHLIGHT_MARK}를 알려주세요.`,
  interest: (nickname: string) =>
    `🔎 ${nickname} 님의 ${HIGHLIGHT_MARK}를 전부 선택해 주세요. (최대 ${CONSTRAINTS.interest.max}개)`,
};

export const HIGHLIGHT_TEXT = {
  profileImage: '프로필 이미지',
  nickName: '닉네임',
  realNameAuth: '실명 인증',
  age: '연령대',
  interest: '관심사',
} as const;
