import { BrowserRouter } from 'react-router-dom'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

export const RoutingProvider = ({ children }: Props) => (
  <BrowserRouter>{children}</BrowserRouter>
)
