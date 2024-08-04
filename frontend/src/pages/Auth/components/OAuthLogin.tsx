import { Form } from 'react-router-dom'

export default function OAuthLogin() {
  return (
    <div className="md:col-span-2">
      <h1>OR</h1>
      <Form method="post" replace>
        <button className="btn bg-gradient-to-r from-blue-500 via-blue-500 via-red-500 via-yellow-500 to-red-500 text-white">
          Login with G
        </button>
      </Form>
    </div>
  )
}
