import React from 'react';
import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import {maskMoney} from '../../helpers';
import styleguide from '../../styleguide';
import {CustomText} from '../CustomText';
import {Icon} from '../Icon';
import styles from './styles';

export const TransactionItem = ({value, description}) => (
  <View style={styles.itemContainer}>
    <View style={styles.statusContainer}>
      <Icon
        name={value < 0 ? 'md-money-off' : 'md-attach-money'}
        size={24}
        color={styleguide.colors.moon400}
      />
      <View style={styles.line} />
    </View>
    <View style={styles.detailContainer}>
      <CustomText type={'subtitle'} testID={'operation'}>
        {value < 0 ? 'Saque' : 'Depósito'}
      </CustomText>
      <CustomText testID={'description'}>
        {description || 'Sem descrição'}
      </CustomText>
      <CustomText testID={'value'}>{maskMoney(Math.abs(value))}</CustomText>
    </View>
  </View>
);

const TransactionList = ({transactions}) => (
  <FlatList
    data={transactions}
    renderItem={({item}) => <TransactionItem {...item} />}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    keyExtractor={(item, index) => `${index}`}
    style={styles.container}
  />
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionList;
