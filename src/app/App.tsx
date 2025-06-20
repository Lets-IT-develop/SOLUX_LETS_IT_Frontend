import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import ProfileImageUploader from '../features/login/ui/profileImageUploader/ProfileImageUploader';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProfileImageUploader />
    </ThemeProvider>
  );
}

export default App;
