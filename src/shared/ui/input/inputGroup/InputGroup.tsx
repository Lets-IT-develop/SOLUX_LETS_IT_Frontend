import * as S from './InputGroup.styles';
import { InputField } from '../index';
import { forwardRef, type ComponentProps } from 'react';

interface InputGroupProps extends ComponentProps<'input'> {
  id: string;
  label?: string;
  helperText?: string;
}

const InputGroupComponent = (
  { id, label, helperText, ...restProps }: InputGroupProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  return (
    <S.InputGroupContainer>
      <S.InputGroupLabelContainer>
        <S.InputGroupLabel htmlFor={id}>{label}</S.InputGroupLabel>
        {helperText && <S.InputGroupHelperText>{helperText}</S.InputGroupHelperText>}
      </S.InputGroupLabelContainer>
      <InputField id={id} ref={ref} {...restProps} />
    </S.InputGroupContainer>
  );
};

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(InputGroupComponent);

export default InputGroup;
