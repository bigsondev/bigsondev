import React from 'react';

import { theme, Box, Button, Text, Paragraph, Link } from '~components';

import { Space } from 'antd';

import { BdsLogoImage } from '~assets/logo';

const { spacing } = theme;

export const BdsPlug = () => {
  return (
    <Box margin={`${spacing.extraLarge}`}>
      <Box display="flex" justify="center">
        <Space size="large" direction="vertical" align="center">
          <img
            src={BdsLogoImage}
            alt="logo with a rocket of the BigDevSoon application"
          />
          <Paragraph align="center" marginTop="0" marginBottom="0">
            Build real-world projects with{' '}
            <Text strong>stunning Figma designs</Text>, powered by GitHub
            automation.
          </Paragraph>
          <Link href="https://bigdevsoon.me/">
            <Button type="promo">Try out BigDevSoon</Button>
          </Link>
        </Space>
      </Box>
    </Box>
  );
};
