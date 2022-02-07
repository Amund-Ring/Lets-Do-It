import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function NewTodoModal({ visible }) {
  const [text, onChangeText] = useState('');
  const [placeholder, setPlaceholder] = useState('description...');

  if (!visible) return null;

  

  return (
    <>
      <View style={styles.background}></View>
      <View style={styles.centeredView}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
            <View style={styles.centeredView}>
              <View style={styles.formContainer}>
                <View style={styles.emojiContainer}>
                  <Text style={styles.emoji}>😊</Text>
                </View>
                <View style={styles.textContainer}>
                  {/* <Text style={styles.text}>{text}</Text> */}
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={placeholder}
                    onFocus={() => setPlaceholder('')}
                    // clearTextOnFocus
                    autoFocus
                    maxLength={20}
                  />
                </View>

                <View style={styles.checkContainer}>
                  {true ? (
                    <MaterialCommunityIcons
                      name='check-circle-outline'
                      size={30}
                      color={colors.newTodo_check}
                    />
                  ) : null}
                </View>
              </View>
            </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'gray',
    opacity: 0.4
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: 25
  },
  formContainer: {
    height: 90,
    width: '100%',
    backgroundColor: colors.todo_bg,
    borderWidth: 5,
    borderColor: colors.todo_border,
    borderRadius: 18,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    bottom: 80
  },
  emojiContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.emoji_bg,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: colors.emoji_border,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    fontSize: 28,
    marginLeft: 2
  },
  textContainer: {
    flex: 1,
    height: 50,
    marginHorizontal: 7,
    fontFamily: 'Open Sans',
    justifyContent: 'center',
    alignItems: 'center'

    // borderWidth: 2
  },
  input: {
    fontSize: 24,
    color: colors.todo_text,
    fontFamily: 'Baskerville-Bold',
    fontFamily: 'Avenir-Medium'
  },
  checkContainer: {
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'

    // borderWidth: 2
  }
});

export default NewTodoModal;
