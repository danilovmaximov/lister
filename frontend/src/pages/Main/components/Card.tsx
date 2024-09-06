/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useStore } from 'hooks'
import moment from 'moment'
import { useMemo } from 'react'

interface CardProps {
  id: number
  label: string
  text: string
  due_date: string
}

export const Card = ({ id, label, text, due_date }: CardProps) => {
  const lang = useStore((state) => state.lang)

  const fromNow = useMemo(
    () => moment(due_date).locale(lang).fromNow(),
    [due_date, lang]
  )

  return (
    <div className="rounded-md bg-stone-300 px-4 py-2">
      <div>{label}</div>
      <div>{fromNow}</div>
    </div>
  )
}
