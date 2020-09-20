import React, { useState } from 'react';
import { Form, Input as AntdInput, Button, Result, Checkbox } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Box, failMessage } from '~components';
import { encode } from '~utils';

import { NEWSLETTER_FORM_NAME } from './constants';

const Input = styled(AntdInput)({
  height: 50,
});

export const NewsletterForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const handleSubmit = (values) => {
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    console.log(values);

    setIsSubmitting(true);

    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({
        'form-name': NEWSLETTER_FORM_NAME,
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
            subTitle="Please check your email to confirm your subscription."
          />
        </Fade>
      ) : (
        <>
          <form
            name={NEWSLETTER_FORM_NAME}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="checkbox" name="consent" />
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
              <Input prefix={<UserOutlined />} placeholder="Your Name" />
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
              name="consent"
              valuePropName="checked"
              rules={[
                () => ({
                  validator(rule, value) {
                    return Boolean(value)
                      ? Promise.resolve()
                      : Promise.reject(
                          'I will need your consent to send emails.'
                        );
                  },
                }),
              ]}
            >
              <Checkbox>
                I want to receive Newsletter - knowledge about Frontend,
                library, blog updates and mentoring special offers
              </Checkbox>
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
                >
                  Apply for the Newsletter
                </Button>
              </Box>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};
