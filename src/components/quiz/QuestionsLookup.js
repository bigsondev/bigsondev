import React from 'react';
import { Row, Col, List, Alert, Popover, Button } from 'antd';
import styled from 'styled-components';

import { Text, Link, Title, Box } from '..';

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

export const QuestionsLookup = ({ data, selections }) => (
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
                  message={
                    <Text align="center" display="block" size="small">
                      Well done, you chose the correct answer!
                    </Text>
                  }
                  type="info"
                  showIcon
                />
              ) : (
                <Row gutter={[0, 8]}>
                  <Col span={24}>
                    <Alert
                      message={
                        <Text align="center" display="block" size="small">
                          Unfortunately you chose the wrong answer
                        </Text>
                      }
                      type="warning"
                      showIcon
                    />
                  </Col>
                  <Col span={24}>
                    <Text
                      type="secondary"
                      display="block"
                      align="center"
                      size="small"
                    >
                      Learning resource
                    </Text>
                    <Box display="flex" justify="center">
                      <Link size="small">Introduction to Chrome DevTools</Link>
                    </Box>
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
            title={
              <Box mt={2}>
                {typeof question === 'string' ? (
                  <Title level={4} align="center" transform="none">
                    {question}
                  </Title>
                ) : (
                  question
                )}
              </Box>
            }
            content={popoverContent}
            trigger="click"
            overlayStyle={{
              maxWidth: 480,
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
