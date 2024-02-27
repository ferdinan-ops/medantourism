import { useEffect, useState } from 'react'
import { getBookmarks } from '../services/bookmark.service'

const useCheckBookmark = ({ type, id }) => {
  const [isBookmarks, setIsBookmarks] = useState(false)

  useEffect(() => {
    const checkBookmarks = async () => {
      const bookmarks = await getBookmarks()
      if (bookmarks) {
        const index = bookmarks.findIndex((bookmark) => bookmark.id === id && bookmark.type === type)

        if (index !== -1) {
          setIsBookmarks(true)
        } else {
          setIsBookmarks(false)
        }
      }
    }
    checkBookmarks()
  }, [isBookmarks])

  return { isBookmarks, setIsBookmarks }
}

export default useCheckBookmark
