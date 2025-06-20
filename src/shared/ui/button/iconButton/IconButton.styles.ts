import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary20};
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.gray3};
  }
`;
