import styled from '@emotion/styled';

export const SignUpPageContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: `calc(100dvh - ${theme.spacing.pagePadding}*2)`, 
  boxSizing: 'border-box',
}));

export const MultiSelectCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
