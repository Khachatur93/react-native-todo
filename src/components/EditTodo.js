import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Alert } from "react-native";

export default EditTodo = ({ onSubmit, closed }) => {
  const [value, setValue] = useState(" ");
  const pressHandle = () => {
    if (!value.trim()) {
      Alert.alert("The Work name is not be empty");
    } else {
      onSubmit(value);
      setValue(" ");
    }
  };
  return (
    <View>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue(text)}
          value={value}
          autoCorrect={false}
        />
        <Button title="Edit" onPress={pressHandle} />
      </View>
      <Button onPress={closed} title="Cancel" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "80%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "green",
    padding: 10,
  },
});
