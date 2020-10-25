import React from 'react';
import { Divider } from 'antd';

import { Box, Illustration, Text } from '..';

import { PostTitle } from './PostTitle';
import { QuickSummary } from './QuickSummary';

const PrevNext = ({ prev, next }) => (
  <Box display="flex" justify="space-between" mb={5}>
    <Text>{prev}</Text>
    <Text>{next}</Text>
  </Box>
);

export const Post = ({
  title,
  showSubtitle = false,
  desc,
  date,
  readTime,
  illustration,
  prev,
  next,
  children,
}) => (
  <>
    {illustration && (
      <Box mb={3}>
        <Illustration type={illustration} />
      </Box>
    )}
    {title && (
      <Box mb={5}>
        <PostTitle
          title={title}
          date={date}
          readTime={readTime}
          showSubtitle={showSubtitle}
        />
      </Box>
    )}
    {desc && (
      <Box mb={6}>
        <PrevNext prev={prev} next={next} />
        <QuickSummary desc={desc} />
        <Divider />
      </Box>
    )}
    {children}
    <PrevNext prev={prev} next={next} />
  </>
);
