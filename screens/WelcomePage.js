import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  );
};


export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});