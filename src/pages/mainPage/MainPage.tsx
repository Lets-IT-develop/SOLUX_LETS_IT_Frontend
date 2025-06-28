import ProjectCard from '../../features/project/ui/ProjectCard';
import FloatButton from '../../shared/ui/button/floatButton/FloatButton';
import * as S from './MainPage.styles';
import MainPageHeader from './ui/MainPageHeader';
import PenIcon from '../../shared/assets/icons/ic_pen.svg';
import NotificationModal from '../../shared/ui/notificationModal/NotificationModal';

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <MainPageHeader />
      <NotificationModal title="프로젝트 지원서 도착 안내" onClose={() => {}}>
        <h2>hi</h2>
      </NotificationModal>
      <ProjectCard
        title="타이틀입니다"
        info={[
          { label: '기간', value: '2023.10.01 ~ 2023.11.01' },
          { label: '참여인원', value: '5명' },
          { label: '진행상태', value: '진행중' },
        ]}
      />
      <FloatButton buttonText="글쓰기" iconSrc={PenIcon} />
    </S.MainPageContainer>
  );
};

export default MainPage;
