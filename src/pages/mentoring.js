import React from 'react';
import { Divider, Card, Row, Col, Button } from 'antd';
import { openPopupWidget } from 'react-calendly';

import { Layout, SEO, Title } from '~components';

const openMentoringEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigson-dev/coaching',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const Mentoring = () => {
  return (
    <Layout>
      <SEO title="Bigson Dev | Mentoring | Adrian Bigaj" />
      <Title>COACHING PLACEHOLDER</Title>
      <Divider />
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Mentoring"
            actions={[
              <Button type="primary" size="large" onClick={openMentoringEvent}>
                I need a mentor
              </Button>,
            ]}
          >
            <Card.Meta title="100$" description={`Let's talk individually`} />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Mock Interview"
            actions={[
              <Button type="primary" size="large">
                I need a mock interview
              </Button>,
            ]}
          >
            <Card.Meta
              title="150$"
              description={`Interview with a ghost (me), good for warming up before the real one. Additionally, you will receive a robust feedback`}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Development Plan"
            actions={[
              <Button type="primary" size="large">
                I need a development plan
              </Button>,
            ]}
          >
            <Card.Meta
              title="300$"
              description={`Plan your future, get complete plan of your growth which includes coding challenges, real world applications and tons of materials to learn from`}
            />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Mentoring;
