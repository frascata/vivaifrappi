import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectPlanning from './selectors';
import messages from './messages';
import Banner from '../../components/Banner/index';
import Text from '../../components/Text/index';
import Image from './banner-min.jpg';
import SectionProjects from './SectionProjects';


export class Planning extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Progettazione"
          meta={[
            {
              name: 'description',
              content: 'Un giardino per donne e uomini attenti sensibili e appassionati, interessati a osservare e comprendere le dinamiche che li relazionino all’ambiente. Il progetto di giardino, curato da Elisa, ruota intorno alle esigenze della committenza nel rispetto della natura, di una fruizione fluida, intima e rasserenante dello spazio senza rinunciare alla ricerca artistica legato alla scelta dei materiali, alla composizione architettonica dei volumi e alla selezione delle specie arboree e arbustive.',
            },
          ]}
        />
        <Banner src={Image} position={'center center'}/>
        <div className="uk-section uk-section-small">
          <div className="uk-container">
            <div className="uk-flex uk-flex-center">
              <div>
                <blockquote>
                  <p className="uk-margin-small-bottom">
                    <FormattedMessage {...messages.quote} />
                  </p>
                  <footer className="color-primary">Gertrude Jekyll</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-section uk-section-small">
          <div className="uk-container">
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

Planning.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Planning: makeSelectPlanning(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
