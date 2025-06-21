import * as S from './InputGroup.styles';
import { InputField } from '../index';
import type { ComponentProps } from 'react';

interface InputGroupProps extends ComponentProps<'input'> {
  id: string;
  label: string;
  helperText?: string;
}

const InputGroup = ({ id, label, helperText, ...restProps }: InputGroupProps) => {
  return (
    <S.InputGroupContainer>
      <S.InputGroupLabelContainer>
        <S.InputGroupLabel htmlFor={id}>{label}</S.InputGroupLabel>
        {helperText && <S.InputGroupHelperText>{helperText}</S.InputGroupHelperText>}
      </S.InputGroupLabelContainer>
      <InputField id={id} {...restProps} />
    </S.InputGroupContainer>
  );
};

export default InputGroup;
