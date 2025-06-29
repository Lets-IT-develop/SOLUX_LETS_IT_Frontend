import styled from "@emotion/styled"
import { css } from "@emotion/react";

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

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 100px;
  ${scrollableStyle}
`