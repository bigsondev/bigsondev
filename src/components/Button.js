import React from 'react';
import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

const BaseButton = styled(AntdButton)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  padding: '1.25rem 1.75rem',
  lineHeight: 0,
  borderRadius: theme.borders.radius,
  border: 'none',
  color: `${theme.colors.white}`,
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

const GhostButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: `${theme.colors.white} !important`,
  color: `${theme.colors.primary} !important`,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.white}`,
    backgroundColor: `${theme.colors.white} !important`,
    color: `${theme.colors.primary} !important`,
  },
}));

const BUTTON_MAPPER = {
  promo: PromoButton,
  primary: PrimaryButton,
  ghost: GhostButton,
};

export const Button = ({ type = 'primary', children, ...props }) => {
  const ButtonComponent = BUTTON_MAPPER[type];

  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
