// contexts/auth.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';

//api here is an axios instance which has the baseURL set according to the env.
import api from '../services/api';
import axios from 'axios';
import BaseHttpService from '../services/base-http.service';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function loadUserFromCookies() {
  //     const token = Cookies.get('token');
  //     console.log('to:', token);
  //     if (token) {
  //       console.log(token);

  //       console.log("Got a token in the cookies, let's see if it is valid");
  //       api.defaults.headers.Authorization = `Bearer ${token}`;
  //       const { data: user } = await api.get('/api/users');

  //       console.log('user::::', user);
  //       debugger;

  //       if (user) setUser(user);
  //     }
  //     setLoading(false);
  //   }
  //   loadUserFromCookies();
  // }, []);

  const login = async (email, password) => {
    const { data: token } = await BaseHttpService.post('auth/signin', {
      email,
      password,
    });
    if (token) {
      const accessToken = token.accessToken;
      BaseHttpService.saveToken(accessToken);
      const { data: user } = await BaseHttpService.get('api/users');
      setUser(user);
      console.log('Got user', user);
      Router.push('/');
    }
    console.log('Success log!');
  };

  const logout = (email, password) => {
    BaseHttpService.removeToken();
    setUser(null);
    Router.push('/auth/sign-in');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  //   if (
  //     isLoading ||
  //     (!isAuthenticated && window.location.pathname !== '/auth/sign-in')
  //   ) {
  //     // return <LoadingScreen />;
  //     return <h1> LoadingScreen | LoadingScreen</h1>;
  //   }
  return children;
};
