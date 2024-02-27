import { useEffect, useState } from 'react'
import { getDetailKoridor } from '../api/transport.api'

const useGetDetailKoridor = (koridorId) => {
  const [state, setState] = useState([])
  const [initialState, setInitialState] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    ;(async () => {
      const data = await getDetailKoridor(koridorId)
      setState(data.data.Haltes)
      setInitialState(data.data.Haltes)
      setIsSuccess(true)
    })()

    return () => {
      setState([])
      setInitialState([])
      setIsSuccess(false)
    }
  }, [])

  return { state, initialState, isSuccess, setState }
}

export default useGetDetailKoridor
