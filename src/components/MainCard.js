import styled from 'styled-components';

export const MainCard = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: theme.borders.radius,
  background: theme.colors.white,
  padding: `${theme.spacing.large} ${theme.spacing.large} ${theme.spacing.medium} ${theme.spacing.large}`,

  boxShadow: `0 2px 4px 0 hsla(198,45%,10%,.12)`,
}));
