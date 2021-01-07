import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const AddTodo = ({ addItem }) => {
  const [text, settext] = useState("");

  const changeHandler = (value) => {
    settext(value);
  };

  const submitHandler = () => {
    addItem(text);
    settext("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="new todo.."
        onChangeText={changeHandler}
      />
      <Button onPress={submitHandler} title="Add" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
