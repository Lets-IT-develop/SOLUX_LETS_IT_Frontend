import styled from "@emotion/styled";

export const Message = styled.span`
  width: 100%;
  ${({ theme }) => ({...theme.typography.bodyRegular})}
  color: ${({ theme }) => theme.colors.black};
`