import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';
import PotPlantGallery from './PotPlantGallery';


const Div = styled.div`

`;

function SectionPotPlant() {
  return (
    <Div>
      <div className="uk-section dark-wrapper">
        <div className="uk-container">
          <H1>
            <FormattedMessage {...messages.sectionPotPlantTitle} />
          </H1>
          <Text>
            <FormattedMessage {...messages.sectionPotPlantContent} />
          </Text>
          <PotPlantGallery />
        </div>
      </div>
    </Div>
  );
}

export default SectionPotPlant;
