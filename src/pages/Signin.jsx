import React from 'react';
import { Redirect } from 'react-router-dom';
import withToken from '../hocs/withToken';
import SigninContainer from '../containers/SigninContainer';

const SigninPage = ({ token }) => {
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
};

export default withToken(SigninPage);
