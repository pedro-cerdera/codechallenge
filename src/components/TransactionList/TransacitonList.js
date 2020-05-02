import React from 'react';
import {FlatList, View} from 'react-native';
import {maskMoney} from '../../helpers';
import styleguide from '../../styleguide';
import {CustomText} from '../CustomText';
import {Icon} from '../Icon';
import styles from './styles';

const TransactionItem = ({value, description}) => (
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
      <CustomText type={'subtitle'}>
        {value < 0 ? 'Saque' : 'Depósito'}
      </CustomText>
      <CustomText>{description || 'Sem descrição'}</CustomText>
      <CustomText>{maskMoney(Math.abs(value))}</CustomText>
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

export default TransactionList;
