import React from 'react';
import { Row, Col, Space } from 'antd';
import { Link } from 'gatsby';

import {
  theme,
  Title,
  Text,
  Paragraph,
  Illustration,
  NotJumpingIllustration,
  Box,
  MobileOnly,
  TabletOnly,
  DesktopOnly,
  Button,
} from '~components';

const { colors, fontSize, fontWeight, spacing, opacity } = theme;

const MobileScreenPromo = () => (
  <Row align="middle" justify="center">
    <Col span={22}>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.large}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        Learn Frontend
      </Title>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.large}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        faster with a
      </Title>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.large}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        seasoned
      </Title>
      <Title
        transform="none"
        marginBottom={spacing.large}
        fontSize={fontSize.large}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        Mentor.
      </Title>
      <Paragraph marginBottom={spacing.large} textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Get out of tutorials hell.
        </Text>{' '}
        Reach long-term goals, find your first IT job, and feel the real
        progress. Invest in yourself and make learning a breeze.
      </Paragraph>
    </Col>
    <Box margin={`0 auto ${spacing.large} auto`}>
      <Link to="/mentorship/">
        <Button type="promo">Get mentorship now</Button>
      </Link>
    </Box>
    <Col span={24}>
      <Illustration type="promo" />
    </Col>
  </Row>
);

const MediumScreenPromo = () => (
  <Row gutter={32}>
    <Col span={16}>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        Learn Frontend faster
      </Title>
      <Title
        transform="none"
        marginBottom={spacing.large}
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        with a seasoned Mentor.
      </Title>
      <Paragraph marginBottom={spacing.large} textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Get out of tutorials hell.
        </Text>{' '}
        Reach long-term goals, find your first IT job, and feel the real
        progress. Invest in yourself and make learning a breeze.
      </Paragraph>
      <Box margin={`0 auto ${spacing.large} auto`}>
        <Link to="/mentorship/">
          <Button type="promo">Get mentorship now</Button>
        </Link>
      </Box>
    </Col>
    <Col span={12} style={{ marginTop: '3rem', marginBottom: '5rem' }}>
      <NotJumpingIllustration type="promo" />
    </Col>
  </Row>
);

const BigScreenPromo = () => (
  <Row gutter={64}>
    <Col span={15}>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        Learn Frontend faster
      </Title>
      <Title
        transform="none"
        marginBottom={spacing.large}
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        with a seasoned Mentor.
      </Title>
      <Paragraph marginBottom={spacing.large} textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Get out of tutorials hell.
        </Text>{' '}
        Reach long-term goals, find your first IT job, and feel the real
        progress. Invest in yourself and make learning a breeze.
      </Paragraph>
      <Box margin={`0 auto ${spacing.large} auto`}>
        <Link to="/mentorship/">
          <Button type="promo">Get mentorship now</Button>
        </Link>
      </Box>
    </Col>
    <Col span={9}>
      <NotJumpingIllustration type="promo" />
    </Col>
  </Row>
);

export const Promo = () => (
  <Box margin={`0 0 ${spacing.extraLarge} 0`}>
    <MobileOnly>
      <MobileScreenPromo />
    </MobileOnly>
    <TabletOnly>
      <MediumScreenPromo />
    </TabletOnly>
    <DesktopOnly>
      <BigScreenPromo />
    </DesktopOnly>
  </Box>
);
