import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Text from '../../components/Text/index';
import DsGallery from './DsGallery';
import CpGallery from './CpGallery';
import Accordion from '../../components/Accordion/index';
import FgGallery from './FgGallery';


function SectionProjects() {
  return (
      <div className="uk-section uk-section-small">
        <div className="uk-container">
          <Accordion>
            <ul data-uk-accordion="collapsible: false">
              <li className="uk-open">
                <div className="uk-accordion-title no-after">
                  <h3>Giardino CP</h3>
                  <p className="uk-text-small">Progettisti: <span
                    className="color-primary">E. Frappi, A. Pavan</span> |
                    Loc: <span className="color-primary">Arezzo</span></p>
                </div>
                <div className="uk-accordion-content">
                  <Text>
                    <FormattedMessage {...messages.cpContent} />
                  </Text>
                  <CpGallery />
                </div>
              </li>

              <li>
                <div className="uk-accordion-title no-after">
                  <h3>Giardino DS</h3>
                  <p className="uk-text-small">Progettisti: <span
                    className="color-primary">E. Frappi, A. Pavan</span> |
                    Loc: <span className="color-primary">Siena</span></p>
                </div>
                <div className="uk-accordion-content">
                  <Text>
                    <FormattedMessage {...messages.dsContent} />
                  </Text>
                  <DsGallery />
                </div>
              </li>

              <li>
                <div className="uk-accordion-title no-after">
                  <h3>Giardino FG</h3>
                  <p className="uk-text-small">Progettisti: <span
                    className="color-primary">E. Frappi, A. Pavan</span> |
                    Loc: <span className="color-primary">Siena</span></p>
                </div>
                <div className="uk-accordion-content">
                  <Text>
                    <FormattedMessage {...messages.fgContent} />
                  </Text>
                  <FgGallery />
                </div>
              </li>
            </ul>
          </Accordion>
        </div>
      </div>
  );
}

export default SectionProjects;
