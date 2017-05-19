import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectNurseryPlant from './selectors';
import messages from './messages';
import Banner from '../../components/Banner/index';
import H1 from '../../components/H1/index';
import Image from './vivaio-min.jpg';
import Text from '../../components/Text/index';
import NurseryGallery from './NurseryGallery';

export class NurseryPlant extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Il vivaio"
          meta={[
            {
              name: 'description', content: `
            Il vivaio offre una vasta gamma di varietà di specie arboree e arbustive, caducifoglie e sempreverdi, soprattutto autoctone o comunque naturalizzate, allevate in pieno campo per poi essere trasferite in vaso prima della distribuzione. Tutte le piante presenti in vivaio sono il risultato di una lunga e attente ricerca che si basa sul connubio tra tradizione vivaistica e innovazione delle tecniche e dei materiali utilizzati, partendo comunque da sementi certificate o da piante madri accuratamente selezionate.
            `,
            },
          ]}
        />
        <Banner src={Image} position={'bottom center'}/>

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

        <div className="uk-section uk-section-xsmall">
          <div className="uk-container">
            <NurseryGallery />
          </div>
        </div>
      </div>
    );
  }
}

NurseryPlant.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NurseryPlant: makeSelectNurseryPlant(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NurseryPlant);
