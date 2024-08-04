import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { authData } from '@utils/authData'
import { UserContext } from 'contexts/UserContext'

const authObj = new authData()

const router = createBrowserRouter(routes(authObj))

export default function Routing() {
  return (
    <UserContext.Provider value={authObj}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}
