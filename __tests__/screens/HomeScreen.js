import React from 'react';
import {render} from 'react-native-testing-library';
import {useSelector} from 'react-redux';
import HomeScreen from '../../src/screens/Home/HomeScreen';

jest.mock('../../src/components/Account/Account', () => 'Account');

jest.mock('../../src/assets/images/logo.png', () => ({
  uri: 'logo.png',
}));
jest.mock(
  '../../src/components/OperationsList/OperationsList',
  () => 'OperationsList',
);
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockNavigationPress = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: (name) => mockNavigationPress(name),
}));

const mockAppState = {
  TransactionReducer: {
    ammount: 0,
    transactions: [],
    isLoading: false,
    error: null,
  },
};

describe('Testing HomeScreen', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  test('Render all home screen components correctly', async () => {
    const {getByTestId} = render(<HomeScreen />);
    expect(getByTestId('account').props.ammount).toBe(0);
  });

  test('renders correctly', () => {
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
