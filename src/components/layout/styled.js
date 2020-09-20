import styled from 'styled-components';
import { Layout } from 'antd';

export const Logo = styled.img({
  width: 128,
  height: 'auto',
  marginLeft: -16,
});

export const ContentHolder = styled(Layout.Content)({
  background: '#FFF',
  paddingBottom: 80,
  paddingTop: 32,
});
