import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Result, Statistic, Button, Space } from 'antd';
import {
  SmileOutlined,
  FieldTimeOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import Fade from 'react-reveal/Fade';
import moment from 'moment';

import { Box } from '..';

import { QuizCard, QuizProgress } from './styled';
import { QuestionsLookup } from './QuestionsLookup';

const countScore = (data, selections) =>
  data.reduce((acc, _, index) => {
    if (data[index].correct === selections[index]) {
      acc++;
    }

    return acc;
  }, 0);

export const Completed = ({
  data,
  selections,
  timeElapsed,
  next,
  onTryAgainClick,
}) => (
  <QuizCard>
    <QuizProgress
      type="line"
      status="normal"
      strokeLinecap="square"
      percent={100}
      showInfo={false}
    />
    <Fade duration={1500}>
      <Result
        icon={<SmileOutlined />}
        title={<Box mb={2}>Nicely Done, Quiz Completed!</Box>}
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
        extra={<QuestionsLookup data={data} selections={selections} />}
      >
        <Box display="flex" justify="center">
          <Space>
            {next && (
              <Link to={`/library/${next}`}>
                <Button type="primary" size="large">
                  Next Quiz
                </Button>
              </Link>
            )}
            <Button size="large" onClick={() => onTryAgainClick()}>
              Try Again
            </Button>
          </Space>
        </Box>
      </Result>
    </Fade>
  </QuizCard>
);
