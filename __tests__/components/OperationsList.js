import React from 'react';
import {FlatList} from 'react-native';
import {render, fireEvent} from 'react-native-testing-library';

import {OperationsList} from '../../src/components';
import {OperationItem} from '../../src/components/OperationsList/OperationsList';

jest.mock('../../src/components/Icon/Icon', () => 'Icon');

const mockPress = jest.fn();

const mockDataOperations = [
  {
    id: '1',
    icon: 'operation-1-icon',
    title: 'Operation-1',
    onPress: () => mockPress('operation-1'),
  },
  {
    id: '2',
    icon: 'operation-2-icon',
    title: 'Operation-2',
    onPress: () => mockPress('operation-2'),
  },
];

describe('Testing Operations', () => {
  test('Render all operations Itens correctly', () => {
    const componentTree = render(
      <OperationsList operations={mockDataOperations} />,
    );

    expect(componentTree.UNSAFE_getAllByType(FlatList).length).toBe(1);
    expect(componentTree.UNSAFE_getAllByType(OperationItem).length).toBe(
      mockDataOperations.length,
    );
  });

  test('Test click operation item', () => {
    const {getByTestId} = render(
      <OperationsList operations={mockDataOperations} />,
    );

    fireEvent.press(getByTestId('Operation-1'));
    expect(mockPress).toHaveBeenCalledWith('operation-1');
    expect(mockPress).toHaveBeenCalledTimes(1);
    expect(mockPress).not.toHaveBeenCalledWith('operation-2');
  });

  test('renders correctly', () => {
    const tree = render(
      <OperationsList operations={mockDataOperations} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
