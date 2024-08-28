import { FaPlus } from 'react-icons/fa'
export default function AddCard() {
  return (
    <div
      className="hover:bg group flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-stone-300 px-12 py-12 duration-300 ease-in-out hover:border-stone-50 hover:bg-stone-200"
      onClick={() => {
        alert('Add new task!')
      }}
    >
      <FaPlus className="size-6 duration-200 ease-in-out group-hover:scale-150" />
    </div>
  )
}
