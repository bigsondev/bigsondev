import React from 'react';
import { Button as AntdButton } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BaseButton = styled(AntdButton)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  padding: '1.25rem 1.75rem',
  lineHeight: 0,
  borderRadius: theme.borders.radius,
  border: 'none',
  color: `${theme.colors.white} !important`,
  transition: 'all 0.3s',
}));

const PromoButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: `${theme.colors.promo} !important`,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.promo}`,
    backgroundColor: `${theme.colors.promo} !important`,
    color: `${theme.colors.white} !important`,
  },
}));

const PrimaryButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: `${theme.colors.primary} !important`,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.primary}`,
    backgroundColor: `${theme.colors.primary} !important`,
    color: `${theme.colors.white} !important`,
  },
}));

const SecondaryButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: `${theme.colors.white} !important`,
  color: `${theme.colors.primary} !important`,
  border: `1px solid ${theme.colors.primary} !important`,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.white}`,
    backgroundColor: `${theme.colors.primary} !important`,
    color: `${theme.colors.white} !important`,
    border: `1px solid ${theme.colors.primary} !important`,
  },
}));

const GhostButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: `${theme.colors.white} !important`,
  color: `${theme.colors.primary} !important`,
  border: `none !important`,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.white}`,
    backgroundColor: `${theme.colors.white} !important`,
    color: `${theme.colors.primary} !important`,
  },
}));

const AdditionalButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: `${theme.colors.additional} !important`,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.additional}`,
    backgroundColor: `${theme.colors.additional} !important`,
    color: `${theme.colors.white} !important`,
  },
}));

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

const ArrowRight = styled(ArrowRightOutlined)({
  paddingLeft: 8,
});

const BUTTON_MAPPER = {
  promo: PromoButton,
  primary: PrimaryButton,
  secondary: SecondaryButton,
  ghost: GhostButton,
  additional: AdditionalButton,
  link: LinkButton,
};

export const Button = ({ type = 'primary', children, ...props }) => {
  const ButtonComponent = BUTTON_MAPPER[type];

  if (type === 'link') {
    return (
      <ButtonComponent {...props}>
        {children}
        <ArrowRight />
      </ButtonComponent>
    );
  }

  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
