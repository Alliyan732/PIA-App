import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconWithInput = ({ iconName, label,editable=false,value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.rowContainer}>
        <Ionicons name={iconName} size={20} color="#637381" />
        <TextInput
          style={styles.details}
          value={value}
          editable = {editable}
          placeholderTextColor={'#637381'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    width:'45%'
  },
  rowContainer: {
    borderWidth:1,
    borderColor:"#E0E0E0",
    borderRadius:10,
    // paddingVertical:11,
    paddingLeft:20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3.5%',
  },
  label: {
    fontSize:17,
    fontWeight:'500',
    color:'#212B36',
    marginLeft:5,
    paddingBottom:'3%'
  },
  details: {
    marginLeft: 10,
    fontSize:16,
    color:'#212B36',
    
  },
});

export default IconWithInput;
