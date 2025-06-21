import * as S from './ProfileImageUploader.styles';
import defaultProfileImage from '../../../../shared/assets/images/default_profile.svg';
import uploadIcon from '../../../../shared/assets/icons/ic_camera.svg';

interface ProfileImageUploaderProps {
  file: File | undefined;
  onFileChange: (file: File) => void;
}

const ProfileImageUploader = ({ file, onFileChange }: ProfileImageUploaderProps) => {
  const previewUrl = file ? URL.createObjectURL(file) : defaultProfileImage;

  return (
    <S.ProfileImageUploaderContainer>
      <S.ProfileImageUploaderImage src={previewUrl} alt="프로필 이미지 삽입" />
      <S.ProfileImageUploaderButton>
        <img src={uploadIcon} alt="프로필 이미지 삽입" />
      </S.ProfileImageUploaderButton>
    </S.ProfileImageUploaderContainer>
  );
};

export default ProfileImageUploader;
