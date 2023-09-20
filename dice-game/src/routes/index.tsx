import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import Home from '../screens/Home'
import Results from '../screens/Results'

type StackNavigation = {
    Home: undefined
    Results: undefined
}

export type StackTypes = StackNavigationProp<StackNavigation>

const Routes = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false  }}/>
            <Stack.Screen name='Results' component={Results}/>
        </Stack.Navigator>
    )
}

export default Routes