import React from 'react';
import { Space, Rate } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

import { Title, Text, ShareIcons, Box, theme } from '..';
import { Icon } from '../Icon';

const { fontSize } = theme;

const RateHolder = styled(Rate)({
  '& .ant-rate-star-full path': {
    fill: '#F9B060',
  },
  '& .ant-rate-star-zero path': {
    fill: '#f0f0f0',
  },
});

const TitleHolder = styled.div({
  position: 'relative',
  paddingLeft: '4.5rem',
});

const IconHolder = styled(Icon)({
  position: 'absolute',
  left: 0,
});

export const PostTitle = ({
  title,
  showSubtitle = false,
  date,
  readTime,
  difficulty,
  tags,
}) => (
  <>
    {/* Tags will be a single string for now, can be changed later
into an array of tags */}
    <TitleHolder>
      <IconHolder type={`${tags}Tag`} width={48} />
      <Title fontSize={fontSize.medium} marginBottom="0">
        {title}
      </Title>
      <Space size="middle">
        {date && (
          <Text type="secondary" size="small">
            {moment(date).format('MMM D, YYYY')}
          </Text>
        )}
        {readTime && (
          <Text type="secondary" size="small">
            {readTime} min read
          </Text>
        )}
      </Space>
      {difficulty && (
        <div>
          <RateHolder
            character={<Icon type="duck" width={16} />}
            value={difficulty}
            disabled
          />
        </div>
      )}
    </TitleHolder>
    {showSubtitle && (
      <>
        <Box mt={2} mb={1}>
          <ShareIcons title={title} />
        </Box>
      </>
    )}
  </>
);
