import React, { FC } from 'react';

// custom components
import { MainContainer } from 'components/containers';
import Auth from 'features/auth/auth';

// types
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigators/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthScreen: FC<Props> = ({ route }) => {
  const type = route?.params?.type;

  return (
    <MainContainer>
      <Auth type={type} />
    </MainContainer>
  );
};

export default AuthScreen;