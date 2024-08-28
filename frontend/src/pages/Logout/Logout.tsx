import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

export function Logout() {
  const { logout } = useAuth0()

  useEffect(() => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }, [logout])
  return undefined
}
