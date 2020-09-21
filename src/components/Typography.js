import React from 'react';
import { Typography, Space } from 'antd';
import styled from 'styled-components';

import { Icon, Box } from '.';

const TEXT_SIZE = {
  micro: '0.9375rem',
  small: '1rem',
  preNormal: '1.125rem',
  normal: '1.27rem',
  h1: '2.5rem',
};

export const Text = styled(Typography.Text)(
  ({
    align = 'left',
    fontWeight = 300,
    display = 'inline',
    fontStyle = 'normal',
    size = 'normal',
    transform = 'none',
    color,
    fontSize,
  }) => ({
    textAlign: align,
    display,
    fontSize: fontSize || TEXT_SIZE[size],
    fontWeight,
    fontStyle,
    textTransform: transform,
    color,
  })
);

export const ParagraphHolder = styled(Typography.Paragraph)(
  ({
    align = 'left',
    fontWeight = 300,
    size = 'normal',
    display = 'block',
    fontStyle = 'normal',
  }) => ({
    textAlign: align,
    display,
    fontSize: TEXT_SIZE[size],
    fontWeight,
    fontStyle,
  })
);

export const LinkHolder = styled.span(
  ({
    align = 'left',
    fontWeight = 300,
    size = 'normal',
    display = 'inline',
    fontSize,
  }) => ({
    textAlign: align,
    fontSize: fontSize || TEXT_SIZE[size],
    fontWeight,
    display,
  })
);

const LevelOneHolder = styled.div(
  ({
    align = 'left',
    transform = 'capitalize',
    fontWeight,
    fontSize = '2.5rem',
    marginBottom = '0.5em',
  }) => ({
    textAlign: align,
    '& h1': {
      fontWeight,
      textTransform: transform,
      fontSize,
      marginBottom,
    },
  })
);

const LevelTwoHolder = styled.div(
  ({
    align = 'left',
    transform = 'capitalize',
    fontWeight,
    fontSize = '2.125rem',
    color,
  }) => ({
    textAlign: align,
    fontWeight,
    '& h2': {
      color,
      textTransform: transform,
      fontSize,
    },
  })
);

const LevelThreeHolder = styled.div(
  ({
    align = 'left',
    transform = 'capitalize',
    fontWeight,
    fontSize = '1.75rem',
  }) => ({
    textAlign: align,
    fontWeight,
    '& h3': {
      textTransform: transform,
      fontSize,
      marginBottom: '1rem !important',
    },
  })
);

const LevelFourHolder = styled.div(
  ({
    align = 'left',
    transform = 'uppercase',
    fontWeight,
    fontSize = '1.375rem',
  }) => ({
    textAlign: align,
    fontWeight,
    '& h4': {
      textTransform: transform,
      fontSize,
      marginBottom: '1rem !important',
    },
  })
);

const LevelFiveHolder = styled.div(
  ({
    align = 'left',
    transform = 'uppercase',
    fontWeight,
    fontSize = '1.25rem',
  }) => ({
    textAlign: align,
    fontWeight,
    '& h5': {
      textTransform: transform,
      fontSize,
    },
  })
);

export const Paragraph = ({
  lastParagraph = false,
  breakParagraph = false,
  marginBottom,
  ...props
}) => (
  <>
    <ParagraphHolder
      style={{
        marginBottom: breakParagraph ? '5rem' : marginBottom || '1.75rem',
      }}
      {...props}
    />
    {lastParagraph && (
      <Box mt={5} mb={5} display="flex" justify="center">
        <Space>
          <Icon width={16} type="feather" />
          <Icon width={16} type="feather" />
          <Icon width={16} type="feather" />
        </Space>
      </Box>
    )}
  </>
);

export const Link = ({
  rel = 'noopener norefferer',
  target = '_blank',
  align,
  fontWeight,
  size,
  className,
  ...props
}) => (
  <LinkHolder
    align={align}
    fontWeight={fontWeight}
    size={size}
    className={className}
  >
    <Typography.Link rel={rel} target={target} {...props} />
  </LinkHolder>
);

export const Title = ({
  level = 1,
  transform,
  fontSize,
  fontWeight,
  marginBottom,
  color,
  ...props
}) => {
  const levelMap = {
    1: (
      <LevelOneHolder
        marginBottom={marginBottom}
        fontSize={fontSize}
        fontWeight={fontWeight}
        transform={transform}
      >
        <Typography.Title level={1} {...props} />
      </LevelOneHolder>
    ),
    2: (
      <LevelTwoHolder color={color} transform={transform}>
        <Typography.Title level={2} {...props} />
      </LevelTwoHolder>
    ),
    3: (
      <LevelThreeHolder transform={transform}>
        <Typography.Title level={3} {...props} />
      </LevelThreeHolder>
    ),
    4: (
      <LevelFourHolder transform={transform}>
        <Typography.Title level={4} {...props} />
      </LevelFourHolder>
    ),
    5: (
      <LevelFiveHolder transform={transform}>
        <Typography.Title level={5} {...props} />
      </LevelFiveHolder>
    ),
  };

  return levelMap[level];
};
