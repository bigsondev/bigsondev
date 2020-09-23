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
    <Logo src={LogoBase} alt="Bigson Dev Logo" />
  </Link>
);

const matchUrl = (url) =>
  typeof window !== 'undefined'
    ? window.location.href.indexOf(url) !== -1
    : undefined;

const RightMenu = ({
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
        <MenuItem key="1" isSelected={matchUrl('blog')}>
          <Link to="/blog">
            <Text size="preNormal">Blog</Text>
          </Link>
        </MenuItem>
        <MenuItem key="2" isSelected={matchUrl('library')}>
          <Link to="/library">
            <Text size="preNormal">Library</Text>
          </Link>
        </MenuItem>
        <MenuItem key="3" isSelected={matchUrl('mentorship')}>
          <Link to="/mentorship">
            <Text size="preNormal">Mentorship</Text>
          </Link>
        </MenuItem>
        <MenuItem key="4" isSelected={matchUrl('reach-out')}>
          <Link to="/reach-out">
            <Text size="preNormal">Reach Out</Text>
          </Link>
        </MenuItem>
      </MenuHolder>
    </ExceptSmall>
  </>
);

export const Header = () => {
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
                  <MenuItem key="1" isSelected={matchUrl('blog')} isMobile>
                    <Link to="/blog">
                      <Text size="preNormal">Blog</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem key="2" isSelected={matchUrl('library')} isMobile>
                    <Link to="/library">
                      <Text size="preNormal">Library</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key="3"
                    isSelected={matchUrl('mentorship')}
                    isMobile
                  >
                    <Link to="/mentorship">
                      <Text size="preNormal">Mentorship</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem key="4" isSelected={matchUrl('reach-out')} isMobile>
                    <Link to="/reach-out">
                      <Text size="preNormal">Reach Out</Text>
                    </Link>
                  </MenuItem>
                </MenuHolder>
              </Fade>
            </SmallOnly>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
