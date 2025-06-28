import styled from '@emotion/styled';
import { css } from '@emotion/react';

const scrollableStyle = ({ theme }: { theme: any }) =>
  css`
    &::after {
      content: '';
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, transparent, white);
      pointer-events: none;
      z-index: ${theme.zIndex.layoutScrollShadow};
    }
  `;

export const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.pagePadding} 8px`};
  margin-bottom: 100px;
  box-sizing: border-box;
  ${scrollableStyle}
`;