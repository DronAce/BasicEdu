import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CircleBtn = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CircleBtn;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 16,
    margin: 16,
    backgroundColor: '#304d71',
    height: 150,
    width: 150,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 32,
    textAlign: 'center',
  }
});