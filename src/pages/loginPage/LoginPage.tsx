import { BRAND_MESSAGE } from '../../shared';
import * as S from './LoginPage.styles';
import Logo from '../../shared/assets/logo/logo.svg';
import GoogleLoginLogo from '../../shared/assets/images/login/ic_google_login.svg';

// TODO : 로그인이 안돼있을 경우 로그인 페이지로 이동
const LoginPage = () => {
  const redirectToLogin = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/google`;
  };
  return (
    <S.LoginContainer>
      <S.LogoContainer>
        <S.LogoMessage>{BRAND_MESSAGE}</S.LogoMessage>
        <S.Logo src={Logo} />
      </S.LogoContainer>
      <S.LoginButton onClick={redirectToLogin}>
        <img src={GoogleLoginLogo} alt="구글 로그인" />
      </S.LoginButton>
    </S.LoginContainer>
  );
};

export default LoginPage;
