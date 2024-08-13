import { useAuth0 } from '@auth0/auth0-react'
import { testRequest } from 'api/testRequest'
import { useCallback, useState } from 'react'

export function MainPage() {
  const { user, logout, getAccessTokenSilently } = useAuth0()
  const [apiText, setApiText] = useState('')

  const testApi = useCallback(async () => {
    const token = await getAccessTokenSilently()
    const text = await testRequest(token)
    setApiText(text)
  }, [getAccessTokenSilently])

  return (
    <div className="container mx-auto text-center">
      <p>Hi, {user?.name}!</p>
      <p>This is MainPage.tsx</p>
      {apiText && <p className="font-mono font-semibold">{apiText}</p>}
      <div className="flex justify-center gap-2">
        <button
          type="submit"
          className="btn bg-blue-500 text-white"
          onClick={testApi}
        >
          Кнопка для REST-API
        </button>
        <button
          type="submit"
          className="btn bg-red-500 text-white"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      </div>
    </div>
  )
}
