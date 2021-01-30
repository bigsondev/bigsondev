import React from 'react';

import { Paragraph, PostList, Link } from '..';

const data = [
  <Link href="https://www.codementor.io/@bigsondev">codementor.io</Link>,
  <Link href="https://mentorcruise.com/mentor/AdrianBigaj/">MentorCruise</Link>,
  <Link href="https://www.linkedin.com/in/adrian-bigaj-282277130/">
    LinkedIn
  </Link>,
  <Link href="https://twitter.com/BigsonDev">Twitter</Link>,
];

export const PostFooter = () => (
  <>
    <Paragraph lastParagraph />
    <Paragraph>
      <strong>Big</strong> thanks for reading the article, you're awesome! 🙇‍♂️
    </Paragraph>
    <Paragraph>You can also find me on:</Paragraph>
    <PostList data={data} />
    <Paragraph>Thanks for all the support. ❤️</Paragraph>
  </>
);
