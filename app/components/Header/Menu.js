import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import HeaderLink from './HeaderLink';

const Ul = styled.ul`
  a {
    cursor: pointer;
  }
`;

const DivDropdown = styled.div`
  padding: 0;
    
  li {
    padding: 5px 10px 5px 15px;
    border-bottom: 1px solid #e5e5e5;
  }
  
  li:last-child {
    border-bottom: none;
  }
`;

function Menu(props) {
  const mobileMenu = <Ul
    className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
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
      <HeaderLink to="/servizi/produzione"
                  activeClassName="active">
        <FormattedMessage {...messages.production} />
      </HeaderLink>
    </li>
    <li>
      <HeaderLink to="/servizi/progettazione"
                  activeClassName="active">
        <FormattedMessage {...messages.planning} />
      </HeaderLink>
    </li>
    <li>
      <HeaderLink to="/servizi/realizzazione"
                  activeClassName="active">
        <FormattedMessage {...messages.realization} />
      </HeaderLink>
    </li>
    <li>
      <HeaderLink to="/servizi/manutenzione"
                  activeClassName="active">
        <FormattedMessage {...messages.maintenance} />
      </HeaderLink>
    </li>
    <li>
      <HeaderLink to="/contatti" activeClassName="active">
        <FormattedMessage {...messages.contacts} />
      </HeaderLink>
    </li>
  </Ul>;

  const defaultMenu = <Ul className="uk-navbar-nav">
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
      <a>
        <FormattedMessage {...messages.services} />
        <span data-uk-icon="icon: chevron-down; ratio:0.8"/>
      </a>
      <DivDropdown className="uk-navbar-dropdown">
        <ul className="uk-nav uk-navbar-dropdown-nav">
          <li><HeaderLink to="/servizi/produzione"
                          activeClassName="active">
            <FormattedMessage {...messages.production} />
          </HeaderLink></li>
          <li><HeaderLink to="/servizi/progettazione"
                          activeClassName="active">
            <FormattedMessage {...messages.planning} />
          </HeaderLink></li>
          <li><HeaderLink to="/servizi/realizzazione"
                          activeClassName="active">
            <FormattedMessage {...messages.realization} />
          </HeaderLink></li>
          <li><HeaderLink to="/servizi/manutenzione"
                          activeClassName="active">
            <FormattedMessage {...messages.maintenance} />
          </HeaderLink></li>
        </ul>
      </DivDropdown>
    </li>
    <li>
      <HeaderLink to="/contatti" activeClassName="active">
        <FormattedMessage {...messages.contacts} />
      </HeaderLink>
    </li>
  </Ul>;

  if (props.mobile) {
    return mobileMenu;
  } else {
    return defaultMenu;
  }
}

Menu.propTypes = {
  mobile: PropTypes.bool,
};

Menu.defaultProps = {
  mobile: false,
};

export default Menu;
