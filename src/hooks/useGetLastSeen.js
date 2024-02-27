import { useEffect, useState } from 'react'
import { getLastSeen } from '../services/lastSeen.service'

const useGetLastSeen = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const lastSeen = await getLastSeen()
      if (lastSeen) setData(lastSeen)
      setIsLoading(false)
    }
    getData()
  }, [])

  return { data, isLoading }
}

export default useGetLastSeen
