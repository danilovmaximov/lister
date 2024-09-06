import { useCallback, useEffect, useState } from 'react'
import AddCard from './AddCard'
import { getTasks, TTask } from 'api/tasks'
import { useAuth0 } from '@auth0/auth0-react'
import { Card } from './Card'
import { Loading } from 'components'

export default function CardField() {
  const { getAccessTokenSilently } = useAuth0()
  const [cards, setCards] = useState<TTask[]>([])
  const [isDataLoading, setisDataLoading] = useState(true)

  const gettingData = useCallback(async () => {
    setisDataLoading(true)
    const token = await getAccessTokenSilently()
    const data = await getTasks(token)
    if (typeof data == 'object') {
      setisDataLoading(false)
      setCards(data.tasks)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    gettingData()
  }, [gettingData])

  return (
    <div className="flex flex-col gap-5 px-8">
      {isDataLoading ? (
        <Loading />
      ) : (
        <>
          <AddCard />
          {cards.map(({ id, label, text, due_date }) => (
            <Card id={id ?? 0} label={label} text={text} due_date={due_date} />
          ))}
        </>
      )}
    </div>
  )
}
