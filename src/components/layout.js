/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout as AntdLayout, Menu, Typography, Card, Row, Col } from 'antd';
import styled from 'styled-components';

import 'antd/dist/antd.css';

const { Header, Content: AntdContent, Footer } = AntdLayout;
const { Title: AntdTitle } = Typography;
const { Meta } = Card;

const Container = styled.div({
  maxWidth: 1200,
  margin: '0 auto',
});

const FlexWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Logo = styled.div({
  color: '#FFF',
});

const Content = styled(AntdContent)({
  background: '#FFF',
});

const Title = styled(AntdTitle)({
  marginTop: 20,
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <AntdLayout>
      <Header>
        <Container>
          <FlexWrapper>
            <Logo>BIGSONDEV - LIBRARY</Logo>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">Profile</Menu.Item>
            </Menu>
          </FlexWrapper>
        </Container>
      </Header>
      <Content>
        <Container>
          <Title>Hi, Adrian</Title>
          <Row gutter={16}>
            <Col span={8}>
              <Card>
                <Meta
                  title="Junior Quiz"
                  description="In this quiz you can test your knowledge as a Junior Frontend Developer"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Meta
                  title="Regular Quiz"
                  description="In this quiz you can test your knowledge as a Regular Frontend Developer"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Meta
                  title="Senior Quiz"
                  description="In this quiz you can test your knowledge as a Senior Frontend Developer"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </Content>
    </AntdLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
