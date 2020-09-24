import React from 'react';
import { notification, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { setItem } from '~utils';

const DID_YOU_KNOW_KEY_2 = 'DID_YOU_KNOW_KEY_2';

export const jsInTheConsoleNotification = () =>
  notification.open({
    message: 'Check JS code',
    description:
      'If you use e.g. console.log(myVariable) in JS tab it will show up in the Browser Developer Tools (Option + Command + J on Mac or Shift + Control + J on Windows/Linux)',
    duration: null,
    icon: <QuestionCircleOutlined />,
    key: DID_YOU_KNOW_KEY_2,
    btn: (
      <Button
        type="primary"
        onClick={() => {
          notification.close(DID_YOU_KNOW_KEY_2);
          setItem('codeTutorialJs', true);
        }}
      >
        Got it! (don't show again)
      </Button>
    ),
  });
