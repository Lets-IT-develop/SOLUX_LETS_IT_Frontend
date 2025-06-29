import * as S from './MainPage.styles';
import { MainPageHeader } from './ui';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <MainPageHeader />
      <Outlet />
    </S.MainPageContainer>
  );
};

export default MainPage;
