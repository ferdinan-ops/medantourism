import { useEffect, useState } from 'react'
import { getBookmarks } from '../services/bookmark.service'

const useGetBookmark = (type) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTravelBookmarks = async () => {
      setIsLoading(true)
      const bookmarks = await getBookmarks()
      const travelBookmarks = bookmarks.filter((bookmark) => bookmark.type === type)
      setData(travelBookmarks)
      setIsLoading(false)
    }
    getTravelBookmarks()
  }, [])

  return { data, isLoading }
}

export default useGetBookmark
