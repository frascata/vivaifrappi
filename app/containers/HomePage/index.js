/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import H1 from "../../components/H1/index";
import Text from "../../components/Text/index";
import Video from './intro_video.mp4';
import Vivaio from './images/vivaio.jpg';
import Home1 from './images/home_01.jpg';
import Home2 from './images/home_02.jpg';
import Produzione from './images/produzione.png';
import Progettazione from './images/progettazione.png';
import Realizzazione from './images/realizzazione.png';
import Manutenzione from './images/manutenzione.png';
import ValDiChiana from './images/val_di_chiana.jpg';
import P from '../../components/P/index';
import OverlayText from './OverlayText';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderWhySection() {
    const items = [
      {
        title: 'Val di Chiana',
        img: ValDiChiana,
        overlay: 'perché le terre dove vengono coltivate le nostre piante in seguito all’impaludamento sono state restituite all’agricoltura come substrato fertile dopo le bonifiche medicee della fine del \'700'
      },


    ];
    return (
      <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" data-uk-grid>
        {items.map((item, index) => {
          return <div key={index}>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top uk-transition-toggle">
                <img src={item.img} alt=""/>
                <OverlayText
                  className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                  <p className="uk-h4 uk-margin-remove">{item.overlay}</p>
                </OverlayText>
              </div>

              <div className="uk-card-body">
                <p className="uk-text-center">{item.title}</p>
              </div>
            </div>
          </div>;
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="uk-cover-container" data-uk-height-viewport id="video">
          <video data-uk-cover autoPlay loop muted>
            <source src={Video} type="video/mp4"/>
          </video>
        </div>

        <div className="uk-section default-wrapper" id="section1">
          <div className="uk-container">
            <Text>
              <FormattedMessage {...messages.mainContent} />
            </Text>
          </div>
        </div>
        <div className="uk-cover-container uk-height-medium">
          <img src={Home1} alt="" data-uk-cover/>
        </div>

        <div className="uk-section light-wrapper" id="section2">
          <div className="uk-container">
            <H1>Che cosa facciamo</H1>
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
                  <p className="uk-text-center">Produzione di piante ornamentali</p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-body">
                  <div className="uk-text-center">
                    <img src={Progettazione} alt=""/>
                  </div>
                  <p className="uk-text-center">Progettazione di giardini</p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-body">
                  <div className="uk-text-center">
                    <img src={Realizzazione} alt=""/>
                  </div>
                  <p className="uk-text-center">Realizzazione di spazi verdi pubblici e privati</p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-body">
                  <div className="uk-text-center">
                    <img src={Manutenzione} alt=""/>
                  </div>
                  <p className="uk-text-center">Manutenzione</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-cover-container uk-height-medium">
          <img src={Home2} alt="" data-uk-cover />
        </div>
        <div className="uk-section dark-wrapper" id="section3">
          <div className="uk-container">
            <H1 className="uk-margin-bottom">Perchè scegliere Vivaifrappi</H1>

            {this.renderWhySection()}

          </div>
        </div>
        <div className="uk-position-center-right uk-position-medium uk-position-fixed">
          <ul className="uk-dotnav uk-dotnav-vertical">
            <li className="uk-active">
              <a href="#video">Video</a>
            </li>
            <li>
              <a href="#section1">Section 1</a>
            </li>
            <li>
              <a href="#section2">Section 2</a>
            </li>
            <li>
              <a href="#section3">Section 3</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
