/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Text from '../../components/Text/index';

import SectionServices from './SectionServices';
import SectionWhy from './SectionWhy';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <div className="uk-cover-container" data-uk-height-viewport id="video">
          <iframe data-uk-cover
                  src="https://www.youtube.com/embed/hz0DchkLqm8?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1;"
                  frameBorder="0"/>
        </div>
        <div className="uk-section primary-wrapper" id="section1">
          <div className="uk-container">
            <Text>
              <FormattedMessage {...messages.mainContent} />
            </Text>
          </div>
        </div>

        <SectionServices />
        <SectionWhy />
      </div>
    );
  }
}
