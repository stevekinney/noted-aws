import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

import Application from './Application';

import './index.css';

ReactDOM.render(
  <MDXProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </React.StrictMode>
  </MDXProvider>,
  document.getElementById('root')
);
