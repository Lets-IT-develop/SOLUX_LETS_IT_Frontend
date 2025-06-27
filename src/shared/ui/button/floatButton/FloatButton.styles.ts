import styled from "@emotion/styled"

export interface PositionProps {
  bottom?: string;
}

export const FloatButtonContainer = styled.button<{$position?: PositionProps}>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 143px;
  padding: 13px 50px;
  ${({ theme }) => ({...theme.typography.buttonPrimary})};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  position: fixed;
  bottom: ${({ $position }) => $position?.bottom || '20px'};
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 1px 1px 3px 0px #7EA3FF inset, 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  &:active{
    box-shadow :  1px 1px 3px 0px #7EA3FF inset, inset 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  }
`