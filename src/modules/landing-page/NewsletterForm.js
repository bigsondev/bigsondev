import React, { useState } from 'react';
import { Form, Input as AntdInput, Result, Checkbox } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Box, failMessage, PromoButton, Paragraph } from '~components';
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
            subTitle="Please check the email to confirm your subscription."
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
            <input type="email" name="email" />
            <input type="checkbox" name="consent" />
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
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: `I'll need your email to send the newsletter.`,
                },
                {
                  type: 'email',
                  message: `Please provide a valid email address.`,
                },
              ]}
            >
              <Input placeholder="john.doe@example.com" />
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
                          `I'll need your consent to send emails.`
                        );
                  },
                }),
              ]}
            >
              <Checkbox>
                I would like to receive the newsletter from BigsonDev about
                news, services and information related to the BigsonDev website
                content.
              </Checkbox>
            </Form.Item>
            <Paragraph
              size="micro"
              type="secondary"
              fontWeight="200"
              fontStyle="italic"
            >
              From time to time, I'll send you messages about new blog posts,
              coding challenges, and mentoring promotions. Only valuable
              knowledge, no spam included. You can unsubscribe at any time.
            </Paragraph>
            <Form.Item>
              <Box>
                <PromoButton
                  htmlType="submit"
                  loading={isSubmitting}
                  onClick={() => setTriedToSubmit(true)}
                >
                  Subscribe & Get Guide
                </PromoButton>
              </Box>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};
