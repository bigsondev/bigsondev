import React, { useState } from 'react';
import { Divider, Form, Input as AntdInput, Button, Result } from 'antd';
import { SendOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Box,
  reachOutFailMessage,
} from '~components';

const Input = styled(AntdInput)({
  height: 50,
});

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);

const FORM_NAME = 'reach-out';

const ReachOut = () => {
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
        'form-name': FORM_NAME,
        ...values,
      }),
    })
      .then(() => {
        setMessageSent(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        reachOutFailMessage();
        setIsSubmitting(false);
      });
  };

  return (
    <Layout>
      <SEO title="Bigson Dev - Reach Out" />
      <Title>It never hurts to ask</Title>
      <Divider />
      <Title level={3} align="center">
        And it never hurts to help.
      </Title>
      <Paragraph align="center" type="secondary" lastParagraph>
        Ask about anything and sincere thank you for taking the time.
      </Paragraph>
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
            name={FORM_NAME}
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
            labelCol={{
              xs: 24,
              md: {
                span: 16,
                offset: 4,
              },
            }}
            wrapperCol={{
              xs: 24,
              md: {
                span: 16,
                offset: 4,
              },
            }}
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
            <Form.Item
              name="name"
              rules={[
                { required: true, message: `I'm Adrian, and you are? :)` },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
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
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="message"
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
            </Form.Item>
            <Form.Item>
              <Box display="flex" justify="center">
                <Button
                  block
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={isSubmitting}
                  onClick={() => setTriedToSubmit(true)}
                  icon={<SendOutlined />}
                >
                  Send
                </Button>
              </Box>
            </Form.Item>
          </Form>
        </>
      )}
    </Layout>
  );
};

export default ReachOut;
