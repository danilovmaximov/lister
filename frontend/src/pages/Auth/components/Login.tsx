import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="md:col-span-2">
      <button
        className="btn bg-gradient-to-r from-blue-500 to-green-500 text-white"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  )
}
