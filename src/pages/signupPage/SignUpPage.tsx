import { useEffect, useRef } from 'react';
import { useSignupFunnel } from '../../features/signup';
import { MultiSelectCard, ProfileImageUploader } from '../../features/signup/ui';
import { useCompositionInput } from '../../shared';
import {
  AGE_DETAIL_OPTIONS,
  AGE_OPTIONS,
  INTEREST_OPTIONS,
} from '../../shared/constants/constants';
import { CONSTRAINTS } from '../../shared/constants/constraints';
import { toggleSetData } from '../../shared/lib/utils/toggleSetData';
import { TextButton } from '../../shared/ui/button';
import { InputGroup } from '../../shared/ui/input';
import { Select } from '../../shared/ui/select';
import * as S from './SignUpPage.styles';
import SignUpPageHeader from './ui/signUpPageHeader/SignUpPageHeader';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';

// TODO : 실명 인증 아이콘 추가 (디자인 완성 시)
// TODO : 실명 인증 기능 추가
// TODO : validation + 에러메세지 toast 추가
const SignUpPage = () => {
  const { funnel, goBackStep, storeData, proceedToNextStep } = useSignupFunnel();

  const nickName = useCompositionInput({
    initialValue: funnel.context.nickName,
    onStore: (value: string) => storeData('nickName', value),
  });

  const ageLabels = AGE_OPTIONS.map((option) => option.label);
  const ageDetailLabels = AGE_DETAIL_OPTIONS.map((option) => option.label);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (funnel.step === 'nickName') {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
    if (funnel.step === 'age') {
      requestAnimationFrame(() => {
        selectRef.current?.focus();
        selectRef.current?.click();
      });
    }
  }, [funnel.step]);

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO : 각 step 별 유효 조건 따로 관리 후 막기
    if (e.key === 'Enter') {
      proceedToNextStep();
    }
  };

  return (
    <S.SignUpPageContainer>
      <SignUpPageHeader
        goBackStep={goBackStep}
        step={funnel.step}
        nickname={funnel.context.nickName}
      />
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
        nickName={() => (
          <>
            <InputGroup
              id="nickName"
              value={nickName.value}
              placeholder={`${CONSTRAINTS.nickName.maxLength}자 이하로 입력해주세요`}
              maxLength={CONSTRAINTS.nickName.maxLength}
              ref={inputRef}
              onKeyDown={handleKeydown}
              {...nickName.handlers}
            />
            <TextButton
              variant="primary"
              onClick={proceedToNextStep}
              buttonText="다음으로"
              disabled={!nickName.value || nickName.value.length === 0}
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
                ref={selectRef}
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
                  disabled={
                    context.interest.size >= CONSTRAINTS.interest.max &&
                    !context.interest.has(option.value)
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
              onClick={() => navigate(ROUTES.home)}
              buttonText="Let's IT 시작하기"
            />
          </>
        )}
      />
    </S.SignUpPageContainer>
  );
};

export default SignUpPage;
