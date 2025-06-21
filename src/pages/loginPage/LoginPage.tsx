import * as S from './LoginPage.styles';
import { useSignupFunnel } from '../../features/login';
import { MultiSelectCard, ProfileImageUploader } from '../../features/login/ui';
import { TextButton } from '../../shared/ui/button';
import LoginPageHeader from './ui/loginPageHeader/LoginPageHeader';
import { InputGroup } from '../../shared/ui/input';
import {
  AGE_DETAIL_OPTIONS,
  AGE_OPTIONS,
  INTEREST_OPTIONS,
} from '../../shared/constants/constants';
import { CONSTRAINTS } from '../../shared/constants/constraints';
import { Select } from '../../shared/ui/select';
import { toggleSetData } from '../../shared/lib/utils/toggleSetData';

// TODO : 실명 인증 아이콘 추가 (디자인 완성 시)
// TODO : 실명 인증 기능 추가
// TODO : 메인 화면으로 이동 클릭 시 홈 화면으로 이동
const LoginPage = () => {
  const { funnel, goBackStep, storeData, proceedToNextStep } = useSignupFunnel();
  const ageLabels = AGE_OPTIONS.map((option) => option.label);
  const ageDetailLabels = AGE_DETAIL_OPTIONS.map((option) => option.label);

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
            <TextButton
              variant="primary"
              onClick={proceedToNextStep}
              buttonText={context.profileImage ? '다음으로' : '건너 뛰기'}
            />
          </>
        )}
        nickName={({ context }) => (
          <>
            <InputGroup
              id="nickName"
              value={context.nickName}
              placeholder={`${CONSTRAINTS.nickName.maxLength}자 이하로 입력해주세요`}
              onChange={(e) => storeData('nickName', e.target.value)}
              maxLength={CONSTRAINTS.nickName.maxLength}
            />
            <TextButton
              variant="primary"
              onClick={proceedToNextStep}
              buttonText="다음으로"
              disabled={!context.nickName || context.nickName.length === 0}
            />
          </>
        )}
        age={({ context }) => (
          <>
            <S.SelectContainer>
              <Select
                defaultOption="선택"
                options={ageLabels}
                value={context.age}
                onSelectedValueChange={(value) => storeData('age', value)}
              />
              <Select
                defaultOption="초/중/후"
                options={ageDetailLabels}
                value={context.ageDetail}
                onSelectedValueChange={(value) => storeData('ageDetail', value)}
              />
            </S.SelectContainer>
            <TextButton
              variant="primary"
              onClick={proceedToNextStep}
              buttonText="다음으로"
              disabled={!context.age || !context.ageDetail}
            />
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
            <TextButton
              variant="primary"
              onClick={proceedToNextStep}
              buttonText="다음으로"
              disabled={context.interest.size === 0}
            />
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
            <TextButton
              variant="primary"
              onClick={proceedToNextStep}
              buttonText="Let's IT 시작하기"
            />
          </>
        )}
      />
    </S.LoginPageContainer>
  );
};

export default LoginPage;
