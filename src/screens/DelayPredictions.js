import React, { useState } from 'react';
import { StyleSheet,ScrollView,Alert } from 'react-native';

import Container from '../components/Container';
import DelayPredictionItem from '../components/DelayPredictionItem';

const DelayPredictions = ({navigation}) => {

    const goToDelayDetails = () => {
        // Alert.alert("Go To Delay Details")
        navigation.navigate('DelayDetails')
    }
    const goToDelaySuggestions = () => {
        // Alert.alert("Go To Delay Suggestions")
        navigation.navigate('Suggestion')
    }
  return (
    <Container>
        <ScrollView style={styles.sec_cont}>
            {/* <DelayPredictionsItem price={'240'} duration={"1 hr 50 min"} loc1={'LHR'} loc2={'RWP'} time1={"5:40"} time2={"7:30"} status={"Delayed"} /> */}
            <DelayPredictionItem price={'240'} duration={"1 hr 50 min"} loc1={'LHR'} loc2={'RWP'} time1={"5:40"} time2={"7:30"} delayReason={"FOG"} onPressDetails={goToDelayDetails} onPressSuggestions={goToDelaySuggestions}/>
            <DelayPredictionItem price={'240'} duration={"1 hr 50 min"} loc1={'LHR'} loc2={'RWP'} time1={"5:40"} time2={"7:30"} delayReason={"FOG"} onPressDetails={goToDelayDetails} onPressSuggestions={goToDelaySuggestions}/>
            <DelayPredictionItem price={'240'} duration={"1 hr 50 min"} loc1={'LHR'} loc2={'RWP'} time1={"5:40"} time2={"7:30"} delayReason={"FOG"} onPressDetails={goToDelayDetails} onPressSuggestions={goToDelaySuggestions}/>
       </ScrollView>
    </Container>

  );
};

const styles = StyleSheet.create({

});


export default DelayPredictions;