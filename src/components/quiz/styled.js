import { Card, Progress } from 'antd';
import styled from 'styled-components';

export const QuizProgress = styled(Progress)({
  top: '-10px',
});

export const QuizCard = styled(Card)(({ theme }) => ({
  boxShadow: `0 2px 4px 0 hsla(198,45%,10%,.12)`,
  borderRadius: theme.borders.radius,

  '& .ant-card-body': {
    padding: 0,
  },
  marginBottom: 80,
}));
