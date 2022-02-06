import { StyleSheet, Text, View } from 'react-native';
import TodoScreen from './app/screens/TodoScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <TodoScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
