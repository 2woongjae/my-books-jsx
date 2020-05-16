import React from 'react';
import Signin from '../components/Signin';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunkAction } from '../redux/modules/auth';

const SigninContainer = () => {
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  function loginThunk(email, password) {
    dispatch(loginThunkAction(email, password));
  }

  return <Signin loading={loading} error={error} loginThunk={loginThunk} />;
};

export default SigninContainer;
