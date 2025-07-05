import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ProfileCard } from '../../../profile';
import { EffectCoverflow } from 'swiper/modules';
import * as S from './ProfileCardList.styles';

const mockData = [
  {
    profileImageUrl: 'https://via.placeholder.com/150',
    name: 'John Doe',
    interest: ['기획자', '개발자'],
    description: '첫 번째 데이터입니다.',
    phoneNumber: '010-1234-5678',
    email: 'john.doe@example.com',
  },
  {
    profileImageUrl: 'https://via.placeholder.com/150',
    name: 'John Doe',
    interest: ['기획자', '개발자'],
    description: '두 번째 데이터입니다.',
    phoneNumber: '010-1234-5678',
    email: 'john.doe@example.com',
  },
  {
    profileImageUrl: 'https://via.placeholder.com/150',
    name: 'John Doe',
    interest: ['기획자', '개발자'],
    description: '세 번째 데이터입니다.',
    phoneNumber: '010-1234-5678',
    email: 'john.doe@example.com',
  },
];

const ProfileCardList = () => {
  return (
    <S.ProfileCardListContainer>
      <Swiper
        effect="coverflow"
        slidesPerView="auto"
        spaceBetween={-16}
        slidesOffsetBefore={76}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, EffectCoverflow]}
        grabCursor
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
      >
        {mockData.map((data) => (
          <SwiperSlide key={data.description}>
            <ProfileCard profileData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ProfileCardListContainer>
  );
};

export default ProfileCardList;
