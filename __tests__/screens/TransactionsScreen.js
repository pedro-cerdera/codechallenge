import React from 'react';
import {render} from 'react-native-testing-library';
import {useSelector} from 'react-redux';
import TransactionsScreen from '../../src/screens/Transactions/TransactionsScreen';

jest.mock(
  '../../src/components/TransactionList/TransactionList',
  () => 'TransactionList',
);
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockAppState = {
  TransactionReducer: {
    ammount: 2000,
    transactions: [
      {
        value: -100,
        description: 'Transação 1',
      },
      {
        value: 2100,
        description: 'Transação 2',
      },
    ],
    isLoading: false,
    error: null,
  },
};

describe('Testing TransactionsScreen', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  test('Render all home screen components correctly', async () => {
    const {getByTestId} = render(<TransactionsScreen />);
    expect(getByTestId('transaction-list').props.transactions).toBe(
      mockAppState.TransactionReducer.transactions,
    );
  });

  test('renders correctly', () => {
    const tree = render(<TransactionsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
