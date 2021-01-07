import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  var count = 7;

  const [todos, settodos] = useState([]);

  const pressHandler = id => {
    settodos(prevState => {
      return prevState.filter(item => item.key !== id);
    });
  };

  const addItem = text => {
    if (text.length > 3) {
      var obj = { text: text, key: Math.random().toString() };
      var todoss = [obj, ...todos];
      settodos(todoss);
    } else {
      Alert.alert("Oppss", "Todo must be 3 char long", [
        {
          text: "Ok",
          onPress: () => {
            console.log("alert closed");
          }
        }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addItem={addItem} />
          <View style={styles.list}>
            {/*  */}
            {!todos.length ? (
              <Text style={styles.errorText}>Todo items are empty</Text>
            ) : (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold"
  }
});
