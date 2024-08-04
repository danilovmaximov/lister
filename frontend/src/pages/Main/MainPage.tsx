import { UserContext } from 'contexts/UserContext'
import { useContext } from 'react'
import { Form } from 'react-router-dom'

export function MainPage() {
  const authObj = useContext(UserContext)

  return (
    <div className="container mx-auto text-center">
      <p>{authObj?.username}, hi!</p>
      <p>This is MainPage.tsx</p>
      <Form method="post" action="/logout" replace>
        <button type="submit">Logout</button>
      </Form>
    </div>
  )
}
