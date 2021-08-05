import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
