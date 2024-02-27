import AsyncStorage from '@react-native-async-storage/async-storage'

export const getBookmarks = async () => {
  try {
    const value = await AsyncStorage.getItem('bookmarks')
    const bookmarks = JSON.parse(value)
    if (bookmarks !== null) {
      return bookmarks
    }
    return null
  } catch (error) {
    return null
  }
}

export const storeBookmarks = async (value) => {
  let bookmarks = await getBookmarks()
  let status

  if (bookmarks) {
    const index = bookmarks.findIndex((bookmark) => bookmark.id === value.id && bookmark.type === value.type)

    if (index !== -1) {
      bookmarks.splice(index, 1)
      status = false
    } else {
      bookmarks.push({ ...value })
      status = true
    }

    const jsonValue = JSON.stringify(bookmarks)
    await AsyncStorage.setItem('bookmarks', jsonValue)
  } else {
    bookmarks = [{ ...value }]
    const jsonValue = JSON.stringify(bookmarks)
    await AsyncStorage.setItem('bookmarks', jsonValue)
    status = true
  }

  return status
}
