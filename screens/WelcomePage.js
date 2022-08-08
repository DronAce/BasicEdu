import React from "react";
import CircleBtn from "../components/CircleBtn";
import { StyleSheet, View, } from 'react-native';

const WelcomePage = ({ navigation  }) => {
  return (
    <View style={styles.container}>
      <CircleBtn
        // style={styles.startBtn}
        text="Start"
        onPress={() => navigation.navigate('Numbers')}
      />
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
  }
});