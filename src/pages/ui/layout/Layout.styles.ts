import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.pagePadding} 8px`};
  margin-bottom: 100px;
  box-sizing: border-box;
`;