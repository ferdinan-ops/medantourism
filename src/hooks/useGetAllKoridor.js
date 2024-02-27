import { useEffect, useState } from 'react'
import { getAllKoridor } from '../api/transport.api'
import { transportMetrodeliData } from '../utils/dataDummy'

const useGetAllKoridor = () => {
  const [state, setState] = useState([])
  const [initialState, setInitialState] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)

  const transformData = (data) => {
    return data.map((item, index) => ({
      ...item,
      halteImage: transportMetrodeliData[index].halteImage,
      bgColor: `menu${index + 1}`
    }))
  }

  useEffect(() => {
    ;(async () => {
      const data = await getAllKoridor()
      setState(transformData(data.data).slice(0, 5))
      setInitialState(transformData(data.data).slice(0, 5))
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

export default useGetAllKoridor
