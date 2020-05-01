import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import NewTransactionScreen from '../screens/NewTransaction/NewTransactionScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';
import {Icon} from '../components';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

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
        transitionSpec: {
          open: config,
          close: config,
        },
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
