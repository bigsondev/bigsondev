import React from 'react';
import { Divider, Row, Col } from 'antd';
import { Link as GatsbyLink } from 'gatsby';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  PostList,
  Link,
  Box,
} from '~components';

const TermsOfService = () => (
  <Layout>
    <SEO title="Terms Of Service" />
    <Title level={2}>Terms of Service</Title>
    <Divider />
    <Box mb={10}>
      <Row justify="center">
        <Col xs={22} xl={12}>
          <Title level={3}>Basic information</Title>
          <Paragraph>
            These Terms of Service (hereinafter: "ToS") define the rules of
            providing coaching and mentoring online services for international
            clients by BigsonDev (hereinafter: “Service”).
          </Paragraph>
          <Paragraph>
            ToS constitute a valid contract between you and BigsonDev on
            conditions stated below due to provided services.
          </Paragraph>
          <Paragraph>
            Firma informatyczna BigsonDev Adrian Bigaj is a private company
            registered in Poland (EU Tax ID: PL9452234988) Cracow (31-133), 5
            Karmelicka Street Apt 5 (hereinafter: "BigsonDev”).
          </Paragraph>
          <Paragraph>
            Accepting this ToS is necessary to access and use of Service.
          </Paragraph>
          <Paragraph>
            By using the Service, you acknowledge, accept and agree with all
            provisions of the ToS.
          </Paragraph>
          <Paragraph lastParagraph>
            Service is rendered in English only.
          </Paragraph>
          <Title level={3}>Categories of services</Title>
          <Paragraph>
            BigsonDev offers following categories of Service:
          </Paragraph>
          <PostList
            data={[
              'Mentoring - 1 (one) hour tutoring in programming via Zoom meeting followed by e-mail feedback on Client’s knowledge, proposed development path and possible progress',
              'Mock Interview - 1,5 (one and a half) hour simulation of recruitment interview via Zoom meeting aiming to verify Client’s knowledge, technical competencies and prepare for regular recruitment interview, followed by e-mail feedback on Client’s knowledge, proposed development path and possible progress',
              'Development Plan - 0,5 (half) hour meeting via Zoom aiming to set up a step plan for Client’s development path followed by e-mail feedback with the final development plan, learning path, exemplary assignments',
              'Other service - individually agreed with Client Service plan containing above matters in taylored offer',
              'Blog - regularly posted, free of charge, articles and guidelines considering services provided by BigsonDev available on BigsonDev web page',
              'Library - set of free of charge coding exercises prepared for the users of BigsonDev web page',
              'Newsletter - a free of charge bulletin issued periodically via e-mail to Clients who subscribed on BigsonDev web page',
              'Discussion  - free of charge brainstorming developers group organized via Slack which Client subscribed on BigsonDev web page may take part in',
            ]}
          />
          <Paragraph lastParagraph />
          <Title level={3}>Scheduling Meetings</Title>
          <Paragraph>
            First and following meetings are scheduled via Calendly online
            appointment scheduling software.
          </Paragraph>
          <Paragraph>
            After scheduling a meeting in Calendly and payment for Service via
            Stripe Client shall receive a Zoom meeting invitation for the time
            and date chosen in Calendly.
          </Paragraph>
          <Paragraph lastParagraph>
            During the scheduling procedure on Calendly Client shall be asked to
            fill a competence form in subject of his level of advancement, used
            technologies and projects realized.
          </Paragraph>
          <Title level={3}>Payments</Title>
          <Paragraph>
            Services rendered by BigsonDev are paid, unless otherwise is
            indicated in the ToS or in the offer.
          </Paragraph>
          <Paragraph>All prices for Services are given in USD.</Paragraph>
          <Paragraph>
            The price given for each Service is binding at the time the Client
            schedules a meeting in Calendly.
          </Paragraph>
          <Paragraph>
            The price is payable in advance, before Service, via Stripe online
            payment infrastructure.
          </Paragraph>
          <Paragraph>
            Cancellation of a meeting is free of charge up to 48 hours before
            the scheduled meeting, afterwards Client shall be charged with full
            cost of the meeting which did not take place by Client’s sole
            decision.
          </Paragraph>
          <Paragraph>
            If the meeting is not held due to the BigsonDev responsibility, the
            parties will set a new date of the meeting or the funds paid by the
            Client shall be returned within 14 days counting since the final
            decision on service cancelation.
          </Paragraph>
          <Paragraph lastParagraph>
            BigsonDev reserves the right to change the prices of services,
            introduce new services or products, carry out and cancel promotional
            campaigns on it’s own discretion.
          </Paragraph>
          <Title level={3}>Technical requirements</Title>
          <Paragraph>
            To use the Service, Client is obliged to have access to electronic
            devices that allow to view and edit various types of electronic
            content:
          </Paragraph>
          <PostList
            data={[
              'Computer, mobile phone or tablet with up-to-date system software',
              'Current software for opening and editing documents',
              'Up-to-date internet browsing software',
              'E-mail account',
              'Internet access',
            ]}
          />
          <Paragraph>
            In order to avoid potential threats, BigsonDev advises the Client to
            provide his electronic devices which are connected to the Internet
            with an antivirus program and to constantly update it.
          </Paragraph>
          <Paragraph>
            It is forbidden for the Client to provide illegal content and to use
            Service against the law, decency, ToS or personal rights of third
            parties.
          </Paragraph>
          <Paragraph>
            The costs of data transmission required to use the Service are borne
            by the Client.
          </Paragraph>
          <Paragraph lastParagraph>
            BigsonDev is not responsible for any limitations or technical
            problems in systems used by Client’s devices.
          </Paragraph>
          <Title level={3}>Copyrights</Title>
          <Paragraph>
            All materials related to Service presented or sent by BigsonDev are
            the property of BigsonDev and may not be professionally used without
            the knowledge and prior consent of the owner and for purposes not
            directly related to the Service.
          </Paragraph>
          <Paragraph>
            The use of the content provided by the BigsonDev does not mean that
            the Client acquires any intangible rights to the works or databases
            provided.
          </Paragraph>
          <Paragraph lastParagraph>
            In the event of voluntary sending by the Client materials containing
            recommendations, such as films or letters of recommendation, they
            may be used to promote the Service. By sharing such materials Client
            gives his consent for the publication of a text or image, with a
            signature, for use on the BigsonDev on it’s webpage, social media
            and other promotional channels without time and territorial
            restrictions. The Client is not entitled to remuneration of any kind
            for sharing the materials used for aforementioned purpose.
          </Paragraph>
          <Title level={3}>Reclamation</Title>
          <Paragraph>
            Each case of the Client's doubts regarding the non-performance or
            improper performance of the Service should be reported immediately
            to BigsonDev in electronic form or during the ongoing meeting.
          </Paragraph>
          <Paragraph>
            Tuition and consultancy methods are selected freely by BigsonDev,
            according to strictly defined development standards basing on
            professional experience of BigsonDev. BigsonDev does not have to
            recognize the legitimacy of changing methods chosen for Service
            rendered for Client.
          </Paragraph>
          <Paragraph>
            Each complaint is considered within 14 days from its receipt.
          </Paragraph>
          <Paragraph>
            Realization of a complaint may result in changing the proposed
            development path or either partial or full refund of paid funds
            within 14 days counting since the final decision over the complaint
            resolution.
          </Paragraph>
          <Paragraph>
            The consumer has the right to use extrajudicial means of dealing
            with complaints and claims. Detailed information on the possibility
            for the Consumer to use extrajudicial methods of dealing with
            complaints and claims and the rules of access to these procedures
            are available here:{' '}
            <Link href="https://ec.europa.eu/info/live-work-travel-eu/consumers/resolve-your-consumer-complaint_en">
              https://ec.europa.eu/info/live-work-travel-eu/consumers/resolve-your-consumer-complaint_en
            </Link>
          </Paragraph>
          <Paragraph lastParagraph>
            An online, interactive and multilingual platform for resolving
            disputes is available at{' '}
            <Link href="http://ec.europa.eu/consumers/odr">
              http://ec.europa.eu/consumers/odr
            </Link>
            .
          </Paragraph>
          <Title level={3}>Agreement duration</Title>
          <Paragraph>
            Agreement concluded between the parties is an agreement settled for
            a period of Service.
          </Paragraph>
          <Paragraph>
            Client may withdraw from the agreement within 14 days from the date
            of concluding the agreement. In order to meet the deadline for
            withdrawal from the agreement, the Client is obliged to inform
            BigsonDev about his decision via email.{' '}
          </Paragraph>
          <Paragraph>
            Client is not entitled to withdraw from the agreement, if the
            Service was already rendered partly or in whole.
          </Paragraph>
          <Paragraph lastParagraph>
            Starting the scheduled meeting shall be treated as an express
            consent to render the Service before the expiry of the 14-day
            withdrawal period.
          </Paragraph>
          <Title level={3}>Privacy and cookies</Title>
          <Paragraph>
            BigsonDev is a data controller of Client’s personal data.
          </Paragraph>
          <Paragraph lastParagraph>
            To learn more about the privacy check:{' '}
            <GatsbyLink to="/privacy-policy/">
              Privacy and cookies policy
            </GatsbyLink>
            .
          </Paragraph>
          <Title level={3}>Final provisions</Title>
          <Paragraph>
            ToS may be amended as new needs, features, technology, or legal
            requirements arise. Client shall be notified about every significant
            change and, where required, BigsonDev shall seek for Client’s
            consent.
          </Paragraph>
          <Paragraph>
            Continued use of Service after the effectiveness of ToS update shall
            be deemed to represent Client’s consent to be bound by the new ToS.
          </Paragraph>
          <Paragraph>
            Client is not entitled to transfer his rights and obligations
            arising from ToS on third parties without prior consent of
            BigsonDev.
          </Paragraph>
          <Paragraph>
            Client agrees to indemnify and hold BigsonDev harmless from and
            against any and all claims, liabilities, damages (actual and
            consequential), losses and expenses (including legal and other
            professional fees) arising from or in any way related to any third
            party claims relating to Client’s use of any of the Service, any
            violation of ToS. In the event of such claim, Client uses Service at
            his own discretion and risk.
          </Paragraph>
          <Paragraph>
            BigsonDev shall not be liable to the Client for any direct or
            indirect damage, including, but not limited to damages for loss of
            profits, data or goodwill resulting from the use of Service or
            following BigsonDev guidelines.
          </Paragraph>
          <Paragraph>
            In matters not covered by ToS, the provisions of Polish law shall
            apply.
          </Paragraph>
          <Paragraph>
            Possible disputes arising in connection with or on the occasion of
            non-performance or improper performance of the Service are referred
            to the settlement of the competent court of the seat of BigsonDev.
          </Paragraph>
        </Col>
      </Row>
    </Box>
  </Layout>
);

export default TermsOfService;
