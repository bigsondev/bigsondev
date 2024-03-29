import React from 'react';
import styled from 'styled-components';

import { Paragraph, MainCard, Post, Image, Link, theme } from '.';

const ImageHolder = styled.div({
  position: 'relative',
  marginTop: '-3rem',
  marginLeft: '-1rem',
  width: 'calc(100% + 2rem)',

  '& > figure': {
    margin: '0 auto 1rem auto',
  },
});

const ImageCredit = styled.div({
  position: 'absolute',
  bottom: '-0.75rem',
  left: '0.25rem',
});

const KnowledgePillCard = styled(MainCard)(({ theme }) => ({
  padding: `${theme.spacing.large} ${theme.spacing.small} ${theme.spacing.medium} ${theme.spacing.small}`,
}));

const { colors } = theme;

export const KnowledgePill = ({
  title,
  tags,
  difficulty,
  date,
  imageAuthorLink,
  imageAuthorName,
  imageSourceLink,
  imageSource,
  children,
  desc,
  fluid,
}) => (
  <KnowledgePillCard>
    <ImageHolder>
      <Image fluid={fluid} alt={title} />
      <ImageCredit>
        <Paragraph size="preNormal" color={colors.white}>
          Image by{' '}
          <Link size="preNormal" href={imageAuthorLink} strong>
            {imageAuthorName}
          </Link>{' '}
          from{' '}
          <Link size="preNormal" href={imageSourceLink} strong>
            {imageSource}
          </Link>
        </Paragraph>
      </ImageCredit>
    </ImageHolder>
    <Post
      title={title}
      tags={tags}
      difficulty={difficulty}
      desc={desc}
      date={date}
      showSubtitle
    >
      {children}
    </Post>
  </KnowledgePillCard>
);
