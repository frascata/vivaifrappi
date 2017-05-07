/**
 *
 * Header
 *
 */

import React from 'react';
// import styled from 'styled-components';

import {FormattedMessage} from 'react-intl';
import messages from './messages';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import Banner from './banner.jpg';
import HeaderLink from './HeaderLink';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Active</a></li>
            <li>
              <a href="#">Parent</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active"><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
                  <li><a href="#">Item</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Item</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {};

export default Header;
