import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { InputGroup } from '../shared/ui/input';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <InputGroup
        id="name"
        label="Name"
        placeholder="Enter your name"
        type="text"
        helperText="This is a helper text"
      />
    </ThemeProvider>
  );
}

export default App;
