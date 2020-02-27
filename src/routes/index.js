import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import Main from '~/pages/Main';
import Upvotes from '~/pages/Upvotes';
import Add from '~/pages/Upvotes';
import { colors } from '~/styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
        size: 30,
        labelStyle: {
          fontSize: 20,
          margin: 0,
          padding: 0,
        },
      }}
    >
      <Tab.Screen name="Posts" component={Main} />
      <Tab.Screen name="Upvotes" component={Upvotes} />
    </Tab.Navigator>
  );
}
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={App} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
