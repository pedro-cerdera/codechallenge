import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import NewTransactionScreen from '../screens/NewTransaction/NewTransactionScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="NewTransaction"
      component={NewTransactionScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Transactions"
      component={TransactionsScreen}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

export default AppNavigator;
