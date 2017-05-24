import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectRealization from './selectors';
import messages from './messages';
import SectionProjects from './SectionProjects';
import Banner from '../../components/Banner/index';
import Image from './banner.jpg';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';

export class Realization extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Realizzazione"
          meta={[
            {
              name: 'description',
              content: 'L’azienda è in grado di offrire la realizzazione del vostro giardino chiavi in mano: il team di tecnici giardinieri (Amerino, Sauro e Marco) affiancati da ditte operanti nel settore dell’irrigazione, saranno in grado di restituire uno spazio esterno di qualità, coordinando il cantiere, nel rispetto delle norme di sicurezza.',
            },
          ]}
        />
        <Banner src={Image} position={'center center'}/>
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

        <SectionProjects />
      </div>
    );
  }
}

Realization.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Realization: makeSelectRealization(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Realization);
