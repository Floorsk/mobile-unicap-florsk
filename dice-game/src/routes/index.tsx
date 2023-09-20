import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import Home from '../screens/Home'

type StackNavigation = {
    Home: undefined
}

export type StackTypes = StackNavigationProp<StackNavigation>

const Routes = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}

export default Routes