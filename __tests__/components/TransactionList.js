import React from 'react';
import {FlatList} from 'react-native';
import {render} from 'react-native-testing-library';

import {TransactionList} from '../../src/components';
import {TransactionItem} from '../../src/components/TransactionList/TransactionList';

jest.mock('../../src/components/Icon/Icon', () => 'Icon');

const mockDataTransaction = [
  {
    value: -100,
    description: 'Transação 1',
  },
  {
    value: 2100,
    description: 'Transação 2',
  },
];

describe('Testing Transactions', () => {
  test('Render all transactions Itens correctly', () => {
    const componentTree = render(
      <TransactionList transactions={mockDataTransaction} />,
    );

    expect(componentTree.UNSAFE_getAllByType(FlatList).length).toBe(1);
    expect(componentTree.UNSAFE_getAllByType(TransactionItem).length).toBe(
      mockDataTransaction.length,
    );
  });

  test('Test all transactions is correctly', () => {
    const {getAllByTestId} = render(
      <TransactionList transactions={mockDataTransaction} />,
    );

    expect(getAllByTestId('operation')[0].children[0]).toBe('Saque');
    expect(getAllByTestId('operation')[1].children[0]).toBe('Depósito');

    expect(getAllByTestId('value')[0].children[0]).toBe('R$ 100,00');
    expect(getAllByTestId('value')[1].children[0]).toBe('R$ 2.100,00');

    expect(getAllByTestId('description')[0].children[0]).toBe('Transação 1');
    expect(getAllByTestId('description')[1].children[0]).toBe('Transação 2');
  });

  test('renders correctly', () => {
    const tree = render(
      <TransactionList transactions={mockDataTransaction} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
