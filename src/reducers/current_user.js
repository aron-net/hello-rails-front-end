import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './user';

export const isAuthenticated = () => !!localStorage.getItem('token');

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return currentUsers;
};
