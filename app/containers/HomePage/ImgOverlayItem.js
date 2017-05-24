import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Img from '../../components/Img/index';

const OverlayText = styled.div`
    background: rgba(0, 102, 52, 0.92);
    
    p {
      color: #ffffff;
      font-size: 16px;
    }
`;

const Div = styled.div`

`;

function ImgOverlayItem(props) {
  return (
    <Div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-transition-toggle">
          <Img src={props.img} alt=""/>
          <OverlayText
            className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
            <p className="uk-h4 uk-margin-remove">
              <FormattedMessage {...props.text} />
            </p>
          </OverlayText>
        </div>
        <div className="uk-card-body">
          <p className="uk-text-center color-primary">
            <FormattedMessage {...props.title} />
          </p>
        </div>
      </div>
    </Div>
  );
}

ImgOverlayItem.propTypes = {
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default ImgOverlayItem;
