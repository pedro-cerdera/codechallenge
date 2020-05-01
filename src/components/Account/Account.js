import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {CardContainer} from '../containers';
import {Icon} from '../Icon';
import {maskMoney} from '../../helpers';

import styles from './styles';

const Account = ({ammount, onBottomPress}) => (
  <CardContainer style={styles.container}>
    <View style={styles.header}>
      <Icon name={'fa5-wallet'} size={24} color={'black'} rightSpacing />
      <Text>{'Conta'}</Text>
    </View>
    <View style={styles.content}>
      <Text>{'Saldo disponível'}</Text>
      <Text testID={'ammount-value'}>{maskMoney(ammount)}</Text>
    </View>
    <TouchableOpacity
      style={styles.bottom}
      onPress={onBottomPress}
      testID={'bottom-button'}>
      <Icon name={'fa5-list'} size={18} color={'black'} rightSpacing />
      <Text style={styles.bottomText}>{'Veja suas transações'}</Text>
      <Icon name={'fa-angle-right'} size={24} color={'black'} />
    </TouchableOpacity>
  </CardContainer>
);

Account.prototype = {
  ammount: PropTypes.number.isRequired,
  onBottomPress: PropTypes.func.isRequired,
};

Account.defaultProps = {
  ammount: 0,
};

export default Account;
