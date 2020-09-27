import React from 'react';
import { Row, Col } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import { Link } from 'gatsby';

import {
  Title,
  Text,
  Paragraph,
  Illustration,
  Box,
  MobileOnly,
  TabletOnly,
  DesktopOnly,
  PromoButton,
} from '~components';

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
      <Title
        transform="none"
        fontWeight="300"
        fontSize={'2.2rem'}
        marginBottom="1.5rem"
      >
        Let me help you with{' '}
        <Text size="h1" fontSize={'2.2rem'} strong>
          IT.
        </Text>
      </Title>
      <Paragraph size={'small'} marginBottom="2.5rem" fontStyle="italic">
        I'm Adrian, Frontend Developer, Recruiter, Mentor.
        <br />
        And your friend. I love sharing my knowledge with others.
      </Paragraph>
    </Col>
    <Col span={24}>
      <Illustration type="promo" />
    </Col>
    <Box mt={5} width="100%" display="flex" justify="center">
      <Link to="/mentorship">
        <PromoButton>I want to improve</PromoButton>
      </Link>
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
        <Paragraph size="preNormal" align="center" fontStyle="italic">
          I'm Adrian, Frontend Developer, Recruiter, Mentor.
          <br />
          And your friend. I love sharing my knowledge with others.
        </Paragraph>
      </Box>
    </Col>
    <Col span={12}>
      <Illustration type="promo" />
    </Col>
    <Box mt={5} width="100%" display="flex" justify="center">
      <Link to="/mentorship">
        <PromoButton>I want to improve</PromoButton>
      </Link>
    </Box>
  </Row>
);

const BigScreenPromo = () => (
  <Box mt={1}>
    <Row align="middle" gutter={32}>
      <Col span={12}>
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
        <Title
          transform="none"
          fontWeight="300"
          fontSize={'3rem'}
          marginBottom="2rem"
        >
          Let me help you with{' '}
          <Text size="h1" fontSize={'3rem'} strong>
            IT.
          </Text>
        </Title>
        <Paragraph size={'preNormal'} marginBottom="2rem" fontStyle="italic">
          I'm Adrian, Frontend Developer, Recruiter, Mentor.
          <br />
          And your friend. I love sharing my knowledge with others.
        </Paragraph>
        <Link to="/mentorship">
          <PromoButton>I want to improve</PromoButton>
        </Link>
      </Col>
      <Col span={12}>
        <Illustration type="promo" />
      </Col>
      <Col span={24}>
        <Box mt={2} display="flex" justify="center">
          <DownCircleFilled
            style={{ fontSize: 60, color: '#bae7ff', cursor: 'pointer' }}
            onClick={() =>
              document
                .getElementById('skyrocket-your-career')
                .scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          />
        </Box>
      </Col>
    </Row>
  </Box>
);

export const Promo = () => (
  <>
    <MobileOnly>
      <MobileScreenPromo />
    </MobileOnly>
    <TabletOnly>
      <MediumScreenPromo />
    </TabletOnly>
    <DesktopOnly>
      <BigScreenPromo />
    </DesktopOnly>
  </>
);
