import React from 'react';
import styled from 'styled-components';

import {
  PromoIllustration,
  MentorIllustration,
  MockInterview,
  DevelopmentPlan,
  Newsletter,
  DuckSlack,
} from '~svg';

const Holder = styled.div({
  '& svg': {
    width: '100%',
    height: 'auto',
  },
});

const ILLUSTRATION_MAPPER = {
  promo: <PromoIllustration />,
  mentor: <MentorIllustration />,
  mockInterview: <MockInterview />,
  developmentPlan: <DevelopmentPlan />,
  newsletter: <Newsletter />,
  duckSlack: <DuckSlack />,
};

export const Illustration = ({ type, ...props }) => {
  return <Holder {...props}>{ILLUSTRATION_MAPPER[type]}</Holder>;
};
