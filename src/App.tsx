import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import TextButton from "./components/button/textButton/TextButton";
import IconButton from "./components/button/iconButton/IconButton";
import IconSrc from "/public/icons/ic_select.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TextButton variant="primary" buttonText="Primary" />
      <IconButton iconSrc={IconSrc} />
    </ThemeProvider>
  );
}

export default App;
