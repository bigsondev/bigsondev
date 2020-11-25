import React from 'react';
import { Row, Col, Space } from 'antd';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

const PromoLinkHolder = styled(Link)(({ theme }) => ({
  fontWeight: theme.fontWeight.strong,
  fontSize: theme.fontSize.base,
  display: 'block',
  color: theme.colors.black,
  textDecoration: 'underline',

  '&:hover': {
    color: theme.colors.black,
  },
}));

const MobileScreenPromo = () => (
  <Row align="middle">
    <Col span={24}>
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
        mentor.
      </Title>
      <Paragraph marginBottom={spacing.large} textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Get out of tutorials hell.
        </Text>{' '}
        Reach long-term goals, find your first IT job, and feel the real
        progress. Invest in yourself and leave frustration behind.
      </Paragraph>
    </Col>
    <Box margin={`0 auto ${spacing.large} auto`}>
      <Space align="center" size="large" direction="vertical">
        <Link to="/mentorship/">
          <Button type="promo">Get mentorship now</Button>
        </Link>
        <PromoLinkHolder to="/start-here/">
          Not sure? Start here
        </PromoLinkHolder>
      </Space>
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
        with a seasoned mentor.
      </Title>
      <Paragraph marginBottom={spacing.large} textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Get out of tutorials hell.
        </Text>{' '}
        Reach long-term goals, find your first IT job, and feel the real
        progress. Invest in yourself and leave frustration behind.
      </Paragraph>
      <Space align="center" size="large">
        <Link to="/mentorship/">
          <Button type="promo">Get mentorship now</Button>
        </Link>
        <PromoLinkHolder to="/start-here/">
          Not sure? Start here
        </PromoLinkHolder>
      </Space>
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
        with a seasoned mentor.
      </Title>
      <Paragraph marginBottom={spacing.large} textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Get out of tutorials hell.
        </Text>{' '}
        Reach long-term goals, find your first IT job, and feel the real
        progress. Invest in yourself and leave frustration behind.
      </Paragraph>
      <Space align="center" size="large">
        <Link to="/mentorship/">
          <Button type="promo">Get mentorship now</Button>
        </Link>
        <PromoLinkHolder to="/start-here/">
          Not sure? Start here
        </PromoLinkHolder>
      </Space>
    </Col>
    <Col span={9}>
      <NotJumpingIllustration type="promo" />
    </Col>
  </Row>
);

export const Promo = () => (
  <Box margin={`${spacing.large} 0 ${spacing.extraLarge} 0`}>
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
