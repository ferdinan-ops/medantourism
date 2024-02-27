import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from '../view/landing/LandingPage'
import OnBoardingPage from '../view/landing/OnBoardingPage'
import TransitionPage from '../view/landing/TransitionPage'
import useGetIsFirtsOpen from '../hooks/useGetIsFirtsOpen'

const LandingStack = createNativeStackNavigator()

const LandingStackScreen = () => {
  const isFirstOpen = useGetIsFirtsOpen()

  return (
    <LandingStack.Navigator>
      <LandingStack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          headerShown: false
        }}
      />
      <LandingStack.Screen
        name="TransitionPage"
        component={TransitionPage}
        options={{
          headerShown: false
        }}
      />
      {isFirstOpen && (
        <LandingStack.Screen
          name="OnBoardingPage"
          component={OnBoardingPage}
          options={{
            headerShown: false
          }}
        />
      )}
    </LandingStack.Navigator>
  )
}

export default LandingStackScreen
