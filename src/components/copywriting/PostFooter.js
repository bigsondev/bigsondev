import React from 'react';

import { Link as GatsbyLink } from 'gatsby';

import { Paragraph, Link } from '..';

export const PostFooter = () => (
  <>
    <Paragraph>
      If you enjoyed the reading and are an amazing person who can help me to
      grow the audience - I'll be grateful for all kinds of support. ❤️
    </Paragraph>
    <Paragraph>
      I'm mostly using <Link href="https://twitter.com/BigsonDev">Twitter</Link>{' '}
      to tweet about <GatsbyLink to="/pills/">Knowledge Pills</GatsbyLink> and
      Frontend tips & tricks.
    </Paragraph>
    <Paragraph>
      In case you want to challenge yourself, I've prepared projects and quizzes
      in the <GatsbyLink to="/library/">Library</GatsbyLink>. Let me know what
      you've built.
    </Paragraph>
    <Paragraph>
      If you are interested in skyrocketing your Frontend career, I've{' '}
      <GatsbyLink to="/mentorship/">Mentorship</GatsbyLink> services you need.
    </Paragraph>
    <Paragraph>
      Additionally, I'm running a Slack group where all my mentees are gathered
      together. You can find the banner just below - become a part of the
      community.
    </Paragraph>
    <Paragraph>
      Last, but not least - feel free to use these spicy icons below to share
      the article. 🔥
    </Paragraph>
    <Paragraph>Make a difference. Be yourself.</Paragraph>
  </>
);
