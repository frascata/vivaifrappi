import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';
import Home1 from './images/home_01-min.jpg';
import Produzione from './images/produzione.jpg';
import Progettazione from './images/progettazione.jpg';
import Realizzazione from './images/realizzazione.jpg';
import Manutenzione from './images/manutenzione.jpg';


const Div = styled.div`

`;

function SectionServices() {
  return (
    <Div>
      <div className="uk-cover-container uk-height-medium">
        <img src={Home1} alt="" data-uk-cover/>
      </div>

      <div className="uk-section light-wrapper" id="section2">
        <div className="uk-container">
          <H1>
            <FormattedMessage {...messages.servicesTitle} />
          </H1>
          <Text>
            <FormattedMessage {...messages.servicesContent} />
          </Text>

          <div className="uk-child-width-1-4@m" data-uk-grid
               data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
            <div>
              <div className="uk-card uk-card-body">
                <div className="uk-text-center">
                  <img src={Produzione} alt=""/>
                </div>
                <p className="uk-text-center color-primary">
                  <FormattedMessage {...messages.servicesProduction} />
                </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-body">
                <div className="uk-text-center">
                  <img src={Progettazione} alt=""/>
                </div>
                <p className="uk-text-center color-primary">
                  <FormattedMessage {...messages.servicesPlanning} />
                </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-body">
                <div className="uk-text-center">
                  <img src={Realizzazione} alt=""/>
                </div>
                <p className="uk-text-center color-primary">
                  <FormattedMessage {...messages.servicesRealization} />
                </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-body">
                <div className="uk-text-center">
                  <img src={Manutenzione} alt=""/>
                </div>
                <p className="uk-text-center color-primary">
                  <FormattedMessage {...messages.servicesMainteinance} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default SectionServices;
