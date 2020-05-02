import React from 'react';
import {Animated, Text, ViewPropTypes} from 'react-native';
import {MaskedTextInput, TextInput} from './styles';
import PropTypes from 'prop-types';

const Input = (props) => {
  const display = {display: props.visible ? 'flex' : 'none'};
  const marginTop = {
    marginTop: props.topSpacing ? 15 : 0,
  };
  const TextInputDef = props.masked ? MaskedTextInput : TextInput;

  return (
    <Animated.View style={[marginTop, props.containerStyle, display]}>
      <Text>{props.title}</Text>
      <TextInputDef {...props} ref={props.refProp} />
      {props.error && <Text>{props.error}</Text>}
    </Animated.View>
  );
};

Input.propTypes = {
  visible: PropTypes.bool,
  topSpacing: PropTypes.bool,
  masked: PropTypes.bool,
  type: PropTypes.oneOf(
    'credit-card',
    'cpf',
    'cnpj',
    'zip-code',
    'only-numbers',
    'money',
    'cel-phone',
    'datetime',
    'custom',
  ),
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
