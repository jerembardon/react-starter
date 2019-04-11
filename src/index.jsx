/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './../src/assets/style/theme'

import App from './containers/App/App';

ReactDOM.render( 
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
  document.getElementById('app')
);
