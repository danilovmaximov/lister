import { Route, Routes } from 'react-router-dom'

// Pages
import Main from '@pages/Main'
import Auth from '@pages/Auth'
import { ProtectedRoute } from './ProtectedRoute'

export const CustomRoutes = () => (
  <Routes>
    <Route path="/" Component={Auth} />
    <Route path="/main" element={<ProtectedRoute component={Main} />} />
  </Routes>
)
