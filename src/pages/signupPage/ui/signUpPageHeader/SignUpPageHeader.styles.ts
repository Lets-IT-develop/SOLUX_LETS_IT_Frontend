import styled from '@emotion/styled';

export const SignUpPageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const SignUpPageHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;

export const SignUpPageGuideText = styled.p`
  ${({ theme }) => ({
    ...theme.typography.bodyLarge,
  })};
  text-align: center;
  line-height: 1.5;
  white-space: pre-line;
  width: 100%;
  text-align: start;
`;

export const GoBackButton = styled.button`
  width: 20px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

