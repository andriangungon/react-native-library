import React, { FC } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

// Custom components
import { MainContainer } from 'components/containers';
import AuthForm from './components/form';
import { SmallText } from 'components/texts';

// Redux
import { useAppDispatch, useAppSelector } from 'app/store';
import { errorSelector, loginAccount, registerAccount } from './authSlice';

import { SignInValidationSchema } from './schemas/auth_schema';

// Types
import { AuthFields } from './types';

import styles from './styles';
import colors from 'themes/colors';

interface Props {
  type: string;
}

const LOGIN = 'login';

const Auth: FC<Props> = ({ type }) => {
  console.log('type', type);

  const dispatch = useAppDispatch();
  const initValues: AuthFields = { email: '', password: '' };

  const error = useAppSelector(errorSelector);

  const handleSubmitPress = async (values: AuthFields) => {
    try {
      if (type === LOGIN)
        await dispatch(loginAccount(values));
      else
        await dispatch(registerAccount(values));
    } catch (error) {
      console.log('authentication error', error);
    }
  };

  return (
      <MainContainer>
        <View style={styles.loginContainer}>
          <Formik
              initialValues={initValues}
              onSubmit={handleSubmitPress}
              validationSchema={SignInValidationSchema}
            >
              {(props) => (
                <AuthForm
                  buttonTitle={type}
                  errors={null}
                  isLoading={false}
                  handleSubmit={props.handleSubmit}
                />
              )}
          </Formik>
          {error ? (
            <SmallText style={{ color: colors.danger, marginTop: 16 }}>{error}</SmallText>
          ) : null}
        </View>
      </MainContainer>
  );
};

export default Auth;