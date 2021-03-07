import React from "react";
import { View, Text, StyleSheet } from "react-native";
export const NavMenu = ({ title }) => {
  {
    return (
      <View style={styles.nav}>
        <Text style={styles.text}> {title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  nav: {
    height: 70,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "green",
    paddingBottom: 12,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
