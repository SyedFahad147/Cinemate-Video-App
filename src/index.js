import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
