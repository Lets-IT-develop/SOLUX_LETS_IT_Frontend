import * as S from './LoginPageHeader.styles';
import GoBackIcon from '../../../../shared/assets/icons/ic_arrow_back.svg';
import { getProgressDegree } from '../../../../shared/lib/utils/getProgressDegree';
import { SIGNUP_STEPS } from '../../../../shared/constants/steps';
import {
  STATIC_SIGNUP_MESSAGES,
  DYNAMIC_SIGNUP_MESSAGES,
  HIGHLIGHT_TEXT,
} from '../../../../shared/constants/messages';
import { ProgressBar } from '../../../../features/login/ui';
import { renderWithHighlight } from '../../../../shared/lib';

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

  const highlightText =
    step in HIGHLIGHT_TEXT ? HIGHLIGHT_TEXT[step as keyof typeof HIGHLIGHT_TEXT] : '';

  return (
    <S.LoginPageHeaderSection>
      <S.LoginPageHeaderContainer>
        <S.GoBackButton onClick={goBackStep}>
          <img src={GoBackIcon} alt="뒤로 가기" />
        </S.GoBackButton>
        <ProgressBar progress={getProgressDegree(step, [...SIGNUP_STEPS])} />
      </S.LoginPageHeaderContainer>
      <S.LoginPageGuideText>
        {renderWithHighlight(getGuideText(), highlightText)}
      </S.LoginPageGuideText>
    </S.LoginPageHeaderSection>
  );
};

export default LoginPageHeader;
