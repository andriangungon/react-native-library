import React, { Fragment } from 'react';
import { Text, TextInput, View } from 'react-native';

import IconButton from './icon_button';

import PropTypes from 'prop-types';

import colors from 'themes/colors';
import s from 'themes/styles';

const ICON_SIZE = 20;
const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    icon,
    onPress,
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  const isPassword = name === 'password';

  const renderInput = (style) => {
    return (
      <TextInput
        autoCapitalize='none'
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        onChangeText={(text) => onChange(name)(text)}
        style={[
          style ? style : s.textInput,
          hasError && s.errorInput,
        ]}
        value={value}
        {...inputProps}
      />
    );
  };

  return (
    <Fragment>
      {hasError && <Text style={s.errorText}>{errors[name]}</Text>}
      {isPassword ? (
        <View style={[s.horizontalStretch, s.textInput]}>
          {renderInput([s.textInput2, {width: '85%'}])}
          <IconButton
            color={colors.gray1}
            name={icon}
            onPress={onPress}
            size={ICON_SIZE}
            style={s.searchBarCloseButton}
          />
        </View>
      ) : renderInput()}
    </Fragment>
  );
};

CustomInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

export default CustomInput;