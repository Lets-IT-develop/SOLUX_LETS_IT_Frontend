import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Input from '../shared/ui/input/input/Input';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Input />
    </ThemeProvider>
  );
}

export default App;
