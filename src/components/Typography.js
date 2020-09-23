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
  h4: '1.375rem',
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
    color,
    transform,
    spacing,
  }) => ({
    color,
    textAlign: align,
    textTransform: transform,
    letterSpacing: spacing,
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
    textDecoration: 'underline',
  })
);

const LevelOneHolder = styled.div(
  ({
    align = 'left',
    transform = 'capitalize',
    fontWeight = 600,
    fontSize = '2.5rem',
    marginBottom = '0.5em',
    color,
  }) => ({
    textAlign: align,
    '& h1': {
      color,
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
    fontWeight = 500,
    fontSize = '2.125rem',
    color,
    letterSpacing,
  }) => ({
    textAlign: align,
    '& h2': {
      fontWeight,
      color,
      letterSpacing,
      textTransform: transform,
      fontSize,
    },
  })
);

const LevelThreeHolder = styled.div(
  ({
    align = 'left',
    transform = 'capitalize',
    fontWeight = 400,
    fontSize = '1.75rem',
    color,
  }) => ({
    textAlign: align,
    '& h3': {
      fontWeight,
      color,
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
    fontWeight = 500,
    fontSize = '1.375rem',
    color,
    marginBottom = '1rem',
  }) => ({
    textAlign: align,
    '& h4': {
      fontWeight,
      color,
      textTransform: transform,
      fontSize,
      marginBottom,
    },
  })
);

const LevelFiveHolder = styled.div(
  ({
    align = 'left',
    transform = 'uppercase',
    fontWeight,
    fontSize = '1.25rem',
    color,
  }) => ({
    textAlign: align,
    fontWeight,
    '& h5': {
      color,
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
  letterSpacing,
  ...props
}) => {
  const levelMap = {
    1: (
      <LevelOneHolder
        color={color}
        marginBottom={marginBottom}
        fontSize={fontSize}
        fontWeight={fontWeight}
        transform={transform}
      >
        <Typography.Title level={1} {...props} />
      </LevelOneHolder>
    ),
    2: (
      <LevelTwoHolder
        letterSpacing={letterSpacing}
        color={color}
        transform={transform}
      >
        <Typography.Title level={2} {...props} />
      </LevelTwoHolder>
    ),
    3: (
      <LevelThreeHolder color={color} transform={transform}>
        <Typography.Title level={3} {...props} />
      </LevelThreeHolder>
    ),
    4: (
      <LevelFourHolder
        marginBottom={marginBottom}
        color={color}
        transform={transform}
      >
        <Typography.Title level={4} {...props} />
      </LevelFourHolder>
    ),
    5: (
      <LevelFiveHolder color={color} transform={transform}>
        <Typography.Title level={5} {...props} />
      </LevelFiveHolder>
    ),
  };

  return levelMap[level];
};
