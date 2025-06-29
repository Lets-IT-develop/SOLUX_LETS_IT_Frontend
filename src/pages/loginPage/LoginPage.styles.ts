import styled from "@emotion/styled";


export const LoginContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: `calc(100dvh - ${theme.spacing.pagePadding}*2)`,
  boxSizing: 'border-box',
}));

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Logo = styled.img``

export const LogoMessage= styled.span`
  ${({ theme }) => ({ ...theme.typography.bodyLarge })};
`

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`