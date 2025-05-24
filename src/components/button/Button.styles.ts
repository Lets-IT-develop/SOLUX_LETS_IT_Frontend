import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ButtonVariantsTypes } from '../../types/styleVariants';

export const buttonStyles = {
  largePrimary: css`
    width: 100%;
    padding: 12px 0;
    background-color: var(--color-primary);
    color: var(--color-white);
  `,
  // TODO : 디자인 시스템에 맞춰 수정 예정
  smallPrimary: css`
    width: 100%;
    padding: 8px 0;
    background-color: var(--color-primary);
    color: var(--color-white);
  `,
};

export const ButtonContainer = styled.button<{ $variant: ButtonVariantsTypes }>`
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;

  &:disabled {
    background-color: var(--color-grey);
    color: var(--color-white);
    cursor: not-allowed;
  }

  ${({ $variant }) => buttonStyles[$variant]}
`;
