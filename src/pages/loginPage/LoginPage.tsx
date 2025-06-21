import * as S from './LoginPage.styles';
import { useSignupFunnel } from '../../features/login';
import { ProfileImageUploader } from '../../features/login/ui';
import { TextButton } from '../../shared/ui/button';
import LoginPageHeader from './ui/LoginPageHeader';
import { InputGroup } from '../../shared/ui/input';

// TODO : 버튼 접근 not allowed 설정
const LoginPage = () => {
  const { funnel, goBackStep, storeData, proceedToNextStep } = useSignupFunnel();

  return (
    <S.LoginPageContainer>
      <LoginPageHeader goBackStep={goBackStep} step={funnel.step} />
      <funnel.Render
        profileImage={({ step, context, history }) => (
          <>
            <ProfileImageUploader
              file={context.profileImage}
              onFileChange={(file) => storeData('profileImage', file)}
            />
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        nickName={({ step, context, history }) => (
          <>
            <InputGroup
              id="nickName"
              label="닉네임"
              placeholder="10자 이내로 입력해주세요"
              value={context.nickName}
              onChange={(e) => storeData('nickName', e.target.value)}
            />
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        age={({ step, context, history }) => (
          <>
            <LoginPageHeader goBackStep={goBackStep} step={step} />
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        interest={({ step, context, history }) => (
          <>
            <LoginPageHeader goBackStep={goBackStep} step={step} />
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        realNameAuth={({ step, history }) => (
          <>
            <LoginPageHeader goBackStep={goBackStep} step={step} />
          </>
        )}
        confirm={({ step, history }) => (
          <>
            <LoginPageHeader goBackStep={goBackStep} step={step} />
          </>
        )}
      />
    </S.LoginPageContainer>
  );
};

export default LoginPage;
