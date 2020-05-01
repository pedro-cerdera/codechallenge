import {MaskService} from 'react-native-masked-text';

const TextHelpers = {
  maskMoney: (text = 0) =>
    MaskService.toMask('money', text, {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$ ',
      suffixUnit: '',
    }),
};

export const maskMoney = TextHelpers.maskMoney;

export default TextHelpers;
