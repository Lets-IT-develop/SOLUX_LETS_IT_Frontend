import type { ProjectDataType } from '../../../../shared/types/data';
import ProjectCard from '../projectCard/ProjectCard';
import * as S from './ProjectCardList.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectCardListProps {
  projects: ProjectDataType[];
}

const ProjectCardList = ({ projects }: ProjectCardListProps) => {
  return (
    <S.ProjectCardListContainer>
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        centeredSlides={false}
        grabCursor
        loop
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard key={project.title} projectData={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ProjectCardListContainer>
  );
};

export default ProjectCardList;
