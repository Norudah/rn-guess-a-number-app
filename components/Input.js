import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {
    width: 50,
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
