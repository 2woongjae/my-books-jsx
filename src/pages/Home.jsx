import React from 'react';
import { Redirect } from 'react-router-dom';
import withToken from '../hocs/withToken';
import { Button } from 'antd';
import BooksContainer from '../containers/BooksContainer';

const Home = ({ token }) => {
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return (
    <div>
      <h1>Home</h1>
      <BooksContainer token={token} />
    </div>
  );
};

export default withToken(Home);
