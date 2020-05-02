import {MaskService} from 'react-native-masked-text';

const TextHelpers = {
  maskMoney: (text = 0) =>
    `${text < 0 ? '-' : ''}${MaskService.toMask('money', text, {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$ ',
      suffixUnit: '',
    })}`,
  unmaskMoney: (text = '') =>
    (text !== '' && Number(text.replace(/[^0-9,]+/g, '').replace(',', '.'))) ||
    0,
};

export const maskMoney = TextHelpers.maskMoney;

export const unmaskMoney = TextHelpers.unmaskMoney;

export default TextHelpers;
