import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Icon, TransactionList} from '../../components';
import styleguide from '../../styleguide';
import {useSelector} from 'react-redux';
import {maskMoney} from '../../helpers';

const TransactionsScreen = () => {
  const {transactions} = useSelector((store) => ({
    transactions: store.TransactionReducer.transactions,
  }));

  return (
    <View
      testID={'transactions-screen'}
      style={{flex: 1, backgroundColor: 'white'}}>
      <TransactionList transactions={transactions} />
    </View>
  );
};

export default TransactionsScreen;
