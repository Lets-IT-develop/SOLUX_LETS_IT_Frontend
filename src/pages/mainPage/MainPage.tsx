import PenIcon from '../../shared/assets/icons/ic_pen.svg';
import * as S from './MainPage.styles';
import { FloatButton, INTEREST_LABELS, NotificationModal, ROUTES } from '../../shared';
import { ApplicationNotification } from '../../shared';
import { ProjectCard } from '../../features';
import { MainPageHeader } from './ui';
import { z } from 'zod';
import { useModal } from '../../shared';
import { useEffect } from 'react';

const MainPage = () => {
  // TODO : 백엔드 데이터 하단 형태로 변경
  const mockProjectInfo = [
    { label: '기간', value: '2023.10.01 ~ 2023.11.01' },
    { label: '참여인원', value: '5명' },
    { label: '진행상태', value: '진행중' },
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

  const { isOpen, handleOpen, handleClose } = useModal();
  useEffect(() => {
    // TODO : 백엔드 연동 - 알람이 있을 경우 handleOpen 작동 및 데이터 전달
    handleOpen();
  }, []);
  // TODO : profileId를 받은 후 navigate 연결 (ROUTES.home 변경)
  return (
    <S.MainPageContainer>
      <MainPageHeader />
      {isOpen && (
        <NotificationModal title="프로젝트 지원서 도착 안내" onClose={handleClose}>
          {mockAlertProjectName && (
            <ApplicationNotification
              projectName={mockAlertProjectName}
              profile={mockProfile}
              profileUrl={ROUTES.home}
            />
          )}
        </NotificationModal>
      )}
      <ProjectCard title="타이틀입니다" info={mockProjectInfo} />
      <FloatButton buttonText="글쓰기" iconSrc={PenIcon} />
    </S.MainPageContainer>
  );
};

export default MainPage;
