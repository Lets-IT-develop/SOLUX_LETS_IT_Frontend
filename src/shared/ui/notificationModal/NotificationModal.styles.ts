import styled from "@emotion/styled";
import { motion } from "framer-motion";


export const NotificationModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 20px;
  padding: 17px 13px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const NotificationModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotificationModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`


export const NotificationModalTitle = styled.h2`
  ${({ theme }) => ({ ...theme.typography.heading3 })};
  color: ${({ theme }) => theme.colors.black};
`;