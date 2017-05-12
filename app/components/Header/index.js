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

import Logo from './logo.jpg';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar className="uk-navbar-container" data-uk-navbar
              data-uk-sticky="top: 0">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="#">
            <Img src={Logo} alt={'Vivaifrappi'}/>
          </a>
          <ul className="uk-navbar-nav uk-navbar-center">
            <li>
              <HeaderLink to="/" activeClassName="active">
                <FormattedMessage {...messages.home}  />
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="/chi-siamo" activeClassName="active">
                <FormattedMessage {...messages.about} />
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="/vivaio" activeClassName="active">
                <FormattedMessage {...messages.nursery} />
              </HeaderLink>
            </li>
            <li>
              <a href="#">
                <FormattedMessage {...messages.services} />
              </a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li><HeaderLink to="/services/produzione"
                                  activeClassName="active">
                    <FormattedMessage {...messages.production} />
                  </HeaderLink></li>
                  <li><HeaderLink to="/services/progettazione"
                                  activeClassName="active">
                    <FormattedMessage {...messages.planning} />
                  </HeaderLink></li>
                  <li><HeaderLink to="/services/realizzazione"
                                  activeClassName="active">
                    <FormattedMessage {...messages.realization} />
                  </HeaderLink></li>
                  <li><HeaderLink to="/services/manutenzione"
                                  activeClassName="active">
                    <FormattedMessage {...messages.maintenance} />
                  </HeaderLink></li>
                </ul>
              </div>
            </li>
            <li>
              <HeaderLink to="/contatti" activeClassName="active">
                <FormattedMessage {...messages.contacts} />
              </HeaderLink>
            </li>
          </ul>
        </div>
      </NavBar>
    );
  }
}

Header.propTypes = {};

export default Header;
