import React from 'react';
import {render, fireEvent, cleanup} from 'react-native-testing-library';

import {TransactionForm} from '../../src/components';

const mockSubmit = jest.fn();

jest.mock('../../src/components/Icon/Icon', () => 'Icon');

describe('Testing Transaction Form', () => {
  beforeEach(() => cleanup());

  it('make a incorrecly transcation', () => {
    const {getByTestId} = render(<TransactionForm onSubmit={mockSubmit} />);
    fireEvent.press(getByTestId('button'));

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it('make a correcly transaction', () => {
    const {getByTestId} = render(<TransactionForm onSubmit={mockSubmit} />);
    fireEvent.changeText(getByTestId('value'), '20');
    fireEvent.changeText(getByTestId('description'), 'Test');
    fireEvent.press(getByTestId('button'));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith(-20, 'Test');
  });

  it('renders correctly', () => {
    const tree = render(<TransactionForm onSubmit={mockSubmit} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
