import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { getAuth, createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import SplashScreen from 'react-native-splash-screen'


const SignUp = ({ navigation, route }) => {

  // splash screen useEffect
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        navigation.navigate({
          name: 'SignIn',
          params: { Email: email, Password: password },
        });
        // alert('Signed Up Successfully!');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/pia.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Sign up now !</Text>
        <Text style={styles.hd1}>Sign up Today and Book Your Flight</Text>
        {/* <Text style={styles.hd2}>Flight. </Text> */}
        <View style={styles.container2}>
          <View style={styles.inputView}>
            <Icon name="mail" size={20} color="#008000" />
            <TextInput
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}></TextInput>
          </View>

          <View style={styles.inputView2}>
            <Icon name="lock" size={20} color="#008000" />
            <TextInput
              placeholder="Password"
              secureTextEntry={isSecureEntry}
              value={password}
              onChangeText={setPassword}
              style={[styles.textInput, { width: '80%' }]}></TextInput>

            <TouchableOpacity onPress={() => setIsSecureEntry(!isSecureEntry)}>
              <EvilIcon
                name="eye"
                size={30}
                color="#008000"
                style={{ paddingTop: 10 }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.filledButton}
            onPress={() => signUp()}>
            <Text style={styles.signInBtnText}>Sign Up</Text>
          </TouchableOpacity>

          {/* <View style={styles.hr}>
            <View style={styles.hr1} />
            <View>
              <Text style={styles.hrText}>Login With</Text>
            </View>
            <View style={styles.hr2} />
          </View> */}

          <View
            style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 15 }}>Already have an account ? </Text>
            <Text
              style={{ color: '#0386D0', fontSize: 15, fontWeight: 'bold' }}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 4,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
    bottom: 20,
    color: 'white',
  },
  textInput: {
    width: '90%',
    marginLeft: 5,
    fontSize: 16,
  },
  filledButton: {
    marginBottom: 10,
    height: 45,
    width: 240,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000',
    marginTop: 55,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  outlinedButton: {
    height: 45,
    width: 240,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#DADADA',
    marginTop: 25,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#008000',
    alignSelf: 'center'
  },
  hd1: {
    fontSize: 16,
    marginLeft: 20,
    color: 'black',
    alignSelf: 'center',
    marginTop: 10
  },
  hd2: {
    fontSize: 18,
    marginLeft: 20,
    color: 'black',
    alignSelf: 'center'
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1.5,
    marginTop: 20,
    borderBottomColor: '#A6A6A6',
  },
  inputView2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1.5,
    marginTop: 10,
    borderBottomColor: '#A6A6A6',
  },
  signInBtnText: { color: 'white', fontSize: 18, fontWeight: '700' },
  hr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
  },
  hr1: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginRight: 7,
  },
  hrText: {
    textAlign: 'center',
    fontSize: 13,
  },
  hr2: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginLeft: 7,
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 10
  }
});

export default SignUp;
