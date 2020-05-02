import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {CardContainer} from '../containers';
import {Icon} from '../Icon';
import {maskMoney} from '../../helpers';

import styles from './styles';
import {CustomText} from '../CustomText';

const Account = ({ammount, onBottomPress}) => (
  <CardContainer style={styles.container}>
    <View style={styles.header}>
      <Icon name={'fa5-wallet'} size={24} color={'black'} rightSpacing />
      <CustomText>{'Conta'}</CustomText>
    </View>
    <View style={styles.content}>
      <CustomText>{'Saldo disponível'}</CustomText>
      <CustomText testID={'ammount-value'} type={'big'}>
        {maskMoney(ammount)}
      </CustomText>
    </View>
    <TouchableOpacity
      style={styles.bottom}
      onPress={onBottomPress}
      testID={'bottom-button'}>
      <Icon name={'fa5-list'} size={18} color={'black'} rightSpacing />
      <CustomText style={styles.bottomText} type={'small'}>
        {'Veja suas transações'}
      </CustomText>
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
