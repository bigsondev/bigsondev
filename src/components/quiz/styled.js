import { Card, Progress } from 'antd';

import styled from 'styled-components';

export const QuizProgress = styled(Progress)({
  top: '-10px',
});

export const QuizCard = styled(Card)({
  boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  '& .ant-card-body': {
    padding: 0,
  },
  marginBottom: 80,
});
