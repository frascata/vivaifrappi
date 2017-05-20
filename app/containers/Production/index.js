import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';
import makeSelectProduction from './selectors';

import SectionProduction from './SectionProduction';
import SectionFieldPlant from './SectionFieldPlant';
import SectionPotPlant from './SectionPotPlant';
import Banner from '../../components/Banner/index';

import Image from './banner-min.jpg';


export class Production extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Produzione"
          meta={[
            {name: 'description', content: `
            La totalità delle specie allevate in piena terra provengono da sistemi di  riproduzione gamica e agamica che vengono seguiti e sviluppati direttamente in vivaio. Circa 1000 mq di superficie serricola sono a disposizione per la riproduzione delle piante attraverso sistemi tradizionali di moltiplicazione per talea, margotta e per seme. Grazie ad un’accurata scelta dellle piante madri e delle sementi e grazie all’utilizzo di tecniche innovative di coltivazione, le giovani piante vengono mantenute all’interno delle aree coperte per subire nel corso dei primi anni numerosi trapianti e innesti prima di essere destinate al pieno campo o alla vendita diretta in contenitore.
            `},
          ]}
        />
        <Banner src={Image} position={'bottom center'}/>
        <SectionProduction />
        <SectionFieldPlant />
        <SectionPotPlant />
      </div>
    );
  }
}

Production.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Production: makeSelectProduction(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Production);
