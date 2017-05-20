import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectContacts from './selectors';
import Banner from '../../components/Banner/index';
import Image from './banner-min.jpg';
import Logo from './logo.jpg';

export class Contacts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Contatti"
          meta={[
            {
              name: 'description',
              content: 'Az. Agr. Vivai Piante Frappi Gino & Figli S.S Società Agricola Loc. Montecchio Vesponi 249/c 52043 CASTIGLION FIORENTINO (AR)',
            },
          ]}
        />
        <Banner src={Image}/>
        <div className="uk-section light-wrapper">
          <div className="uk-container">
            <div className="uk-card uk-card-default">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                  <div className="uk-width-auto">
                    <img className="uk-border-circle" width="40" height="40" alt=""
                         src={Logo}/>
                  </div>
                  <div className="uk-width-expand">
                    <h3 className="uk-card-title uk-margin-remove-bottom">
                      Az. Agr. Vivai Piante Frappi Gino & Figli S.S Società
                      Agricola
                    </h3>
                    <p className="uk-text-meta uk-margin-remove-top">
                      Loc. Montecchio Vesponi 249/c
                      <br/>
                      52043 CASTIGLION FIORENTINO (AR)
                      <br/>
                      P.I. 01265950517
                      <br/>
                      Tel. 0575 651102
                    </p>
                  </div>
                </div>
              </div>
              <div className="uk-card-body">
                <div className="uk-cover-container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23219.37399222143!2d11.919202!3d43.326363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6e6c109860a0ebc!2sVivai+Piante+Frappi+Gino+%26+Figli!5e0!3m2!1sit!2sit!4v1495294262860"
                          width="100%" height="600"
                          frameBorder="0"
                          allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Contacts: makeSelectContacts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
