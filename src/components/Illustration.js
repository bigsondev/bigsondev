import React from 'react';
import styled from 'styled-components';

import {
  PromoIllustration,
  MentorIllustration,
  MockInterview,
  DevelopmentPlan,
  WaysToLearnEffectively,
  BuildProject,
  EricssonLogo,
  GrapeUpLogo,
  BalfourLogo,
  JLabsLogo,
  SinchLogo,
  KojiLogo,
  SmallRocket,
  MediumRocket,
  LargeRocket,
  GirlPill,
  BoyPill,
  BdsProjects,
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
  waysToLearnEffectively: <WaysToLearnEffectively />,
  buildProject: <BuildProject />,
  ericsson: <EricssonLogo />,
  grapeUp: <GrapeUpLogo />,
  balfour: <BalfourLogo />,
  jlabs: <JLabsLogo />,
  sinch: <SinchLogo />,
  koji: <KojiLogo />,
  smallRocket: <SmallRocket />,
  mediumRocket: <MediumRocket />,
  largeRocket: <LargeRocket />,
  girlPill: <GirlPill />,
  boyPill: <BoyPill />,
  bdsProjects: <BdsProjects />,
};

export const Illustration = ({ type, ...props }) => {
  return <Holder {...props}>{ILLUSTRATION_MAPPER[type]}</Holder>;
};
