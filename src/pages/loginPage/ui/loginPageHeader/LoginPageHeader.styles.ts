import styled from '@emotion/styled';

export const LoginPageHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`;

export const LoginPageHeaderSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const LoginPageGuideText = styled.p`
  ${({ theme }) => ({ ...theme.typography.bodyLarge })};
  color: ${({ theme }) => theme.colors.black};
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

