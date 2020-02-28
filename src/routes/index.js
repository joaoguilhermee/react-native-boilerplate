import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import Main from '~/pages/Main';
import Upvotes from '~/pages/Upvotes';
import Add from '~/pages/Add';
import { colors } from '~/styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.inactive,
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
        name="Posts"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
        name="Upvotes"
        component={Upvotes}
      />
    </Tab.Navigator>
  );
}
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.primary },
        }}
      >
        <Stack.Screen name="Posts" component={App} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
