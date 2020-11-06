import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'gatsby';
import { DownCircleFilled } from '@ant-design/icons';

import {
  Title,
  Text,
  Paragraph,
  Illustration,
  NotJumpingIllustration,
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
        align="center"
      >
        Hi,{' '}
        <Text size="h1" fontSize={'2.2rem'} strong textOpacity={1}>
          Frontend
        </Text>{' '}
        is tough.
      </Title>
      <Title
        transform="none"
        fontWeight="300"
        fontSize={'2.2rem'}
        marginBottom="1.5rem"
        align="center"
      >
        Let me help you with{' '}
        <Text size="h1" fontSize={'2.2rem'} strong textOpacity={1}>
          IT.
        </Text>
      </Title>
      <Paragraph
        size={'small'}
        marginBottom="2.5rem"
        fontStyle="italic"
        align="center"
      >
        I'm Adrian - Frontend Mentor.
        <br />I love sharing my knowledge with others.
      </Paragraph>
    </Col>
    <Col span={24}>
      <Illustration type="promo" />
    </Col>
    <Box mt={5} width="100%" display="flex" justify="center">
      <Link to="/mentorship/#bigsondev-offer">
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
          <Text size="h1" fontSize="2.5rem" strong textOpacity={1}>
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
          <Text size="h1" fontSize="2.5rem" strong textOpacity={1}>
            IT.
          </Text>
        </Title>
        <Paragraph size="preNormal" align="center" fontStyle="italic">
          I'm Adrian - Frontend Mentor.
          <br />I love sharing my knowledge with others.
        </Paragraph>
      </Box>
    </Col>
    <Col span={12}>
      <Illustration type="promo" />
    </Col>
    <Box mt={5} width="100%" display="flex" justify="center">
      <Link to="/mentorship/#bigsondev-offer">
        <PromoButton>I want to improve</PromoButton>
      </Link>
    </Box>
  </Row>
);

const BigScreenPromo = () => (
  <Box mt={1}>
    <Row gutter={32}>
      <Col span={12} style={{ marginTop: '5rem' }}>
        <Title
          transform="none"
          marginBottom="0.1em"
          fontWeight="300"
          fontSize={'3rem'}
        >
          Hi,{' '}
          <Text size="h1" fontSize={'3rem'} strong textOpacity={1}>
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
          <Text size="h1" fontSize={'3rem'} strong textOpacity={1}>
            IT.
          </Text>
        </Title>
        <Paragraph size={'preNormal'} marginBottom="2rem" fontStyle="italic">
          I'm Adrian - Frontend Mentor.
          <br />I love sharing my knowledge with others.
        </Paragraph>
        <Link to="/mentorship/#bigsondev-offer">
          <PromoButton>I want to improve</PromoButton>
        </Link>
      </Col>
      <Col span={12}>
        <NotJumpingIllustration type="promo" />
      </Col>
      <Col span={24}>
        <Box mt={2} display="flex" justify="center">
          <DownCircleFilled
            style={{ fontSize: 60, color: '#bae7ff', cursor: 'pointer' }}
            onClick={() =>
              document
                .getElementById('bigsondev-skyrocket-your-career')
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
