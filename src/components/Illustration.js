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
  WaysToLearnEffectively,
  BuildProject,
} from '~svg';

const Holder = styled.div(({ width = '100%' }) => ({
  '& svg': {
    width,
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
  waysToLearnEffectively: <WaysToLearnEffectively />,
  buildProject: <BuildProject />,
};

export const Illustration = ({ type, ...props }) => {
  return <Holder {...props}>{ILLUSTRATION_MAPPER[type]}</Holder>;
};
