import type { ComponentProps } from 'react';
import * as S from './FloatButton.styles';

interface FloatButtonProps extends ComponentProps<'button'> {
  buttonText: string;
  position?: S.PositionProps;
}

const FloatButton = ({ buttonText, position, ...buttonProps }: FloatButtonProps) => {
  return (
    <S.FloatButtonContainer $position={position} {...buttonProps}>
      {buttonText}
    </S.FloatButtonContainer>
  );
};

export default FloatButton;
