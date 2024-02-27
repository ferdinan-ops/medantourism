import React from 'react'
import Routes from './src/routes/routes'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import LocationPermission from './src/services/LocationPermission'
import { AuthContextProvider } from './src/store/features/authContext'

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <LocationPermission />
    </Provider>
  )
}

export default App
