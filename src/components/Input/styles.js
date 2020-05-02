import {StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import styled from 'styled-components/native';

import StyleGuide from '../../styleguide';

export const TextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: StyleGuide.colors.text,
}))`
  background-color: white;
  border: 1px solid black;
  border-radius: 25px;
  font-family: Poppins-Regular;
  padding: 15px 19px;
  justify-content: center;
  margin: 0;
  ${(props) => (props.multiline ? 'min-height: 50px;' : 'height: 50px;')}
  max-height: 200px;
`;

export const MaskedTextInput = styled(TextInputMask).attrs(() => ({
  placeholderTextColor: StyleGuide.colors.text,
}))`
  background-color: white;
  border: 1px solid black;
  font-family: Poppins-Regular;
  border-radius: 25px;
  padding: 15px 19px;
  justify-content: center;
  margin: 0;
  ${(props) => (props.multiline ? 'min-height: 50px;' : 'height: 50px;')}
  max-height: 200px;
`;

export const DefaultInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: StyleGuide.colors.text,
}))`
  flex-grow: 1;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  ${(props) =>
    props.multiline
      ? `min-height: ${props.noMinHeight ? 19 : 37}px;
      max-height: ${props.noMinHeight ? 100 : 200}px;`
      : `height: ${props.noMinHeight ? 19 : 37}px;`}
`;

export default StyleSheet.create({
  title: {marginBottom: 5},
});
