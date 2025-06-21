import * as S from './LoginPageHeader.styles';
import GoBackIcon from '../../../../shared/assets/icons/ic_arrow_back.svg';
import { getProgressDegree } from '../../../../shared/lib/getProcessDegree';
import { SIGNUP_STEPS } from '../../../../shared/constants/steps';
import {
  STATIC_SIGNUP_MESSAGES,
  DYNAMIC_SIGNUP_MESSAGES,
} from '../../../../shared/constants/messages';
import { ProgressBar } from '../../../../features/login/ui';

interface LoginPageHeaderProps {
  goBackStep: () => void;
  step: (typeof SIGNUP_STEPS)[number];
  nickname?: string;
}

const LoginPageHeader = ({ goBackStep, step, nickname = '' }: LoginPageHeaderProps) => {
  const getGuideText = () => {
    if (step === 'age' || step === 'interest') {
      return DYNAMIC_SIGNUP_MESSAGES[step](nickname);
    }
    return STATIC_SIGNUP_MESSAGES[step];
  };
  return (
    <S.LoginPageHeaderSection>
      <S.LoginPageHeaderContainer>
        <S.GoBackButton onClick={goBackStep}>
          <img src={GoBackIcon} alt="뒤로 가기" />
        </S.GoBackButton>
        <ProgressBar progress={getProgressDegree(step, [...SIGNUP_STEPS])} />
      </S.LoginPageHeaderContainer>
      <S.LoginPageGuideText>{getGuideText()}</S.LoginPageGuideText>
    </S.LoginPageHeaderSection>
  );
};

export default LoginPageHeader;
