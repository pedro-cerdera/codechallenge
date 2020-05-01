import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import {Account} from '../../src/components';

const mockPress = jest.fn();
const mockMaskMoney = jest.fn();

jest.mock('../../src/components/Icon/Icon', () => 'Icon');
jest.mock('../../src/helpers/Text', () => ({
  maskMoney: (v) => mockMaskMoney(v),
}));

describe('Testing Account', () => {
  test('Render all account parts correctly', () => {
    render(<Account ammount={100} onBottomPress={mockPress} />);
    expect(mockMaskMoney).toHaveBeenCalledWith(100);
    expect(mockMaskMoney).toHaveBeenCalledTimes(1);
    expect(mockPress).not.toHaveBeenCalled();
  });

  test('Test click operation item', () => {
    const {getByTestId} = render(
      <Account ammount={200} onBottomPress={mockPress} />,
    );

    fireEvent.press(getByTestId('bottom-button'));
    expect(mockPress).toHaveBeenCalledTimes(1);
  });

  test('renders correctly', () => {
    const tree = render(
      <Account ammount={100} onBottomPress={mockPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
