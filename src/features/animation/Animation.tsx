import React, { FC } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListItem from 'components/list_item/ListItem';

// types
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigators/types';

const Animation: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleOnPress = () => navigation.navigate('BasicAnimation');

  return (
    <View>
      <ListItem
          onPress={handleOnPress}
          title='Basic Animation - Scale and Opacity'
        />
    </View>
  );
};

export default Animation;