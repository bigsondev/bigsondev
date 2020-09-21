import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

import { Box, Text, SmallOnly, ExceptSmall } from '~components';
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

const RightMenu = () => (
  <>
    <SmallOnly>
      <HamburgerIcon />
    </SmallOnly>
    <ExceptSmall>
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
          <Link to="/mentorship">
            <Text size="preNormal">Mentorship</Text>
          </Link>
        </MenuItem>
        <MenuItem key="4">
          <Link to="/reach-out">
            <Text size="preNormal">Reach Out</Text>
          </Link>
        </MenuItem>
      </MenuHolder>
    </ExceptSmall>
  </>
);

export const Header = () => {
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
                <RightMenu />
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
