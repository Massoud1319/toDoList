import { View, StyleSheet, Text } from "react-native";

function Head() {
  return (
    <View style={styles.TextsContainer}>
      <Text style={styles.boldHeadline}>Add Todo</Text>
      <Text>To add a todo, Fill the form below and click.</Text>
    </View>
  );
}
export default Head;

const styles = StyleSheet.create({
  TextsContainer: {
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "center",
    gap: 15,
  },
  boldHeadline: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
