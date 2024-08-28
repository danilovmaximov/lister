import React from 'react'
import ReactDOM from 'react-dom/client'
// Default styles
import './index.css'
// Components
import { RoutingProvider } from 'providers/RoutingProvider'
import { AuthProvider } from 'providers/AuthProvider'
import { CustomRoutes } from 'pages/Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutingProvider>
      <AuthProvider>
        <CustomRoutes />
      </AuthProvider>
    </RoutingProvider>
  </React.StrictMode>
)
