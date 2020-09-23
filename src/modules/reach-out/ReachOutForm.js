import React, { useState } from 'react';
import { Form, Input as AntdInput, Result, Row, Col } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Box, failMessage, SecondaryButton } from '~components';
import { encode } from '~utils';

import { REACH_OUT_FORM_NAME } from './constants';

const Input = styled(AntdInput)({
  height: 50,
});

const FormItem = styled(Form.Item)({
  '& label': {
    fontSize: '1.125rem',
    height: 'initial !important',
    color: 'rgba(0, 0, 0, 0.45)',
  },
});

export const ReachOutForm = () => {
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
        'form-name': REACH_OUT_FORM_NAME,
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
            title="Message Received, Thanks!"
            subTitle="I will try to answer ASAP."
          />
        </Fade>
      ) : (
        <>
          <form
            name={REACH_OUT_FORM_NAME}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          <Form
            name="reach-out-ant-form"
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
              <Col xs={22} md={8}>
                <FormItem
                  label="Name"
                  name="name"
                  required={false}
                  rules={[
                    { required: true, message: `I'm Adrian, and you are? :)` },
                  ]}
                >
                  <Input placeholder="John Doe" />
                </FormItem>
              </Col>
              <Col xs={22} md={8}>
                <FormItem
                  label="Email"
                  name="email"
                  required={false}
                  rules={[
                    {
                      required: true,
                      message: `I will need your email to respond back.`,
                    },
                    {
                      type: 'email',
                      message: `Please provide a valid email address.`,
                    },
                  ]}
                >
                  <Input placeholder="email@example.com" />
                </FormItem>
              </Col>
              <Col xs={22} md={16}>
                <FormItem
                  label="Message"
                  name="message"
                  required={false}
                  rules={[
                    {
                      required: true,
                      message: `I thought you wanted to ask about something. :(`,
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
                    placeholder="Hi, I want to ask about..."
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
                  Send message
                </SecondaryButton>
              </Box>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};
