import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/rootReducer';

import auth from '@react-native-firebase/auth';

// Types
import { AuthState, AuthFields } from './types';

const initialState: AuthState = {
  error: null,
  isLoggedIn: false,
  status: 'idle',
  user: null,
}

export const loginAccount = createAsyncThunk<object, AuthFields>(
  'auth/login',
  async({ email, password }) => {
    await auth().signInWithEmailAndPassword(email, password);
    const user = auth().currentUser;
    return user;
  }
)

export const registerAccount = createAsyncThunk<object, AuthFields>(
  'auth/register',
  async({ email, password }) => {
    await auth().createUserWithEmailAndPassword(email, password);
    const user = auth().currentUser;
    return user;
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginAccount.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(loginAccount.fulfilled, (state, { payload }) => {
      state.error = null;
      state.isLoggedIn = true;
      state.status = 'idle';
      state.user = payload;
    })
    .addCase(loginAccount.rejected, (state, action) => {
      if (action.error) {
        state.error = action.error.message || 'Something went wrong'
      }
      state.status = 'idle';
    })
    .addCase(registerAccount.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(registerAccount.fulfilled, (state) => {
      state.error = null;
      state.isLoggedIn = true;
      state.status = 'idle';
    })
    .addCase(registerAccount.rejected, (state, action) => {
      if (action.error) {
        state.error = action.error.message || 'Something went wrong'
      }
      state.status = 'idle';
    })
  }
});

export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const errorSelector = (state: RootState) => state.auth.error;
export const userSelector = (state: RootState) => state.auth.user;
export const authStatusSelector = (state: RootState) => state.auth.isLoggedIn;

export const { logout } = authSlice.actions;

export default authSlice.reducer;