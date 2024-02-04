
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Container from '../components/Container';
import { Picker } from '@react-native-picker/picker';

const cities = [
  { name: 'Karachi', lat: 24.8607, lon: 67.0011 },
  { name: 'Lahore', lat: 31.5204, lon: 74.3587 },
  { name: 'Islamabad', lat: 33.6844, lon: 73.0479 },
  { name: 'Peshawar', lat: 34.0151, lon: 71.5249 },
  { name: 'Quetta', lat: 30.1798, lon: 66.9750 },
];

const Stack = createNativeStackNavigator();


const MyComponent = () => {
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Karachi');

  useEffect(() => {
    fetchData();
  }, [selectedCity]);

  function fetchData() {
    const apiKey = '4bdc96dc86b2100f2b16fbff7a5b8f28';
    const city = cities.find((city) => city.name === selectedCity);

    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((weatherData) => {
          setData(weatherData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }

  return (
    <Container style={styles.container}>
        <ImageBackground
        source={require('../assets/images/weatherbar.png')} // Replace with your image path
        style={styles.headerImage}
      >
      </ImageBackground>
      <View style={styles.overlay}>
          <Text style={styles.heading}>Weather Information for {selectedCity}</Text>
        </View>
      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue) => setSelectedCity(itemValue)}
        style={styles.picker}
      >
        {cities.map((city) => (
          <Picker.Item key={city.name} label={city.name} value={city.name} />
        ))}
      </Picker>
      {data && (
      <ScrollView style={styles.weatherInfo}>
        <Text style={styles.infoText}>
          Description: {data.weather[0]?.main || 'N/A'}
        </Text>
        <Text style={styles.infoText}>
          Temperature: {data.main?.temp || 'N/A'} K
        </Text>
        <Text style={styles.infoText}>
          Humidity: {data.main?.humidity || 'N/A'}%
        </Text>
        <Text style={styles.infoText}>
          Pressure: {data.main?.pressure || 'N/A'} hPa
        </Text>
        <Text style={styles.infoText}>
          Description: {data.weather[0]?.description || 'N/A'}
        </Text>
        <Text style={styles.infoText}>
          Wind Speed: {data.wind?.speed || 'N/A'}
        </Text>
        <Text style={styles.infoText}>
          Wind Deg: {data.wind?.deg || 'N/A'}
        </Text>
        <Text style={styles.infoText}>
          Wind Gust: {data.wind?.gust || 'N/A'}
        </Text>
        <Text style={styles.infoText}>
          Sea Level: {data.main?.sea_level || 'N/A'}
        </Text>
        <Text style={styles.infoText}>
          Ground Level: {data.main?.grnd_level || 'N/A'}
        </Text>
      </ScrollView>
    )}
    </Container>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    headerImage: {
        width: '100%',
        height: 50,
      },
    heading: {
      fontSize: 20,
      fontWeight: 'semibold',
      marginBottom: 10,
      color: "black",
      marginLeft: 10,
      marginTop:5,
    },
    picker: {
      backgroundColor: "#e2e8f0",
      color: "black",
    },
    weatherInfo: {
      padding: 10,
      marginTop: 20,
    },
    infoText: {
      fontSize: 16,
      marginBottom: 5,
      backgroundColor: "white",
      marginTop: 3,
      marginBottom: 3,
      padding: 5
    },
  });


export default MyComponent;

export const WeatherStack = () => {

    // Need to handle logic for signed in user here 
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WeatherScreen1" component={MyComponent} />
        
    </Stack.Navigator>
    )
}
    

