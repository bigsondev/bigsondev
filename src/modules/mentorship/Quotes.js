import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Paragraph, Icon } from '~components';

const Holder = styled.div({
  padding: '5rem 1rem 3rem 1rem',
  position: 'relative',
  background: '#FFC068',
});

const QuoteHolder = styled.div({
  position: 'relative',
});

const IconHolder = styled.div({
  color: '#FFF',
});

const Quote = ({ who, children }) => {
  return (
    <QuoteHolder>
      <IconHolder>
        <Icon type="quote" />
      </IconHolder>
      <Paragraph
        size="h4"
        align="left"
        strong
        color="#FFF"
        marginBottom="0.5rem"
      >
        {children}
      </Paragraph>
      <Paragraph align="right" color="#FFF" fontStyle="italic" strong>
        ~ {who}
      </Paragraph>
    </QuoteHolder>
  );
};

export const Quotes = () => {
  return (
    <Holder>
      <Row justify="center" gutter={[40, 16]}>
        <Col xs={22} md={7} xxl={6}>
          <Quote who="You">
            If only there would be someone who can tell me why it's not
            working...
          </Quote>
        </Col>
        <Col xs={22} md={7} xxl={6}>
          <Quote who="Me">
            Why I never receive feedback after the technical interview...
          </Quote>
        </Col>
        <Col xs={22} md={7} xxl={6}>
          <Quote who="Newcomer">
            Too many things to learn at once, I need a plan...
          </Quote>
        </Col>
      </Row>
    </Holder>
  );
};
