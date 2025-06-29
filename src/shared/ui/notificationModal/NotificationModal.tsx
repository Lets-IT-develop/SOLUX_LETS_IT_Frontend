import * as S from './NotificationModal.styles';
import { useRef } from 'react';
import CloseIcon from '../../assets/icons/ic_close.svg';

interface NotificationModalProps {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const NotificationModal = ({ title, children, onClose }: NotificationModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <S.NotificationModalContainer
      ref={ref}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
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
