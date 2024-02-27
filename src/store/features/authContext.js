import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setLogout, setToken, setUser } from './authSlice'
import { setLocation } from './locationSlice'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const bootstrapAsync = async () => {
      const value = await AsyncStorage.getItem('token')
      const user = await AsyncStorage.getItem('userInfo')
      const location = await AsyncStorage.getItem('location')
      const userToken = JSON.parse(value)
      const userInfo = JSON.parse(user)
      const userLocation = JSON.parse(location)
      dispatch(setToken(userToken))
      dispatch(setUser(userInfo))
      dispatch(setLocation(userLocation))
    }

    bootstrapAsync()
  }, [])

  const storeToken = async (token, user) => {
    await AsyncStorage.setItem('token', JSON.stringify(token))
    await AsyncStorage.setItem('userInfo', JSON.stringify(user))
    dispatch(setToken(token))
    dispatch(setUser(user))
  }

  const removeToken = async () => {
    await AsyncStorage.setItem('token', '')
    await AsyncStorage.setItem('userInfo', '')
    dispatch(setLogout())
  }

  return <AuthContext.Provider value={{ storeToken, removeToken }}>{children}</AuthContext.Provider>
}
