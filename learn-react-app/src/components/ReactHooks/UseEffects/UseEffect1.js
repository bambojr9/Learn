import React, { useState, useEffect } from 'react';
const axios = require('axios');
function UseEffect1(props) {
  const [em, setEm] = useState([]);
  useEffect(() => {
    async function fetchData() {
      axios
        .get('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1')
        .then(function (response) {
          const { data } = response;
          setEm(data.pagination);
        })
        .catch(function (error) {
          console.log('error');
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>UseEffect1</h1>
      {JSON.stringify(em)}
    </div>
  );
}

export default UseEffect1;
