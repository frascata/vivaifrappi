import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAbout from './selectors';
import messages from './messages';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';
import Image from './banner-min.jpg';
import Banner from '../../components/Banner/index';

export class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Chi siamo"
          meta={[
            {
              name: 'description', content: `
            Il corpo centrale dell’azienda si trova nella pianura fertile della Val di Chiana a pochi chilometri dal centro di Castiglion Fiorentino, in una zona dedicata al settore florovivaistico da oltre 80 anni.
            `,
            },
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
