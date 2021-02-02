import React, { useState, useEffect } from 'react';
import { Drift } from 'react-drift';
// import { notification, Button as AntdButton } from 'antd';
// import { RocketOutlined } from '@ant-design/icons';
// import { openPopupWidget } from 'react-calendly';
// import styled from 'styled-components';

// import { getItem, setItem } from '~utils';
import { getItem } from '~utils';

import { CookieBanner } from './layout/CookieBanner';

// const openTrialEvent = () => {
//   openPopupWidget({
//     url: 'https://calendly.com/bigsondev/7-day-free-trial',
//     pageSettings: {
//       hideEventTypeDetails: true,
//       hideLandingPageDetails: true,
//     },
//   });
// };

// const BaseButton = styled(AntdButton)(() => ({
//   fontWeight: 600,
//   fontSize: '1rem',
//   padding: '1.25rem 1.75rem',
//   lineHeight: 0,
//   borderRadius: 6,
//   border: 'none',
//   color: `#FFF !important`,
//   transition: 'all 0.3s',
// }));

// const PromoButton = styled(BaseButton)(() => ({
//   backgroundColor: `#F9B060 !important`,

//   '&:hover': {
//     boxShadow: `0px 0px 5px 0px #F9B060`,
//     backgroundColor: `#F9B060!important`,
//     color: `#FFF !important`,
//   },
// }));

// const openTrialNotification = () => {
//   notification.open({
//     key: 'bigsondev-trial',
//     message: '7-Day Free Trial',
//     description: (
//       <>
//         Try out Mentorship and see how it can help to skyrocket your Frontend
//         skills. <br />
//         <br />
//         <PromoButton
//           onClick={() => {
//             notification.close('bigsondev-trial');
//             setItem('trialAcknowledged', true);
//             openTrialEvent();
//           }}
//         >
//           Apply for trial
//         </PromoButton>
//       </>
//     ),
//     icon: <RocketOutlined style={{ color: '#F9B060' }} />,
//     duration: null,
//     placement: 'bottomRight',
//     className: 'bigsondev-trial-notification',
//     onClose: () => {
//       setItem('trialAcknowledged', true);
//     },
//   });
// };

export const Banners = ({ pathname }) => {
  const areCookiesAcknowledged = getItem('cookiesAcknowledged') === 'true';
  // const isTrialAcknowledged = getItem('trialAcknowledged') === 'true';
  const shouldShowChat = ['/reach-out', '/reach-out/'].includes(pathname);
  // const shouldShowTrialNotification = [
  //   '/',
  //   '/mentorship/',
  //   '/mentorship',
  // ].includes(pathname);

  const [hasScrolled, setHasScrolled] = useState(false);
  const [showChat, setShowChat] = useState(
    areCookiesAcknowledged && shouldShowChat
  );
  // const [isTrialOpen, setIsTrialOpen] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 1000) {
      setHasScrolled(true);
    }
  };

  const handleCookieBannerClick = () => {
    setShowChat(shouldShowChat);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // TODO Enable trial at some point = jaw good?
    // if (
    //   !isTrialAcknowledged &&
    //   areCookiesAcknowledged &&
    //   hasScrolled &&
    //   shouldShowTrialNotification &&
    //   !isTrialOpen
    // ) {
    //   openTrialNotification();
    //   setIsTrialOpen(true);
    // }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled, areCookiesAcknowledged]);

  return (
    <>
      {showChat && (
        <Drift
          appId={process.env.GATSBY_DRIFT_APP_ID}
          config={{
            messages: {
              welcomeMessage: 'Hello, how can I help you?',
              awayMessage:
                'Hi there! Please, leave your question and I will answer as soon as possible.',
            },
            enableWelcomeMessage: false,
          }}
        />
      )}
      {!areCookiesAcknowledged && (
        <CookieBanner
          hasScrolled={hasScrolled}
          onClick={handleCookieBannerClick}
        />
      )}
    </>
  );
};
