import { useState } from 'react';

interface UseCompositionInputProps {
  initialValue: string;
}
export const useCompositionInput = ({ initialValue }: UseCompositionInputProps) => {
  const [value, setValue] = useState(initialValue);
  const [isComposing, setIsComposing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false);
    setValue(e.currentTarget.value);
  };

  return {
    value,
    isComposing,
    handlers: {
      onChange: handleChange,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd,
    },
  };
};
