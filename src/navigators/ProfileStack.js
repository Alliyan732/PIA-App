import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const Stack = createNativeStackNavigator();

const MyComponent = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // User has been logged out
        navigation.navigate('SignIn'); // Navigate to the login screen or any other screen as needed
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error('Logout error:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/profileLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.header}>Are you sure you want to log out?</Text>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen1" component={MyComponent} />
    </Stack.Navigator>
  );
};
