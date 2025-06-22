import { handleImageError } from '../../../../shared/lib';
import type { TextButtonVariantsTypes } from '../../../../shared/types';
import * as S from './TextButton.styles';
import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  variant: TextButtonVariantsTypes;
  iconSrc?: string;
  buttonText: string;
}

const Button = ({ variant, iconSrc, buttonText, ...buttonProps }: ButtonProps) => {
  return (
    <S.ButtonContainer
      type={buttonProps.type}
      name={buttonProps.name}
      id={buttonProps.id}
      onClick={buttonProps.onClick}
      $variant={variant}
      disabled={buttonProps.disabled}
    >
      {iconSrc ? <img src={iconSrc} alt="icon" onError={handleImageError} /> : null}
      {buttonText}
    </S.ButtonContainer>
  );
};

export default Button;
