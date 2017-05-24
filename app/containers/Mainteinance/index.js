import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectMainteinance from './selectors';
import messages from './messages';
import Banner from '../../components/Banner/index';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';
import Image from './banner.jpg';
import MaintenanceGallery from './MaintenanceGallery';

export class Mainteinance extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Manutenzione"
          meta={[
            {name: 'description', content: 'La salute, la robustezza e l’espressione del giardino è frutto di un’accurata progettazione ma soprattutto di una manutenzione attenta, tempestiva e programmata. L’Azienda Frappi Gino e Figli è in grado di offrire, grazie ad una esperienza di 30 anni e ai macchinari efficienti e all’avanguardia, un servizio dinamico e puntuale per una serie di prestazioni: potautura di alberi e arbusti, trapianti, trattamenti fitosanitari e quanto altro sia necessario al rigoglio e alla salute del giardino.'},
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
            <MaintenanceGallery />
          </div>
        </div>
      </div>
    );
  }
}

Mainteinance.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Mainteinance: makeSelectMainteinance(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainteinance);
