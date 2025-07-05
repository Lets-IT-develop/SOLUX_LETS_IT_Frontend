import * as S from './ProfileCard.styles';
import Logo from '../../../shared/assets/logo/logo_white.svg';
import fallbackImage from '../../../shared/assets/images/default_profile.svg';
import { handleImageError } from '../../lib';
import EmailIcon from '../../../shared/assets/icons/ic_email.svg';
import CopyIcon from '../../../shared/assets/icons/ic_copy.svg';
import { IconButton } from '../button';

interface ProfileCardProps {
  profileImageUrl: string;
  name: string;
  interest: string[];
  description: string;
  phoneNumber: string;
  email: string;
}

// TODO : ProfileㅊInfoBox 컴포넌트 만들기 - 전화번호 파트 제작
const ProfileCard = ({
  profileImageUrl,
  name,
  interest,
  description,
  phoneNumber,
  email,
}: ProfileCardProps) => {
  const parsedInterest = interest.join(' | ');
  return (
    <S.ProfileCardContainer>
      <S.ProfileCardSlot />
      <S.ProfileCardVisualSection>
        <S.ProfileCardLogo src={Logo} />
        <S.ProfileCardImage
          src={profileImageUrl}
          onError={(e) => handleImageError(e, fallbackImage)}
          alt="프로필 이미지"
        />
      </S.ProfileCardVisualSection>
      <S.ProfileCardInfoSection>
        <S.ProfileCardInfo>
          <S.ProfileCardName>{name}</S.ProfileCardName>
          <S.ProfileCardInterest>{parsedInterest}</S.ProfileCardInterest>
          <S.ProfileCardDescription>{description}</S.ProfileCardDescription>
        </S.ProfileCardInfo>

        <S.ProfileCardContactSection>
          <S.ProfileCardPasteButton>
            {phoneNumber}
            <img src={CopyIcon} alt="copy" />
          </S.ProfileCardPasteButton>
          <IconButton iconSrc={EmailIcon} alt="email" />
        </S.ProfileCardContactSection>
      </S.ProfileCardInfoSection>
    </S.ProfileCardContainer>
  );
};

export default ProfileCard;
