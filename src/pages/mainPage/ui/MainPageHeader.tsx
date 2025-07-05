import * as S from './MainPageHeader.styles';
import Logo from '../../../shared/assets/logo/logo.svg';
import SearchIcon from '../../../shared/assets/icons/ic_search.svg';
import AlarmIcon from '../../../shared/assets/icons/ic_alarm.svg';
import MenuIcon from '../../../shared/assets/icons/ic_menu.svg';
import { ROUTES, ToggleSwitch, PATH_TO_TAB_INDEX } from '../../../shared';
import { useNavigate, useLocation } from 'react-router-dom';

const MainPageHeader = () => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const tabContent = [
    { label: '프로젝트 찾기', onClick: () => navigate(ROUTES.projects) },
    { label: '맞춤 회원 찾기', onClick: () => navigate(ROUTES.members) },
  ];

  return (
    <S.MainPageHeaderContainer>
      <S.MainPageHeaderTop>
        <S.LogoButton>
          <img src={Logo} alt="홈으로 이동" />
        </S.LogoButton>
        <S.NavigateContainer>
          <S.NavigateButton>
            <img src={SearchIcon} alt="검색" />
          </S.NavigateButton>
          <S.NavigateButton>
            <img src={AlarmIcon} alt="알림" />
          </S.NavigateButton>
          <S.NavigateButton>
            <img src={MenuIcon} alt="메뉴" />
          </S.NavigateButton>
        </S.NavigateContainer>
      </S.MainPageHeaderTop>
      <ToggleSwitch tabContent={tabContent} initialIndex={PATH_TO_TAB_INDEX[currentPath]} />
    </S.MainPageHeaderContainer>
  );
};

export default MainPageHeader;
