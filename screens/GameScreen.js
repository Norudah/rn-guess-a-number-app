import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

export default function GameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Laisse moi deviner...</Text>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Alors ? Je chauffe ou pas ?</Text>
        <NumberContainer style={styles.numberContainer}>XX</NumberContainer>
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
