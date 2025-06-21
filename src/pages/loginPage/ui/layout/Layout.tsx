import * as S from './Layout.styles';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default Layout;
