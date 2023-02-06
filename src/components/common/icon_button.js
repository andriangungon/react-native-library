import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import s from 'themes/styles';

import PropTypes from 'prop-types';

const IconButton = ({
  color,
  disabled,
  name,
  onPress,
  size,
  style,
}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={style ? style : s.button}
  >
    <Icon color={color} name={name} size={size} />
  </TouchableOpacity>
);

IconButton.defaultProps = {
  color: '#333333',
  name: 'close',
  size: 18,
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.number,
  style: ViewPropTypes.style,
};
export default IconButton;
