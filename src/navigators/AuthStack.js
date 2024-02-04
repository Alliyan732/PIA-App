
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUp';
import SignInScreen from '../screens/SignIn';
import TabNavigator from './TabNavigator';
const Stack = createNativeStackNavigator();

export const AuthStack = () => {

    // Need to handle logic for signed in user here 
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
    )
}
    

