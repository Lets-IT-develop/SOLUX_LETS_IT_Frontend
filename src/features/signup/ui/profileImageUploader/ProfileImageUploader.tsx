import * as S from './ProfileImageUploader.styles';
import defaultProfileImage from '../../../../shared/assets/images/default_profile.svg';
import uploadIcon from '../../../../shared/assets/icons/ic_camera.svg';
import { useRef } from 'react';

interface ProfileImageUploaderProps {
  file: File | undefined;
  onFileChange: (file: File) => void;
}

const ProfileImageUploader = ({ file, onFileChange }: ProfileImageUploaderProps) => {
  const previewUrl = file ? URL.createObjectURL(file) : defaultProfileImage;

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onFileChange(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <S.ProfileImageUploaderContainer>
      <S.ProfileImageUploaderImage src={previewUrl} alt="프로필 이미지 삽입" />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <S.ProfileImageUploaderButton onClick={handleButtonClick}>
        <img src={uploadIcon} alt="프로필 이미지 삽입" />
      </S.ProfileImageUploaderButton>
    </S.ProfileImageUploaderContainer>
  );
};

export default ProfileImageUploader;
