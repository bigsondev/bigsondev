import React from 'react';
import { SlackOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { PromoBanner, Paragraph, Illustration, XlOnly } from '..';
import { SlackForm } from './SlackForm';

const DuckSlackIllustration = styled(Illustration)({
  position: 'absolute',
  width: '20%',
  left: '5%',
  bottom: '25%',

  '@media (min-width: 2000px)': {
    width: '10%',
  },
});

export const SlackBanner = ({ ...props }) => (
  <PromoBanner
    title={
      <>
        <Paragraph color="#FAFAFA" strong size="h1">
          <SlackOutlined /> slack
        </Paragraph>
      </>
    }
    desc={<>Let's build a community that will help each other.</>}
    content={
      <>
        <SlackForm />
        <XlOnly>
          <DuckSlackIllustration type="duckSlack" />
        </XlOnly>
      </>
    }
    {...props}
  />
);
