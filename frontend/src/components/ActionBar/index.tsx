import { LanguageSwitch } from './LanguageSwitch'
import { Profile } from './Profile'

export function ActionBar() {
  return (
    <div className="flex w-full flex-row-reverse items-start gap-2 px-12 py-6">
      <Profile />
      <LanguageSwitch />
    </div>
  )
}
