/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useStore } from 'hooks'
import { IntlProvider } from 'react-intl'

import ru from 'lang/compiled/ru.json'
import en from 'lang/compiled/en.json'
import cs from 'lang/compiled/cs.json'
import es from 'lang/compiled/es.json'

console.log({ ru })

const messages = {
  ru,
  en,
  cs,
  es,
}

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

export const LangProvider = ({ children }: Props) => {
  const lang = useStore((state) => state.lang)

  return (
    /* 
    //@ts-ignore */
    <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
      {children}
    </IntlProvider>
  )
}
