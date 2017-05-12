/*
 *
 * About
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAbout from './selectors';
import messages from './messages';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';
import Image from './banner.jpg';
import Banner from '../../components/Banner/index';

export class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="About"
          meta={[
            {name: 'description', content: 'Description of About'},
          ]}
        />
        <Banner src={Image} alt={'Vivaio'}/>
        <div className="uk-section">
          <div className="uk-container">
            <H1>
              <FormattedMessage {...messages.title} />
            </H1>
            <Text>
              <FormattedMessage {...messages.content} />
            </Text>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  About: makeSelectAbout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
