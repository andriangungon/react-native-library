import { combineReducers } from '@reduxjs/toolkit'

import authReducer from 'features/auth/authSlice';
import todoListReducer from 'features/toDoList/toDoListSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  toDoList: todoListReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;