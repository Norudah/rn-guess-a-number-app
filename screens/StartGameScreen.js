import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";

export default function StartGameScreen() {
  const [inputValue, setInputValue] = useState("");
  const [gameValue, setGameValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const isOnlyIntegerHandler = (inputText) => {
    setInputValue(inputText.replace(/[^0-9]/g, ""));
  };

  const validateInputHandler = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber >= 100 || chosenNumber <= 0) return;

    setGameValue(chosenNumber);
    setIsValid(true);
  };

  const resetInputHandler = () => {
    setIsValid(false);
    setInputValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Commence une nouvelle partie !</Text>
        <Card>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Sélectionne un nombre :</Text>
            <Input
              style={styles.input}
              onChangeText={isOnlyIntegerHandler}
              value={inputValue}
              keyboardType="decimal-pad"
              maxLength={2}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Valider"
                color={colors.primary}
                onPress={validateInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Réinitialiser"
                color={colors.secondary}
                onPress={resetInputHandler}
              />
            </View>
          </View>
        </Card>
        {isValid && <Text>C'est valide : {gameValue}</Text>}
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: 15,
    marginBottom: 30,
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
  button: {
    width: 110,
  },
  inputTitle: {
    paddingBottom: 10,
    fontSize: 16,
  },
  input: {
    marginVertical: 15,
    fontSize: 18,
  },
});
