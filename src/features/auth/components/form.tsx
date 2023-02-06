import _ from 'lodash';
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Field } from 'formik';

// Custom Components
import CustomInput from '../../../components/common/custom_input';
import Button from 'components/common/button/button';

interface Props {
  buttonTitle: string;
  errors: string | null;
  isLoading: boolean;
  handleSubmit: () => void;
}

const Form: FC<Props> = ({
  buttonTitle,
  errors,
  isLoading,
  handleSubmit,
}) => {

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye');

  const onPasswordViewPress = () => {
    setSecureTextEntry(!secureTextEntry);
    const iconName = icon === 'eye' ? 'eye-off' : 'eye';
    setIcon(iconName);
  };

  return (
    <View>
      <Field
        component={CustomInput}
        keyboardType='email-address'
        name='email'
        placeholder='Enter Email Address'
      />
      <Field
        component={CustomInput}
        icon={icon}
        name='password'
        onPress={onPasswordViewPress}
        placeholder='Enter Password'
        secureTextEntry={secureTextEntry}
      />
      <View style={{ marginTop: 16 }}>
        <Button
          disabled={!_.isEmpty(errors)}
          isLoading={isLoading}
          onPress={handleSubmit}
          solid
          text={buttonTitle}
          type='primary'
        />
      </View>
    </View>
  );
}

export default Form;