import { getDistance } from 'geolib'
const GOOGLE_API_KEY = 'AIzaSyBOjDEzc607Ek1olioyI9621YmmU1_ZTVw'

export const getLocationName = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=${GOOGLE_API_KEY}`
    )
    const data = await response.json()

    const address = {
      detail: data.results[0].formatted_address,
      city: data.results[0].address_components[5].long_name,
      location: data.results[0].geometry.location
    }

    // cth: Jl. Sisingamangaraja Gg. Titi Besi No.20, Siti Rejo I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20216, Indonesia
    // const detail = data.results[0].formatted_address

    // cth: Jalan. Sisingamangaraja
    // klo short_name: Jl. Sisingamangaraja
    // const jalan = data.results[0].address_components[1].long_name

    // // cth: Gang Titi Besi
    // const gang = data.results[0].address_components[2].long_name

    // // cth: Kecamatam Medan Kota
    // const kecamatan = data.results[0].address_components[4].long_name

    // // cth: Kota Medan
    // const kota = data.results[0].address_components[5].long_name

    // // cth: Sumatera Utara
    // const provinsi = data.results[0].address_components[6].long_name

    // // cth: indonesia
    // const negara = data.results[0].address_components[7].long_name

    // // cth: indonesia
    // const nomorPos = data.results[0].address_components[8].long_name

    return { ...address }
  } catch (error) {
    console.error(error)
  }
}

export const getDistanceInfo = (origin, destination) => {
  const distanceInMeters = getDistance(
    {
      latitude: parseFloat(origin.lat),
      longitude: parseFloat(origin.lng)
    },
    { latitude: parseFloat(destination?.lat), longitude: parseFloat(destination?.lng) }
  )
  return (distanceInMeters / 1000).toFixed(1) + ' km'
}
