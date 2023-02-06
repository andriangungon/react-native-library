import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import colors from 'themes/colors';
import s from './styles';

import PropTypes from 'prop-types';

const Button = ({
  containerStyle,
  disabled,
  iconRight,
  isLoading,
  onPress,
  outline,
  solid,
  testID,
  text,
  type,
  full,
  visible,
}) => {
  if (!visible) return null;

  const color = colors[type];
  let buttonStyle;
  let textStyle;

  // Button style
  if (outline) buttonStyle = { borderColor: color };
  else if (solid) {
    let hex = disabled ? `${color}B3` : color;
    buttonStyle = { backgroundColor: hex, borderColor: hex };
  }
  else buttonStyle = { borderColor: '#fff' };

  // Button text style
  if (solid) textStyle = { color: '#fff' };
  else textStyle = { color };

  if (full) buttonStyle = s.buttonFull;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[s.buttonPrimary, buttonStyle, containerStyle]}
      testID={testID}
    >
      <View style={[s.horizontalVCenter, s.buttonMinHeight]}>
        {isLoading ? (
          <View style={[s.smGutterRight, { marginLeft: -10 }]}>
            <ActivityIndicator color='white' />
          </View>
        ): null}
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[s.buttonText, textStyle]}
          testID='button-text'
        >
          {text}
        </Text>
        {iconRight ? iconRight : null}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
  visible: true,
};

Button.propTypes = {
  containerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  iconRight: PropTypes.node,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  outline: PropTypes.bool,
  solid: PropTypes.bool,
  testID: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'active',
    'clear',
    'danger',
    'default',
    'muted',
    'primary',
    'success',
    'warning',
  ]),
  visible: PropTypes.bool,
};

export default Button;
