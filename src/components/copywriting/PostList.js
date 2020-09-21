import React from 'react';
import { List } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Text } from '..';

const ListItemMeta = styled(List.Item.Meta)({
  alignItems: 'center',
});

export const PostList = ({
  direction = 'vertical',
  data,
  size = 'small',
  type = 'secondary',
}) => (
  <List
    itemLayout={direction}
    split={false}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <ListItemMeta
          avatar={<MinusOutlined />}
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
);
