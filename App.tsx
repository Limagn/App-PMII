// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Routes } from './src/routes';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Routes/> */}
      <Text>
        Hello World

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
