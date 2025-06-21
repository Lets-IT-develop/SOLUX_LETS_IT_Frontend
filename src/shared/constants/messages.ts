// TODO : 컴포넌트들 login -> signup으로 메세지 변경
export const SIGNUP_MESSAGES = {
  start: '렛츠잇에 오신 것을 환영해요! 프로필 이미지를 설정해주세요.',
  nickname: '렛츠잇에서 사용할 {{highlight}}을 작성해주세요.',
  age: (nickName: string) => `${nickName} 님의 연령대를 알려주세요.`,
  interest: (nickName: string) => `${nickName} 님의 관심 분야를 전부 선택해 주세요.`,
  realNameAuth: '프로젝트에 참여하기 위해서는 {{highlight}}이 필요해요.',
  confirm: '프로필 설정이 완료되었어요! 마이페이지에서 수정할 수 있어요.',
};
