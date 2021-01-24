import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

import { Text, SmallOnly, ExceptSmall } from '~components';
import { LogoBase } from '~assets';

import { LogoHolder } from './styled';

const Holder = styled(Layout.Header)({
  padding: 0,
  height: 65,
  lineHeight: '50px',
  background: '#FAFAFA',

  '@media (max-width: 576px)': {
    height: 'initial',
    minHeight: 80,
  },
});

const RowShadow = styled(Row)({
  height: 60,
  paddingTop: 6,
  boxShadow: '0 5px 5px -5px rgba(0, 0, 0, 0.15)',

  '@media (max-width: 576px)': {
    height: 'auto',
  },
});

const MenuHolder = styled(Menu)({
  borderBottom: 'none',
  background: 'transparent !important',

  '@media (max-width: 576px)': {
    marginLeft: 12,
  },
});

const MobileMenuSpace = styled.div({
  height: 20,
});

const MenuItem = styled(Menu.Item)(({ isSelected }) => ({
  '& > a:after': {
    content: "''",
    position: 'relative',
    top: -10,
    left: '50%',
    display: 'block',
    height: 2,
    width: 0,
    background: '#137099',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
  },
  '& > a:hover:after': {
    width: '100%',
    left: 0,
  },
  '& > a > span': {
    transition: 'color 0.1s ease-in',
    color: '#000 !important',
  },
  '&:hover': {
    backgroundColor: 'inherit !important',
    '& > a > span': {
      color: '#000 !important',
    },
  },
  '&.ant-menu-item-selected': {
    backgroundColor: 'transparent !important',
  },
}));

const MobileMenuItem = styled(Menu.Item)(({ isSelected }) => ({
  '&.ant-menu-item': {
    padding: '0 !important',
  },
  '& > a > span': {
    transition: 'color 0.1s ease-in',
    color: isSelected ? '#000 !important' : 'rgba(80,80,80,0.8) !important',
  },
  '&:hover': {
    backgroundColor: 'inherit !important',
    '& > a > span': {
      color: '#000 !important',
    },
  },
  '&.ant-menu-item-selected': {
    backgroundColor: '#FAFAFA !important',
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
    <LogoHolder src={LogoBase} alt="BigsonDev Logo" loading="eager" />
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
        <MenuItem key="1" isSelected={pathname.includes('mentorship')}>
          <Link to="/mentorship/">
            <Text size="preNormal">Mentorship</Text>
          </Link>
        </MenuItem>
        <MenuItem key="2" isSelected={pathname.includes('blog')}>
          <Link to="/blog/">
            <Text size="preNormal">Blog</Text>
          </Link>
        </MenuItem>
        <MenuItem key="3" isSelected={pathname.includes('pills')}>
          <Link to="/pills/">
            <Text size="preNormal">Pills</Text>
          </Link>
        </MenuItem>
        <MenuItem key="4" isSelected={pathname.includes('library')}>
          <Link to="/library/">
            <Text size="preNormal">Library</Text>
          </Link>
        </MenuItem>
        <MenuItem key="5" isSelected={pathname.includes('reach-out')}>
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
      <RowShadow align="center">
        <Col xs={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 18 }}>
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
                <MobileMenuItem
                  key="1"
                  isSelected={pathname.includes('mentorship')}
                  onClick={handleMobileMenuCloseClick}
                >
                  <Link to="/mentorship/">
                    <Text size="preNormal">Mentorship</Text>
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem
                  key="2"
                  isSelected={pathname.includes('blog')}
                  onClick={handleMobileMenuCloseClick}
                >
                  <Link to="/blog/">
                    <Text size="preNormal">Blog</Text>
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem
                  key="3"
                  isSelected={pathname.includes('pills')}
                  onClick={handleMobileMenuCloseClick}
                >
                  <Link to="/pills/">
                    <Text size="preNormal">Pills</Text>
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem
                  key="4"
                  isSelected={pathname.includes('library')}
                  onClick={handleMobileMenuCloseClick}
                >
                  <Link to="/library/">
                    <Text size="preNormal">Library</Text>
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem
                  key="5"
                  isSelected={pathname.includes('reach-out')}
                  onClick={handleMobileMenuCloseClick}
                >
                  <Link to="/reach-out/">
                    <Text size="preNormal">Reach Out</Text>
                  </Link>
                </MobileMenuItem>
              </MenuHolder>
              <MobileMenuSpace />
            </Fade>
          </SmallOnly>
        </Col>
      </RowShadow>
    </Holder>
  );
};
