import React from 'react';
import { Redirect } from 'react-router-dom';
import withToken from '../hocs/withToken';
import { Button } from 'antd';

const Home = ({ token, history }) => {
  console.log('Home', token);
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={click}>Logout</Button>
    </div>
  );

  function click() {
    localStorage.removeItem('token');
    history.push('/signin');
  }
};

export default withToken(Home);
