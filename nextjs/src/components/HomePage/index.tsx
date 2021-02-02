// import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../services/base-http.service';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { useAuth } from '../../context/auth';

const HomePage = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div>
      HomePage {BASE_URL}
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default HomePage;
