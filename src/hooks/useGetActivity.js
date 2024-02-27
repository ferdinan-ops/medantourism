import { useEffect, useState } from 'react'
import { getLastSeen } from '../services/lastSeen.service'
import { getBookmarks } from '../services/bookmark.service'

const useGetActivity = ({ typeDestination, typeActivity }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      let allData = []
      if (typeActivity === 'bookmark') {
        allData = await getBookmarks()
      } else {
        allData = await getLastSeen()
      }
      const travelBookmarks = allData.filter((bookmark) => bookmark.type === typeDestination)
      setData(travelBookmarks)
      setIsLoading(false)
    }

    getData()
  }, [typeActivity, typeDestination])

  return { data, isLoading }
}

export default useGetActivity
