import React, { useState } from "react";
import {
  CheckBox,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default Todo = ({ todo, onRemove, o }) => {
  const [isSelected, setSelection] = useState(false);
  const onEdit = () => {};

  return (
    <TouchableOpacity activeOpacity={0.4} onPress={o}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          onChange={onRemove.bind(null, todo.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 5,
    marginBottom: 9,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
