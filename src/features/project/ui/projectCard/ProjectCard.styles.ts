import styled from "@emotion/styled";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 14px 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  cursor: pointer;
  flex-shrink: 0;
`

export const ProjectCardTitle = styled.span`
  ${({ theme }) => ({...theme.typography.bodyLarge})};
  color: ${({ theme }) => theme.colors.black};
`

export const ProjectInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 4px;
  column-gap: 24px;
`

export const ProjectInfoLabel = styled.span`
  width: auto;
  white-space: nowrap;
  ${({ theme }) => ({...theme.typography.captionSmall})};
  color: ${({ theme }) => theme.colors.gray4};
`

export const ProjectInfoValue = styled.span`
  ${({ theme }) => ({...theme.typography.captionSmall})};
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
`