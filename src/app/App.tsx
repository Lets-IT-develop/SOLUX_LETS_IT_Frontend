import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import { ToggleSwitch } from '../shared';

function App() {
  const tabContent = [
    { label: '테스트', onClick: () => {} },
    { label: '테스트2', onClick: () => {} },
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleSwitch tabContent={tabContent} />
    </ThemeProvider>
  );
}

export default App;
