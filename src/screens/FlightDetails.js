import React, { useState } from 'react';
import { StyleSheet,ScrollView, Text, TouchableOpacity } from 'react-native';

import Container from '../components/Container';
import FlightDetailsItem from '../components/FlightDetailsItem';

const FlightDetails = ({navigation}) => {

    // Go to Item Details 
    const goToItemDetails = () => {
        // navigation.navigate("FlightDetails")
        navigation.navigate("DelayPredictions")
    }
  return (
    <Container>
        <ScrollView style={styles.sec_cont}>
          <FlightDetailsItem price={'240'}  loc1={'LHR'} loc2={'RWP'}
            time1={"5:40"} time2={"7:30"} prevDate={"22-5-2023"} prevTime={"9:00"} newDate={"28-5-2023"} newTime={'12:00'} onPress={goToItemDetails}/> 
       </ScrollView>
       <TouchableOpacity
        style={styles.filledButton}
        onPress={() => navigation.navigate("DelayPredictions")}>
        <Text style={styles.signInBtnText}>Next</Text>
      </TouchableOpacity>
    </Container>

  );
};

const styles = StyleSheet.create({
  filledButton: {
    marginBottom: 10,
    height: 45,
    width: 240,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000',
    marginTop: 10,
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
});


export default FlightDetails;