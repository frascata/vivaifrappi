import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

function Banner(props) {
  return (
    <div>
      <Img className={props.className} src={props.src} alt={props.alt}/>
    </div>
  );
}

Banner.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Banner;
