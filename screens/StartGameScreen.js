import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Commencez une nouvelle partie !</Text>
      <Card>
        <View style={styles.inputContainer}>
          <Text>Sélectionner un nombre :</Text>
          <TextInput placeholder="..." />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Réinitialiser" />
          <Button title="Valider" />
        </View>
      </Card>
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
});
