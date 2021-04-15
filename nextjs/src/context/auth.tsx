// contexts/auth.js

import Cookies from 'js-cookie';
import Router from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
//api here is an axios instance which has the baseURL set according to the env.
import api from '../services/api';
import BaseHttpService from '../services/base-http.service';

interface IAppContext {
  user: any;
  handleSetUser: (object: any) => void;
  loading: boolean;
  onLoading: () => void;
  offLoading: () => void;
  isAuthenticated: boolean;
  logout: () => void;
}

const defaultAppContextValue: IAppContext = {
  user: null,
  handleSetUser: (_object: any) => {},
  loading: true,
  onLoading: () => {},
  offLoading: () => {},
  isAuthenticated: false,
  logout: () => {},
};

const AuthContext = createContext<IAppContext>(defaultAppContextValue);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleSetUser = (object: any) => setUser(object);
  const [loading, setLoading] = useState(true);
  const onLoading = () => setLoading(true);
  const offLoading = () => setLoading(false);
  useEffect(() => {
    async function loadUserFromCookies() {
      console.log(`-------------------------------------------------`);
      const token = await Cookies.get('token');
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await api.get('/api/users');

        console.log('user::::', user);
        // debugger;
        setUser(user);
      }
      setLoading(false);
      console.log('sau Khi set user: ', loading);
    }
    loadUserFromCookies();
  }, [loading]);
  //--------------------------------------------------------------
  // const login = async (email: string, password: string) => {
  //   const { data: token } = await BaseHttpService.post('auth/signin', {
  //     email,
  //     password,
  //   });
  //   if (token) {
  //     const accessToken = token.accessToken;
  //     BaseHttpService.saveToken(accessToken);
  //     const { data: user } = await BaseHttpService.get('api/users');
  //     setUser(user);
  //     console.log('Got user', user);
  //     return user;
  //   }
  // };

  const logout = () => {
    BaseHttpService.removeToken();
    setUser(null);
    Router.push('/auth/sign-in');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSetUser,
        loading,
        onLoading,
        offLoading,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const ProtectRoute = ({ children }) => {
  // if (
  //   loading ||
  //   (!isAuthenticated && window.location.pathname !== '/auth/sign-in')
  // ) {
  //   // return <LoadingScreen />;
  //   return <h1> LoadingScreen | LoadingScreen</h1>;
  // }
  return children;
};
