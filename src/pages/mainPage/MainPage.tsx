import ProjectCard from '../../features/project/ui/ProjectCard';
import FloatButton from '../../shared/ui/button/floatButton/FloatButton';
import * as S from './MainPage.styles';
import MainPageHeader from './ui/MainPageHeader';
import PenIcon from '../../shared/assets/icons/ic_pen.svg';
import NotificationModal from '../../shared/ui/notificationModal/NotificationModal';
import ApplicationNotification from '../../shared/ui/notificationModal/content/applicationNotification/ApplicationNotification';

// TODO : 백엔드 데이터 하단 형태로 변경
const mockProjectInfo = [
  { label: '기간', value: '2023.10.01 ~ 2023.11.01' },
  { label: '참여인원', value: '5명' },
  { label: '진행상태', value: '진행중' },
];
// TODO : 실제 프로젝트 이름으로 변경 필요
const mockAlertProjectName = 'LetsIT';

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <MainPageHeader />
      <NotificationModal title="프로젝트 지원서 도착 안내" onClose={() => {}}>
        {mockAlertProjectName && <ApplicationNotification projectName={mockAlertProjectName} />}
      </NotificationModal>
      <ProjectCard title="타이틀입니다" info={mockProjectInfo} />
      <FloatButton buttonText="글쓰기" iconSrc={PenIcon} />
    </S.MainPageContainer>
  );
};

export default MainPage;
