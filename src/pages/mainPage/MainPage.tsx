import ProjectCard from '../../features/project/ui/ProjectCard';
import * as S from './MainPage.styles';
import MainPageHeader from './ui/MainPageHeader';

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <MainPageHeader />
      <ProjectCard
        title="타이틀입니다"
        info={[
          { label: '기간', value: '2023.10.01 ~ 2023.11.01' },
          { label: '참여인원', value: '5명' },
          { label: '진행상태', value: '진행중' },
        ]}
      />
    </S.MainPageContainer>
  );
};

export default MainPage;
