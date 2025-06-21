import styled from '@emotion/styled';

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

export const InputGroupLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InputGroupLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => ({
    ...theme.typography.captionSmall,
  })};
`;

export const InputGroupHelperText = styled.span`
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => ({...theme.typography.captionSmall})};
`;
