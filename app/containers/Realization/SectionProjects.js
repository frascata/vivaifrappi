import React from 'react';
import Accordion from '../../components/Accordion/index';
import PgGallery from './PgGallery';
import CfGallery from './CfGallery';

function SectionProjects() {
  return (
    <div className="uk-section uk-section-small">
      <div className="uk-container">
        <Accordion>
          <ul data-uk-accordion="collapsible: false">
            <li className="uk-open">
              <div className="uk-accordion-title no-after">
                <h3>Giardino PG</h3>
                <p className="uk-text-small">Progettisti: <span
                  className="color-primary">E. Frappi</span> |
                  Loc: <span className="color-primary">Arezzo</span></p>
              </div>
              <div className="uk-accordion-content">
                <PgGallery />
              </div>
            </li>

            <li>
              <div className="uk-accordion-title no-after">
                <h3>Giardino CF</h3>
                <p className="uk-text-small">Progettisti: <span
                  className="color-primary">E. Frappi</span> |
                  Loc: <span
                    className="color-primary">Castiglion Fiorentino</span></p>
              </div>
              <div className="uk-accordion-content">
                <CfGallery />
              </div>
            </li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
}

export default SectionProjects;
