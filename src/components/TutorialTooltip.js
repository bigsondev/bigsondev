import React from 'react';
import { Tooltip, Space, Button } from 'antd';

import { getItem } from '~utils';

export const TutorialTooltip = ({ type, title, onClick, ...props }) => {
  const isTutorialCompleted = getItem(type);

  if (isTutorialCompleted) {
    return props.children;
  }

  const tooltipTitle = (
    <Space direction="vertical">
      <span style={{ textAlign: 'center', display: 'block' }}>{title}</span>
      <Button size="small" block onClick={onClick}>
        OK
      </Button>
    </Space>
  );

  return (
    <Tooltip
      placement="bottom"
      color="#1890ff"
      title={tooltipTitle}
      {...props}
    />
  );
};
