interface HeadingProps {
  children: string | JSX.Element | JSX.Element[]
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className="font-serif text-4xl italic">{children}</h1>
}
