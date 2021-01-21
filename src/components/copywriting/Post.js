import React from 'react';
import { Divider } from 'antd';

import { Box } from '..';

import { PostTitle } from './PostTitle';
import { QuickSummary } from './QuickSummary';

export const Post = ({
  title,
  showSubtitle = false,
  desc,
  date,
  readTime,
  tags,
  children,
  difficulty,
}) => (
  <>
    {title && (
      <Box mb={5}>
        <PostTitle
          title={title}
          date={date}
          readTime={readTime}
          tags={tags}
          difficulty={difficulty}
          showSubtitle={showSubtitle}
        />
      </Box>
    )}
    {desc && (
      <>
        <QuickSummary desc={desc} />
        <Divider />
      </>
    )}
    {children}
  </>
);
