import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {
  Typography,
  Progress as AntdProgress,
  Card as AntdCard,
  Divider,
  Avatar as AntdAvatar,
} from 'antd';

const QuizCard = styled(AntdCard)({
  boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  '& .ant-card-body': {
    padding: 0,
  },
});

const Progress = styled(AntdProgress)({
  top: '-10px',
});

const Content = styled.div({
  padding: 24,
  margin: '0 auto',
  textAlign: 'center',
  maxWidth: 600,
});

const QuestionTracker = styled(Typography.Text)({
  fontWeight: 700,
});

const Title = styled(Typography.Title)({
  textTransform: 'uppercase',
  marginTop: '0.6em !important',
});

const AnswerCard = styled(AntdCard)({
  width: '80%',
  margin: '8px auto',
  textAlign: 'left',
  padding: 16,
  borderRadius: 12,
  transition: 'background-color 0.3s',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#a8dadc',
    '& .ant-avatar': {
      backgroundColor: '#000',
    },
    '& .ant-avatar-string': {
      color: '#FFF',
    },
  },
});

const AnswerText = styled(Typography.Text)({
  fontSize: 16,
});

const Avatar = styled(AntdAvatar)({
  backgroundColor: '#CEF7F1',
  marginRight: 16,
  transition: 'background-color 0.1s',

  '& .ant-avatar-string': {
    color: '#000',
    fontWeight: 600,
    fontSize: 16,
    transition: 'color 0.1s',
  },
});

const letters = ['A', 'B', 'C', 'D'];

export const Quiz = ({ data }) => {
  const [selections, setSelection] = useState([]);
  const currentQuestionIndex = selections.length;
  const percent = Math.ceil((currentQuestionIndex / data.length) * 100);

  const handleAnswerSelection = (index) => {
    setSelection([...selections, index]);
  };

  return (
    <QuizCard>
      <Progress
        type="line"
        status="active"
        strokeLinecap="square"
        percent={percent}
        showInfo={false}
      />
      <Content>
        <QuestionTracker strong>
          Question {currentQuestionIndex + 1}/{data.length}
        </QuestionTracker>
        {data.map(
          ({ question, answers }, index) =>
            currentQuestionIndex === index && (
              <Fade duration={1500} key={question}>
                <Title level={3}>{question}</Title>
                <Divider />
                {answers.map((answer, index) => (
                  <AnswerCard
                    key={answer}
                    onClick={() => handleAnswerSelection(index)}
                  >
                    <Avatar style={{}}>{letters[index]}</Avatar>
                    <AnswerText>{answer}</AnswerText>
                  </AnswerCard>
                ))}
              </Fade>
            )
        )}
      </Content>
    </QuizCard>
  );
};
