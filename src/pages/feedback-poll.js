import React from 'react';

import { Layout, SEO, Title, Paragraph, Box } from '~components';
import { FeedbackPollForm } from '~modules/feedback-poll';

const FeedbackPoll = () => (
  <Layout>
    <SEO title="Feedback Poll | Thanks For Your Time" />
    <Title level={2} align="center">
      Feedback Poll
    </Title>
    <Box mb={5}>
      <Paragraph align="center">
        Great you decided to give feedback, really appreciated!
      </Paragraph>
    </Box>
    <Box margin="0 0 10rem 0">
      <FeedbackPollForm />
    </Box>
  </Layout>
);

export default FeedbackPoll;
