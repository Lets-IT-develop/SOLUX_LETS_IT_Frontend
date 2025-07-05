import styled from "@emotion/styled";

export const ProfileCardContainer = styled.div`
  max-width: 240px;
  aspect-ratio: 2/3;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
`;

export const ProfileCardSlot = styled.div`
  max-width: 64px;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: var(--white, #FFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 16px;
`;

export const ProfileCardVisualSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  align-items: start;
  transform: translateY(30px);
`

export const ProfileCardLogo = styled.img`
  height: 86px;
  padding-top: 8px;
`

export const ProfileCardImage = styled.img`
  max-width: 160px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const ProfileCardInfoSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 200px;
  border-radius: 0px 120px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`

export const ProfileCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const ProfileCardContactSection = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  gap: 11px;
  width: 100%;
  justify-content: space-between;
`

export const ProfileCardContactInfoContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary20};
  border-radius: 12px;
`

export const ProfileCardPasteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileCardName = styled.p`
${({ theme }) => ({...theme.typography.heading3})}
`

export const ProfileCardInterest = styled.p`
${({ theme }) => ({...theme.typography.captionSmall})}
color: ${({ theme }) => theme.colors.gray4};
`

export const ProfileCardDescription = styled.p`
${({ theme }) => ({...theme.typography.captionSmall})}
`