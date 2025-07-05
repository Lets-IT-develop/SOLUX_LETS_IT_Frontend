import { useNavigate } from 'react-router-dom';
import { ProfilePreview } from '../../../profile';
import { NOTIFICATION_HIGHLIGHT_TEXT, NOTIFICATION_MESSAGES } from '../../../../constants';
import { renderWithHighlight } from '../../../../lib';
import type { InterestType } from '../../../../types/types';
import * as S from './ApplicationNotification.styles';
import { TextButton } from '../../../button';

interface ApplicationNotificationProps {
  projectName: string;
  profile: {
    imageUrl?: string;
    name: string;
    interests: InterestType[];
  };
  profileUrl: string;
}

const ApplicationNotification = ({
  projectName,
  profile,
  profileUrl,
}: ApplicationNotificationProps) => {
  const message = renderWithHighlight(
    NOTIFICATION_MESSAGES.application(),
    NOTIFICATION_HIGHLIGHT_TEXT.application(projectName),
  );
  const navigate = useNavigate();

  // TODO : 알람 확인 여부 토글 (백엔드)
  return (
    <>
      <S.Message>{message}</S.Message>
      <ProfilePreview {...profile} />
      <TextButton variant="primary" buttonText="지원서 보기" onClick={() => navigate(profileUrl)} />
    </>
  );
};

export default ApplicationNotification;
