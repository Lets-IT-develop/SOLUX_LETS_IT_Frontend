import { handleImageError } from '../../../../shared/lib';
import * as S from './IconButton.styles';
import fallbackIcon from '../../../assets/icons/ic_fallback.svg';

interface IconButtonProps {
  iconSrc: string;
}

const IconButton = ({ iconSrc }: IconButtonProps) => {
  return (
    <S.ButtonContainer>
      {iconSrc ? (
        <img src={iconSrc} alt="icon" onError={(e) => handleImageError(e, fallbackIcon)} />
      ) : null}
    </S.ButtonContainer>
  );
};

export default IconButton;
