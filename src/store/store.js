import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import registration from '../reducers/registration';

const store = configureStore({
  reducer: { registration, user },
});
export default store;
