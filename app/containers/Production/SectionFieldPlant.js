import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';
import FieldPlantGallery from './FieldPlantGallery';

const Div = styled.div`
`;

function SectionFieldPlant() {
  return (
    <Div>
      <div className="uk-section light-wrapper">
        <div className="uk-container">
          <H1>
            <FormattedMessage {...messages.sectionFieldPlantTitle} />
          </H1>
          <Text>
            <FormattedMessage {...messages.sectionFieldPlantContent1} />
            <ul className="uk-list uk-list-bullet">
              <li>
                <FormattedMessage {...messages.sectionFieldPlantContentLi2} />
              </li>
              <li>
                <FormattedMessage {...messages.sectionFieldPlantContentLi3} />
              </li>
              <li>
                <FormattedMessage {...messages.sectionFieldPlantContentLi4} />
              </li>
              <li>
                <FormattedMessage {...messages.sectionFieldPlantContentLi5} />
              </li>
              <li>
                <FormattedMessage {...messages.sectionFieldPlantContentLi6} />
              </li>
              <li>
                <FormattedMessage {...messages.sectionFieldPlantContentLi7} />
              </li>
            </ul>
            <FormattedMessage {...messages.sectionFieldPlantContent2} />
          </Text>
          <FieldPlantGallery />
        </div>
      </div>
    </Div>
  );
}

export default SectionFieldPlant;
