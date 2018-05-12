import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import LogoLink from '../components/logo-link';
import { logoLinks } from '../constants';
import Styles from './logo-links.css';

const cx = ClassNames.bind(Styles);

class LogoLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplayLinks: true,
    };
  }

  onBlur = () => {
    this.setState({
        hasBlurred: true
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        shouldDisplayLinks: false,
      });

      setTimeout(() => {
        this.setState({
          shouldDisplayLinks: true,
        });
      }, 1000);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <div
        className={cx('logo-links', this.state.shouldDisplayLinks && 'show')}
        onBlur={this.onBlur}
      >
        {logoLinks.map((props, key) => <LogoLink key={key} {...props} hasBlurred={this.state.hasBlurred} />)}
      </div>
    );
  }
}

export default LogoLinks;
