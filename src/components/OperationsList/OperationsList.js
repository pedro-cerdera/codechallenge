import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import {Icon} from '../Icon';

import styles from './styles';

export const OperationItem = ({icon, title, onPress}) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={onPress}
    testID={title}>
    <Icon name={icon} size={24} color={'white'} />
    <Text style={styles.itemTitle}>{title}</Text>
  </TouchableOpacity>
);

const OperationsList = ({operations}) => (
  <FlatList
    data={operations}
    renderItem={({item}) => <OperationItem {...item} />}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    keyExtractor={(item) => item.id}
    horizontal
    style={styles.container}
  />
);

OperationsList.propTypes = {
  operations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      onPress: PropTypes.func.isRequired,
    }).isRequired,
  ),
};

OperationsList.defaultProps = {
  operations: [],
};

export default OperationsList;
