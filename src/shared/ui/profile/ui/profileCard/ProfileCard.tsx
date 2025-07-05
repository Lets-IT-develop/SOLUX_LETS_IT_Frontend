import * as S from './ProfileCard.styles';
import Logo from '../../../../assets/logo/logo_white.svg';
import fallbackImage from '../../../../assets/images/default_profile.svg';
import { handleImageError } from '../../../../lib';
import EmailIcon from '../../../../assets/icons/ic_email.svg';
import CopyIcon from '../../../../assets/icons/ic_copy.svg';
import { IconButton } from '../../../button';

interface ProfileCardProps {
  profileData: {
    profileImageUrl: string;
    name: string;
    interest: string[];
    description: string;
    phoneNumber: string;
    email: string;
  };
}

const ProfileCard = ({ profileData }: ProfileCardProps) => {
  const parsedInterest = profileData.interest.join(' | ');
  return (
    <S.ProfileCardContainer>
      <S.ProfileCardSlot />
      <S.ProfileCardVisualSection>
        <S.ProfileCardLogo src={Logo} />
        <S.ProfileCardImage
          src={profileData.profileImageUrl}
          onError={(e) => handleImageError(e, fallbackImage)}
          alt="프로필 이미지"
        />
      </S.ProfileCardVisualSection>
      <S.ProfileCardInfoSection>
        <S.ProfileCardInfo>
          <S.ProfileCardName>{profileData.name}</S.ProfileCardName>
          <S.ProfileCardInterest>{parsedInterest}</S.ProfileCardInterest>
          <S.ProfileCardDescription>{profileData.description}</S.ProfileCardDescription>
        </S.ProfileCardInfo>

        <S.ProfileCardContactSection>
          <S.ProfileCardPasteButton>
            {profileData.phoneNumber}
            <img src={CopyIcon} alt="copy" />
          </S.ProfileCardPasteButton>
          <IconButton iconSrc={EmailIcon} alt="email" />
        </S.ProfileCardContactSection>
      </S.ProfileCardInfoSection>
    </S.ProfileCardContainer>
  );
};

export default ProfileCard;
