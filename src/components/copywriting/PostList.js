import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';

import { Paragraph, Text, Icon } from '..';

const ListItemMeta = styled(List.Item.Meta)({
  alignItems: 'center',
});

const IconHolder = styled.span({
  '& svg path, & svg circle': {
    fill: '#FFC068 !important',
  },
  '& span': {
    verticalAlign: 'middle',
  },
});

export const PostList = ({
  direction = 'vertical',
  data,
  size = 'preNormal',
  type = 'primary',
  ...props
}) => (
  <Paragraph {...props}>
    <List
      itemLayout={direction}
      split={false}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <ListItemMeta
            avatar={
              <IconHolder>
                <Icon type="dot" width={6} />
              </IconHolder>
            }
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
