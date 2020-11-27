import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme'

import Home from './components/Home/index'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Home />
  </ThemeProvider>,
  document.getElementById('root')
);