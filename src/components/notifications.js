import React from 'react';
import { notification, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const DID_YOU_KNOW_KEY_1 = 'DID_YOU_KNOW_KEY_1';

export const didYouKnowQuestionButtonNotification = () =>
  notification.open({
    message: 'Did you know?',
    description:
      'Try clicking on a question button, you can check the correct answer, some helpful references and who knows what more!',
    duration: null,
    icon: <QuestionCircleOutlined />,
    key: DID_YOU_KNOW_KEY_1,
    btn: (
      <Button
        type="primary"
        onClick={() => notification.close(DID_YOU_KNOW_KEY_1)}
      >
        Got it! (don't show again)
      </Button>
    ),
  });
