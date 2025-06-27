import * as S from './Select.styles';
import { forwardRef, useRef, useState } from 'react';
import SelectDownIcon from '../../assets/icons/ic_arrow_down.svg';
import { useOutsideClick } from '../../lib';

interface SelectProps<T> {
  defaultOption?: T;
  options: T[];
  value: T;
  onSelectedValueChange: (value: T) => void;
}

const SelectComponent = <T extends string>(
  { defaultOption, options, value, onSelectedValueChange }: SelectProps<T>,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleSelectOption = (option: T) => {
    onSelectedValueChange(option);
    setIsOpen(false);
  };

  const backgroundRef = useRef<HTMLDivElement>(null);
  useOutsideClick(backgroundRef, () => setIsOpen(false));

  const handleSelectKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      e.preventDefault();
      if (isOpen) {
        handleSelectOption(options[focusedIndex]);
        return;
      }
      setIsOpen(!isOpen);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(Math.min(focusedIndex + 1, options.length - 1));
      setIsOpen(true);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(Math.max(focusedIndex - 1, 0));
      setIsOpen(true);
    }
    if (e.key === 'Tab') {
      setIsOpen(false);
    }
  };

  return (
    <S.SelectContainer ref={backgroundRef}>
      <S.SelectField
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-activedescendant={isOpen ? `option-${options[focusedIndex]}` : undefined}
        aria-label={value}
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        tabIndex={0}
        onKeyDown={handleSelectKeyDown}
        ref={ref}
      >
        <S.DefaultMessage>{value ? value : defaultOption}</S.DefaultMessage>
        <S.SelectIcon src={SelectDownIcon} alt="옵션 열기" />
      </S.SelectField>
      {isOpen && (
        // biome-ignore lint/a11y/useSemanticElements: to justify role
        <S.OptionsContainer role="listbox">
          {options.map((option, index) => (
            <S.OptionItem
              id={`option-${option}`}
              key={option}
              onClick={() => handleSelectOption(option)}
              aria-selected={option === value}
              $isFocused={focusedIndex === index}
            >
              {option}
            </S.OptionItem>
          ))}
        </S.OptionsContainer>
      )}
    </S.SelectContainer>
  );
};

const Select = forwardRef<HTMLButtonElement, SelectProps<string>>(SelectComponent);

export default Select;
