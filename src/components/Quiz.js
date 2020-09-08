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
  Result as AntdResult,
  Statistic,
  notification,
  Popover,
  List,
  Alert,
  message,
} from 'antd';
import {
  SmileOutlined,
  FieldTimeOutlined,
  ScheduleOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const Section = styled.div({
  background: '#FAFAFA',
  padding: '8px 16px',
  borderRadius: 12,
});

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
  fontWeight: '500 !important',
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

const Result = styled(AntdResult)({
  '& .ant-result-title': {
    marginBottom: 16,
  },
});

const CorrectAnswer = styled(List.Item)({
  backgroundColor: '#1890ff',
  padding: '12px 4px',

  '& .ant-typography': {
    color: '#FFF',
  },
});

const IncorrectAnswer = styled(List.Item)({
  backgroundColor: '#faad14',
  padding: '12px 4px',

  '& .ant-typography': {
    color: '#FFF',
  },
});

const letters = ['A', 'B', 'C', 'D'];
const STAGES = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
};

const SelectionsLookup = ({ data, selections }) => (
  <Row justify="center">
    {selections.map((_, index) => {
      const { correct, question, answers } = data[index];
      const selection = selections[index];
      const isCorrect = correct === selection;
      const popoverContent = (
        <>
          <Row gutter={[0, 8]}>
            <Col span={24}>
              <List>
                {answers.map((answer, index) => {
                  if (correct === index) {
                    return (
                      <CorrectAnswer key={answer}>
                        <Text>{answer}</Text>
                      </CorrectAnswer>
                    );
                  }

                  if (selection === index) {
                    return (
                      <IncorrectAnswer key={answer}>
                        <Text>{answer}</Text>
                      </IncorrectAnswer>
                    );
                  }

                  return (
                    <List.Item key={answer}>
                      <Text>{answer}</Text>
                    </List.Item>
                  );
                })}
              </List>
            </Col>
            <Col span={24}>
              {correct === selection ? (
                <Alert
                  message="Well done, you chose the correct answer!"
                  type="info"
                  showIcon
                />
              ) : (
                <Row gutter={[0, 8]}>
                  <Col span={24}>
                    <Alert
                      message="Unfortunately you chose the wrong answer"
                      type="warning"
                      showIcon
                    />
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">
                      Learning resource
                    </Typography.Text>
                    <LearningLink>Introduction to Chrome DevTools</LearningLink>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </>
      );

      return (
        <Col span={2} key={index}>
          <Popover
            title={question}
            content={popoverContent}
            trigger="click"
            overlayStyle={{
              maxWidth: 480,
              textAlign: 'center',
            }}
          >
            <Button type={isCorrect ? 'primary' : 'default'}>
              Q{index + 1}
            </Button>
          </Popover>
        </Col>
      );
    })}
  </Row>
);

const countScore = (data, selections) =>
  data.reduce((acc, value, index) => {
    if (data[index].correct === selections[index]) {
      acc++;
    }

    return acc;
  }, 0);

export const Quiz = ({ data, desc }) => {
  const [selections, setSelection] = useState([]);
  const [stage, setStage] = useState(STAGES.NOT_STARTED);
  const [timer, setTimer] = useState(undefined);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const currentQuestionIndex = selections.length;
  const percent = Math.ceil((currentQuestionIndex / data.length) * 100);

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
    }, 1000);

    setTimer(timer);
  };

  const handleQuizStartClick = () => {
    setStage(STAGES.IN_PROGRESS);

    startTimer();
  };

  const handleQuizRestart = () => {
    setSelection([]);
    setTimeElapsed(0);
    startTimer();
    setStage(STAGES.IN_PROGRESS);
  };

  const handleAnswerSelection = (index) => {
    if (selections.length + 1 === data.length) {
      clearInterval(timer);
      setTimer(undefined);
      setSelection([...selections, index]);

      message.success('Quiz results has been saved');
      notification.open({
        message: 'Did you know?',
        description:
          'Try clicking on a question button, you can check the correct answer, some helpful references and who knows what more!',
        duration: null,
        icon: <QuestionCircleOutlined />,
        key: 'did-you-know-1',
        btn: (
          <Button
            type="primary"
            onClick={() => notification.close('did-you-know-1')}
          >
            Got it! (don't show again)
          </Button>
        ),
      });

      return setStage(STAGES.COMPLETED);
    }

    setSelection([...selections, index]);
  };

  const stagesMap = {
    NOT_STARTED: (
      <>
        <Section>
          <Row gutter={[0, 8]}>
            <Col span={24}>
              <QuizDescription level={4}>{desc}</QuizDescription>
            </Col>
            <Col span={24}>
              <Text>
                <InfoCircleOutlined /> There are{' '}
                <strong>{data.length} questions</strong> without time limit,
                maximum score is <strong>{data.length} points</strong>
              </Text>
            </Col>
            <Col span={24}>
              <Text>
                <InfoCircleOutlined /> Each question has 4 possible answers,
                <strong> but only one is correct</strong>
              </Text>
            </Col>
            <Col span={24}>
              <Text>
                <InfoCircleOutlined /> You can take the Quiz at anytime
              </Text>
            </Col>
            <Col span={24}>
              <Text>
                <InfoCircleOutlined /> If you want to prepare before starting,
                check out below links
              </Text>
            </Col>
          </Row>
        </Section>
        <Row>
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
    ),
    IN_PROGRESS: (
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
    ),
    COMPLETED: (
      <QuizCard>
        <Progress
          type="line"
          status="normal"
          strokeLinecap="square"
          percent={100}
          showInfo={false}
        />
        <Fade duration={1500}>
          <Result
            icon={<SmileOutlined />}
            title="Nicely done, Quiz completed!"
            subTitle={
              <Row justify="center">
                <Col span={6}>
                  <Statistic
                    title="Score"
                    value={countScore(data, selections)}
                    prefix={<ScheduleOutlined />}
                    suffix={` / ${data.length}`}
                  />
                </Col>
                <Col span={6}>
                  <Statistic
                    prefix={<FieldTimeOutlined />}
                    title="Time Elapsed"
                    value={moment.utc(timeElapsed * 1000).format('mm:ss')}
                  />
                </Col>
              </Row>
            }
            extra={<SelectionsLookup data={data} selections={selections} />}
          >
            <Content>
              <Row justify="center" gutter={8}>
                <Col>
                  <Button type="primary" size="large" onClick={() => {}}>
                    Next Quiz
                  </Button>
                </Col>
                <Col>
                  <Button size="large" onClick={() => handleQuizRestart()}>
                    Try Again
                  </Button>
                </Col>
              </Row>
            </Content>
          </Result>
        </Fade>
      </QuizCard>
    ),
  };

  return stagesMap[stage];
};
