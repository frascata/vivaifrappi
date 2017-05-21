import React from 'react';
// import styled from 'styled-components';

import Img from './Img';
import NavBar from './NavBar';

import Logo from './logo.jpg';
import Menu from './Menu';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar className="uk-navbar-container" data-uk-navbar
              data-uk-sticky="top: 0">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="/">
            <Img src={Logo} alt={'Vivaifrappi'}/>
          </a>
        </div>

        <div className="uk-navbar-right uk-hidden@s">
          <a className="uk-navbar-toggle color-primary" data-uk-toggle="target: #offcanvas-nav-primary" data-uk-icon="icon: menu; ratio: 2" />
        </div>

        <div className="uk-navbar-right uk-visible@s">
          <Menu />
        </div>
      </NavBar>
    );
  }
}

Header.propTypes = {};

export default Header;
