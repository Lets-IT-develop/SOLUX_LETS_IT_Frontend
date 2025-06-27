import { forwardRef, type ComponentProps } from 'react';
import * as S from './InputField.styles';

interface InputFieldProps extends ComponentProps<'input'> {
  id: string;
}

const InputFieldComponents = (
  { id, ...restProps }: InputFieldProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  return <S.InputField id={id} ref={ref} {...restProps} />;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(InputFieldComponents);

export default InputField;
