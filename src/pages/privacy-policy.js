import React from 'react';
import { Divider, Row, Col } from 'antd';
import { Link as GatsbyLink } from 'gatsby';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Link,
  PostList,
  Text,
  Box,
} from '~components';

const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy Policy" url="https://bigsondev.com/privacy-policy/" />
    <Title level={2} align="center">
      Privacy Policy
    </Title>
    <Divider />
    <Box mb={10}>
      <Row justify="center">
        <Col xs={22} xl={12}>
          <Paragraph>
            Your privacy is important. BigsonDev recognizes trust as a very
            important part of our relationship and a key value of business
            practice, in particular concerning data privacy.
          </Paragraph>
          <Paragraph lastParagraph>
            This privacy statement explains the scope of personal data BigsonDev
            processes, how do I process it, and for what purposes. I wish that
            to be clear for you. In case of any doubts, please contact me at{' '}
            <Link href="mailto:adrian.bigaj@bigsondev.com">
              adrian.bigaj@bigsondev.com
            </Link>
            .
          </Paragraph>
          <Title level={3}>What you should know for starters?</Title>
          <Paragraph>
            This policy applies to the Service rendered by BigsonDev. Firma
            informatyczna BigsonDev Adrian Bigaj is a private company registered
            in Poland (EU Tax ID: PL9452234988) Cracow (31-133), 5 Karmelicka
            Street Apt 5 is the personal data controller.
          </Paragraph>
          <Paragraph>
            Since BigsonDev is based in Poland (EU) Client’s personal data is
            processed in accordance with the basic regulation of the Parliament
            and of the Council (EU) 2016/679 of 27 April 2016 on the protection
            of individuals on the protection of personal data and data
            protection on the protection of personal data (hereinafter "GDPR")
            one of most modern legal regulation on personal data in the world.
          </Paragraph>
          <Paragraph>
            BigsonDev takes special care to protect the interests of Client’s
            personal data.
          </Paragraph>
          <Paragraph lastParagraph>
            BigsonDev has not appointed the Personal Data Inspector, since there
            is no special category of personal data processed.
          </Paragraph>
          <Title level={3}>Where I get the personal data from?</Title>
          <Paragraph>
            You directly or indirectly provided me with the data I process.
          </Paragraph>
          <Paragraph>
            If you provided me directly with your personal data, you did this
            by:
          </Paragraph>
          <PostList
            data={[
              'scheduling a meeting on Calendly while you need to fill in the initial information form',
              'sending a message via the contact form on BigsonDev website or via e-mail',
              'subscribing for newsletter',
              'subscribing for Slack group',
              'starting a Chat',
              'feedback form',
            ]}
          />
          <Paragraph>
            If you provided me indirectly with your personal data, you did this
            by taking part in discussion or following me in social media
            accounts:
          </Paragraph>
          <PostList
            data={[
              <Text size="preNormal">
                Twitter:{' '}
                <Link size="preNormal" href="https://twitter.com/BigsonDev">
                  https://twitter.com/BigsonDev
                </Link>
              </Text>,
              <Text size="preNormal">
                Linkedin:{' '}
                <Link
                  size="preNormal"
                  href="https://www.linkedin.com/in/adrian-bigaj-282277130/"
                >
                  https://www.linkedin.com/in/adrian-bigaj-282277130/
                </Link>
              </Text>,
              <Text size="preNormal">
                Facebook:{' '}
                <Link
                  size="preNormal"
                  href="https://www.facebook.com/BigsonDev-109789784229011"
                >
                  https://www.facebook.com/BigsonDev-109789784229011
                </Link>
              </Text>,
              <Text size="preNormal">
                Instagram:{' '}
                <Link
                  size="preNormal"
                  href="https://www.instagram.com/bigsondev/"
                >
                  https://www.instagram.com/bigsondev/
                </Link>
              </Text>,
            ]}
          />
          <Paragraph lastParagraph>
            Please, be informed that data controller in the event of personal
            data shared indirectly is the administrator of the platform.
          </Paragraph>
          <Title level={3}>
            For what purpose I process your personal data?
          </Title>
          <Paragraph>
            BigsonDev processes personal data for the following purposes:
          </Paragraph>
          <PostList
            data={[
              'scheduling meetings',
              'rendering services for Clients',
              'running a newsletter',
              'running a consultation group on Slack',
              'running social media accounts',
              'conducting online chat or video chat',
              'handling inquiries via the form',
              'answering requests',
              'presentation of the offer or information or any other marketing purposes',
            ]}
          />
          <Paragraph lastParagraph />
          <Title level={3}>What personal data do I process?</Title>
          <Paragraph>
            BigsonDev processes only the personal data{' '}
            <Text underline>provided by the Client</Text>. Those are:
          </Paragraph>
          <PostList
            data={[
              'Personal identification information (Name, Surname, e-mail address, phone number, etc.)',
              'Business data (Company’s data, Employer, Position, Order Number, Tax Number, etc.)',
              'Work and education information (Education, Work experience, etc.)',
              'Information provided on Social media (Image, Family information, etc.)',
              'Information about your behavior on our website and e-mail (e.g. time of delivery, clicked links)',
              'Any additional information that you provide to us voluntary (image during Zoom call, etc.)',
              'Information you allow a third-party service (such as a social media site) to provide to us',
              'Billing details (bank account number, Tax ID)',
            ]}
          />
          <Paragraph lastParagraph />
          <Title level={3}>
            What is the legal ground for personal data processing?
          </Title>
          <Paragraph>
            The legal basis for the processing of personal data by BigsonDev is:
          </Paragraph>
          <PostList
            data={[
              'art. 6 par. 1 p. a GDPR - consent of the data subject, in the case of: contacting on Slack, via contact form or e-mail or sending a newsletter; give recommendations',
              'art. 6 par. 1 lit. b - taking steps necessary to conclude or perform the agreement based on Terms of Service: scheduling meeting, having a call, sharing feedback',
              'art. 6 par. 1 p. c GDPR - processing is necessary to fulfill legal obligations: keeping financial records and invoicing',
              'art. 6 sec. 1 lit. f - legitimate interest of the controller: presentation of the offer, information and marketing, dispute resolution.',
            ]}
          />
          <Paragraph lastParagraph />
          <Title level={3}>How and for how long do I store your data?</Title>
          <Paragraph>
            BigsonDev securely stores your personal and adopted reasonable and
            appropriate physical, technical and administrative procedures and
            measures that are designed to prevent unauthorized access or
            disclosure, maintain data accuracy, and ensure appropriate use of
            the information provided.
          </Paragraph>
          <Paragraph breakParagraph>
            The personal information you provide is stored in secured spaces or
            in computer systems located in controlled facilities, both with
            limited access. When BigsonDev transmits confidential information
            over the internet, I protect it through the use of encryption and
            other safeguards.
          </Paragraph>
          <Paragraph>
            Personal data about services shall be processed for the time
            necessary to perform the order, and then until the expiry of the
            limitation period for claims under the contract. In addition, after
            this deadline, the data may still be processed for statistical
            purposes. I am obliged to keep invoices with your personal data for
            a period of 5 years from the end of the tax year in which the tax
            obligation arose.
          </Paragraph>
          <Paragraph lastParagraph>
            Other personal data are stored by BigsonDev for the period of time
            needed to realize the purpose that I collected them for. Once the
            period expires, BigsonDev deletes personal data or anonymizes it, so
            it’s restoration is impossible.
          </Paragraph>
          <Title level={3}>Who do I share data with?</Title>
          <Paragraph>
            Please be informed that I might transfer collected data outside your
            country of residence.
          </Paragraph>
          <Paragraph>
            Please note that the data protection and other laws of countries to
            which your information may be transferred might differ as those in
            your country. Nevertheless, BigsonDev has taken steps to ensure an
            adequate level of protection of your data regardless of the country
            where it is transferred. I transfer data only to countries or
            entities assuring adequate level of protection.
          </Paragraph>
          <Paragraph>
            BigsonDev may share collected information with the following types
            of entities, including those which may be located outside your
            country of residence:
          </Paragraph>
          <Paragraph>
            <Text strong>Service Providers and Suppliers</Text>. BigsonDev
            retains service providers and suppliers to manage or support
            professional services and solutions offered to Clients. These
            providers and suppliers may be located in the EU or other locations
            outside the EU. These parties may use the information solely in
            conjunction with the specific services they provide for BigsonDev
            which serves the Clients. I cooperate only with trustworthy
            contractors that provide sufficient guarantees and implement
            appropriate technical and organizational measures in such a manner
            that processing ensures protection of personal data I transfer. I
            have taken steps to ensure an adequate level of protection for your
            data irrespective of the country where the data is transferred, such
            as by entering into written agreements with those parties which bind
            them to that commitment. My cooperation with contractors from
            countries outside EU borders is based on Standard Contractual
            Clauses confirmed by the EU Court of Justice. BigsonDev cooperates
            only with contractors compliant with high standards of privacy
            compliance.
          </Paragraph>
          <Paragraph>
            <Text strong>For Legal Purposes</Text>. I may disclose information
            to third parties for legal or compliance purposes and
            responsibilities, such as to protect the security of the website, to
            help detect fraud or fulfill legal obligations to tax authorities. I
            may also use collected data for the purpose of managing any kind of
            dispute, including litigation.
          </Paragraph>
          <Paragraph lastParagraph>
            <Text strong>Otherwise with Your Consent</Text>. In addition to the
            sharing described or permitted by this Privacy Policy, I may share
            information about you with third parties only if you provide consent
            to such sharing.
          </Paragraph>
          <Title level={3}>What are your data protection rights?</Title>
          <Paragraph>
            <Text strong>The right to access</Text> – you have the right to
            request a copy of your personal data that I process. I may charge a
            small fee for this service.
          </Paragraph>
          <Paragraph>
            <Text strong>The right to rectification</Text> – you have the right
            to request to correct any information I process about you, that you
            believe to be inaccurate. You also have the right to request to
            complete any incomplete data.
          </Paragraph>
          <Paragraph>
            <Text strong>The right to erasure</Text> – you have the right to
            request erasure of your personal data. The right is not absolute and
            only applies in certain circumstances.
          </Paragraph>
          <Paragraph>
            <Text strong>The right to restrict processing</Text> – you have the
            right to request for restricting of the scope of your personal data
            that I are processing. The right is not absolute and only applies in
            certain circumstances.
          </Paragraph>
          <Paragraph>
            <Text strong>The right to object processing</Text> – you have the
            right to object to processing your data. The right is not absolute
            and only applies in certain circumstances.
          </Paragraph>
          <Paragraph>
            <Text strong>The right to withdraw consent</Text> – you have the
            right to withdraw your consent for processing at any time.
            Withdrawal of consent does not affect the processing of personal
            data carried out before the withdrawal.
          </Paragraph>
          <Paragraph breakParagraph>
            <Text strong>The right to data portability </Text> – you have the
            right to request to transfer the data that I have collected to
            another organization or directly to you. The right is not absolute
            and only applies in certain circumstances.
          </Paragraph>
          <Paragraph>
            In reference to the right to withdraw consent, please be informed
            that you have the right to opt-out from email, Slack or any other
            communication at any time by using the unsubscribe link or button in
            any of our commercial messages to you. If you elect to opt-out of
            communication from, I shall stop using your personal data to contact
            you for commercial purposes and will no longer provide such
            services.
          </Paragraph>
          <Paragraph breakParagraph>
            Please be informed that in order to protect your privacy and
            security, I may take reasonable steps to verify your identity before
            granting access to your data.
          </Paragraph>
          <Paragraph lastParagraph>
            If you make a request considering aforementioned rights, please be
            informed that I have 30 days to respond to you and if the request is
            complexed I can extend the period for another 2 months. If you would
            like to exercise one of this rights, please contact us at our
            e-mail:{' '}
            <Link href="mailto:adrian.bigaj@bigsondev.com">
              adrian.bigaj@bigsondev.com
            </Link>{' '}
            or via the <GatsbyLink to="/reach-out/">Reach Out</GatsbyLink> form.
          </Paragraph>
          <Title level={3}>Do I profile your data?</Title>
          <Paragraph>
            From time to time I might use tools to track users’ behavior. I
            implement those solutions for marketing purposes and to improve the
            services.
          </Paragraph>
          <Paragraph lastParagraph>
            Those tools are used to better understand your needs and to optimize
            our website in terms of your experience related to using it, which
            is our legitimate interest. The tools registers every visitor to the
            website and allows me to record the traffic on the website, as well
            as generate the so-called heat maps. Be informed, that tools I use
            do not have access to information that allows to identify you.
          </Paragraph>
          <Title level={3}>How To Contact BigsonDev?</Title>
          <Paragraph>
            If you have comments or questions about our Privacy Policy, or any
            concerns or a complaint regarding collection and use of your
            personal data or a possible breach of your privacy, please email us
            at{' '}
            <Link href="mailto:adrian.bigaj@bigsondev.com">
              adrian.bigaj@bigsondev.com
            </Link>
            .
          </Paragraph>
          <Paragraph lastParagraph>
            I shall aim to ensure that concerns are resolved in a timely and
            appropriate manner.
          </Paragraph>
          <Title level={3}>How to contact the appropriate authority?</Title>
          <Paragraph lastParagraph>
            Should you wish to report a complaint or if you feel that BigsonDev
            has not addressed your concern or request in a satisfactory manner,
            you may contact the Information Commissioner’s Office in your
            country of residence.
          </Paragraph>
          <Title level={3}>What about cookies?</Title>
          <Paragraph>
            BigsonDev website, like almost all other websites, uses cookies and
            similar technologies to support use of the website you visit.
          </Paragraph>
          <Paragraph>
            Some of the cookies that are used on BigsonDev website are deleted
            after the end of the browser session, i.e. after closing it
            (so-called session cookies). Other cookies are stored on your end
            device and allow my website to recognize your browser the next time
            you visit it (persistent cookies).
          </Paragraph>
          <Paragraph breakParagraph>See below for more details.</Paragraph>
          <Title level={4} transform="capitalize">
            What are cookies?
          </Title>
          <Paragraph breakParagraph>
            Cookies are small pieces of data sent from a website and stored on a
            website user's web browser while a user is browsing a website. When
            the user browses the same website in the future, the data stored in
            the cookies can be retrieved by the website to notify the website of
            the user's previous activity. Cookies do not harm your device in any
            way, and are usually automatically deleted after a certain period of
            time.
          </Paragraph>
          <Title level={4} transform="capitalize">
            Does BigsonDev website use cookies?
          </Title>
          <Paragraph>
            Yes. Like virtually all websites, I use certain types of
            technologies which are cookies or technologies cookies alike on the
            websites, which helps the site to work more effectively and which
            makes your user experience more customer-friendly. For example, by
            using cookies, I am able to identify users who return to the site
            and evaluate how many users visited the site and whether there were
            any technical problems in loading pages or navigating through our
            site. It’s helpful.
          </Paragraph>
          <Paragraph>
            I am also able to learn what parts of the sites are the most
            interesting or valuable to the users, and can monitor overall
            interest in the website and service and deliver much more
            interesting content.
          </Paragraph>
          <Paragraph breakParagraph>
            The use of cookies also lets me spot technical problems with the
            site so I can correct them right away. This, in turn, helps us
            upgrade our websites and improve our offerings for our visitors.
          </Paragraph>
          <Title level={4} transform="capitalize">
            Am I required to accept cookies to use BigsonDev websites?
          </Title>
          <Paragraph>
            No. You can disable the use of cookies by turning off the cookie
            function in your browser.
          </Paragraph>
          <Paragraph breakParagraph>
            However, some portions of our site as well as most other sites, will
            not work properly if you choose to do so. Choose wisely.
          </Paragraph>
          <Title level={4} transform="capitalize">
            What information do you receive about me through cookies?
          </Title>
          <Paragraph breakParagraph>
            None. BigsonDev website uses cookies and similar technologies only
            for statistics and maintenance reasons described above. Non of the
            technologies used can identify you as an individual.
          </Paragraph>
          <Title level={4} transform="capitalize">
            How do I opt-out (withdraw consent) to your use of cookies or
            similar web technologies?
          </Title>
          <Paragraph>
            You can set your web browser to prevent the use of cookies. If so,
            you can still browse BigsonDev site but may not be able to use part
            of its features.
          </Paragraph>
          <Paragraph lastParagraph>
            Withdrawing your consent for these cookies disables them so they no
            longer perform the functions mentioned above. Please note that the
            disabled code for these cookies will still be present on your
            computer or other device and the cookies will be listed in your
            browser, unless you also remove them from your browser using your
            browser settings; instructions may be found at{' '}
            <Link href="https://www.aboutcookies.org">
              www.aboutcookies.org
            </Link>
            .
          </Paragraph>
          <Title level={3}>What else I would like you to know?</Title>
          <Title level={4} transform="capitalize">
            Changes To This Privacy Statement
          </Title>
          <Paragraph breakParagraph>
            If I modify Privacy Policy, I shall post the revised statement on
            this subpage. If I make significant changes to the Policy that may
            effect on your rights or obligations, I might notify you by other
            means, such as posting a notice on social media, etc.
          </Paragraph>
          <Title level={4} transform="capitalize">
            Privacy policy of other websites
          </Title>
          <Paragraph>
            BigsonDev might contain links to other websites or online tools.
            This privacy statement and cookies policy applies only to BigsonDev
            website and service. If you open a link to another website or online
            tool, I encourage you to get familiar with those policies.
          </Paragraph>
        </Col>
      </Row>
    </Box>
  </Layout>
);

export default PrivacyPolicy;
