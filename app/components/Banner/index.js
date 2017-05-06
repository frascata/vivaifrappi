/**
 *
 * Banner
 *
 */

import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

function Banner(props) {
  return (
    <div>
      <Img src={props.image}/>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;
