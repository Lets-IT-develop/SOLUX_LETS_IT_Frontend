import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { css } from "@emotion/react";

export const ToggleSwitchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ToggleSwitchButton = styled.button<{ isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  color: ${({ theme }) => theme.colors.gray3};
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.gray3};
  padding: 10px;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.primary};
    `}
`;

export const ToggleSwitchUnderline = styled(motion.div)`
  position: absolute;
  bottom: -1.5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
