import lookingImg from 'assets/looking.svg'
import { useNavigate } from 'react-router-dom'

export function NoMatch() {
  const navigate = useNavigate()
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-6">
      <h1 className="text-xl font-semibold">This page not found - 404</h1>
      <button
        className="btn bg-stone-400 text-white"
        onClick={() => navigate(-1)}
      >
        Return to previous page
      </button>
      <img src={lookingImg} className="hidden max-w-xl sm:block" />
    </div>
  )
}
