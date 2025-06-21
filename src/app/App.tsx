import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { InputGroup } from '../shared/ui/input';
import { Select } from '../shared/ui/select';

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
      <Select options={['1', '2', '3']} value="1" handleSelectedValue={() => {}} />
    </ThemeProvider>
  );
}

export default App;
