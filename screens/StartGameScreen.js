import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Commencez une nouvelle partie !</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Text>Sélectionner un nombre :</Text>
          <TextInput placeholder="..." />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Réinitialiser" />
          <Button title="Valider" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    paddingVertical: 10,
  },
  inputContainer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

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
