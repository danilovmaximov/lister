import ActionBar from 'components/ActionBar'
import NavBar from 'components/NavBar'
import CardField from './components/CardField'

export function MainPage() {
  return (
    <div className="grid h-svh grid-cols-[200px_1fr] grid-rows-[120px_1fr]">
      <NavBar />
      <ActionBar />
      <CardField />
    </div>
  )
}
