import { useFunnel } from '@use-funnel/react-router-dom';

// TODO : interest 타입 정의
export const useLoginFunnel = () => {
  return useFunnel<{
    profileImage: { profileImage?: File };
    nickName: { profileImage?: File; nickName: string };
    age: { profileImage?: File; nickName: string; age: string };
    interest: { profileImage?: File; nickName: string; age: string; interest: string[] };
    realNameAuth: {
      profileImage?: File;
      nickName: string;
      age: string;
      interest: string[];
      isAuth: boolean;
    };
    confirm: {
      profileImage?: File;
      nickName: string;
      age: string;
      interest: string[];
      isAuth: boolean;
    };
  }>({
    id: 'login-funnel',
    initial: {
      step: 'profileImage',
      context: {
        profileImage: undefined,
      },
    },
  });
};
