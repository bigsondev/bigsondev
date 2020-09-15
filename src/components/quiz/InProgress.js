import React from 'react';
import { Row, Col, Divider, Avatar, Card } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Box, Text, Title } from '..';
import { QuizCard, QuizProgress } from './styled';

const Answer = styled(Card)({
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

const AnswerLetter = styled(Avatar)({
  backgroundColor: '#CEF7F1',
  marginRight: 16,
  marginTop: -6,
  transition: 'background-color 0.1s',

  '& .ant-avatar-string': {
    color: '#000',
    fontWeight: 600,
    fontSize: '1.1428571428571428em',
    transition: 'color 0.1s',
  },
});

const letters = ['A', 'B', 'C', 'D'];

export const InProgress = ({ data, selections, onAnswerClick }) => {
  const currentQuestionIndex = selections.length;
  const progress = Math.ceil((currentQuestionIndex / data.length) * 100);

  return (
    <QuizCard>
      <QuizProgress
        type="line"
        status="active"
        strokeLinecap="square"
        percent={progress}
        showInfo={false}
      />
      <Box maxWidth={600} margin="0 auto">
        <Box mb={1}>
          <Text type="secondary" align="center" display="block" size="small">
            Question {currentQuestionIndex + 1}/{data.length}
          </Text>
        </Box>
        {data.map(
          ({ question, answers }, index) =>
            currentQuestionIndex === index && (
              <Fade duration={1500} key={question}>
                {typeof question === 'string' ? (
                  <Title level={2} align="center" transform="none">
                    {question}
                  </Title>
                ) : (
                  question
                )}
                <Divider />
                <Box mb={2}>
                  <Row gutter={[0, 16]} justify="center">
                    {answers.map((answer, index) => (
                      <Col span={20} key={answer}>
                        <Answer onClick={() => onAnswerClick(index)}>
                          <AnswerLetter>{letters[index]}</AnswerLetter>
                          <Text size="preNormal">{answer}</Text>
                        </Answer>
                      </Col>
                    ))}
                  </Row>
                </Box>
              </Fade>
            )
        )}
      </Box>
    </QuizCard>
  );
};
