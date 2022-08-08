import React from "react";
import alphabets from "../constants/alphabets";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from 'expo-speech';

const Numbers = () => {

  const speak = (item) => {
    Speech.speak(item);
  };

  const letters = alphabets.map((letter) => <Button title={letter} onPress={() => speak(letter)} />)
  
  return (
    <View style={styles.container} >
      {letters}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "aliceblue",
    alignItems: "center",
    padding: 15,
  },
});

export default Numbers;
