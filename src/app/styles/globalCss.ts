import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const globalCss = (theme: Theme) => css`
 @font-face {
   font-family: 'SUIT';
   src: url('/fonts/SUIT-Variable.woff2') format('woff2');
   font-display: swap;
 }
 *{
  font-family: inherit;
 }
 body{ 
  font-family: 'SUIT', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
 }
  input {
    &:focus {
      outline: 1px solid ${theme.colors.primary};
    }
  }
  button {
    color: ${theme.colors.black}; 
    &:focus-visible{
      outline: 2px solid ${theme.colors.error};
    }
  }
  input,
  button,
  textarea,
  select {
    font-family: inherit; 
  }
  .swiper {
    padding-bottom: 32px;
  }
  .swiper-slide {
    width: calc(100% - 10px); 
    max-width: 80%;        
    flex-shrink: 0;
  }
  .swiper-pagination {
    margin-top: 32px;
  }
`;
