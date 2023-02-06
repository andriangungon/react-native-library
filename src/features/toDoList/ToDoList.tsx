import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

// firebase
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// custom components
import { HorizontalContainer, MainContainer } from 'components/containers';
import { RegularText } from 'components/texts';
import AddToDoItem from './AddToDoItem';
import IconButton from 'components/common/icon_button';

// redux
import { useAppDispatch } from 'app/store';
import { deleteToDoItem } from './toDoListSlice';

// types
import { ToDoItem } from './types';

interface ItemProp {
  item: ToDoItem;
  index: number;
}
const ToDoList: FC = () => {
  const dispatch = useAppDispatch();
  const [list, setList] = useState([]);

  useEffect(() => {
    const uid = auth().currentUser?.uid;
    const toDoListRef = firestore().collection('todos').doc(uid).collection('list');

    const subscriber = toDoListRef
      .onSnapshot(documentSnapshot => {
        let data = [];
        documentSnapshot.forEach(doc => {
          console.log('doc data', doc)
          data.push({
            id: doc.id,
            ...doc.data()
          });
        })
        setList(data);
      });

    return () => subscriber();
  },[]);

  const handleOnDeleteItem = async (id: string) => await dispatch(deleteToDoItem(id))

  const keyExtractor = (item: ToDoItem, index: number) => `${item}-${index}`;

  const renderItem = ({ item, index}: ItemProp) => (
    <HorizontalContainer>
      <RegularText style={{ textTransform: 'capitalize'}}>{`${index + 1}. ${item.description}`}</RegularText>
      <IconButton
        name={'delete'}
        onPress={() => handleOnDeleteItem(item.id)}
      />
    </HorizontalContainer>
  );

  return (
    <MainContainer>
      <FlatList
        data={list}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    <AddToDoItem />
    </MainContainer>
  );
};

export default ToDoList;