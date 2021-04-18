import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  #root {
    box-sizing: border-box;
    height: 100vh;
    padding: 1rem 2rem;
    background: linear-gradient(#5cc57c, #49639c);
  }
`;

// ---------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
