import {injectGlobal} from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
body {
  background: #fdfdfd;
}

.color-primary {
  color: #006634;
}

.primary-wrapper {
  background: #006634;
  color: white;
}

.default-wrapper {
  background: #fdfdfd;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
  
.dark-wrapper {
  background: #f5f5f5;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.light-wrapper {
  background: #fafafa;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.black-wrapper {
  background: #393939;
  color: #d2d2d2;
  display: block;
}
`;
