import React, { useState } from 'react';
import { StyleSheet,ScrollView } from 'react-native';

import Container from '../components/Container';
import SuggestionItem from '../components/SuggestionItem';

const Suggestion = ({navigation}) => {


  return (
    <Container>
        <ScrollView style={styles.sec_cont}>
           <SuggestionItem price={'240'}  loc1={'LHR'} loc2={'RWP'}
             time1={"5:40"} time2={"7:30"} prevDate={"22-5-2023"} prevTime={"9:00"} newDate={"28-5-2023"} newTime={'12:00'} />
       </ScrollView>
    </Container>

  );
};

const styles = StyleSheet.create({

});


export default Suggestion;