import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Partie terminée !</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.resumeText}>
        L'ordinateur a fait {props.rounds} tentatives pour trouver le nombre{" "}
        {props.guessNumber}
      </Text>
      <MainButton onPress={props.onRestartGame}>Encore une autre !</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  screenTitle: {
    fontSize: 20,
  },
  resumeText: {
    textAlign: "center",
    width: "70%",
    fontSize: 18,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
