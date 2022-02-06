import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function TodoCard() {
  return (
    <View style={styles.container}>
      
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
    marginBottom: 20
  }
})

export default TodoCard;