import { RouteObject, redirect } from 'react-router-dom'

// Utils
import { authData } from '@utils/authData'

// Pages
import Main from '@pages/Main'
import Auth from '@pages/Auth'

export const routes = (authObj: authData): RouteObject[] => [
  {
    id: 'root',
    path: '/',
    children: [
      {
        index: true,
        loader: () => {
          return authObj.isLogin ? null : redirect('/login')
        },
        Component: Main,
      },
      {
        path: 'login',
        action: async ({ request }) => {
          const data = await request.formData()

          const username = data.get('username')?.toString() ?? ''

          authObj.signin(username)

          return redirect('/')
        },
        loader: () => {
          return authObj.isLogin ? redirect('/') : null
        },
        Component: Auth,
      },
    ],
  },
  {
    path: 'logout',
    async action() {
      authObj.signout()
      return redirect('/')
    },
  },
]
