import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import { useMedia } from 'react-media';

import { Box, Text } from '~components';
import { LogoBase } from '~assets';

import { Logo } from './styled';

const Holder = styled(Layout.Header)({
  padding: 0,
  height: 80,
});

const MenuHolder = styled(Menu)({
  borderBottom: 'none',
});

const MenuItem = styled(Menu.Item)({
  '& > a > span': {
    color: '#AAA !important',
  },
  '&:hover': {
    background: 'inherit !important',
    '& > a > span': {
      color: '#FFF !important',
    },
  },
});

const HamburgerIcon = styled(MenuOutlined)({
  fontSize: 20,
  color: '#FAFAFA',
});

const LeftMenu = () => (
  <Link to="/">
    <Logo src={LogoBase} alt="Bigson Dev Logo" />
  </Link>
);

const RightMenu = ({ isMobile }) =>
  isMobile ? (
    <HamburgerIcon />
  ) : (
    <MenuHolder theme="dark" mode="horizontal">
      <MenuItem key="1">
        <Link to="/library">
          <Text size="preNormal">Library</Text>
        </Link>
      </MenuItem>
      <MenuItem key="2">
        <Link to="/blog">
          <Text size="preNormal">Blog</Text>
        </Link>
      </MenuItem>
      <MenuItem key="3">
        <Link to="/mentoring">
          <Text size="preNormal">Mentoring</Text>
        </Link>
      </MenuItem>
      <MenuItem key="4">
        <Link to="/reach-out">
          <Text size="preNormal">Reach Out</Text>
        </Link>
      </MenuItem>
    </MenuHolder>
  );

export const Header = () => {
  const isMobile = useMedia({ query: '(max-width: 576px)' });

  return (
    <Holder>
      <Row align="center">
        <Col xs={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 16 }}>
          <Box mt={1}>
            <Row justify="space-between" align="center">
              <Col>
                <LeftMenu />
              </Col>
              <Col>
                <RightMenu isMobile={isMobile} />
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
