import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';

import { Paragraph, Text } from '..';

const ListItemMeta = styled(List.Item.Meta)({
  alignItems: 'center',
  marginBottom: '0 !important',
});

const Avatar = styled.div({
  fontSize: '2rem',
  marginBottom: '0.3rem',
  color: '#FFC068',
});

export const PostList = ({
  direction = 'vertical',
  data,
  size = 'preNormal',
  type = 'primary',
}) => (
  <Paragraph>
    <List
      itemLayout={direction}
      split={false}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <ListItemMeta
            avatar={<Avatar>•</Avatar>}
            description={
              typeof item === 'string' ? (
                <Text size={size} type={type}>
                  {item}.
                </Text>
              ) : (
                item
              )
            }
          />
        </List.Item>
      )}
    />
  </Paragraph>
);
