import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="row-span-2 flex max-w-[16rem] flex-col gap-10 px-12 py-6">
      <h3 className="font-serif text-4xl italic">Lister</h3>
      <Link to="/personal">Personal</Link>
      <Link to="/work">Work</Link>
    </div>
  )
}
