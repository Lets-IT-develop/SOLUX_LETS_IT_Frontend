import styled from "@emotion/styled";

export const MainPageHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const MainPageHeaderTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

export const NavigateContainer = styled.div`
  display: flex;
  gap: 12px;
`

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LogoButton = styled(HeaderButton)`
  img{
    width: 84px;
    height: auto;
  }
`
export const NavigateButton = styled(HeaderButton)`
  img{
    width: 24px;
    height: auto;
  }
`