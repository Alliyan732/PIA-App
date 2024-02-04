
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text } from 'react-native';
import Container from '../components/Container';
const Stack = createNativeStackNavigator();

const MyComponent = () => {
    return (
        <Container>
            <Text>
                Analytics Screen 1
            </Text>
        </Container>
        
    )
}

export const AnalyticsStack = () => {

    // Need to handle logic for signed in user here 
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="AnalyticScreen1" component={MyComponent} />
    </Stack.Navigator>
    )
}
    

