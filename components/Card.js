import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card(props) {
  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.0,
    elevation: 5,
    padding: 10,
    borderRadius: 10,
  },
});
