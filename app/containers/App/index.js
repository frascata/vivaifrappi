/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import 'uikit/dist/css/uikit.min.css';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

// loads the Icon plugin
UIkit.use(Icons);


const Main = styled.div`
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header />
        <Main>
        {React.Children.toArray(this.props.children)}
        </Main>
        <Footer />
      </div>
    );
  }
}

