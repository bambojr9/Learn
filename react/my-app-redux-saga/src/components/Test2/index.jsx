import React from 'react';
import { Card } from 'react-bootstrap';

const Test2 = (props) => {
  const { avatar, email, first_name, last_name } = props;
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatar ? avatar : 'holder.js/100px180 '} />
        <Card.Body>
          <Card.Title>email: {email}</Card.Title>
          <Card.Text>first_name : {first_name}</Card.Text>
          <Card.Text>last_name : {last_name}</Card.Text>
          <a href="/" variant="primary">
            Go somewhere
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Test2;
