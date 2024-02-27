/* eslint-disable indent */
import { useSelector } from 'react-redux'
// import { getDistance } from 'geolib'
import { getDistanceInfo } from '../../services/location'

import { getImagePlace, getTimePlace } from '../../utils/tranformData'
import { useGetPlaceDetailQuery } from '../../api/place.api'
import MapDetail from '../../components/atoms/MapDetail'
import { RANDOM_IMAGE } from '../../utils/environtment'
import Loading from '../../components/molecules/Loading'
import COLORS from '../../theme/colors'

const DetailAdiMulia = ({ route }) => {
  const { placeId } = route.params
  const { data, isSuccess } = useGetPlaceDetailQuery(placeId)

  const location = useSelector((state) => state.location.location)

  // const distance = (destination) => {
  //   const distanceInMeters = getDistance(
  //     {
  //       latitude: parseFloat(location?.address?.location?.lat),
  //       longitude: parseFloat(location?.address?.location?.lng)
  //     },
  //     { latitude: parseFloat(destination?.lat), longitude: parseFloat(destination?.lng) }
  //   )
  //   return (distanceInMeters / 1000).toFixed(1) + ' km'
  // }

  return isSuccess ? (
    <MapDetail
      image={data.result.photos ? getImagePlace(data.result.photos[0].photo_reference) : `${RANDOM_IMAGE}?hotels`}
      photos={data.result.photos ? data.result.photos : [`${RANDOM_IMAGE}?hotels`]}
      name={data.result.name}
      address={data.result.formatted_address}
      leftTitle={
        data.result.current_opening_hours
          ? 'Buka Pada'
          : data.result.international_phone_number
          ? 'No. Telepon'
          : 'Alamat'
      }
      leftText={
        data.result.current_opening_hours
          ? `${getTimePlace(data.result.current_opening_hours.periods[0].open.time)} - ${getTimePlace(
              data.result.current_opening_hours.periods[0].close.time
            )} WIB`
          : data.result.international_phone_number || data.result.vicinity
      }
      phoneTitle={data.result.international_phone_number ? 'No. Telepon' : 'Jarak dari rumah Anda'}
      phone={
        data.result.international_phone_number ||
        '+- ' + getDistanceInfo(location?.address?.location, data?.result?.geometry?.location)
      }
      description={data.result?.editorial_summary?.overview ?? 'No Description'}
      destination={data.result?.geometry?.location}
    />
  ) : (
    <Loading size={70} color={COLORS.blue} isAbsolute backgroundColor={COLORS.white} />
  )
}

export default DetailAdiMulia
