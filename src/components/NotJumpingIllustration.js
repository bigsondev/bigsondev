import React from 'react';
import styled from 'styled-components';

import {
  PromoIllustration,
  MentorIllustration,
  MockInterview,
  DevelopmentPlan,
  Newsletter,
  NewsletterSmall,
  DuckSlack,
} from '~svg';

// https://itnext.io/how-to-stop-content-jumping-when-images-load-7c915e47f576
const Holder = styled.div(({ width = '100%' }) => ({
  position: 'relative',
  height: 0,
  paddingTop: 'calc(985.4 / 1018.2 * 100%)',
  '& svg': {
    position: 'absolute',
    top: 0,
    left: 0,
    maxWidth: width,
    height: 'auto',
  },
}));

const ILLUSTRATION_MAPPER = {
  promo: <PromoIllustration />,
  mentor: <MentorIllustration />,
  mockInterview: <MockInterview />,
  developmentPlan: <DevelopmentPlan />,
  newsletter: <Newsletter />,
  newsletterSmall: <NewsletterSmall />,
  duckSlack: <DuckSlack />,
};

export const NotJumpingIllustration = ({ type, ...props }) => {
  return <Holder {...props}>{ILLUSTRATION_MAPPER[type]}</Holder>;
};
