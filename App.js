import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();

  const startGameHandler = (number) => setSelectedNumber(number);

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber) content = <GameScreen guessNumber={selectedNumber} />;

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title="Titre de l'app" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
