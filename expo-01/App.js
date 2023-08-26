import { useState, useReducer } from 'react'
import { FlatList, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [activity, setActivity] = useState();

  const reducer = (state, action) => {
    if (action.type === 'addActivity') {
      return {
        data: [...state.data, activity]
      }
    }
  }

  const [state, dispach] = useReducer(reducer, { data: [] });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, Let's make a to do list!</Text>
      <TextInput
        placeholder='Digite aqui'
        onChangeText={setActivity}
        style={styles.input}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => dispach({ type: 'addActivity' })}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
      <FlatList
        data={state.data}
        renderItem={({ item }) => (
          <View style={styles.activityContainer}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    fontSize: 22,
  },
  input: {
    width: 300,
    height: 40,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10
  },
  buttonContainer: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityContainer: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    
  }
});
