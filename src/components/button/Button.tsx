import type { ButtonVariantsTypes } from '../../types/styleVariants';
import * as S from './Button.styles';
import type { ComponentProps } from 'react';

interface ButtonProps
  extends Pick<ComponentProps<'button'>, 'type' | 'name' | 'id' | 'onClick' | 'disabled'> {
  children: React.ReactNode;
  variant: ButtonVariantsTypes;
}

const Button = ({ children, variant, ...buttonProps }: ButtonProps) => {
  return (
    <S.ButtonContainer
      type={buttonProps.type}
      name={buttonProps.name}
      id={buttonProps.id}
      onClick={buttonProps.onClick}
      $variant={variant}
      disabled={buttonProps.disabled}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
