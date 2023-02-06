import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

// custom components
import ListItem from 'components/list_item/ListItem';

// types
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigators/types';

const Animation: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleOnPress = () => navigation.navigate('BasicAnimation');

  return (
    <ListItem
        onPress={handleOnPress}
        title='Basic Animation - Scale and Opacity'
      />
  );
};

export default Animation;