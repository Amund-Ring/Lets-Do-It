import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function TodoCard({ todo }) {
  return (
    <View
      style={
        todo.completed
          ? [styles.container, styles.container_done]
          : styles.container
      }
    >
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{todo.emoji}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={todo.completed ? [styles.text, styles.text_done] : styles.text}
        >
          {todo.description}
        </Text>
      </View>

      <View style={styles.binContainer}>
        {todo.completed ? (
          <MaterialCommunityIcons
            name='delete-outline'
            size={28}
            color={colors.todo_text}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 14
  },
  container_done: {
    borderColor: colors.todo_border_done,
    opacity: 0.6
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
  text: {
    fontSize: 24,
    color: colors.todo_text,
    fontFamily: 'Baskerville-Bold',
    fontFamily: 'Avenir-Medium'
  },
  text_done: {
    textDecorationLine: 'line-through'
  },
  binContainer: {
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'

    // borderWidth: 2
  }
});

export default TodoCard;
