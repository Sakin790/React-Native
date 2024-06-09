import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView ,Text, View, } from 'react-native';
import { MyButton } from './Components/Button';
import Cat from './Components/Cat';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <Text style={styles.heading}>Hello World</Text>
      <Text style={styles.heading}>Hello World</Text>
      <MyButton></MyButton>
      <Cat></Cat>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  }
});
