import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text>Game over</Text>
      <Button title="restart" onPress={props.onRestartGame}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
