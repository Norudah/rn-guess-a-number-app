import React, { useRef, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const number = Math.floor(Math.random() * (max - min) + min);
  if (number === exclude) generateRandomNumber(min, max, exclude);
  else return number;
};

export default function GameScreen(props) {
  const [computerNumber, setComputerNumber] = useState(
    generateRandomNumber(1, 100, props.guessNumber)
  );

  const lowerLimit = useRef(1);
  const upperLimit = useRef(100);

  const nextGuess = (action) => {
    const hasLied =
      (action === "lower" && props.guessNumber > computerNumber) ||
      (action === "greater" && props.guessNumber < computerNumber) ||
      props.guessNumber === computerNumber;

    if (hasLied) {
      Alert.alert(
        "Eh oh !",
        "Tu croyais que je n'allais pas m'en rendre compte ? On ne peut pas me mentir à moi !",
        [{ text: "Désolé !", style: "destructive" }]
      );
      return;
    }

    if (action === "lower") upperLimit.current = computerNumber;
    else lowerLimit.current = computerNumber;

    const newComputerNumber = generateRandomNumber(
      lowerLimit.current,
      upperLimit.current
    );
    setComputerNumber(newComputerNumber);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Laisse moi deviner...</Text>
      <NumberContainer style={styles.numberContainer}>{computerNumber}</NumberContainer>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Alors ? Je chauffe ou pas ?</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="C'est moins !"
            color={colors.primary}
            onPress={() => nextGuess("lower")}
          />
          <Button
            title="C'est plus !"
            color={colors.secondary}
            onPress={() => nextGuess("greater")}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  screenTitle: {
    fontSize: 18,
    marginTop: 15,
  },
  card: {
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 90,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  numberContainer: {
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 16,
  },
});
