import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import HorizontalDivider from './HorizontalDivider';
import IconWithInput from './IconWithInput';

const SuggestionItem = ({price,time1,time2,loc1,loc2,prevDate,prevTime,newDate,newTime}) => {
  return (
            <View style={styles.itemCont}>
                <Text style={styles.greenTxt}>PKR {price}</Text>
                <HorizontalDivider style={{marginBottom:'6%'}}/>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.bldTxt}>{time1}</Text>
                        <Text style={styles.blackTxt}>{loc1}</Text>
                    </View>
                    <Image source={require('../assets/images/flightIconWithLine.png')} style={styles.img}/>
                    <View>
                        <Text style={styles.bldTxt}>{time2}</Text>
                        <Text style={styles.blackTxt}>{loc2}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.airTxt}>New Islamabad Airport</Text>
                    <Text style={[styles.airTxt,{textAlign:'right'}]}>Benazir International Airport</Text>
                </View>
                <HorizontalDivider style={{marginBottom:'6%'}}/>

                <View style={styles.row}>
                    <IconWithInput iconName={"calendar-sharp"} label={"Date"} value={prevDate}/>
                    <IconWithInput iconName={"stopwatch-outline"} label={"Time"} value={prevTime}/>
                </View>
                <HorizontalDivider style={{marginBottom:'6%'}}/>


                <Text style={styles.bldTxt1}>Suggested Date and Time</Text>
                <View style={styles.row}>
                    <IconWithInput iconName={"calendar-sharp"} label={"Date"} value={newDate}/>
                    <IconWithInput iconName={"stopwatch-outline"} label={"Time"} value={newTime}/>
                </View>
                {/* Input with icon end */}
  
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
    marginBottom:'6%'
  },
  primaryBtn:{
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#008000',
    width:'80%',
    padding:10,
    borderRadius:8,
    
  },
  btnText:{
    color:'#fff',
    fontWeight:'500',
    fontSize:18,
  },
  blackTxt:{
    fontSize:16,
    color:'#000'
  },
  greyTxt:{
    color:'#555555',
    fontWeight:'500'
  },
  redTxt:{
    fontSize:16,
    fontWeight:'600',
    color:'red'
  },
  bldTxt:{
    color:"#000",
    fontWeight:'700',
    fontSize:20
  },
  bldTxt1:{
    color:"#000",
    fontWeight:'600',
    fontSize:18,
    marginBottom:'6%'
  },
  greenTxt:{
    alignSelf:'center',
    color:'#008000',
    fontWeight:'500',
    fontSize:18,
    marginBottom:'6%'
  },
  airTxt:{
    width:'40%',
    color:'#666666',
    fontWeight:'400',
  }
});


export default SuggestionItem;