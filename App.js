import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TodoScreen from './app/screens/TodoScreen';
import NewTodoButton from './app/components/NewTodoButton';
import colors from './app/config/colors';
import IosFonts from './app/components/IosFonts';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const Tab = createBottomTabNavigator();

  const handlePress = () => {
    setModalVisible(true);
  };
  

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.tabBar
          }}
        >
          <Tab.Screen
            name='Add'
            children={()=><TodoScreen modalVisible={modalVisible} setModalVisible={setModalVisible} />}
            options={{
              headerShown: false,
              tabBarButton: () => (
                // <MaterialCommunityIcons name='home' color={color} size={size} />
                <NewTodoButton onPress={handlePress} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style='light' />
    </View>

    // <IosFonts />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    backgroundColor: colors.tabBar
    // position: 'absolute',
    // bottom: 20,
    // left: 20,
    // right: 20,
    // borderRadius: 15
  }
});
