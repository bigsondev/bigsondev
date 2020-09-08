import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {
  Typography,
  Progress as AntdProgress,
  Card as AntdCard,
  Divider,
  Avatar as AntdAvatar,
  Row,
  Col,
  Button,
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
const Text = styled(Typography.Text)({
  fontSize: 16,
  display: 'block',
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

const QuizDescription = styled(Typography.Title)({
  fontWeight: '400 !important',
  marginBottom: '16px !important',
});

const StartButton = styled(Button)({
  marginTop: 16,
  width: 150,
  textTransform: 'uppercase',
  borderRadius: 12,
});

const LearningResources = styled.div({
  marginTop: 40,
});

const LearningLink = styled(Typography.Link)({
  fontSize: 16,
  display: 'block',
});

const letters = ['A', 'B', 'C', 'D'];
const STAGES = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
};

export const Quiz = ({ data, desc }) => {
  const [selections, setSelection] = useState([]);
  const [stage, setStage] = useState(STAGES.NOT_STARTED);
  const currentQuestionIndex = selections.length;
  const percent = Math.ceil((currentQuestionIndex / data.length) * 100);

  const handleQuizStartClick = () => {
    setStage(STAGES.IN_PROGRESS);
  };

  const handleAnswerSelection = (index) => {
    setSelection([...selections, index]);
  };

  if (stage === STAGES.NOT_STARTED) {
    return (
      <>
        <QuizDescription level={4}>{desc}</QuizDescription>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Text>
              - There are <strong>{data.length} questions</strong> without time
              limit, maximum score is <strong>{data.length} points</strong>
            </Text>
          </Col>
          <Col span={24}>
            <Text>
              - Each question has 4 possible answers,
              <strong> but only one is correct</strong>
            </Text>
          </Col>
          <Col span={24}>
            <Text>- You can take the Quiz at anytime</Text>
          </Col>
          <Col span={24}>
            <Text>
              - If you want to prepare before starting, check out below links
            </Text>
          </Col>
          <Col span={24}>
            <StartButton
              type="primary"
              size="large"
              onClick={handleQuizStartClick}
            >
              Start
            </StartButton>
          </Col>
          <Col span={24}>
            <LearningResources>
              <QuizDescription level={4}>Learning Resources</QuizDescription>
              <LearningLink>Placeholder 1</LearningLink>
              <LearningLink>Placeholder 2</LearningLink>
              <LearningLink>Placeholder 3</LearningLink>
              <LearningLink>Placeholder 4</LearningLink>
            </LearningResources>
          </Col>
        </Row>
      </>
    );
  }

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
