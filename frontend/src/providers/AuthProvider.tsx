import {
  Auth0Provider,
  Auth0ProviderOptions,
  useAuth0,
} from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate()
  const onRedirectCallback: Auth0ProviderOptions['onRedirectCallback'] = () => {
    navigate('/')
  }

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <AuthErrorProvider>{children}</AuthErrorProvider>
    </Auth0Provider>
  )
}

const AuthErrorProvider = ({ children }: Props) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  return <>{children}</>
}
