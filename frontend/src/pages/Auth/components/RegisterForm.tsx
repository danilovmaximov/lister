import { Form } from 'react-router-dom'

export default function RegisterForm() {
  return (
    <div className="gap-l row-span-3 flex flex-col gap-4 md:row-auto">
      <h1>New here?</h1>
      <Form className="flex flex-col items-center gap-4" method="post" replace>
        <input
          name="username"
          className="input w-64"
          type="text"
          placeholder="username"
        />
        <input
          name="email"
          className="input w-64"
          type="email"
          placeholder="email"
        />
        <input
          name="password"
          className="input w-64"
          type="password"
          placeholder="password"
        />
        <input
          className="input w-64"
          type="password"
          placeholder="repeat password"
        />
        <button
          className="btn w-32 bg-orange-500 text-white/90 hover:bg-orange-500/75 active:bg-orange-500/50"
          type="submit"
        >
          Register
        </button>
      </Form>
    </div>
  )
}
