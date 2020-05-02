import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import NewTransactionScreen from '../screens/NewTransaction/NewTransactionScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';
import {Icon} from '../components';

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
        headerTransparent: () => true,
        headerLeft: () => (
          <Icon
            onPress={() => navigation.goBack(null)}
            name={'fa-angle-left'}
            hitSlop={{
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            }}
            solid
            color="white"
            size={30}
          />
        ),
        headerTitle: '',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      })}
    />
    <Stack.Screen
      name="Transactions"
      component={TransactionsScreen}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

export default AppNavigator;
