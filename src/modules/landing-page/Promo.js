import React from 'react';
import { Row, Col, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useMedia } from 'react-media';

import { Title, Text, Paragraph, Illustration, Box } from '~components';

const PromoButton = styled(Button)({
  width: 230,
  height: 70,
  fontSize: 20,
  borderRadius: 8,
  background: '#ffc069',
  border: 'none',
  transition: 'box-shadow 0.3s',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #ffc069`,
    background: '#ffc069',
  },
});

const MobileScreenPromo = () => (
  <Row align="middle">
    <Col span={24}>
      <Title
        transform="none"
        marginBottom="0.1em"
        fontWeight="300"
        fontSize={'2.2rem'}
      >
        Hi,{' '}
        <Text size="h1" fontSize={'2.2rem'} strong>
          Frontend
        </Text>{' '}
        is tough.
      </Title>
      <Title transform="none" fontWeight="300" fontSize={'2.2rem'}>
        Let me help you with{' '}
        <Text size="h1" fontSize={'2.2rem'} strong>
          IT.
        </Text>
      </Title>
      <Paragraph size={'small'}>
        I'm Adrian, Front-end Developer, Recruiter, Mentor.
        <br />
        And your friend. I love sharing my knowledge with others.
      </Paragraph>
    </Col>
    <Col span={24}>
      <Illustration type="promo" />
    </Col>
    <Box mt={3} style={{ width: '100%' }}>
      <PromoButton
        type="primary"
        block
        style={{ width: '100%', height: 60, fontSize: 18 }}
      >
        I Want To Improve
      </PromoButton>
    </Box>
  </Row>
);

const MediumScreenPromo = () => (
  <Row align="middle" justify="center">
    <Col span={24}>
      <Box mt={3}>
        <Title
          transform="none"
          marginBottom="0.1em"
          fontWeight="300"
          fontSize="2.5rem"
          align="center"
        >
          Hi,{' '}
          <Text size="h1" fontSize="2.5rem" strong>
            Frontend
          </Text>{' '}
          is tough.
        </Title>
        <Title
          transform="none"
          fontWeight="300"
          fontSize="2.5rem"
          align="center"
        >
          Let me help you with{' '}
          <Text size="h1" fontSize="2.5rem" strong>
            IT.
          </Text>
        </Title>
        <Paragraph size="preNormal" align="center">
          I'm Adrian, Front-end Developer, Recruiter, Mentor.
          <br />
          And your friend. I love sharing my knowledge with others.
        </Paragraph>
      </Box>
    </Col>
    <Col span={12}>
      <Illustration type="promo" />
    </Col>
    <Box mt={5} style={{ width: '100%', textAlign: 'center' }}>
      <PromoButton
        type="primary"
        block
        style={{ width: '50%', height: 60, fontSize: 18 }}
      >
        I Want To Improve
      </PromoButton>
    </Box>
  </Row>
);

const BigScreenPromo = () => (
  <Box mt={1}>
    <Row align="middle" gutter={32}>
      <Col span={12}>
        <Box mt={-10}>
          <Title
            transform="none"
            marginBottom="0.1em"
            fontWeight="300"
            fontSize={'3rem'}
          >
            Hi,{' '}
            <Text size="h1" fontSize={'3rem'} strong>
              Frontend
            </Text>{' '}
            is tough.
          </Title>
          <Title transform="none" fontWeight="300" fontSize={'3rem'}>
            Let me help you with{' '}
            <Text size="h1" fontSize={'3rem'} strong>
              IT.
            </Text>
          </Title>
          <Paragraph size={'preNormal'}>
            I'm Adrian, Front-end Developer, Recruiter, Mentor.
            <br />
            And your friend. I love sharing my knowledge with others.
          </Paragraph>
          <PromoButton type="primary" size="large">
            I Want To Improve
          </PromoButton>
        </Box>
      </Col>
      <Col span={12}>
        <Illustration type="promo" />
      </Col>
      <Col span={24}>
        <Box mt={5} display="flex" justify="center">
          <ArrowDownOutlined style={{ fontSize: 32 }} />
        </Box>
      </Col>
    </Row>
  </Box>
);

export const Promo = () => {
  const isMobile = useMedia({ query: '(max-width: 480px)' });
  const isMedium = useMedia({ query: '(max-width: 1000px)' });

  if (isMobile) {
    return <MobileScreenPromo />;
  }

  if (isMedium) {
    return <MediumScreenPromo />;
  }

  return <BigScreenPromo />;
};
