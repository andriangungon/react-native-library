import React, { FC } from 'react';
import { View } from 'react-native';

import ListItem from 'components/list_item/ListItem';

import s from 'themes/styles';

// types
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigators/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Animation'>;

const LibraryScreen: FC<Props> = ({ navigation }) => {

  const handleOnPress = () => navigation.navigate('Animation')

  return (
    <View style={s.view}>
      <ListItem
        onPress={handleOnPress}
        title='Animation'
      />
    </View>
  );
};

export default LibraryScreen;