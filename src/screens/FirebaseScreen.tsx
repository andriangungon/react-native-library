import React, { FC } from 'react';
import { View } from 'react-native';

// custom components
import Button from 'components/common/button/button';
import { MainContainerCenter } from 'components/containers';

// types
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigators/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Firebase'>;

const AuthScreen: FC<Props> = ({ navigation }) => {

  const handleOnPress = (type: string) => navigation.push('Auth', { type });

  return (
    <MainContainerCenter>
      <View>
        <Button
          onPress={() => handleOnPress('login')}
          solid
          text='Login'
          type='primary'
        />
      </View>
      <View style={{ marginTop: 32 }}>
        <Button
          onPress={() => handleOnPress('register')}
          solid
          text='Register'
          type='primary'
        />
      </View>
    </MainContainerCenter>
  );
};

export default AuthScreen;