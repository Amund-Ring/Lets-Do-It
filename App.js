import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import TodoScreen from './app/screens/TodoScreen';
import NewTodoButton from './app/components/NewTodoButton';
import colors from './app/config/colors';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      {/* <TodoScreen /> */}

      <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.tabBar
          }}
        >
          <Tab.Screen
            name='Add'
            component={TodoScreen}
            options={{
              headerShown: false,
              tabBarButton: () => (
                // <MaterialCommunityIcons name='home' color={color} size={size} />
                <NewTodoButton onPress={() => console.log('Click')} />
              )
            }}
            
            // options={({ navigation }) => ({
            //   headerShown: false,
            //   tabBarButton: () => (
            //     <NewTodoButton onPress={() => console.log('Click')} />
            //   ),
            //   title: 'New Listing'
            // })}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    backgroundColor: colors.tabBar,
    // position: 'absolute',
    // bottom: 20,
    // left: 20,
    // right: 20,
    // borderRadius: 15
  }
});
