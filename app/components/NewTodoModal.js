import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Modal from 'react-native-modal';

import colors from '../config/colors';

function NewTodoModal({ modalVisible, setModalVisible }) {
  const [text, onChangeText] = useState('');
  const [placeholder, setPlaceholder] = useState('description...');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  if (!modalVisible) return null;

  return (
    <Modal isVisible={modalVisible} style={{margin: 0, paddingHorizontal: 25}}>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={{ flex: 1 }}>
          {/* <Text>Hello!</Text> */}
          {/* <Button title='Hide modal' onPress={toggleModal} /> */}

          <TouchableWithoutFeedback onPress={() => console.log('Modal stays')}>

          <View style={styles.newTodoCard}>
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

          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  newTodoCard: {
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

    marginTop: 260
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
