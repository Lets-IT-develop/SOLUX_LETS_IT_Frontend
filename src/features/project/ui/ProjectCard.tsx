import { Fragment } from 'react/jsx-runtime';
import * as S from './ProjectCard.styles';

interface ProjectCardProps {
  title: string;
  info: {
    label: string;
    value: string;
  }[];
}
const ProjectCard = ({ title, info }: ProjectCardProps) => {
  return (
    <S.ProjectCardContainer>
      <S.ProjectCardTitle>{title}</S.ProjectCardTitle>
      <S.ProjectInfoContainer>
        {info.map((item) => (
          <Fragment key={item.label}>
            <S.ProjectInfoLabel>{item.label}</S.ProjectInfoLabel>
            <S.ProjectInfoValue>{item.value}</S.ProjectInfoValue>
          </Fragment>
        ))}
      </S.ProjectInfoContainer>
    </S.ProjectCardContainer>
  );
};

export default ProjectCard;
