import { useAuth0 } from '@auth0/auth0-react'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function ActionBar() {
  const { user, logout } = useAuth0()
  const [showMenuItems, setShowMenuItems] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(
    (e: MouseEvent) => {
      if (showMenuItems && !menuRef.current?.contains(e.target as Node)) {
        console.log({ menu: menuRef.current, targer: e.target })
        setShowMenuItems(false)
        console.log('close')
      }
    },
    [showMenuItems]
  )

  const appLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } })

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu)

    return () => document.removeEventListener('mousedown', closeMenu)
  }, [closeMenu])

  return (
    <div className="flex w-full flex-row-reverse items-start px-12 py-6">
      <div
        className="relative flex cursor-pointer items-center gap-6 rounded-lg px-2 py-1 duration-300 hover:bg-stone-100"
        onClick={() => setShowMenuItems(true)}
        ref={menuRef}
      >
        <div>{user?.name || 'hz kto'}</div>
        <img
          className="size-8 rounded-full"
          src={user?.picture}
          alt="user avatar"
        />
        {showMenuItems && (
          <div
            className="absolute inset-y-12 right-0 h-fit rounded-lg bg-stone-100 px-2 py-1"
            onClick={appLogout}
          >
            Logout
          </div>
        )}
      </div>
    </div>
  )
}
