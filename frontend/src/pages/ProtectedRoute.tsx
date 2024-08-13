import { withAuthenticationRequired } from '@auth0/auth0-react'

interface ProtectedRouteProps {
  component: Parameters<typeof withAuthenticationRequired>[0]
  options?: Parameters<typeof withAuthenticationRequired>[1]
}

export const ProtectedRoute = ({ component, options }: ProtectedRouteProps) => {
  const Component = withAuthenticationRequired(component, options)
  return <Component />
}
