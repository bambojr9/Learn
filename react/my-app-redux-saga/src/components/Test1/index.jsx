import React from 'react';
import { Alert } from 'react-bootstrap';
const ListAlert = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
];
const Test1 = () => {
  return (
    <div style={{ margin: '2rem', color: 'orange' }}>
      {ListAlert.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
};

export default Test1;
