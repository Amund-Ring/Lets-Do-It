import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewTodoButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name='plus-circle'
            color={colors.white}
            size={45}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#185ed0',
    borderColor: colors.white,
    borderRadius: 38,
    borderWidth: 7,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 22
  }
});

export default NewTodoButton;
