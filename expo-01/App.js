import { useState, useReducer } from 'react'
import { FlatList, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {

  const initialState = {
    data: [],
    text: '',
    index: 0,
  }

  const reducer = (state, action) => {

    switch (action.type) {
      case 'setText':
        return { ...state, text: action.payload }
        break;
      case 'addActivity':
        if (state.text === '') {
          alert('Você precisa digitar algo para adicionar a sua lista!')
          return { ...state }
        }
        return {
          ...state,
          data: [...state.data, state.text],
          text: ''
        }
      case 'setIndex':
        return { ...state, index: action.payload }
      case 'deleteActivity':
        return { ...state, data: state.data.filter((item, index) => index != state.index) }
      default:
        return state
    }
  }

  const [state, dispach] = useReducer(reducer, initialState);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} >

        <View style={styles.titleArea}>
          <Text style={styles.title}>Hey, Let's make a to-do list! 📝</Text>
        </View>

        <TextInput
          placeholder='Digite aqui'
          onChangeText={(newText) => dispach({ type: 'setText', payload: newText })}
          value={state.text}
          style={styles.input}
          cursorColor={'#6F50FF'}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={() => dispach({ type: 'addActivity' })}>
          <Text style={styles.buttonText}>Adicionar item</Text>
        </TouchableOpacity>

        <FlatList
          data={state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (

            <View style={styles.activityContainer}>
              <Text style={styles.activity}>{item}</Text>
              <TouchableOpacity style={styles.deleteArea} onPress={() => { dispach({ type: 'setIndex', payload: index }); dispach({ type: 'deleteActivity' }) }}>
                <Feather name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>

          )}
          ListFooterComponent={() => <View style={styles.footer}/>}
        />
        <View style={styles.dataCountArea}>
          <Text style={styles.buttonText}>Número de itens na lista: {state.data.length}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  titleArea: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6F50FF'
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    width: 300,
    height: 40,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 5
  },
  buttonContainer: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6F50FF',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityContainer: {
    width: 370,
    height: 70,
    justifyContent: 'center',
    marginBottom: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5
  },
  activity: {
    fontSize: 20,
    fontWeight: '500',
  },
  deleteArea: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    borderRadius: 5
  },
  dataCountArea: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6F50FF',
    position: 'absolute',
    bottom: 0
  },
  footer: {
    height: 40
  }
});
