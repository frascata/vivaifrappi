import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../../components/H1/index';
import Text from '../../components/Text/index';
import ProductionGallery from './ProductionGallery';


const Div = styled.div`

`;

function SectionProduction() {
  return (
    <Div>
      <div className="uk-section default-wrapper">
        <div className="uk-container">
          <H1>
            <FormattedMessage {...messages.sectionProductionTitle} />
          </H1>
          <Text>
            <FormattedMessage {...messages.sectionProductionContent} />
          </Text>
          <ProductionGallery />
        </div>
      </div>
    </Div>
  );
}

export default SectionProduction;
