import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AddButton from "../UI/AddButton";
import TaskItem from "./TaskItem";
import { addTask as addTodo } from "../redux/actionsTypes";

function AllTasks() {
  const dispatch = useDispatch();
  const reduxTasks = useSelector((state) => state.todos.todos);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (typeof taskText === "string" && taskText.trim() !== "") {
      dispatch(
        addTodo({
          id: reduxTasks.length,
          text: taskText,
        })
      );
      setTaskText("");
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.addContainer}>
        <View style={styles.textWrapper}>
          <Text>Create a new todo</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add a Task?"
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
          />
          <AddButton onPress={addTask} />
        </View>
      </View>
      <View>
        <View style={styles.listContainer}>
          <View style={styles.listHeadlineWrapper}>
            <Text style={styles.listHeadline}>Todo List</Text>
          </View>
          <FlatList
            data={reduxTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem taskText={item.text} id={item.id} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.noTasks}>
                <Text style={styles.noTasksText}>There's nothing to do !</Text>
                <Text style={styles.noTasksText}>Start adding ...</Text>
              </View>
            }
            contentContainerStyle={{
              minHeight: 600,
              maxHeight: 700,
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default AllTasks;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  addContainer: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 3,
    borderBottomColor: "#F3F3F3",
    borderBottomWidth: 15,
  },
  textWrapper: {
    borderRadius: 2,
    padding: 10,
    justifyContent: "center",
    minWidth: "100%",
    minHeight: 50,
    borderBottomColor: "#F3F3F3",
    borderBottomWidth: 1,
  },
  inputContainer: {
    minHeight: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  textInput: {
    minWidth: "55%",
    minHeight: 35,
    borderColor: "#F3F3F3",
    borderWidth: 1,
  },
  focused: {
    borderColor: "#1890FF",
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxHeight: 400,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#F3F3F3",
    borderTopWidth: 5,
    gap: 25,
  },
  listHeadlineWrapper: {
    justifyContent: "center",
    borderBottomColor: "#F3F3F3",
    borderBottomWidth: 1.5,
    height: 50,
    width: "100%",
  },

  listHeadline: {
    letterSpacing: 1,
    marginLeft: 25,
    fontSize: 18,
    fontWeight: "bold",
  },
  noTasks: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
    gap: 15,
  },
  noTasksText: {
    fontSize: 18,
  },
});
