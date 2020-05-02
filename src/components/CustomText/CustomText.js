import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import styleguide from '../../styleguide';

const CustomText = ({type, style, children, ...props}) => (
  <Text style={[styleguide.typografy[type], style]} {...props}>
    {children}
  </Text>
);

CustomText.propTypes = {
  type: PropTypes.oneOf(Object.keys(styleguide.typografy)),
};

CustomText.defaultProps = {
  type: 'text',
};

export default CustomText;
