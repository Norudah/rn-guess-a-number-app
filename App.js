import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = (number) => setSelectedNumber(number);
  const gameOverHandler = (nbOfTry) => setRounds(nbOfTry);
  const newGameHandler = () => {
    setSelectedNumber(null);
    setRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber && rounds <= 0)
    content = <GameScreen guessNumber={selectedNumber} gameOver={gameOverHandler} />;
  else if (rounds > 0)
    content = (
      <GameOver
        onRestartGame={newGameHandler}
        rounds={rounds}
        guessNumber={selectedNumber}
      />
    );

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title="Guess my number ?" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
