import React, { useState } from 'react';
import { StyleSheet,ScrollView, } from 'react-native';

import Container from '../components/Container';
import SearchItem from '../components/SearchItem';

const SearchResults = ({navigation}) => {

    // Go to Item Details 
    const goToItemDetails = () => {
        navigation.navigate("FlightDetails")
    }
  return (
    <Container>
        <ScrollView style={styles.sec_cont}>
            <SearchItem price={'240'} duration={"1 hr 50 min"} loc1={'LHR'} loc2={'RWP'} time1={"5:40"} time2={"7:30"} status={"Delayed"} onPress={goToItemDetails}/>
            <SearchItem price={'240'} duration={"1 hr 50 min"} loc1={'LHR'} loc2={'RWP'} time1={"5:40"} time2={"7:30"} status={"Delayed"} onPress={goToItemDetails}/>
            <SearchItem price={'240'} duration={"1 hr 50 min"} loc1={'LHR'} loc2={'RWP'} time1={"5:40"} time2={"7:30"} status={"Delayed"} onPress={goToItemDetails}/>
        </ScrollView>
    </Container>

  );
};

const styles = StyleSheet.create({

});


export default SearchResults;