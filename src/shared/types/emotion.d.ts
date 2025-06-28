import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;

      onWhite: string;
      onGray1: string;
      onGray2: string;
      onGray3: string;
      onGray4: string;
      onBlack: string;

      primary10: string;
      primary20: string;
      secondary: string;
      primary60: string;
      primary: string;
      primary80: string;

      onPrimary10: string;
      onPrimary20: string;
      onSecondary: string;
      onPrimary60: string;
      onPrimary: string;
      onPrimary80: string;

      error: string;
      errorContainer: string;
      onError: string;
      onErrorContainer: string;
    };
    typography: {
      heading1: TypographyStyle;
      heading2: TypographyStyle;
      heading3: TypographyStyle;
      bodyLarge: TypographyStyle;
      bodyRegular: TypographyStyle;
      captionSmall: TypographyStyle;
      buttonPrimary: TypographyStyle;
      buttonSecondary: TypographyStyle;
      buttonTertiary: TypographyStyle;
      labelInput: TypographyStyle;
    };
    spacing: {
      pagePadding: string;
    };
    zIndex: {
      default: number;
      floatButton: number;
      layoutScrollShadow: number;
    };
  }

  interface TypographyStyle {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  }
}
