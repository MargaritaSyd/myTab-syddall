import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Agregá un nuevo item a tu inventario</Text>
      <View style={styles.inputContainer}>
      <TextInput style={styles.inputStyle} />
      <Button title="Add item" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1
    
  },
  inputContainer: {
    flexDirection: "row"
  }
});
