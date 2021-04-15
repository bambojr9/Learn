// import React from 'react';
import { Button } from 'antd';
import React from 'react';
import { useAuth } from '../../context/auth';
import { BASE_URL } from '../../services/base-http.service';

const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div>
      HomePage {BASE_URL}
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default HomePage;
