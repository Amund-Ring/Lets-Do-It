import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, PatuaOne_400Regular } from '@expo-google-fonts/patua-one';

import colors from '../config/colors';
import Screen from '../components/Screen';
import TodoCard from '../components/TodoCard';
import data from '../storage/data';
import NewTodoModal from '../components/NewTodoModal';

function TodoScreen() {
  const [modalVisible, setModalVisible] = useState(true);

  const [fontsLoaded] = useFonts({
    PatuaOne_400Regular
  });

  const [todos] = useState(data);

  if (!fontsLoaded) return <View></View>;

  return (
    <>
      <Screen style={styles.container}>
        <Text style={styles.text}>Let's do this!</Text>
        {!modalVisible && todos.map(t => <TodoCard todo={t} key={t.id} />)}
      </Screen>
      <LinearGradient
        colors={[colors.gradient_bg_top, colors.gradient_bg_btm]}
        style={styles.background}
      />

      <NewTodoModal visible={modalVisible} />
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
