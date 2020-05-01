import React from 'react';
import {Animated, Text} from 'react-native';
import StyleGuide, {CustomText} from '../../styleguide';
import styles, {MaskedTextInput, TextInput} from './styles';

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

Input.defaultProps = {
  visible: true,
  masked: false,
  topSpacing: false,
};

export default Input;
