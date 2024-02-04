import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    backgroundColor: '#F9FBFA',
    padding:'4%',

  },
});

export default Container;
