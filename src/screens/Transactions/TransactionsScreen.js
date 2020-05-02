import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {TransactionList} from '../../components';
import styles from './styles';

const TransactionsScreen = () => {
  const {transactions} = useSelector((store) => ({
    transactions: store.TransactionReducer.transactions,
  }));

  return (
    <View testID={'transactions-screen'} style={styles.container}>
      <TransactionList
        testID={'transaction-list'}
        transactions={transactions}
      />
    </View>
  );
};

export default TransactionsScreen;
