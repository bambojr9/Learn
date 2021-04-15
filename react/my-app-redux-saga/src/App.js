import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios('https://reqres.in/api/users?page=1');
    console.log(result);
    const data = await result.data.data;

    setData(data);
  }, []);
  return (
    <div className="App">
      <Test1 />
      <Container>
        <Row>
          {data?.map((item) => (
            <Col className="m-3">
              <Test2 />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
