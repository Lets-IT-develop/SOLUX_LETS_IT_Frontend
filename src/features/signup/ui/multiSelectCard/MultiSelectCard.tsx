import * as S from './MultiSelectCard.styles';

interface MultiSelectCardProps {
  isFocused: boolean;
  text: string;
  toggleFocus: () => void;
}

const MultiSelectCard = ({ isFocused, toggleFocus, text }: MultiSelectCardProps) => {
  return (
    <S.MultiSelectCardContainer $isFocused={isFocused} onClick={toggleFocus}>
      <S.MultiSelectCardTitle>{text}</S.MultiSelectCardTitle>
    </S.MultiSelectCardContainer>
  );
};

export default MultiSelectCard;
