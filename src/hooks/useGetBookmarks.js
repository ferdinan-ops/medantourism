import { useEffect, useState } from 'react'
import { getBookmarks } from '../services/bookmark.service'

const useGetBookmarks = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const bookmarks = await getBookmarks()
      if (bookmarks) setData(bookmarks)
      setIsLoading(false)
    }
    getData()
  }, [])

  return { data, isLoading }
}

export default useGetBookmarks
