import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Githubprovider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
      <Githubprovider>
        <App />
      </Githubprovider>
    </Auth0Provider>,
  document.getElementById('root')
);

