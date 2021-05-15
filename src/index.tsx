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
    /* overflow: hidden; */
  }

  body {
    /* overflow: hidden; */
  }

  * {
    margin: 0;
    padding: 0;
    color: white;
    font-family: arial, sans-serif;
  }
  
  #root {
    box-sizing: border-box;
    height: 100vh;
    padding: 1rem 2rem;
    background: linear-gradient(#5cc57c, #49639c);
    position: relative;
  }

  .button {
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0 -1px rgba(0,0,0,.5);
    user-select: none;
    padding: .7em 1.5em;
    border: 1px solid rgb(80,32,0);
    border-radius: 5px;
    outline: none;
    background: linear-gradient(#5cc57c, #49639c);
    box-shadow:
      0 6px rgb(44,64,107),
      0 3px 15px rgba(0,0,0,.4),
      inset 0 1px rgba(255,255,255,.3),
      inset 0 0 3px rgba(255,255,255,.5);
    transition: .2s;

    :hover {
      background: linear-gradient(#7cd59c, #49639c);
    }

    :active {
      background: linear-gradient(#7cd59c, #49639c);
      box-shadow:
        0 2px rgb(44,64,107),
        0 1px 6px rgba(0,0,0,.4),
        inset 0 1px rgba(255,255,255,.3),
        inset 0 0 3px rgba(255,255,255,.5);
      -webkit-transform: translate(0, 4px);
      transform: translate(0, 4px);
    }
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
