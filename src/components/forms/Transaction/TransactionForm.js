import PropTypes from 'prop-types';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import {unmaskMoney} from '../../../helpers';
import {useForm} from '../../../hooks';
import {CardContainer} from '../../containers';
import {CustomText} from '../../CustomText';
import {Input} from '../../Input';
import styles from './styles';

const SwitchInput = ({onValueChange, value, values = []}) => (
  <View style={styles.switchContainer}>
    <CustomText>{values[0]}</CustomText>
    <Switch onValueChange={onValueChange} value={value} testID={'switch'} />
    <CustomText>{values[1]}</CustomText>
  </View>
);

const Button = ({onPress, children}) => (
  <TouchableOpacity
    style={styles.buttonContainer}
    onPress={onPress}
    testID={'button'}>
    <CustomText style={styles.buttonText}>{children}</CustomText>
  </TouchableOpacity>
);

const TransactionForm = ({onSubmit}) => {
  const Form = useForm({
    initialValues: {
      value: 0,
      description: '',
      isDeposit: false,
    },
    onSubmit: (values, errors) => {
      if (!Object.keys(errors).length) {
        const value = values.value * (values.isDeposit ? 1 : -1);
        onSubmit(value, values.description);
      }
    },
    validate: (values) => {
      const errors = {};
      if (values.description?.trim() === '') {
        errors.description = 'Descrição inválida';
      }
      if (values.value <= 0) {
        errors.value = 'Valor inválido';
      }
      return errors;
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}>
      <CardContainer style={styles.cardContainer}>
        <ScrollView style={styles.scrollContainer} testID={"scroll-transaction"}>
          <Input
            testID={'value'}
            masked
            type={'money'}
            onChangeText={(text) =>
              Form.handleChange(unmaskMoney(text), 'value')
            }
            value={Form.values.value}
            error={Form.errors.value}
            keyboardType={'numeric'}
            title={'Valor'}
            placeholder={'R$ 100,00'}
          />
          <Input
            testID={'description'}
            multiline
            topSpacing
            numberOfLines={2}
            onChangeText={(text) => Form.handleChange(text, 'description')}
            value={Form.values.description}
            error={Form.errors.description}
            keyboardType={'default'}
            title={'Descrição'}
            placeholder={'Ex.: Transferência bancária'}
          />
          <SwitchInput
            onValueChange={() =>
              Form.handleChange(!Form.values.isDeposit, 'isDeposit')
            }
            value={Form.values.isDeposit}
            values={['Saque', 'Depósito']}
          />
        </ScrollView>
        <Button onPress={Form.handleSubmit}>{'Fazer Transação'}</Button>
      </CardContainer>
    </KeyboardAvoidingView>
  );
};

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TransactionForm;
