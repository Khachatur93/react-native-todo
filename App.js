import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { NavMenu } from "./src/components/NavMenu";
import AddTodo from "./src/components/AddTodo";
import idGenerator from "./src/idGenerator";
import Todo from "./src/components/Todo.js";
export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: idGenerator(), title: title }]);
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <View>
      <NavMenu title="Todo List App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          key={(item) => {
            item.id;
          }}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
