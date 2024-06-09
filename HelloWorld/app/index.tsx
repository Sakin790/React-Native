import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native"; // Import StyleSheet for styles

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.centeredText}>Hello World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the entire screen
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  centeredText: {
    fontSize: 20, // Adjust font size as desired
  },
});

export default App;
