import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LinkButton = styled(Link)(({ theme }) => ({
  fontWeight: theme.fontWeight.strong,
  fontSize: theme.fontSize.base,
  display: 'block',
  color: theme.colors.black,
  textDecoration: 'underline',

  '&:hover': {
    color: theme.colors.black,
  },
}));

const ArrowLeft = styled(ArrowLeftOutlined)({
  paddingRight: 8,
});

const ArrowRight = styled(ArrowRightOutlined)({
  paddingLeft: 8,
});

export const DirectionalLink = ({ children, left, right, to }) => {
  return (
    <LinkButton to={to}>
      {left && <ArrowLeft />}
      {children}
      {right && <ArrowRight />}
    </LinkButton>
  );
};
