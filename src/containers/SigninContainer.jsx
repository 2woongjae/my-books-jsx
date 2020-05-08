import React from 'react';
import Signin from '../components/Signin';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginStartAction,
  loginSuccessAction,
  loginFailAction,
} from '../redux/actions';

const SigninContainer = () => {
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const loginStart = () => {
    dispatch(loginStartAction());
  };
  const loginSuccess = (token) => {
    dispatch(loginSuccessAction(token));
  };
  const loginFail = (error) => {
    dispatch(loginFailAction(error));
  };
  return (
    <Signin
      loading={loading}
      error={error}
      loginStart={loginStart}
      loginSuccess={loginSuccess}
      loginFail={loginFail}
    />
  );
};

export default SigninContainer;
