import React, { FC } from 'react';

// custom components
import ListItem from 'components/list_item/ListItem';
import { MainContainer } from 'components/containers';

// types
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigators/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Animation'>;

const LibraryScreen: FC<Props> = ({ navigation }) => {

  const handleOnAnimationPress = () => navigation.navigate( 'Animation');
  const handleOnToDoListPress = () => navigation.navigate( 'ToDoList');

  return (
    <MainContainer>
      <ListItem
        onPress={handleOnAnimationPress}
        title='Animation'
      />
      <ListItem
        onPress={handleOnToDoListPress}
        title='To-Do List (Firebase)'
      />
    </MainContainer>
  );
};

export default LibraryScreen;