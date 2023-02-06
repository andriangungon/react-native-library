import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/rootReducer';

// firebase
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// Types
import { TodoListState, ToDoItem } from './types';

const initialState: TodoListState = {
  error: null,
  records: [],
  status: 'idle',
}

const todoListCollection = firestore().collection('todos');

export const fetchTodoList = createAsyncThunk(
  'todoList/fetch',
  async() => {
    const uid = auth().currentUser?.uid;
    const todoListRef = (await todoListCollection.doc(uid).collection('list').get()).docs;

    return todoListRef;
  }
)

export const saveToDoItem = createAsyncThunk(
  'todoList/save',
  async(item: ToDoItem) => {
    const uid = auth().currentUser?.uid;
    await todoListCollection.doc(uid).collection('list')
      .add({
        description: item.description
      })
  }
)

export const deleteToDoItem = createAsyncThunk(
  'todoList/save',
  async(id: string) => {
    const uid = auth().currentUser?.uid;

    todoListCollection.doc(uid)
      .collection('list')
      .doc(id)
      .delete();
  }
)

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoList.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodoList.fulfilled, (state, { payload }) => {
        state.error = null;
        state.records = payload;
        state.status = 'idle';
      })
      .addCase(fetchTodoList.rejected, (state, action) => {
        if (action.error) {
          state.error = action.error.message || 'Something went wrong';
        }
        state.status = 'idle';
      });
  },
});

export const todoListSelector = (state: RootState) => state.toDoList.records;

export default toDoListSlice.reducer;