import { useCallback, useEffect, useState } from 'react'
import AddCard from './AddCard'
import { getTasks, TTask } from 'api/tasks'
import { useAuth0 } from '@auth0/auth0-react'

export default function CardField() {
  const { getAccessTokenSilently } = useAuth0()
  const [cards, setCards] = useState<TTask[]>([])
  const [isDataLoading, setisDataLoading] = useState(true)

  const gettingData = useCallback(async () => {
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
    <div className="px-8">
      <AddCard />
      {isDataLoading ? <div>Loding...</div> : JSON.stringify(cards)}
    </div>
  )
}
