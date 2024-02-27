import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthStackScreen from './AuthStack'
import LandingStackScreen from './LandingStack'

import HomeStackScreen, { SearchStackScreen, HomeNavStackScreen } from './HomeStack'

const Stack = createNativeStackNavigator()

const Routes = () => {
  const token = useSelector((state) => state.auth.token)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingStackScreen" component={LandingStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchStackScreen" component={SearchStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeNavStackScreen" component={HomeNavStackScreen} options={{ headerShown: false }} />
        {!token && <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} options={{ headerShown: false }} />}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
