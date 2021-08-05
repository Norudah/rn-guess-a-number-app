import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function NumberContainer(props) {
  return (
    <View style={{ ...styles.numberContainer, ...props.style }}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colors.primary,
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
