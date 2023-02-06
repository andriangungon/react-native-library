import React, { FC } from 'react';
import auth from '@react-native-firebase/auth';

// custom components
import Button from 'components/common/button/button';
import { MainContainer } from 'components/containers';
import { RegularText } from 'components/texts';

// Redux
import { useAppDispatch, useAppSelector } from 'app/store';
import { logout, userSelector } from 'features/auth/authSlice';

// types
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigators/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingScreen: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector);

  const handeOnLogoutPress = async () => {
    try {
      await auth().signOut();
      dispatch(logout());
    } catch(error) {
      console.log('logging out error', error);
    }
  }

  return (
    <MainContainer>
      <RegularText style={{ marginBottom: 16 }}>Hi, {user?.email}</RegularText>
      <Button
        onPress={handeOnLogoutPress}
        solid
        text='Logout'
        type='danger'
      />
    </MainContainer>
  );
};

export default SettingScreen;