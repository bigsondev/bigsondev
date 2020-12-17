import React from 'react';
import AntdIcon from '@ant-design/icons';
import styled from 'styled-components';

import {
  HomeworkIcon,
  CheatSheetIcon,
  DuckIcon,
  FeatherIcon,
  DeveloperIcon,
  RecruiterIcon,
  MentorIcon,
  DotIcon,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  LinkedinIcon,
  QuoteIcon,
  BehanceIcon,
  DribbleIcon,
  InstagramIcon,
  GitHubIcon,
  GirlPillIcon,
  BoyPillIcon,
  CodementorIcon,
  CallIcon,
  SupportIcon,
  BuildIcon,
} from '~svg';

const Holder = styled(AntdIcon)(({ width = 32 }) => ({
  '& svg': {
    width,
    maxWidth: width,
    height: 'auto',
  },
}));

const ICON_MAPPER = {
  homework: HomeworkIcon,
  cheatSheet: CheatSheetIcon,
  duck: DuckIcon,
  feather: FeatherIcon,
  developer: DeveloperIcon,
  recruiter: RecruiterIcon,
  mentor: MentorIcon,
  dot: DotIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  reddit: RedditIcon,
  linkedin: LinkedinIcon,
  quote: QuoteIcon,
  behance: BehanceIcon,
  dribble: DribbleIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  girlPill: GirlPillIcon,
  boyPill: BoyPillIcon,
  codementor: CodementorIcon,
  call: CallIcon,
  support: SupportIcon,
  build: BuildIcon,
};

export const Icon = ({ type, ...props }) => {
  return <Holder component={ICON_MAPPER[type]} {...props} />;
};
