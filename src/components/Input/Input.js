import PropTypes from 'prop-types';
import React from 'react';
import {Animated, ViewPropTypes} from 'react-native';
import {CustomText} from '../CustomText';
import {MaskedTextInput, TextInput} from './styles';

const Input = (props) => {
  const display = {display: props.visible ? 'flex' : 'none'};
  const marginTop = {
    marginTop: props.topSpacing ? 15 : 0,
  };
  const TextInputDef = props.masked ? MaskedTextInput : TextInput;

  return (
    <Animated.View style={[marginTop, props.containerStyle, display]}>
      <CustomText>{props.title}</CustomText>
      <TextInputDef {...props} ref={props.refProp} />
      {props.error && <CustomText>{props.error}</CustomText>}
    </Animated.View>
  );
};

Input.propTypes = {
  visible: PropTypes.bool,
  topSpacing: PropTypes.bool,
  masked: PropTypes.bool,
  type: PropTypes.oneOf([
    'credit-card',
    'cpf',
    'cnpj',
    'zip-code',
    'only-numbers',
    'money',
    'cel-phone',
    'datetime',
    'custom',
  ]),
  containerStyle: ViewPropTypes.style,
  title: PropTypes.string.isRequired,
  refProp: PropTypes.func,
  error: PropTypes.string,
  noMinHeight: PropTypes.bool,
};

Input.defaultProps = {
  visible: true,
  masked: false,
  topSpacing: false,
};

export default Input;
