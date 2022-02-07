import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewTodoButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <LinearGradient
          colors={[colors.btn_gradient_top, colors.btn_gradient_btm]}
          style={styles.button}
        >
          <MaterialCommunityIcons name='plus' color={colors.white} size={45} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.button,
    borderColor: colors.tabBar,
    borderRadius: 40,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20
  }
});

export default NewTodoButton;
