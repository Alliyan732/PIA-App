import React from 'react';
import { View, Image, Text,TouchableOpacity, StyleSheet } from 'react-native';


import HorizontalDivider from './HorizontalDivider';

const DelayPredictionItem = ({price,duration,time1,time2,loc1,loc2,delayReason,onPressDetails,onPressSuggestions}) => {
  return (
            <View style={styles.itemCont}>
                <View style={styles.row}>
                    <Text style={styles.greenTxt}>PKR {price}</Text>
                    <Text style={styles.greyTxt}>{duration}</Text>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.bldTxt}>{time1}</Text>
                        <Text>{loc1}</Text>
                    </View>
                    <Image source={require('../assets/images/flightIconWithLine.png')} style={styles.img}/>
                    <View>
                        <Text style={styles.bldTxt}>{time2}</Text>
                        <Text>{loc2}</Text>
                    </View>
                </View>
                <HorizontalDivider style={{marginBottom:20}}/>
                <View style={styles.row}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../assets/images/chair.png')} style={{height:16,width:16,marginRight:10}} />
                        <Text style={styles.greyTxt}>Reason for Delay</Text>
                    </View>
                    <Text style={styles.redTxt}>{delayReason}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.primaryBtn} onPress={onPressDetails}>
                        <Text style={styles.btnText}>
                            Details
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.primaryBtn} onPress={onPressSuggestions}>
                        <Text style={styles.btnText}>
                            Suggestion
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
  );
};

const styles = StyleSheet.create({
  itemCont:{      
    width:'97%',
    alignSelf:'center',
    overflow:'hidden',
    backgroundColor:"#fff",
    marginVertical:10,
    paddingVertical:20,
    paddingHorizontal:15,
    justifyContent:'space-evenly',
    borderRadius:10,
        // Shadow
        elevation: 5,
        shadowColor: '#000',
        shadowOffset:
        {
        width: 0,
        height: 3 
        },
        shadowOpacity: 0.24,
        shadowRadius: 8


  },
  img:{
    height:36,
    width:142
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
  },
  primaryBtn:{
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#008000',
    width:110,
    padding:6,
    borderRadius:8,
    
  },
  btnText:{
    color:'#fff',
    fontWeight:'500',
    fontSize:15,
  },
  greyTxt:{
    color:'#555555',
    fontWeight:'500'
  },
  redTxt:{
    fontSize:16,
    fontWeight:'600',
    color:'#000'
  },
  bldTxt:{
    color:"#000",
    fontWeight:'600',
    fontSize:16
  },
  greenTxt:{
    color:'#008000',
    fontWeight:'500',
    fontSize:16
  }
});


export default DelayPredictionItem;