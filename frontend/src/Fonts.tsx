import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Bree Serif';
        src: url("./assets/BreeSerif-Regular.ttf")
      }
    `}
  />
)

export default Fonts;