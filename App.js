import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Redux } from "./src/redux";
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigators';
import styleguide from './src/styleguide';

const App = () => {
  return (
    <NavigationContainer>
      <Redux>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styleguide.colors.primary}
        />
        <AppNavigator />
      </Redux>
    </NavigationContainer>
  );
};

export default App;