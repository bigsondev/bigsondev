import React, { useState } from 'react';
import { Form, Input as AntdInput, Result, Row, Col } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Box, failMessage, PromoBannerButton } from '~components';
import { encode } from '~utils';

import { SLACK_FORM_NAME } from './constants';

const Input = styled(AntdInput)({
  height: 50,
});

export const SlackForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const handleSubmit = (values) => {
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    setIsSubmitting(true);

    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({
        'form-name': SLACK_FORM_NAME,
        ...values,
      }),
    })
      .then(() => {
        setMessageSent(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        failMessage();
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {messageSent ? (
        <Fade duration={1500}>
          <Result
            status="success"
            title="All Went Good, Thanks!"
            subTitle="Please check the email to accept your invite."
          />
        </Fade>
      ) : (
        <>
          <form
            name={SLACK_FORM_NAME}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
          >
            <input type="email" name="email" />
          </form>
          <Form
            name="slack-ant-form"
            method="post"
            layout="vertical"
            size="large"
            style={{ width: '100%', padding: 16 }}
            validateTrigger={triedToSubmit ? 'onChange' : 'onSubmit'}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="bot-field"
              label="I'm invisible"
              style={{ display: 'none' }}
            >
              <Input type="hidden" />
            </Form.Item>
            <Row justify="center">
              <Col xs={22} sm={16} md={12}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: `I'll need your email to send the invite.`,
                    },
                    {
                      type: 'email',
                      message: `Please provide a valid email address.`,
                    },
                  ]}
                >
                  <Input placeholder="john.doe@example.com" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Box display="flex" justify="center">
                <PromoBannerButton
                  htmlType="submit"
                  loading={isSubmitting}
                  onClick={() => setTriedToSubmit(true)}
                >
                  Request Invite
                </PromoBannerButton>
              </Box>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};
