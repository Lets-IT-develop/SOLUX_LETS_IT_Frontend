import { handleImageError } from '../../../../lib';
import * as S from './ProfilePreview.styles';
import defaultProfile from '../../../../assets/images/default_profile.svg';
import type { InterestType } from '../../../../types/types';

interface ProfilePreviewProps {
  imageUrl?: string;
  name: string;
  interests: InterestType[];
}

const ProfilePreview = ({ imageUrl, name, interests }: ProfilePreviewProps) => {
  const VIEW_INTERESTS = interests.join(' | ');
  return (
    <S.ProfilePreviewContainer>
      <S.ProfileImage
        src={imageUrl ?? defaultProfile}
        onError={(e) => handleImageError(e, defaultProfile)}
      />
      <S.ProfilePreviewInfo>
        <S.ProfilePreviewName>{name}</S.ProfilePreviewName>
        <S.ProfilePreviewInterest>{VIEW_INTERESTS}</S.ProfilePreviewInterest>
      </S.ProfilePreviewInfo>
    </S.ProfilePreviewContainer>
  );
};

export default ProfilePreview;
