import * as S from './Title.styles';

interface TitleProps {
  titleText: string;
}
const Title = ({ titleText }: TitleProps) => {
  return <S.Heading>{titleText}</S.Heading>;
};

export default Title;
