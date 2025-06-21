import { useFunnel, createFunnelSteps } from '@use-funnel/react-router-dom';
import { SIGNUP_STEPS } from '../../../shared/constants/steps';

// TODO : interest - > set 변경
export const useSignupFunnel = () => {
  const steps = createFunnelSteps<{
    profileImage?: File;
    nickName: string;
    age: string;
    interest: Set<string>;
    isAuth: boolean;
  }>()
    .extends(SIGNUP_STEPS)
    .build();

  const funnel = useFunnel({
    id: 'login-funnel',
    steps: steps,
    initial: {
      step: 'profileImage',
      context: {
        profileImage: undefined,
        nickName: '',
        age: '',
        interest: new Set<string>(),
        isAuth: false,
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

  const storeData = (key: keyof typeof funnel.context, data: File | string | Set<string>) => {
    if (!data) return;

    funnel.history.replace(currentStep, {
      ...funnel.context,
      [key]: data,
    });
  };

  return { funnel, goBackStep, storeData, proceedToNextStep };
};
