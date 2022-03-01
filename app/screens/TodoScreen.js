import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, PatuaOne_400Regular } from '@expo-google-fonts/patua-one';

import colors from '../config/colors';
import Screen from '../components/Screen';
import TodoCard from '../components/TodoCard';
import NewTodoModal from '../components/NewTodoModal';
import dataHandler from '../storage/dataHandler';

import data from '../storage/data';

function TodoScreen({ modalVisible, setModalVisible }) {

  const [todos, setTodos] = useState([]);
  
  const getTodos = async () => {
    const todoDB = await dataHandler.getTodos();
    setTodos(todoDB);
  }
  
  useEffect(() => {
    getTodos();
  }, [])


  const titlePress = async () => {
    await dataHandler.clearTodoDB();
    await dataHandler.storeData(data);
    await getTodos();
  }
  
  
  
  
  const [fontsLoaded] = useFonts({
    PatuaOne_400Regular
  });

  if (!fontsLoaded) return <View></View>;

  return (
    <>
      <Screen style={styles.container}>
        <Text style={styles.text} onPress={titlePress}>Let's do this!</Text>
        {!modalVisible && todos.map(t => <TodoCard todo={t} key={t.id} />)}
      </Screen>
      <LinearGradient
        colors={[colors.gradient_bg_top, colors.gradient_bg_btm]}
        style={styles.background}
      />

      <NewTodoModal modalVisible={modalVisible} setModalVisible={setModalVisible} setTodos={setTodos} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app_bg,
    paddingTop: 30,
    paddingHorizontal: 25
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    zIndex: -1
  },
  text: {
    marginLeft: 5,
    marginBottom: 20,
    color: colors.white,
    fontSize: 38,
    fontFamily: 'PatuaOne_400Regular'
  }
});

export default TodoScreen;
