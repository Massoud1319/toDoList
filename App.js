import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import Head from "./components/Head";
import AllTasks from "./components/AllTasks";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <View style={styles.OuterContainer}>
            <Head />
            <AllTasks />
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 100,
  },
});
