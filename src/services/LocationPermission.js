import { useEffect } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { getLocationName } from './location'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setLocation } from '../store/features/locationSlice'
import { useDispatch } from 'react-redux'

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Medan Tourism Location Permission',
      message: 'Can we access your location?',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK'
    })
    console.log('granted', granted)
    if (granted === 'granted') {
      console.log('System can use Geolocation')
      return true
    } else {
      console.log('System cannot use Geolocation')
      return false
    }
  } catch (err) {
    return false
  }
}

const LocationPermission = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getLocation = () => {
      const result = requestLocationPermission()
      result.then((res) => {
        if (res) {
          Geolocation.getCurrentPosition(
            async (position) => {
              console.log({ position })
              const coords = position.coords
              const address = await getLocationName(coords.latitude, coords.longitude)
              await AsyncStorage.setItem('location', JSON.stringify({ ...coords, address }))
              dispatch(setLocation({ ...coords, address }))
            },
            (error) => {
              console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          )
        }
      })
    }

    if (Platform.OS === 'android') {
      getLocation()
    } else {
      Geolocation.requestAuthorization()
        .then((result) => {
          if (result === 'granted') {
            getLocation()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])
}

export default LocationPermission
