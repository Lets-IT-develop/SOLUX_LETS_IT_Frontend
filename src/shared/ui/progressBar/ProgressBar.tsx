import * as S from './ProgressBar.styles';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressFill $progress={progress} />
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
