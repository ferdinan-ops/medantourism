import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

const useGetIsFirtsOpen = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(true)

  useEffect(() => {
    const checkFirstOpen = async () => {
      const value = await AsyncStorage.getItem('isFirstOpen')
      const isFirstOpen = JSON.parse(value)
      if (isFirstOpen !== null) {
        setIsFirstOpen(isFirstOpen)
      }
    }
    checkFirstOpen()
  }, [])

  return isFirstOpen
}

export default useGetIsFirtsOpen
