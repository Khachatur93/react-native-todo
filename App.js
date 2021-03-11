import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Modal, Button } from "react-native";
import { NavMenu } from "./src/components/NavMenu";
import AddTodo from "./src/components/AddTodo";
import EditTodo from "./src/components/EditTodo";
import idGenerator from "./src/idGenerator";
import Todo from "./src/components/Todo.js";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const open = (id) => {
    setModalOpen(true);

    const filterItem = todos.filter((item) => item.id !== id);
    const selectedId = todos.find((item) => item.title);

    console.log(selectedId);
  };
  const Close = () => {
    setModalOpen(false);
  };

  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: idGenerator(), title: title }]);
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <View>
      <Modal style={styles.modal} visible={modalOpen}>
        <View style={styles.modalGlobal}>
          <View style={styles.modalBlock}>
            <Text style={styles.text}> Edit Todo </Text>
            <EditTodo onSubmit={addTodo} closed={Close} />
          </View>
        </View>
      </Modal>
      <NavMenu title="Todo List App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          key={(item) => {
            item.id;
          }}
          data={todos}
          renderItem={({ item }) => (
            <Todo
              todo={item}
              onRemove={removeTodo}
              o={open}
              setModalOpen={setModalOpen}
            />
          )}
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
  modalGlobal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBlock: {
    width: "90%",
    height: "40%",
    marginTop: 220,
  },
  text: {
    fontSize: 32,
    marginBottom: 100,
  },
  modal: {
    backgroundColor: "teal",
  },
});
