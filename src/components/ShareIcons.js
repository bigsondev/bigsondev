import React from 'react';
import styled from 'styled-components';
import { Space } from 'antd';

import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
} from '~utils';

import { Link, Icon } from '.';

const IconHolder = styled(Link)(({ theme }) => ({
  color: `${theme.colors.primary} !important`,
  '& a': {
    color: `${theme.colors.primary} !important`,
  },
  '& a:hover': {
    color: `${theme.colors.primary} !important`,
  },
  '& a:active': {
    color: `${theme.colors.primary} !important`,
  },
  '& a:visited': {
    color: `${theme.colors.primary} !important`,
  },
}));

export const ShareIcons = ({ title }) => (
  <Space size="small">
    <IconHolder href={shareOnReddit(title)}>
      <Icon type="reddit" />
    </IconHolder>
    <IconHolder href={shareOnTwitter(title)}>
      <Icon type="twitter" />
    </IconHolder>
    <IconHolder href={shareOnFacebook()}>
      <Icon type="facebook" />
    </IconHolder>
    <IconHolder href={shareOnLinkedin()}>
      <Icon type="linkedin" />
    </IconHolder>
  </Space>
);
