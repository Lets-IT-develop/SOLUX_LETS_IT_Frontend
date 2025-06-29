import type { ComponentProps } from 'react';
import * as S from './FloatButton.styles';
import { handleImageError } from '../../../lib';
import fallbackIcon from '../../../assets/icons/ic_fallback.svg';

interface FloatButtonProps extends ComponentProps<'button'> {
  buttonText: string;
  iconSrc?: string;
  position?: S.PositionProps;
}

const FloatButton = ({ buttonText, position, iconSrc, ...buttonProps }: FloatButtonProps) => {
  return (
    <S.FloatButtonContainer $position={position} {...buttonProps}>
      {buttonText}
      {iconSrc ? (
        <img src={iconSrc} alt="icon" onError={(e) => handleImageError(e, fallbackIcon)} />
      ) : null}
    </S.FloatButtonContainer>
  );
};

export default FloatButton;
