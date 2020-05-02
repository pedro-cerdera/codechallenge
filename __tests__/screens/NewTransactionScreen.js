import React from 'react';
import {fireEvent, render} from 'react-native-testing-library';
import {Types} from '../../src/reducers/transaction';
import NewTransactionScreen from '../../src/screens/NewTransaction/NewTransactionScreen';

jest.mock('../../src/assets/images/logo.png', () => ({
  uri: 'logo.png',
}));
jest.mock(
  '../../src/components/OperationsList/OperationsList',
  () => 'OperationsList',
);

const mockDispacth = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispacth,
}));

const mockNavigation = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockNavigation,
  }),
}));

describe('Testing HomeScreen', () => {
  it('renders correctly', () => {
    const tree = render(<NewTransactionScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('new request', () => {
    const {getByTestId} = render(<NewTransactionScreen />);
    fireEvent.changeText(getByTestId('value'), '20');
    fireEvent.changeText(getByTestId('description'), 'Test');
    fireEvent.press(getByTestId('button'));

    expect(mockDispacth).toHaveBeenCalledWith({
      type: Types.TRANSCATION_ADD,
      payload: {
        value: -20,
        description: 'Test',
      },
    });
    expect(mockDispacth).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledTimes(1);
  });
});
