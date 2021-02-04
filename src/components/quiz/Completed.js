import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Result, Statistic, Space } from 'antd';
import {
  SmileOutlined,
  FieldTimeOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import Fade from 'react-reveal/Fade';
import moment from 'moment';

import { Box, TutorialTooltip, Button, ShareIcons } from '..';

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
  title,
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
          <Row justify="center" gutter={[0, 16]}>
            <Col xs={24} sm={8} xl={6}>
              <Statistic
                title="Score"
                value={countScore(data, selections)}
                prefix={<ScheduleOutlined />}
                suffix={` / ${data.length}`}
              />
            </Col>
            <Col xs={24} sm={8} xl={6}>
              <Statistic
                prefix={<FieldTimeOutlined />}
                title="Time Elapsed"
                value={moment.utc(timeElapsed * 1000).format('mm:ss')}
              />
            </Col>
          </Row>
        }
        extra={
          <TutorialTooltip
            title="Try clicking on the question button, check which answer you selected, and compare it with the correct one"
            type="quizQuestionLookup"
          >
            <QuestionsLookup data={data} selections={selections} />
          </TutorialTooltip>
        }
      >
        <Box display="flex" justify="center">
          <Space>
            {next ? (
              <Link to={`/projects/${next}/`}>
                <Button type="primary">Start next quiz</Button>
              </Link>
            ) : (
              <Link to="/projects/">
                <Button type="secondary" onClick={() => onTryAgainClick()}>
                  Back to Projects
                </Button>
              </Link>
            )}
          </Space>
        </Box>
        <Box mt={3} display="flex" justify="center">
          <ShareIcons title={title} />
        </Box>
      </Result>
    </Fade>
  </QuizCard>
);
