import React from 'react';

import { Layout, SEO, Title, Paragraph, Box } from '~components';
import { FeedbackPollForm } from '~modules/feedback-poll';

const FeedbackPoll = () => (
  <Layout>
    <SEO title="Feedback Poll | Thanks For Your Time" />
    <Title level={3} align="center">
      Feedback Poll
    </Title>
    <Box mb={5}>
      <Paragraph align="center" type="secondary" size="preNormal">
        Great you decided to give feedback, really appreciated!
      </Paragraph>
    </Box>
    <FeedbackPollForm />
  </Layout>
);

export default FeedbackPoll;
