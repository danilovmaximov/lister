import LoginForm from './components/LoginForm'
import OAuthLogin from './components/OAuthLogin'
import RegisterForm from './components/RegisterForm'

export function AuthPage() {
  return (
    <div className="container mx-auto grid h-svh grid-flow-row auto-rows-max grid-cols-1 gap-y-4 pt-2 text-center md:grid-cols-2 md:grid-rows-2 md:pt-16 xl:px-64">
      <LoginForm /> <RegisterForm /> <OAuthLogin />
    </div>
  )
}
