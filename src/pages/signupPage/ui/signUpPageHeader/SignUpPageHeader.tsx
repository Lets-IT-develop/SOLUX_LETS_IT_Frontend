import * as S from './SignUpPageHeader.styles';
import GoBackIcon from '../../../../shared/assets/icons/ic_arrow_back.svg';
import { getProgressDegree } from '../../../../shared/lib/utils/getProgressDegree';
import { SIGNUP_STEPS } from '../../../../shared/constants/steps';
import { SIGN_UP_HIGHLIGHT_TEXT, SIGNUP_MESSAGES } from '../../../../shared/constants/messages';
import { ProgressBar } from '../../../../shared';
import { renderWithHighlight } from '../../../../shared/lib';

interface SignUpPageHeaderProps {
  goBackStep: () => void;
  step: (typeof SIGNUP_STEPS)[number];
  nickname: string;
}

const SignUpPageHeader = ({ goBackStep, step, nickname }: SignUpPageHeaderProps) => {
  const getGuideText = () => {
    return SIGNUP_MESSAGES[step](nickname);
  };

  const highlightTexts =
    step in SIGN_UP_HIGHLIGHT_TEXT
      ? SIGN_UP_HIGHLIGHT_TEXT[step as keyof typeof SIGN_UP_HIGHLIGHT_TEXT]
      : [];

  return (
    <S.SignUpPageHeaderSection>
      <S.SignUpPageHeaderContainer>
        <S.GoBackButton onClick={goBackStep}>
          <img src={GoBackIcon} alt="뒤로 가기" />
        </S.GoBackButton>
        <ProgressBar progress={getProgressDegree(step, [...SIGNUP_STEPS])} />
      </S.SignUpPageHeaderContainer>
      <S.SignUpPageGuideText>
        {renderWithHighlight(getGuideText(), [...highlightTexts])}
      </S.SignUpPageGuideText>
    </S.SignUpPageHeaderSection>
  );
};

export default SignUpPageHeader;
