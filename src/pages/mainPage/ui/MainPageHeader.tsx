import * as S from './MainPageHeader.styles';
import Logo from '../../../shared/assets/logo/logo.svg';
import SearchIcon from '../../../shared/assets/icons/ic_search.svg';
import AlarmIcon from '../../../shared/assets/icons/ic_alarm.svg';
import MenuIcon from '../../../shared/assets/icons/ic_menu.svg';
import { ToggleSwitch } from '../../../shared';

const MainPageHeader = () => {
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
      <ToggleSwitch
        tabContent={[
          { label: '프로젝트 찾기', onClick: () => {} },
          { label: '맞춤 회원 찾기', onClick: () => {} },
        ]}
      />
    </S.MainPageHeaderContainer>
  );
};

export default MainPageHeader;
