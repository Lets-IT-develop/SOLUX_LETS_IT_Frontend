import { useState } from 'react';

interface UseCompositionInputProps {
  initialValue: string;
  onStore: (value: string) => void;
}
// TODO : 닉네임 공백 제거
export const useCompositionInput = ({ initialValue, onStore }: UseCompositionInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onStore(e.currentTarget.value);
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setValue(currentValue);
  };

  return {
    value,
    handlers: {
      onChange: handleChange,
      onCompositionEnd: handleCompositionEnd,
    },
  };
};
