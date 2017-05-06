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
      <div className="uk-position-relative">
        <nav className="uk-navbar-container" data-uk-navbar="dropbar: true">
          <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
              <li>
                <a href="#">Item</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li className="uk-nav-header">Header</li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                    <li className="uk-nav-divider"></li>
                    <li><a href="#">Item</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Item</a>
                <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                  <div className="uk-navbar-dropdown-grid uk-child-width-1-2" data-uk-grid>
                    <div>
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li className="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li className="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li className="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li className="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

          </div>

          <div className="uk-navbar-right">

            <ul className="uk-navbar-nav">
              <li>
                <a href="#">Parent</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li className="uk-nav-header">Header</li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                    <li className="uk-nav-divider"></li>
                    <li><a href="#">Item</a></li>
                  </ul>
                </div>
              </li>
            </ul>

          </div>
        </nav>

        <div className="uk-navbar-dropbar"></div>

      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
