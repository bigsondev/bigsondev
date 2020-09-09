import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const TEXT_SIZE = {
  micro: '1.08em',
  small: '1.15em',
  normal: '1.43em',
};

export const Text = styled(Typography.Text)(
  ({
    align = 'left',
    fontWeight = 300,
    gutterBottom = false,
    display = 'inline',
    fontStyle = 'normal',
    size = 'normal',
  }) => ({
    textAlign: align,
    display,
    fontSize: TEXT_SIZE[size],
    fontWeight,
    fontStyle,
    marginBottom: gutterBottom && 8,
  })
);

export const Paragraph = styled(Typography.Paragraph)(
  ({
    align = 'left',
    fontWeight = 300,
    size = 'normal',
    gutterBottom = false,
    display = 'block',
    fontStyle = 'normal',
  }) => ({
    textAlign: align,
    display,
    fontSize: TEXT_SIZE[size],
    fontWeight,
    fontStyle,
    marginBottom: gutterBottom && 8,
  })
);

export const Link = styled(Typography.Link)(
  ({ align = 'left', fontWeight, size = 'normal' }) => ({
    textAlign: align,
    fontSize: TEXT_SIZE[size],
    fontWeight,
  })
);

const LevelOneHolder = styled.div(
  ({
    align = 'left',
    transform = 'none',
    fontWeight,
    fontSize = '2.86em',
  }) => ({
    textAlign: align,
    fontWeight,
    textTransform: transform,
    '& h1': {
      fontSize,
    },
  })
);

const LevelTwoHolder = styled.div(
  ({
    align = 'left',
    transform = 'none',
    fontWeight,
    fontSize = '2.46em',
  }) => ({
    textAlign: align,
    fontWeight,
    textTransform: transform,
    '& h2': {
      fontSize,
    },
  })
);

const LevelThreeHolder = styled.div(
  ({ align = 'left', transform = 'none', fontWeight, fontSize = '2em' }) => ({
    textAlign: align,
    fontWeight,
    textTransform: transform,
    '& h3': {
      fontSize,
    },
  })
);

const LevelFourHolder = styled.div(
  ({
    align = 'left',
    transform = 'none',
    fontWeight,
    fontSize = '1.58em',
  }) => ({
    textAlign: align,
    fontWeight,
    textTransform: transform,
    '& h4': {
      fontSize,
    },
  })
);

const LevelFiveHolder = styled.div(
  ({
    align = 'left',
    transform = 'none',
    fontWeight,
    fontSize = '1.45em',
  }) => ({
    textAlign: align,
    fontWeight,
    textTransform: transform,
    '& h5': {
      fontSize,
    },
  })
);

export const Title = ({ level = 1, ...props }) => {
  const levelMap = {
    1: (
      <LevelOneHolder>
        <Typography.Title level={1} {...props} />
      </LevelOneHolder>
    ),
    2: (
      <LevelTwoHolder>
        <Typography.Title level={2} {...props} />
      </LevelTwoHolder>
    ),
    3: (
      <LevelThreeHolder>
        <Typography.Title level={3} {...props} />
      </LevelThreeHolder>
    ),
    4: (
      <LevelFourHolder>
        <Typography.Title level={4} {...props} />
      </LevelFourHolder>
    ),
    5: (
      <LevelFiveHolder>
        <Typography.Title level={5} {...props} />
      </LevelFiveHolder>
    ),
  };

  return levelMap[level];
};
