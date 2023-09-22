import { Pressable, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function AddButton({ onPress }) {
  return (
    <Pressable style={styles.addButton} onPress={onPress}>
      <AntDesign name="pluscircle" color="white" size={17} />
      <Text style={{ color: "white", fontSize: 15 }}>Add Task</Text>
    </Pressable>
  );
}

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: -10,
    alignItems: "center",
    minWidth: "35%",
    minHeight: 35,
    backgroundColor: "#1890FF",
    alignContent: "center",
    borderRadius: 3,
  },
});
