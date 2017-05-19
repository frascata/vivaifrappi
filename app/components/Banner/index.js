import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

function Banner(props) {
  const bannerStyle= {
    backgroundImage: `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: `${props.position}`,
    height: '500px'
  };

  return (
    <div style={bannerStyle} >
    </div>
  );
}

Banner.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  position: PropTypes.string,
};

Banner.defaultProps = {
  position: 'center center'
};

export default Banner;
