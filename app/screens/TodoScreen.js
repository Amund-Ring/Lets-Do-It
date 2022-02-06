import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function TodoScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.gradient_bg_top, colors.gradient_bg_btm]}
        style={styles.background}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app_bg,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
})

export default TodoScreen;