import { Fragment } from 'react/jsx-runtime';
import * as S from './ProjectCard.styles';
import type { ProjectDataType } from '../../../../shared/types/data';
import { PROJECT_CARD_LABEL } from '../../../../shared';

interface ProjectCardProps {
  projectData: ProjectDataType;
}

const ProjectCard = ({ projectData }: ProjectCardProps) => {
  const { title, category, period, stacks } = projectData;
  const infoArray: Array<[keyof typeof PROJECT_CARD_LABEL, string]> = [
    ['category', category],
    ['period', period],
    ['stacks', stacks.join(', ')],
  ];

  return (
    <S.ProjectCardContainer>
      <S.ProjectCardTitle>{title}</S.ProjectCardTitle>
      <S.ProjectInfoContainer>
        {infoArray.map(([label, value]) => (
          <Fragment key={label}>
            <S.ProjectInfoLabel>{PROJECT_CARD_LABEL[label]}</S.ProjectInfoLabel>
            <S.ProjectInfoValue>{value}</S.ProjectInfoValue>
          </Fragment>
        ))}
      </S.ProjectInfoContainer>
    </S.ProjectCardContainer>
  );
};

export default ProjectCard;
