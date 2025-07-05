import { handleImageError } from '../../../../shared/lib';
import * as S from './IconButton.styles';
import fallbackIcon from '../../../assets/icons/ic_fallback.svg';

interface IconButtonProps {
  iconSrc: string;
  alt: string;
}

const IconButton = ({ iconSrc, alt }: IconButtonProps) => {
  return (
    <S.ButtonContainer>
      {iconSrc ? (
        <img src={iconSrc} alt={alt} onError={(e) => handleImageError(e, fallbackIcon)} />
      ) : null}
    </S.ButtonContainer>
  );
};

export default IconButton;
