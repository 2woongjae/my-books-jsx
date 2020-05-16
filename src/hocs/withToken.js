import React from 'react';

export default function withToken(Component) {
  const NewComponent = (props) => {
    const token = localStorage.getItem('token');

    console.log(token);

    return <Component {...props} token={token} />;
  };

  NewComponent.displayName = `withToken(${Component.displayName})`;

  return NewComponent;
}
