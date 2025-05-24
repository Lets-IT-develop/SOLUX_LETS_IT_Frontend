import Button from './components/button/Button';
import Select from './components/select/Select';
import GlobalStyle from './GlobalStyles';
import styled from '@emotion/styled';

const Wrap = styled.div`
padding: 30px;
  width: 300px;
  display: flex;
  gap: 30px;
`;
function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Button variant="smallPrimary">버튼 예시입니다</Button>
      <Select options={['옵션1', '옵션2', '옵션3']} value="옵션1" handleSelectedValue={() => {}} />
    </Wrap>
  );
}

export default App;
