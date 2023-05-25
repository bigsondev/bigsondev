import React from 'react';
import { Row, Col } from 'antd';

import {
  theme,
  Title,
  Text,
  Paragraph,
  Image,
  Box,
  MobileOnly,
  TabletOnly,
  DesktopOnly,
  Button,
  Link,
} from '~components';

const { colors, fontSize, fontWeight, spacing, opacity } = theme;

const MobileScreenPromo = ({ fluid }) => (
  <Row align="middle" justify="center">
    <Col span={22}>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.large}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        Master Frontend
      </Title>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.large}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        with real-world
      </Title>
      <Title
        transform="none"
        marginBottom={spacing.medium}
        fontSize={fontSize.large}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        projects
      </Title>
      <Paragraph marginBottom="1.25rem" textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Level up with stunning Figma designs.
        </Text>
      </Paragraph>
    </Col>
    <Col span={22}>
      <Box margin={`0 0 ${spacing.large} 0`}>
        <Link href="https://bigdevsoon.me/">
          <Button type="promo">Try out BigDevSoon</Button>
        </Link>
      </Box>
    </Col>
    <Col span={22}>
      <Image
        fluid={fluid}
        alt="Image represents person shaking his head around how to learn web development - HTML, CSS & JS"
      />
    </Col>
  </Row>
);

const MediumScreenPromo = ({ fluid }) => (
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
        Master Frontend with
      </Title>
      <Title
        transform="none"
        marginBottom={spacing.medium}
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
        align="center"
      >
        real-world projects
      </Title>
      <Paragraph
        marginBottom="1.25rem"
        textOpacity={opacity.title}
        align="center"
      >
        <Text strong textOpacity={opacity.title}>
          Level up with stunning Figma designs.
        </Text>
      </Paragraph>
      <Box style={{ textAlign: 'center' }}>
        <Link href="https://bigdevsoon.me/">
          <Button type="promo">Try out BigDevSoon</Button>
        </Link>
      </Box>
    </Col>
    <Col span={12} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <Image
        fluid={fluid}
        alt="Image represents person shaking his head around how to learn web development - HTML, CSS & JS"
      />
    </Col>
  </Row>
);

const BigScreenPromo = ({ fluid }) => (
  <Row gutter={64} align="middle">
    <Col span={15}>
      <Title
        transform="none"
        marginBottom="0"
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        Master Frontend
      </Title>
      <Title
        transform="none"
        marginBottom={spacing.medium}
        fontSize={fontSize.extraLarge}
        fontWeight={fontWeight.stronger}
        color={colors.primary}
      >
        with real-world projects
      </Title>
      <Paragraph marginBottom="1.25rem" textOpacity={opacity.title}>
        <Text strong textOpacity={opacity.title}>
          Level up with stunning Figma designs and GitHub automation.
        </Text>
        <br /> Pull yourself out of tutorials hell.
      </Paragraph>
      <Box margin={`0 auto ${spacing.medium} auto`}>
        <Link href="https://bigdevsoon.me/">
          <Button type="promo">Try out BigDevSoon</Button>
        </Link>
      </Box>
    </Col>
    <Col span={9}>
      <Image
        fluid={fluid}
        alt="Image represents person shaking his head around how to learn web development - HTML, CSS & JS"
      />
    </Col>
  </Row>
);

export const Promo = ({ fluid }) => (
  <Box margin={`0 0 ${spacing.extraLarge} 0`}>
    <MobileOnly>
      <MobileScreenPromo fluid={fluid} />
    </MobileOnly>
    <TabletOnly>
      <MediumScreenPromo fluid={fluid} />
    </TabletOnly>
    <DesktopOnly>
      <BigScreenPromo fluid={fluid} />
    </DesktopOnly>
  </Box>
);
