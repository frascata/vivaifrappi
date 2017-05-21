import styled from 'styled-components';

const Accordion = styled.div`
  li {
    border-bottom: 1px solid #e5e5e5;
  }
  
  li:last-child {
    border-bottom: none;
  }

  .uk-accordion-title h3 {
    margin: 0;
  }
  
  .uk-accordion-title p {
    margin-top: 0;
  }

  .uk-accordion-title:after {
    content: none;
  }
  
  .uk-open>.uk-accordion-title.no-after:after {
    content: none;
  }
  
  .uk-accordion-content {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

export default Accordion;
