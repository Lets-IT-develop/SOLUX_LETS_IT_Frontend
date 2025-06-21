import styled from '@emotion/styled';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.gray3};
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  object-fit: cover;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primary60})`};
  border-radius: 100px;
  box-shadow:
    ${({ theme }) => `inset 0 1px 3px ${theme.colors.white},
    inset 0 1px 3px ${theme.colors.primary20}`};
  transition: width 0.5s cubic-bezier(0.1, 0, 0.1, 1);
`;
