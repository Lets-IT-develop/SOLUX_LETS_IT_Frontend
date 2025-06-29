import { css, type Theme } from '@emotion/react';
import styled from '@emotion/styled';
import type { TextButtonVariantsTypes } from '../../../types';

export const buttonStyles = {
  primary: (theme: Theme) => css`
    background: ${theme.colors.primary80};
    color: ${theme.colors.white};
    &:active {
      box-shadow: 1px 1px 3px 0px #7ea3ff inset,
        0px 2px 10px 0px rgba(0, 0, 0, 0.25);
    }
    &:disabled {
      color: ${theme.colors.gray3};
      background: ${theme.colors.primary10};
      box-shadow: none;
    }
  `,
  secondary: (theme: Theme) => css`
    border: 1px solid ${theme.colors.gray3};
    opacity: 0.99;
    background: ${theme.colors.white};
    color: ${theme.colors.gray4};
    &:active {
      background: ${theme.colors.primary20};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
    &:disabled {
      background: ${theme.colors.gray2};
      color: ${theme.colors.gray3};
    }
  `,
  tertiary: (theme: Theme) => css`
    padding: 12px 20px;
    color: ${theme.colors.black};
    &:active {
      color: ${theme.colors.primary};
    }
    &:disabled {
      color: ${theme.colors.gray2};
    }
  `,
};

export const ButtonContainer = styled.button<{
  $variant: TextButtonVariantsTypes;
}>`
  width: 100%;
  border-radius: 12px;
  padding: 12px 20px;
  box-sizing: border-box;
 ${({ theme }) => ({...theme.typography.buttonPrimary})};
  &:disabled {
    cursor: not-allowed;
  }

  ${({ $variant, theme }) => buttonStyles[$variant](theme)}
`;
