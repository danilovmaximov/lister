import { useAuth0 } from '@auth0/auth0-react'
import { useState, useRef, useCallback, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

export const Profile = () => {
  const { user, logout } = useAuth0()
  const [showMenuItems, setShowMenuItems] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(
    (e: MouseEvent) => {
      if (showMenuItems && !menuRef.current?.contains(e.target as Node)) {
        setShowMenuItems(false)
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
          <FormattedMessage id="actionBar.logout" defaultMessage="Logout" />
        </div>
      )}
    </div>
  )
}
