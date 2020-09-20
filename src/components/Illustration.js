import React from 'react';
import styled from 'styled-components';

import {
  PromoIllustration,
  MentorIllustration,
  MockInterview,
  DevelopmentPlan,
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
};

export const Illustration = ({ type }) => {
  console.log(type);
  return <Holder>{ILLUSTRATION_MAPPER[type]}</Holder>;
};
