import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Icon} from '../components';
import styleguide from '../styleguide';
import Logo from '../assets/images/logo.png';

const styles = StyleSheet.create({
  logo: {
    height: 22,
    width: 93,
    resizeMode: 'contain',
  },
});

export const TransparentHeader = (navigation) => ({
  headerTransparent: () => true,
  headerLeft: () => (
    <Icon
      testID={'back-buttom'}
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
});

export const SolidHeader = (navigation) => ({
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
    backgroundColor: styleguide.colors.moon1000,
  },
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
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
});

export const LogoHeader = (navigation) => ({
  ...SolidHeader(navigation),
  headerTitle: <Image source={Logo} style={styles.logo} />,
});
