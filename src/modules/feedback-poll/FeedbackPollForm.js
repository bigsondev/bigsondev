import React, { useState } from 'react';
import { Form, Input as AntdInput, Result, Row, Col, Select } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Box, failMessage, SecondaryButton, SlackBanner } from '~components';
import { encode } from '~utils';

import { FEEDBACK_POLL_FORM_NAME } from './constants';

const Input = styled(AntdInput)({});

const FormItem = styled(Form.Item)({
  '& label': {
    fontSize: '1.125rem',
    height: 'initial !important',
    color: 'rgba(0, 0, 0, 0.45)',
  },
});

export const FeedbackPollForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    setIsSubmitting(true);

    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({
        'form-name': FEEDBACK_POLL_FORM_NAME,
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
          <Box pb={10}>
            <Result status="success" title="Feedback Received, Thanks!" />
          </Box>
        </Fade>
      ) : (
        <>
          <form
            name={FEEDBACK_POLL_FORM_NAME}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          <Form
            name="feedback-poll-ant-form"
            method="post"
            layout="vertical"
            size="large"
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
            <Row justify="center" gutter={[24, 24]}>
              <Col xs={22} md={14}>
                <FormItem
                  label="Name"
                  name="name"
                  required={false}
                  rules={[
                    { required: true, message: `I'm Adrian, and you're? :)` },
                  ]}
                >
                  <Input placeholder="John Doe" />
                </FormItem>
              </Col>
              <Col xs={22} md={14}>
                <FormItem
                  label="Service"
                  name="service"
                  required={false}
                  rules={[
                    {
                      required: true,
                      message: `It would be great if you could choose a service.`,
                    },
                  ]}
                >
                  <Select placeholder="Please, select a service which you had">
                    <Select.Option value="mentoring">Mentoring</Select.Option>
                    <Select.Option value="mock-interview">
                      Mock Interview
                    </Select.Option>
                    <Select.Option value="development-plan">
                      Development Plan
                    </Select.Option>
                  </Select>
                </FormItem>
              </Col>
              <Col xs={22} md={14}>
                <FormItem
                  label="Feedback"
                  name="feedback"
                  required={false}
                  rules={[
                    {
                      required: true,
                      message: `I thought you would write something. :(`,
                    },
                    {
                      min: 10,
                      message: `Write a little more. (min. 10 characters)`,
                    },
                    {
                      max: 2000,
                      message: `Woops, a bit too long. (max. 2000 characters)`,
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={7}
                    placeholder="My feedback about BigsonDev is..."
                  />
                </FormItem>
              </Col>
            </Row>
            <Form.Item>
              <Box display="flex" justify="center" mt={-3}>
                <SecondaryButton
                  htmlType="submit"
                  loading={isSubmitting}
                  onClick={() => setTriedToSubmit(true)}
                >
                  Send feedback
                </SecondaryButton>
              </Box>
            </Form.Item>
          </Form>
          <Box mt={10} mb={10}>
            <SlackBanner />
          </Box>
        </>
      )}
    </>
  );
};
