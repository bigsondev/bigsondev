import styled from 'styled-components';
import { Layout } from 'antd';

export const Container = styled.div({
  maxWidth: 1200,
  margin: '0 auto',
});

export const Logo = styled.div({
  color: '#FFF',
});

export const Content = styled(Layout.Content)({
  background: '#FFF',
  paddingTop: 40,
  paddingBottom: 80,
});
