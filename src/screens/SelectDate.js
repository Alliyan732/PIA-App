import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';

import { Calendar } from 'react-native-calendars';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function SelectDate({navigation}) {
    const [returnDate, setReturnDate] = useState(null);
    const [departureDate, setDepartureDate] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

<View style={{ width: "48%" }}>
  <View style={styles.inputShadow}>
    <View style={styles.inputs}>
    <MaterialIcon name="date-range" size={20} color="#008000" />
      <TextInput
        keyboardType="numeric"
        placeholder="Departure Date"
        style={styles.textInput}
        onChangeText={setReturnDate}></TextInput>
    </View>
  </View>
</View>

<View style={{ width: "48%" }}>
<View style={styles.inputShadow}>
    <View style={styles.inputs}>
    <MaterialIcon name="date-range" size={20} color="#008000" />
      <TextInput
        keyboardType="numeric"
        placeholder="Return Date"
        style={styles.textInput}
        onChangeText={setReturnDate}></TextInput>
    </View>
  </View>
</View>

</View>
      <Calendar style={styles.calendar} />
      <TouchableOpacity
            style={styles.filledButton}
            onPress={() => navigation.navigate("SearchResults")}>
            <Text style={styles.signInBtnText}>Next</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:15
      },

    filledButton: {
      marginBottom: 10,
      height: 45,
      width: 240,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#008000',
      marginTop: 40,
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
    signInBtnText: { color: 'white', fontSize: 18, fontWeight: '700' },

    textInput: {
        width: '90%',
        marginLeft: 5,
        fontSize: 16,
      },

      inputShadow: {
        borderRadius: 10,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },

    },
        inputs: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingLeft: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            overflow: 'hidden',
        
          },

          calendar:{
            marginTop:20
          }

  });

export default SelectDate;