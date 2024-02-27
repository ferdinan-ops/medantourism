import { API_KEY, BASE_URI } from './environtment'

export const transformData = (listData, positionList) => {
  const data = transformPlaceData(listData)

  const dataFilter = data.slice(0, positionList.length).map((item, index) => {
    return {
      ...item,
      topPosition: positionList[index].topPosition,
      leftPosition: positionList[index].leftPosition
    }
  })

  return dataFilter
}

export const transformDataStation = (listData, positionList) => {
  return listData.results.slice(0, positionList.length).map((item, index) => {
    return {
      ...item,
      topPosition: positionList[index].topPosition,
      leftPosition: positionList[index].leftPosition
    }
  })
}

export const transformPlaceData = (listData) => {
  return listData.results.filter((item) => item.photos && item.opening_hours)
}

export const getImagePlace = (photoReference) => {
  return `${BASE_URI}&photoreference=${photoReference}&key=${API_KEY}`
}

export const getTimePlace = (time) => {
  const jam = time.slice(0, 2)
  const menit = time.slice(2)

  return `${jam}:${menit}`
}

export const getTimeSosial = (time) => {
  // Mengurai tanggal menggunakan objek Date
  const date = new Date(time)

  // Daftar nama hari dalam bahasa Indonesia
  const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

  // Daftar nama bulan dalam bahasa Indonesia
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]

  // Mendapatkan informasi tanggal, bulan, tahun, dan hari
  const dayOfWeek = daysOfWeek[date.getUTCDay()]
  const dayOfMonth = date.getUTCDate()
  const month = months[date.getUTCMonth()]
  const year = date.getUTCFullYear()

  // Menggabungkan semuanya untuk membuat tanggal yang diformat
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`
  return formattedDate
}
