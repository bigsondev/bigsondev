import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

import { Box, Text, SmallOnly, ExceptSmall } from '~components';
import { LogoFooter } from '~assets';

import { Logo } from './styled';

const Holder = styled(Layout.Header)({
  padding: 0,
  paddingTop: 10,
  height: 'initial',
  minHeight: 100,
  background: '#FFF',
});

const MenuHolder = styled(Menu)({
  borderBottom: 'none',
  background: '#FFF !important',
});

const MobileMenuSpace = styled.div({
  height: 20,
});

const MenuItem = styled(Menu.Item)(({ isSelected, isMobile }) => ({
  '&.ant-menu-item': {
    padding: isMobile && '0 !important',
  },
  '& > a > span': {
    transition: 'color 0.1s ease-in',
    color: isSelected ? '#000 !important' : 'rgba(80,80,80,0.7) !important',
  },
  '&:hover': {
    backgroundColor: 'inherit !important',
    '& > a > span': {
      color: '#000 !important',
    },
  },
  '&.ant-menu-item-selected': {
    backgroundColor: '#FFF !important',
  },
}));

const HamburgerIcon = styled(MenuOutlined)({
  fontSize: 28,
  paddingTop: 18,
  paddingRight: 8,
  color: '#000',
});

const CloseIcon = styled(CloseOutlined)({
  fontSize: 28,
  paddingTop: 18,
  paddingRight: 8,
  color: '#000',
});

const LeftMenu = () => (
  <Link to="/">
    <Logo src={LogoFooter} alt="BigsonDev Logo" loading="eager" />
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
        <MenuItem key="1" isSelected={pathname.includes('start-here')}>
          <Link to="/start-here/">
            <Text strong>Start Here</Text>
          </Link>
        </MenuItem>
        <MenuItem key="2" isSelected={pathname.includes('blog')}>
          <Link to="/blog/">
            <Text strong>Blog</Text>
          </Link>
        </MenuItem>
        <MenuItem key="3" isSelected={pathname.includes('library')}>
          <Link to="/library/">
            <Text strong>Library</Text>
          </Link>
        </MenuItem>
        <MenuItem key="4" isSelected={pathname.includes('mentorship')}>
          <Link to="/mentorship/">
            <Text strong>Mentorship</Text>
          </Link>
        </MenuItem>
        <MenuItem key="5" isSelected={pathname.includes('reach-out')}>
          <Link to="/reach-out/">
            <Text strong>Reach Out</Text>
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
                    isSelected={pathname.includes('start-here')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/start-here/">
                      <Text strong>Start Here</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="2"
                    isSelected={pathname.includes('blog')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/blog/">
                      <Text strong>Blog</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="3"
                    isSelected={pathname.includes('library')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/library/">
                      <Text strong>Library</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="4"
                    isSelected={pathname.includes('mentorship')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/mentorship/">
                      <Text strong>Mentorship</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="5"
                    isSelected={pathname.includes('reach-out')}
                    onClick={handleMobileMenuCloseClick}
                    isMobile
                  >
                    <Link to="/reach-out/">
                      <Text strong>Reach Out</Text>
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
