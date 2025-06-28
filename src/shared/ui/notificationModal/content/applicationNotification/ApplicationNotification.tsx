import { NOTIFICATION_HIGHLIGHT_TEXT, NOTIFICATION_MESSAGES } from '../../../../constants';
import { renderWithHighlight } from '../../../../lib';
import * as S from './ApplicationNotification.styles';

interface ApplicationNotificationProps {
  projectName: string;
}

const ApplicationNotification = ({ projectName }: ApplicationNotificationProps) => {
  const message = renderWithHighlight(
    NOTIFICATION_MESSAGES.application(),
    NOTIFICATION_HIGHLIGHT_TEXT.application(projectName),
  );
  return <S.Message>{message}</S.Message>;
};

export default ApplicationNotification;
