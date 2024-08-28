import Description from './components/Description'
import Heading from './components/Heading'
import Img from './components/Img'
import Login from './components/Login'

export function AuthPage() {
  return (
    <div className="d container mx-auto flex h-svh flex-col items-center justify-center gap-12">
      <Heading>Lister</Heading>
      <Description>
        Store all tasks in one space. Easily organize your personal to-do lists,
        and seamlessly assign tasks to family, friends, or colleagues. With
        real-time updates, reminders, and collaborative features, you'll never
        miss a deadline or forget an important task again.
      </Description>
      <Login />
      <Img />
    </div>
  )
}
