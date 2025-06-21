import styled from '@emotion/styled';
import { fadeIn } from '../../lib';
import { css } from '@emotion/react';

export const SelectContainer = styled.div`
  width: 100%;
  max-width: 125px;
  cursor: pointer;
  position: relative;
`;

export const SelectField = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  border: ${({ theme }) => theme.colors.gray3};
  padding: 8px;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ $isOpen, theme }) =>
    $isOpen ? `1px solid ${theme.colors.black}` : `1px solid ${theme.colors.gray3}`};
`;

export const SelectIcon = styled.img`
  width: 16px;
`;

export const DefaultMessage = styled.p`
  ${({ theme }) => ({
    ...theme.typography.bodyRegular,
  })};
`;

export const OptionsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray3};
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 4px);
  animation: ${fadeIn} 0.3s ease;
  cursor: pointer;
`;

export const OptionItem = styled.li<{ $isFocused: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => ({
    ...theme.typography.bodyRegular,
  })};
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  ${({ $isFocused, theme }) =>
    $isFocused &&
    css`
      color: ${theme.colors.black};
      background-color: ${theme.colors.gray2};
    `}
  &:active {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;
