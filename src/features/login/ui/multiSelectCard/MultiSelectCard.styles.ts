import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MultiSelectCardContainer = styled.button<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  padding: 12px 20px;
  max-width: 133px;
  aspect-ratio: 1 / 1;
  &::focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary20};
    color: ${({ theme }) => theme.colors.primary};
  }
  ${({ $isFocused, theme }) =>
    $isFocused &&
    css`
      border: 1px solid ${theme.colors.primary};
      background-color: ${theme.colors.primary20};
      color: ${theme.colors.primary};
    `}
`;

export const MultiSelectCardTitle = styled.p`
  ${({ theme }) => ({
    ...theme.typography.bodyRegular,
  })};
`;
