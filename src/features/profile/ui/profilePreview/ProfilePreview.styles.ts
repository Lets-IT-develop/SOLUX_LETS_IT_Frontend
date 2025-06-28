import styled from '@emotion/styled'

export const ProfilePreviewContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`

export const ProfileImage = styled.img`
  max-width: 70px;
  width: 100%;
  border-radius: 50%;
`;

export const ProfilePreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const ProfilePreviewName = styled.span`
 ${({ theme }) => ({...theme.typography.bodyRegular})}
 color: ${({ theme }) => theme.colors.black};
 text-align: left;
 width: 100%;
`

export const ProfilePreviewInterest = styled.span`
 ${({ theme }) => ({...theme.typography.captionSmall})}
 color: ${({ theme }) => theme.colors.gray4};
 width: 100%;
`