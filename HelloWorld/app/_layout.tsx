import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.centeredText}>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    fontSize: 20,
  },
});

export default RootLayout;
