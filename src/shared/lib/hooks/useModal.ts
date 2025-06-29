import { useState } from 'react';

interface UseModalProps {
  initialValue: boolean;
}

export const useModal = ({ initialValue }: UseModalProps) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleOpen, toggleClose };
};
