import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import NewTransactionScreen from '../screens/NewTransaction/NewTransactionScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';
import {LogoHeader, TransparentHeader} from './Headers';

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
      options={({navigation}) => ({
        ...TransparentHeader(navigation),
      })}
    />
    <Stack.Screen
      name="Transactions"
      component={TransactionsScreen}
      options={({navigation}) => ({
        ...LogoHeader(navigation),
      })}
    />
  </Stack.Navigator>
);

export default AppNavigator;
