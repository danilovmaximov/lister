export function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      <div className="animate-load-buble-1 size-6 rounded-full bg-teal-200" />
      <div className="animate-load-buble-2 size-6 rounded-full bg-sky-200" />
      <div className="animate-load-buble-3 size-6 rounded-full bg-fuchsia-200" />
      <div className="animate-load-buble-4 size-6 rounded-full bg-rose-200" />
    </div>
  )
}
