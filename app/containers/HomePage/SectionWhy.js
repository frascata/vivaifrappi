import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../../components/H1/index';

import Home2 from './images/home_02-min.jpg';
import ValDiChiana from './images/val_di_chiana.jpg';
import CastiglionFiorentino from './images/castiglion_fiorentino.jpg';
import Tradizione from './images/tradizione.jpg';
import Collaborazione from './images/collaborazione.jpg';
import Qualita from './images/qualita.jpg';
import Innovazione from './images/innovazione.jpg';

import ImgOverlayItem from './ImgOverlayItem';

const Div = styled.div`

`;

function SectionWhy() {
  return (
    <Div>
      <div className="uk-cover-container uk-height-medium">
        <img src={Home2} alt="" data-uk-cover/>
      </div>
      <div className="uk-section dark-wrapper" id="section3">
        <div className="uk-container">
          <H1 className="uk-margin-bottom">
            <FormattedMessage {...messages.whyTitle} />
          </H1>

          <div
            className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small"
            data-uk-grid>

            <ImgOverlayItem img={ValDiChiana} title={messages.whyTitle1} text={messages.whyContent1}/>
            <ImgOverlayItem img={CastiglionFiorentino} title={messages.whyTitle2} text={messages.whyContent2}/>
            <ImgOverlayItem img={Tradizione} title={messages.whyTitle3} text={messages.whyContent3}/>
            <ImgOverlayItem img={Collaborazione} title={messages.whyTitle4} text={messages.whyContent4}/>
            <ImgOverlayItem img={Qualita} title={messages.whyTitle5} text={messages.whyContent5}/>
            <ImgOverlayItem img={Innovazione} title={messages.whyTitle6} text={messages.whyContent6}/>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default SectionWhy;
