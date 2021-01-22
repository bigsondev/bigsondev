import React from 'react';
import { Row, Col } from 'antd';
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
        Master coding
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
          Become a Web Developer.
        </Text>
        <br />
        Join over 40 mentees.
      </Paragraph>
    </Col>
    <Col span={22}>
      <Box margin={`0 0 ${spacing.large} 0`}>
        <Link to="/mentorship/">
          <Button type="promo">Explore mentorship now</Button>
        </Link>
      </Box>
    </Col>
    <Col span={22}>
      <Illustration type="promo" />
    </Col>
  </Row>
);

const MediumScreenPromo = () => (
  <Row gutter={32} justify="center">
    <Col span={22}>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
        align="center"
      >
        Master coding faster with
      </Title>
      <Title
        transform="none"
        marginBottom={spacing.large}
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
        align="center"
      >
        a seasoned Mentor.
      </Title>
      <Paragraph
        marginBottom={spacing.large}
        textOpacity={opacity.title}
        align="center"
      >
        <Text strong textOpacity={opacity.title}>
          Become a Web Developer.
        </Text>
        <br /> Join over 40 mentees.
      </Paragraph>
      <Box
        margin={`0 auto ${spacing.large} auto`}
        style={{ textAlign: 'center' }}
      >
        <Link to="/mentorship/">
          <Button type="promo">Explore mentorship now</Button>
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
        Master coding faster
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
          Join over 40 mentees and become a Web Developer.
        </Text>
        <br /> Pull yourself out of tutorials hell.
      </Paragraph>
      <Box margin={`0 auto ${spacing.large} auto`}>
        <Link to="/mentorship/">
          <Button type="promo">Explore mentorship now</Button>
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
