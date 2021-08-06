import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity="0.7" onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.label}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 60,
  },
  label: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
});
