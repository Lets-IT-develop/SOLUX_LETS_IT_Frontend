import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const globalCss = (theme: Theme) => css`
  input {
    &:focus {
      outline: 1px solid ${theme.colors.primary};
    }
  }
`;
