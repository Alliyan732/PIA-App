import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalDivider = ({style}) => {
  return <View style={[styles.divider,style]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D0D0D0',
  },
});

export default HorizontalDivider;
