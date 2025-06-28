import { ProjectCard } from '../../features';
import * as S from './ProjectsPage.styles';
import {
  ApplicationNotification,
  FloatButton,
  INTEREST_LABELS,
  NotificationModal,
  ROUTES,
  useModal,
} from '../../shared';
import PenIcon from '../../shared/assets/icons/ic_pen.svg';
import { z } from 'zod';
import Title from '../../shared/ui/text/title/Title';
import ProjectCardList from '../../features/project/ui/projectCardList/ProjectCardList';

const ProjectsPage = () => {
  // TODO : 백엔드 데이터 하단 형태로 변경 (info)
  const mockProjectInfo = [
    {
      title: '첫번째 프로젝트',
      category: '웹',
      period: '2023.01.01 ~ 2023.12.31',
      stacks: ['React', 'TypeScript', 'Node.js', 'Express'],
    },
    {
      title: 'mock2',
      category: '앱',
      period: '2023.01.01 ~ 2023.12.31',
      stacks: ['Flutter', 'Dart'],
    },
    {
      title: 'mock3',
      category: '디자인',
      period: '2023.01.01 ~ 2023.12.31',
      stacks: ['Figma', 'Adobe XD'],
    },
    {
      title: 'mock4',
      category: '디자인',
      period: '2023.01.01 ~ 2023.12.31',
      stacks: ['Figma', 'Adobe XD'],
    },
    {
      title: 'mock5',
      category: '디자인',
      period: '2023.01.01 ~ 2023.12.31',
      stacks: ['Figma', 'Adobe XD'],
    },
  ];

  const interestSchema = z.enum([...INTEREST_LABELS]);
  const profileSchema = z.object({
    name: z.string(),
    interests: z.array(interestSchema),
  });
  type Profile = z.infer<typeof profileSchema>;

  // TODO : 실제 프로젝트 이름으로 변경 필요
  const mockAlertProjectName = 'LetsIT';
  const mockProfile: Profile = {
    name: '홍길동',
    interests: ['개발자', '디자이너'],
  };

  const initialModalOpen = sessionStorage.getItem('notificationModalClosed') !== 'true';
  const { isOpen, toggleClose } = useModal({ initialValue: initialModalOpen });
  const toggleNotificationModalClose = () => {
    toggleClose();
    sessionStorage.setItem('notificationModalClosed', 'true');
  };

  // TODO : profileId를 받은 후 navigate 연결 (ROUTES.home 변경)
  return (
    <>
      {isOpen && (
        <NotificationModal title="프로젝트 지원서 도착 안내" onClose={toggleNotificationModalClose}>
          {mockAlertProjectName && (
            <ApplicationNotification
              projectName={mockAlertProjectName}
              profile={mockProfile}
              profileUrl={ROUTES.home}
            />
          )}
        </NotificationModal>
      )}
      <S.ContentContainer>
        <Title titleText="이런 프로젝트는 어떠신가요? 💫" />
        <ProjectCardList projects={mockProjectInfo} />
      </S.ContentContainer>
      <FloatButton buttonText="글쓰기" iconSrc={PenIcon} />
    </>
  );
};

export default ProjectsPage;
