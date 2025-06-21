import { useFunnel } from '@use-funnel/react-router-dom';
import { SIGNUP_STEPS } from '../../../shared/constants/steps';

// TODO : interest 타입 정의
export const useLoginFunnel = () => {
  const funnel = useFunnel<{
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

  const currentStep = funnel.step;
  const nextStep = SIGNUP_STEPS[SIGNUP_STEPS.indexOf(currentStep) + 1];

  const goBackStep = () => {
    const currentStepIndex = SIGNUP_STEPS.indexOf(funnel.step);
    if (currentStepIndex > 0) {
      funnel.history.push(SIGNUP_STEPS[currentStepIndex - 1], funnel.context);
    }
  };

  const proceedToNextStep = () => {
    if (!nextStep) return;
    funnel.history.push(nextStep);
  };

  const storeData = (key: string, data: File | string | string[] | undefined) => {
    funnel.history.replace(currentStep, {
      ...funnel.context,
      [key]: data,
    });
  };

  return { funnel, goBackStep, storeData, proceedToNextStep };
};
