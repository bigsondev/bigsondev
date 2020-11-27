import React, { useState } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { setItem } from '~utils';

import { Paragraph } from '../Typography';
import { fadeIn } from '../keyframes';

const AnimationHolder = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const Holder = styled.div({
  background: 'rgba(0, 0, 0, 0.85)',
  padding: '1.5rem 0.25rem 4.5rem 0.25rem',
  zIndex: 9999,
  width: '100vw',
  position: 'fixed',
  bottom: 0,

  '@media (max-width: 768px)': {
    padding: '2.25rem 0.25rem 5.5rem 0.25rem',
  },
});

const ParagraphHolder = styled(Paragraph)({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  marginBottom: 0,
  color: 'rgba(255, 255, 255, 0.65)',
  width: '100%',
  textAlign: 'center',
  padding: '0 0.25rem',
  fontStyle: 'italic',
});

const LinkHolder = styled(Link)({
  color: 'rgba(255, 255, 255, 0.65) !important',
  textDecoration: 'underline !important',
});

const CookieButton = styled(Button)({
  position: 'absolute',
  left: '50%',
  bottom: 0,
  transform: 'translate(-50%, -50%)',
  color: 'rgba(255, 255, 255, 0.85) !important',
  fontSize: '0.9375rem',
  fontStyle: 'italic',
  fontWeight: 500,
  border: '1px solid #137099 !important',
  backgroundColor: '#137099 !important',
  transition: 'box-shadow 0.3s',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #137099`,
    backgroundColor: '#137099 !important',
    color: '#FAFAFA !important',
    border: '1px solid #137099 !important',
  },
});

export const CookieBanner = ({ hasScrolled, onClick }) => {
  const [show, setShow] = useState(true);

  if (!show || !hasScrolled) {
    return null;
  }

  return (
    <AnimationHolder>
      <Holder>
        <ParagraphHolder size="micro">
          I use cookies for improving your experience when using the site. If
          you want to know more check{' '}
          <LinkHolder to="/privacy-policy/" size="micro">
            Privacy Policy
          </LinkHolder>
          .
        </ParagraphHolder>
        <CookieButton
          onClick={() => {
            setShow(false);
            setItem('cookiesAcknowledged', true);
            onClick();
          }}
        >
          I accept cookies
        </CookieButton>
      </Holder>
    </AnimationHolder>
  );
};
