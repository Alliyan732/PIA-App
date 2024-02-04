import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SelectDate from '../screens/SelectDate';
import SearchResults from '../screens/SearchResults';
import FlightDetails from '../screens/FlightDetails';
import DelayPredictions from '../screens/DelayPredictions';
import Suggestion from '../screens/Suggestion';
import DelayDetails from '../screens/DelayDetails';


const Stack = createNativeStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectDate" component={SelectDate} options={{ title: "Search Flight" }}/>
        <Stack.Screen name="SearchResults" component={SearchResults} options={{ title: "Searched Results" }}/>
        <Stack.Screen name="FlightDetails" component={FlightDetails} options={{ title: "Flight Details" }}/>
        <Stack.Screen name="Suggestion" component={Suggestion} options={{ title: "Suggestions" }}/>
        <Stack.Screen name="DelayPredictions" component={DelayPredictions} options={{ title: "Delay Predictions" }}/>
        <Stack.Screen name="DelayDetails" component={DelayDetails} options={{ title: "Delay Details" }}/>
    </Stack.Navigator>
    
);
