import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { MultiSelectCard } from '../features/login/ui';
import { useState } from 'react';
function App() {
  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MultiSelectCard isFocused={isFocused} toggleFocus={toggleFocus} text="MultiSelectCard" />
    </ThemeProvider>
  );
}

export default App;
