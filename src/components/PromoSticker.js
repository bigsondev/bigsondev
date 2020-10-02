import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { setItem } from '~utils';

import { Paragraph } from '.';
import { fadeIn } from './keyframes';

const AlertHolder = styled(Alert)`
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ParagraphHolder = styled(Paragraph)({
  marginBottom: '0 !important',
});

const LinkHolder = styled(Link)({
  textDecoration: 'underline !important',
});

export const PromoSticker = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <AlertHolder
      message={
        <ParagraphHolder size="micro" align="center">
          -30% on all Mentorship Services for the first 10 mentees.{' '}
          <LinkHolder
            to="/mentorship/"
            onClick={() => {
              setShow(false);
              setItem('firstPromoSticker', true);
            }}
          >
            Check it out
          </LinkHolder>
        </ParagraphHolder>
      }
      type="info"
      showIcon={false}
      banner
      closable
      onClose={() => {
        setShow(false);
        setItem('firstPromoSticker', true);
      }}
    />
  );
};
