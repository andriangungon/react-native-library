import React, { FC } from 'react';

// custom components
import { MainContainer } from 'components/containers';
import ToDoList from 'features/toDoList/ToDoList';

const ToDoListScreen: FC = () => {
  return (
    <MainContainer>
      <ToDoList />
    </MainContainer>
  );
};

export default ToDoListScreen;