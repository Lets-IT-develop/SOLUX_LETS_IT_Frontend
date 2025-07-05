import { Swiper, SwiperSlide } from 'swiper/react';
import { ProfileCard } from '../../shared/ui';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
];

const MembersPage = () => {
  return (
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
      {mockData.map((data) => (
        <SwiperSlide key={data.name}>
          <ProfileCard profileData={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembersPage;
