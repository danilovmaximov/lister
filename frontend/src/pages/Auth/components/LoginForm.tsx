import { Form } from 'react-router-dom'

export default function LoginForm() {
  return (
    <div className="row-span-3 flex flex-col gap-4 md:row-auto md:border-r">
      <h1>Welcome back!</h1>
      <Form
        className="border-left flex flex-col items-center gap-4"
        method="post"
        replace
      >
        <input
          name="username"
          className="input w-64"
          type="text"
          placeholder="username"
        />
        <input
          name="password"
          className="input w-64"
          type="password"
          placeholder="password"
        />
        <button
          className="btn w-32 bg-emerald-500 text-white/90 hover:bg-emerald-500/75 active:bg-emerald-500/50"
          type="submit"
        >
          Login
        </button>
      </Form>
    </div>
  )
}
