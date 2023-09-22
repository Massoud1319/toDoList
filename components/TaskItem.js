import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actionsTypes";

function TaskItem({ taskText, id }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    console.log(isEnabled);
  };

  const deleteTaskHandler = () => {
    Alert.alert("Are you sure you want to delete?", "", [
      {
        text: "Ok",
        onPress: () => {
          dispatch(deleteTask(id));
        },
      },
      {
        text: "Cancel",
      },
    ]);
  };
  return (
    <View style={styles.ItemWrapper}>
      <View style={[styles.taskWrapper, isEnabled && styles.acheivedTask]}>
        <Text style={[styles.taskItem, isEnabled && { color: "black" }]}>
          {taskText}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <Switch
          trackColor={{ false: "white", true: "white" }}
          thumbColor={isEnabled ? "#3486ea" : "#525052"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TouchableOpacity onPress={() => deleteTaskHandler()}>
          <Ionicons name="trash-outline" size={30} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default TaskItem;

const styles = StyleSheet.create({
  ItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    minWidth: "80%",
    minHeight: 40,
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
  },
  taskWrapper: {
    justifyContent: "center",
    color: "red",
    minWidth: "50%",
    minHeight: 40,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 15,
  },
  acheivedTask: {
    borderColor: "green",
  },
  taskItem: {
    fontSize: 16,
    alignSelf: "center",
    color: "red",
  },
  iconsWrapper: {
    flexDirection: "row",
    gap: 4,
  },
});
