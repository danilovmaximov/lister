import React from 'react'
import ReactDOM from 'react-dom/client'
// Default styles
import './index.css'
// Components
import { RoutingProvider, AuthProvider, LangProvider } from 'providers'

import { CustomRoutes } from 'pages/Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutingProvider>
      <AuthProvider>
        <LangProvider>
          <CustomRoutes />
        </LangProvider>
      </AuthProvider>
    </RoutingProvider>
  </React.StrictMode>
)
