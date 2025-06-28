import * as S from './NotificationModal.styles';
import { useOutsideClick } from '../../lib';
import { useRef } from 'react';
import CloseIcon from '../../assets/icons/ic_close.svg';

interface NotificationModalProps {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const NotificationModal = ({ title, children, onClose }: NotificationModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);

  return (
    <S.NotificationModalContainer ref={ref}>
      <S.NotificationModalHeader>
        {title ? <S.NotificationModalTitle>{title}</S.NotificationModalTitle> : null}
        <S.NotificationModalCloseButton onClick={onClose}>
          <img src={CloseIcon} alt="모달 닫기" />
        </S.NotificationModalCloseButton>
      </S.NotificationModalHeader>
      {children}
    </S.NotificationModalContainer>
  );
};

export default NotificationModal;
