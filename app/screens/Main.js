import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts, PatuaOne_400Regular } from '@expo-google-fonts/patua-one';

import colors from '../config/colors';
import Todo from '../components/Todo';
import Modal from '../components/Modal';
import dataHandler from '../storage/dataHandler';

import testData from '../storage/testData';

function Main({ modalVisible, setModalVisible }) {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const todoDB = await dataHandler.getTodos();
    setTodos(todoDB);
  };

  useEffect(() => {
    getTodos();
    // getTestData();
  }, []);

  const getTestData = async () => {
    await dataHandler.clearTodoDB();
    await dataHandler.storeData(testData);
    await getTodos();
  };

  const [fontsLoaded] = useFonts({
    PatuaOne_400Regular
  });

  if (!fontsLoaded) return <View></View>;

  return (
    <>
      <LinearGradient
        colors={[colors.gradient_bg_top, colors.gradient_bg_btm]}
        style={styles.background}
      >
        <ScrollView>
          <SafeAreaView>
            <View style={styles.container}>
              <Text style={styles.text}>Let's do this!</Text>
              {!modalVisible &&
                todos.map(t => (
                  <Todo todo={t} setTodos={setTodos} key={t.id} />
                ))}
            </View>
          </SafeAreaView>
        </ScrollView>
      </LinearGradient>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTodos={setTodos}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
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

export default Main;
