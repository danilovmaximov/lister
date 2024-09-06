import { useStore } from 'hooks'
import { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import { useIntl } from 'react-intl'

const flagsEmoji: Record<string, string> = {
  ru: '🇷🇺',
  en: '🇬🇧',
  cs: '🇨🇿',
  es: '🇪🇸',
}

export const LanguageSwitch = () => {
  const { locale } = useIntl()
  const setLang = useStore((state) => state.setLang)
  const [showMenuItems, setShowMenuItems] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const selectedFlag = useMemo(() => flagsEmoji?.[locale] ?? '🇬🇧', [locale])

  const closeMenu = useCallback(
    (e: MouseEvent) => {
      if (showMenuItems && !menuRef.current?.contains(e.target as Node)) {
        setShowMenuItems(false)
      }
    },
    [showMenuItems]
  )

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu)

    return () => document.removeEventListener('mousedown', closeMenu)
  }, [closeMenu])

  console.log({
    demo: Object.entries(flagsEmoji)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, flag]) => flag !== selectedFlag),
  })

  return (
    <div
      className="relative flex cursor-pointer items-center gap-6 rounded-lg px-2 py-1 text-2xl duration-300 hover:bg-stone-100"
      onClick={() => setShowMenuItems(true)}
      ref={menuRef}
    >
      <div>{selectedFlag}</div>
      {showMenuItems && (
        <div className="absolute inset-y-12 right-0 flex h-fit flex-col gap-2">
          {Object.entries(flagsEmoji)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, flag]) => flag !== selectedFlag)
            .map(([code, flag]) => (
              <div
                key={code}
                className="cursor-pointer rounded-lg bg-stone-100 px-2 py-1"
                onClick={() => setLang(code)}
              >
                {flag}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
