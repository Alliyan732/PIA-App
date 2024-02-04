import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text } from 'react-native';
import { useEffect } from 'react';

import { HomeStack } from './HomeStack';
import { WeatherStack } from './WeatherStack';
import { ProfileStack } from './ProfileStack';
import { AnalyticsStack } from './AnalyticsStack';
import SplashScreen from 'react-native-splash-screen'


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    // splash screen useEffect
    useEffect(() => {
      SplashScreen.hide();
    }, []);
  return (
    <Tab.Navigator
  
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarShowLabel:true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'ProfileStack') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'WeatherStack') {
            iconName = focused ? 'ios-cloud' : 'ios-cloud-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          }
          else if (route.name === 'AnalyticsStack') {
            iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
          
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ddd',
        tabBarStyle:{
          backgroundColor:'#008000',
          height:60,
          paddingTop:5,
          
        },
        tabBarLabel:({focused}) => {
          let labelColor = '#ddd'
          if (route.name === 'AnalyticsStack'){
            if (focused) {labelColor="#fff"}
            return (<Text style={{fontSize:16,paddingBottom:5,color:labelColor}}>Analytics</Text>)
          }
          else if (route.name === 'WeatherStack'){
            if (focused) {labelColor="#fff"}
            return (<Text style={{fontSize:16,paddingBottom:5,color:labelColor}}>Weather</Text>)
          }
          else if (route.name === 'HomeStack'){
            if (focused) {labelColor="#fff"}
            return (<Text style={{fontSize:16,paddingBottom:5,color:labelColor}}>Home</Text>)
          }
          else if (route.name === 'ProfileStack'){
            if (focused) {labelColor="#fff"}
            return (<Text style={{fontSize:16,paddingBottom:5,color:labelColor}}>Profile</Text>)
          }
        },
        
   
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="WeatherStack" component={WeatherStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
      <Tab.Screen name="AnalyticsStack" component={AnalyticsStack} />
    </Tab.Navigator>
  );
}