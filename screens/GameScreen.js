import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
  const [computerNumber, setComputerNumber] = useState(generateRandomNumber(1, 99));

  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Laisse moi deviner...</Text>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Alors ? Je chauffe ou pas ?</Text>
        <NumberContainer style={styles.numberContainer}>{computerNumber}</NumberContainer>
        <View style={styles.buttonsContainer}>
          <Button title="C'est moins !" color={colors.primary} />
          <Button title="C'est plus !" color={colors.secondary} />
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
    marginBottom: 30,
  },
  card: {
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  numberContainer: {
    marginBottom: 10,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 16,
  },
});
