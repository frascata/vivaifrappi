import React from 'react';

import Main from './Main';
import SubFooter from './SubFooter';
import { A } from './A';
import { FacebookA, GoogolePlusA, PinterestA } from './SocialA';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Main>
          <div className="uk-container">
            <div data-uk-grid>
              <div className="uk-width-1-3@m">
                <div className="uk-text-left">
                  <strong>
                    Az. Agr. Vivai Piante Frappi Gino & Figli S.S Società
                    Agricola
                  </strong>
                  <br />
                  Loc. Montecchio Vesponi 249/c<br />
                  52043 CASTIGLION FIORENTINO (AR)<br />
                </div>
              </div>

              <div className="uk-width-1-3@m">
              </div>

              <div className="uk-width-1-3@m">
                <div className="uk-text-right">
                  Tel. 0575 651102
                  <br />
                  P.I. 01265950517
                  <br />
                  <A href="mailto:info@vivaifrappi.com">info@vivaifrappi.com</A>
                  <br />
                  <div className="social">
                    <FacebookA
                      href="https://www.facebook.com/pages/Frappi-Gino-Figli-Vivai/288617147894688?fref=ts"
                      data-uk-icon="icon: facebook"
                    />
                    <GoogolePlusA
                      href="https://plus.google.com/111736918029878587968/about"
                      data-uk-icon="icon: google-plus"
                    />
                    <PinterestA
                      href="https://it.pinterest.com/elifraps/"
                      data-uk-icon="icon: pinterest"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Main>
        <SubFooter>
          <div className="uk-container">
            <div className="uk-text-center">
              © 2014 Creato da
              <A href="https://it.linkedin.com/in/francescoscatassa/">Francesco
                Scatassa</A>.
              Tutti i diritti sono riservati.
            </div>
          </div>
        </SubFooter>
      </div>
    );
  }
}

Footer.propTypes = {};

export default Footer;
