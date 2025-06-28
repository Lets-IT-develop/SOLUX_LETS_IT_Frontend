import styled from "@emotion/styled";

export const ProjectCardListContainer = styled.div`
  width: 100%;
  .swiper {
    padding-bottom: 32px;
  }
  .swiper-slide {
    width: calc(100% - 10px); 
    max-width: 80%;        
    flex-shrink: 0;
  }
  .swiper-pagination {
    margin-top: 32px;
  }
`