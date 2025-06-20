import { handleImageError } from '../../../lib';
import * as S from './IconButton.styles';

interface IconButtonProps {
  iconSrc: string;
}

const IconButton = ({ iconSrc }: IconButtonProps) => {
  return (
    <S.ButtonContainer>
      {iconSrc ? <img src={iconSrc} alt="icon" onError={handleImageError} /> : null}
    </S.ButtonContainer>
  );
};

export default IconButton;
