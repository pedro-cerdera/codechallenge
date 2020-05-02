import React from 'react';
import {Text} from 'react-native';
import styleguide from '../../styleguide';
import PropTypes from 'prop-types';

const Typografy = {
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: styleguide.colors.moon600,
  },
  text: {fontSize: 18, color: styleguide.colors.moon500},
};

const CustomText = ({type, style, children, ...props}) => (
  <Text style={[Typografy[type], style]} {...props}>
    {children}
  </Text>
);

CustomText.propTypes = {
  type: PropTypes.oneOf(Object.keys(Typografy)).isRequired,
};

CustomText.defaultProps = {
  type: 'text',
};

export default CustomText;
