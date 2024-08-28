import { Route, Routes } from 'react-router-dom'

// Pages
import Main from 'pages/Main'
import Auth from 'pages/Auth'
import Logout from 'pages/Logout'
import NoMatch from './NoMatch'
import { ProtectedRoute } from './ProtectedRoute'

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<ProtectedRoute component={<Main />} />} />
      <Route
        path="/logout"
        element={<ProtectedRoute component={<Logout />} />}
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
