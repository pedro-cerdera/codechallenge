import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Logo from '../../assets/images/logo.png';
import {
  DefaultSpacingContainer,
  SafeAreaContainer,
  TransactionForm,
} from '../../components';
import {Actions} from '../../reducers';
import styles from './styles';

const NewTransactionScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const submitTransaction = useCallback(
    (value, description) => {
      dispatch(Actions.Transaction.newTransaction(value, description));
      navigation.goBack();
    },
    [navigation, dispatch],
  );

  return (
    <SafeAreaContainer>
      <DefaultSpacingContainer style={styles.container}>
        <Image source={Logo} />
        <TransactionForm onSubmit={submitTransaction} />
        <View style={{height: 30}} />
      </DefaultSpacingContainer>
    </SafeAreaContainer>
  );
};

export default NewTransactionScreen;
