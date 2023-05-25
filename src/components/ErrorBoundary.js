import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { getJs } from '~utils';

import { CodeEditor, Title, Paragraph, Text, Box, Link } from '.';

const tasksListData = [
  <Text size="small" color="#FAFAFA">
    codingIsABreeze function exists
  </Text>,
  <Text size="small" color="#FAFAFA">
    The codingIsABreeze function accepts map of nodes as a parameter, and comma
    separated string nodes which build the fastest path
  </Text>,
  <Text size="small" color="#FAFAFA">
    The codingIsABreeze function returns array of string nodes sorted in a way
    to build the fastest path
  </Text>,
];

export const tabs = ['js'];
export const tests = [
  () => getJs().codingIsABreeze,
  () => getJs().codingIsABreeze?.length >= 2,
  () => {
    const nodes = { a: { b: 3, c: 1 }, b: { a: 2, c: 1 }, c: { a: 4, b: 1 } };
    const expectedResult = ['a', 'c', 'b'];
    return (
      getJs().codingIsABreeze?.(nodes, 'a', 'b').length === 3 &&
      getJs()
        .codingIsABreeze?.(nodes, 'a', 'b')
        .every((value, index) => value === expectedResult[index])
    );
  },
];

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO log in the future/maybe Netlify can handle that?
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box margin="3rem 0 0 0">
          <Title level={2} align="center">
            Woops, where is my Duck?
          </Title>
          <Row justify="center">
            <Col xs={20} sm={12}>
              <Paragraph align="center" breakParagraph>
                Something went wrong and it was my fault, but if you think
                coding is a breeze, try to solve the below code challenge.
              </Paragraph>
            </Col>
            <Col xs={20} xl={14}>
              <CodeEditor
                tasks={tasksListData}
                help={[
                  <Link size="small" target="_self" href="/">
                    Refresh
                  </Link>,
                ]}
                tabs={tabs}
                tests={tests}
                result={
                  <>
                    <Text size="preNormal" code>
                      codingIsABreeze
                    </Text>{' '}
                    function implements Dijkstra's algorithm and finds the
                    shortest path.
                  </>
                }
                initialJs={`// const nodes = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}};\n// codingIsABreeze(nodes, 'a', 'b'); ---> ['a', 'c', 'b']`}
              />
            </Col>
          </Row>
        </Box>
      );
    }

    return this.props.children;
  }
}
