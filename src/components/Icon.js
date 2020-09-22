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
} from '~svg';

const Holder = styled(AntdIcon)(({ width = 32 }) => ({
  '& svg': {
    width,
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
};

export const Icon = ({ type, ...props }) => {
  return <Holder component={ICON_MAPPER[type]} {...props} />;
};
