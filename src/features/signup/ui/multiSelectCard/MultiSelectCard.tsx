import type { ComponentProps } from 'react';
import * as S from './MultiSelectCard.styles';

interface MultiSelectCardProps extends ComponentProps<'button'> {
  isFocused: boolean;
  text: string;
  toggleFocus: () => void;
}

const MultiSelectCard = ({ isFocused, toggleFocus, text, ...restProps }: MultiSelectCardProps) => {
  return (
    <S.MultiSelectCardContainer $isFocused={isFocused} onClick={toggleFocus} {...restProps}>
      <S.MultiSelectCardTitle>{text}</S.MultiSelectCardTitle>
    </S.MultiSelectCardContainer>
  );
};

export default MultiSelectCard;
