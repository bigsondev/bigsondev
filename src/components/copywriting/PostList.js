import React from 'react';
import { List } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Text } from '..';

const ListItemMeta = styled(List.Item.Meta)({
  alignItems: 'center',
});

export const PostList = ({ data }) => (
  <List
    itemLayout="vertical"
    split={false}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <ListItemMeta
          avatar={<MinusOutlined />}
          description={
            <Text size="small" type="secondary">
              {item}
            </Text>
          }
        />
      </List.Item>
    )}
  />
);
