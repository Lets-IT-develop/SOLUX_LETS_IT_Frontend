import * as S from './Input.styles';
import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, onChange, ...inputProps }: InputProps) => {
  return <S.InputField value={value} onChange={onChange} {...inputProps} />;
};

export default Input;
