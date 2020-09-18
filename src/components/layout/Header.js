import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import { useMedia } from 'react-media';

import { Logo } from './styled';

const Holder = styled(Layout.Header)({
  padding: 0,
});

const HamburgerIcon = styled(MenuOutlined)({
  fontSize: 20,
  color: '#FAFAFA',
});

const LeftMenu = () => (
  <Link to="/">
    <Logo>BIGSONDEV</Logo>
  </Link>
);

const RightMenu = ({ isMobile }) =>
  isMobile ? (
    <HamburgerIcon />
  ) : (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/library">Library</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/coaching">Coaching</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/reach-out">Reach Out</Link>
      </Menu.Item>
    </Menu>
  );

export const Header = () => {
  const isMobile = useMedia({ query: '(max-width: 576px)' });

  return (
    <Holder>
      <Row align="center">
        <Col xs={{ span: 22 }} xl={{ span: 20 }}>
          <Row justify="space-between" align="center">
            <Col>
              <LeftMenu />
            </Col>
            <Col>
              <RightMenu isMobile={isMobile} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Holder>
  );
};
