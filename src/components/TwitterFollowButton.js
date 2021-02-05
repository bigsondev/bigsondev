import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TwitterFollowButton extends Component {
  static propTypes = {
    twitterAccount: PropTypes.string.isRequired,
    showLarge: PropTypes.bool,
    showName: PropTypes.bool,
    showCount: PropTypes.bool,
  };

  static defaultProps = {
    showLarge: true,
    showName: false,
    showCount: false,
  };

  render() {
    const { twitterAccount, showLarge, showName, showCount } = this.props;
    const size = showLarge ? 'large' : 'default';
    return (
      <a
        href={`https://twitter.com/${twitterAccount}?ref_src=twsrc%5Etfw`}
        className="twitter-follow-button"
        data-size={size}
        data-show-screen-name={showName}
        data-show-count={showCount}
      />
    );
  }
}
