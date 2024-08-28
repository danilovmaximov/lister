interface DescriptionProps {
  children: string | JSX.Element | JSX.Element[]
}

export default function Description({ children }: DescriptionProps) {
  return (
    <h1 className="text-md max-w-60 font-sans text-stone-500 md:max-w-96">
      {children}
    </h1>
  )
}
