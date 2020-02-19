import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '~/pages/Main';
import Upvotes from '~/pages/Upvotes';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#EF3340',
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
    </NavigationContainer>
  );
};
export default Routes;
