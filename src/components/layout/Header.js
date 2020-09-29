import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

import { Box, Text, SmallOnly, ExceptSmall } from '~components';
import { LogoBase } from '~assets';

import { Logo } from './styled';

const Holder = styled(Layout.Header)({
  padding: 0,
  height: 'initial',
  minHeight: 80,
});

const MenuHolder = styled(Menu)({
  borderBottom: 'none',
});

const MobileMenuSpace = styled.div({
  height: 20,
});

const MenuItem = styled(Menu.Item)(({ isSelected, isMobile }) => ({
  '&.ant-menu-item': {
    padding: isMobile && '0 !important',
  },
  '& > a > span': {
    transition: 'color 0.1s',
    color: isSelected ? '#FFF !important' : '#AAA !important',
  },
  '&:hover': {
    backgroundColor: 'inherit !important',
    '& > a > span': {
      color: '#FFF !important',
    },
  },
  '&.ant-menu-item-selected': {
    backgroundColor: '#001529 !important',
  },
}));

const HamburgerIcon = styled(MenuOutlined)({
  fontSize: 28,
  paddingTop: 18,
  paddingRight: 8,
  color: '#FAFAFA',
});

const CloseIcon = styled(CloseOutlined)({
  fontSize: 28,
  paddingTop: 18,
  paddingRight: 8,
  color: '#FAFAFA',
});

const LeftMenu = () => (
  <Link to="/">
    <Logo src={LogoBase} alt="BigsonDev Logo" loading="eager" />
  </Link>
);

const RightMenu = ({
  pathname,
  isExpanded,
  isClicked,
  onFirstClick,
  onMobileMenuOpenClick,
  onMobileMenuCloseClick,
}) => (
  <>
    <SmallOnly>
      {isClicked ? (
        <Roll left cascade duration={300}>
          {isExpanded ? (
            <CloseIcon onClick={onMobileMenuCloseClick} />
          ) : (
            <HamburgerIcon onClick={onMobileMenuOpenClick} />
          )}
        </Roll>
      ) : (
        <HamburgerIcon
          onClick={() => {
            onFirstClick();
            onMobileMenuOpenClick();
          }}
        />
      )}
    </SmallOnly>
    <ExceptSmall>
      <MenuHolder theme="dark" mode="horizontal">
        <MenuItem key="1" isSelected={pathname.includes('blog')}>
          <Link to="/blog/">
            <Text size="preNormal">Blog</Text>
          </Link>
        </MenuItem>
        <MenuItem key="2" isSelected={pathname.includes('library')}>
          <Link to="/library/">
            <Text size="preNormal">Library</Text>
          </Link>
        </MenuItem>
        <MenuItem key="3" isSelected={pathname.includes('mentorship')}>
          <Link to="/mentorship/">
            <Text size="preNormal">Mentorship</Text>
          </Link>
        </MenuItem>
        <MenuItem key="4" isSelected={pathname.includes('reach-out')}>
          <Link to="/reach-out/">
            <Text size="preNormal">Reach Out</Text>
          </Link>
        </MenuItem>
      </MenuHolder>
    </ExceptSmall>
  </>
);

export const Header = ({ pathname }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMobileMenuOpenClick = () => {
    setIsExpanded(true);
  };

  const handleMobileMenuCloseClick = () => {
    setIsExpanded(false);
  };

  const setFirstClick = () => setIsClicked(true);

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
                <RightMenu
                  pathname={pathname}
                  isExpanded={isExpanded}
                  isClicked={isClicked}
                  onFirstClick={setFirstClick}
                  onMobileMenuOpenClick={handleMobileMenuOpenClick}
                  onMobileMenuCloseClick={handleMobileMenuCloseClick}
                />
              </Col>
            </Row>
            <SmallOnly>
              <Fade collapse duration={300} when={isExpanded}>
                <MenuHolder theme="dark" mode="inline">
                  <MenuItem
                    key="1"
                    isSelected={pathname.includes('blog')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/blog/">
                      <Text>Blog</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="2"
                    isSelected={pathname.includes('library')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/library/">
                      <Text>Library</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="3"
                    isSelected={pathname.includes('mentorship')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/mentorship/">
                      <Text>Mentorship</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="4"
                    isSelected={pathname.includes('reach-out')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/reach-out/">
                      <Text>Reach Out</Text>
                    </Link>
                  </MenuItem>
                </MenuHolder>
                <MobileMenuSpace />
              </Fade>
            </SmallOnly>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
