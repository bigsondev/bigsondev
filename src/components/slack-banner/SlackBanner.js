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
});

export const SlackBanner = ({ ...props }) => (
  <PromoBanner
    title={
      <>
        <Paragraph color="#FFF" strong size="h1">
          <SlackOutlined /> slack
        </Paragraph>
      </>
    }
    desc={
      <>
        Let's chat, ask questions, share your project, review code. <br />
        Build a community with me that will help each other in Frontend.
      </>
    }
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
