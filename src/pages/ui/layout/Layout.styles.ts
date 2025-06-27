import styled from '@emotion/styled';

export const Wrapper = styled.div(({ theme }) => ({
  maxWidth: '400px',
  width: '100%',
  margin: '0 auto',
  padding: `${theme.spacing.pagePadding} 8px`,
  boxSizing: 'border-box',
}));