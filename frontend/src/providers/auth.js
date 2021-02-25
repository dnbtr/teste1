import React, { createContext, useCallback, useState } from 'react';
import api from 'api/api';

export const AuthContext = createContext(
  {}
);

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@teste1:token');
    const user = localStorage.getItem('@teste1:user');

    if (token && user) {
      // api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', { email, password });

    const { token, user } = response.data;

    const stringifiedUser = JSON.stringify(user);

    localStorage.setItem('@teste1:token', token);
    localStorage.setItem('@teste1:user', stringifiedUser);

    // api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@teste1:token');
    localStorage.removeItem('@teste1:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
