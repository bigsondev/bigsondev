import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Holder = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

// export const GlobalSpinner = () => (
//   <Holder id="bigsondev-loader">
//     <Spin size="large" delay={250} />
//   </Holder>
// );

export const GlobalSpinner = () => {
  console.log('Hi Content');

  return null;
};
