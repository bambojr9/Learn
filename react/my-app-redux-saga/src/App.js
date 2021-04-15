import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://reqres.in/api/users?page=1');
      const data = await result.data.data;
      console.log(result);
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Test1 />
        <Container>
          <Row>
            {data?.map((item) => (
              <Col key={item.id} className="m-3">
                <Test2 {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
