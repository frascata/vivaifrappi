/**
 *
 * Header
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import Banner from './banner.jpg';
import HeaderLink from './HeaderLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
        </NavBar>
        <A href="http://vivaifrappi.com">
          <Img src={Banner} alt="Vivaifrappi" />
        </A>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
