import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider 
    domain="dev-sofj66hiz7axir1x.us.auth0.com"
    clientId="jiVspCExZ45COFRDevYwL4ENMu8jNDBb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
  </StrictMode>,
)
