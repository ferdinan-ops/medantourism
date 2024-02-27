import { useGetPlaceDetailQuery } from '../../api/place.api'
import HotelPreview from '../../components/atoms/HotelPreview'
import Loading from '../../components/molecules/Loading'

const HotelPreviewPage = ({ route }) => {
  const { placeId } = route.params
  const { data: hotel, isSuccess } = useGetPlaceDetailQuery(placeId)

  if (!isSuccess) {
    return <Loading size="large" />
  }

  return (
    <HotelPreview
      // data={DATA}
      name={hotel.result.name}
      description={
        hotel.result?.editorial_summary?.overview ? hotel.result?.editorial_summary?.overview : 'No description'
      }
      price={'535,550'}
      reviews={hotel.result.reviews}
      rating={Math.round(hotel.result.rating)}
      photos={hotel.result.photos}
      phone={hotel.result.formatted_phone_number}
      // images={DATA[0].images}
    />
  )
}

export default HotelPreviewPage
