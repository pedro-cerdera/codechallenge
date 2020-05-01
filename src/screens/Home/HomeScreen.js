import React, {useRef} from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/images/logo.png';
import {
  Account,
  DefaultSpacingContainer,
  OperationsList,
  SafeAreaContainer,
} from '../../components';
import styles from './styles';

const HomeScreen = () => {
  const {ammount} = useSelector((store) => ({
    ammount: store.TransactionReducer.ammount,
  }));

  const navigation = useNavigation();

  const operations = useRef([
    {
      id: '1',
      icon: 'fa-plus-circle',
      title: 'Nova Transação',
      onPress: () => navigation.navigate('NewTransaction'),
    },
    {
      id: '2',
      icon: 'fa-list',
      title: 'Listar Transações',
      onPress: () => navigation.navigate('Transactions'),
    },
  ]).current;

  return (
    <SafeAreaContainer testID={'home-container'}>
      <DefaultSpacingContainer style={styles.container}>
        <Image source={Logo} />
        <Account
          testID={'account'}
          ammount={ammount}
          onBottomPress={() => navigation.navigate('Transactions')}
        />
        <OperationsList operations={operations} />
      </DefaultSpacingContainer>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
