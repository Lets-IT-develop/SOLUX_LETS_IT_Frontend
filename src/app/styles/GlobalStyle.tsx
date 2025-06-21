/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { reset } from './reset';
import { globalCss } from './globalCss';

const GlobalStyle = () => <Global styles={[reset, globalCss]} />;

export default GlobalStyle;
