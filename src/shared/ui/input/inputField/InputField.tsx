import type { ComponentProps } from 'react';
import * as S from './InputField.styles';

interface InputFieldProps extends ComponentProps<'input'> {
  id: string;
}

const InputField = ({ id, ...restProps }: InputFieldProps) => {
  return <S.InputField id={id} {...restProps} />;
};

export default InputField;
