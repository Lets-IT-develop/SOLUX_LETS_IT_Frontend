import styled from '@emotion/styled';

export const ProfileImageUploaderContainer = styled.div`
  width: 40vw;
  max-width: 144px;
  aspect-ratio: 1 / 1;
  position: relative;
`;

export const ProfileImageUploaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileImageUploaderButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
  &:active {
    scale: 1.1;
  }
`;
