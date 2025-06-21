import * as S from './LoginPage.styles';
import { useSignupFunnel } from '../../features/login';
import { MultiSelectCard, ProfileImageUploader } from '../../features/login/ui';
import { TextButton } from '../../shared/ui/button';
import LoginPageHeader from './ui/loginPageHeader/LoginPageHeader';
import { InputGroup } from '../../shared/ui/input';
import { AGE_OPTIONS, CONSTRAINTS, INTEREST_OPTIONS } from '../../shared/constants/constants';
import { Select } from '../../shared/ui/select';
import { toggleSetData } from '../../shared/lib/utils/toggleSetData';

// TODO : 버튼 접근 not allowed 설정
// TODO : 실명 인증 아이콘 추가 (디자인 완성 시)
// TODO : 실명 인증 기능 추가
// TODO : 메인 화면으로 이동 시 홈 화면으로 이동
const LoginPage = () => {
  const { funnel, goBackStep, storeData, proceedToNextStep } = useSignupFunnel();
  const ageLabels = AGE_OPTIONS.map((option) => option.label);

  return (
    <S.LoginPageContainer>
      <LoginPageHeader goBackStep={goBackStep} step={funnel.step} />
      <funnel.Render
        profileImage={({ context }) => (
          <>
            <ProfileImageUploader
              file={context.profileImage}
              onFileChange={(file) => storeData('profileImage', file)}
            />
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        nickName={({ context }) => (
          <>
            <InputGroup
              id="nickName"
              value={context.nickName}
              placeholder={`${CONSTRAINTS.nickName.maxLength}자 이하로 입력해주세요`}
              onChange={(e) => storeData('nickName', e.target.value)}
            />
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        age={({ context }) => (
          <>
            <Select
              options={ageLabels}
              value={context.age ? context.age : ageLabels[0]}
              onSelectedValueChange={(value) => storeData('age', value)}
            />
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        interest={({ context }) => (
          <>
            <S.MultiSelectCardContainer>
              {INTEREST_OPTIONS.map((option) => (
                <MultiSelectCard
                  key={option.value}
                  text={option.label}
                  isFocused={context.interest.has(option.value)}
                  toggleFocus={() =>
                    storeData('interest', toggleSetData(context.interest, option.value))
                  }
                />
              ))}
            </S.MultiSelectCardContainer>
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="다음으로" />
          </>
        )}
        realNameAuth={() => (
          <>
            <h2>⚠️ 실명 인증이 필요해요 ⚠️</h2>
            <S.ButtonContainer>
              <TextButton
                variant="secondary"
                buttonText="다음에 하기"
                onClick={proceedToNextStep}
              />
              <TextButton
                variant="primary"
                onClick={proceedToNextStep}
                buttonText="실명 인증 하기"
              />
            </S.ButtonContainer>
          </>
        )}
        confirm={() => (
          <>
            <TextButton variant="primary" onClick={proceedToNextStep} buttonText="메인 화면으로" />
          </>
        )}
      />
    </S.LoginPageContainer>
  );
};

export default LoginPage;
