import React, { useState } from 'react';
import { Tooltip, Space, Button } from 'antd';

import { getItem, setItem } from '~utils';

export const TutorialTooltip = ({
  type,
  title,
  onClick,
  visible,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const isTutorialCompleted = getItem(type) === 'true';

  if (isTutorialCompleted) {
    return props.children;
  }

  const handleClick = () => {
    setItem(type, true);
    setIsVisible(false);
  };

  const tooltipTitle = (
    <Space direction="vertical">
      <span style={{ textAlign: 'center', display: 'block' }}>{title}</span>
      <Button size="small" block onClick={onClick || handleClick}>
        OK
      </Button>
    </Space>
  );

  return (
    <Tooltip
      placement="bottom"
      color="#1890ff"
      title={tooltipTitle}
      visible={visible === undefined ? isVisible : visible}
      {...props}
    />
  );
};
