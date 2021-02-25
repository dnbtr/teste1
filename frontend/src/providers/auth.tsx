import React, { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  company: { id: string; name: string };
}

interface Credentials {
  email: string;
  password: string;
}

export type AuthContextData = {
  user: User;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
};

interface AuthData {
  token: string;
  user: User;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@probe:token');
    const user = localStorage.getItem('@probe:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const login = useCallback(async ({ email, password }: Credentials) => {
    const response = await api.post('/sessions/user', { email, password });

    const { token, user } = response.data;

    const stringifiedUser = JSON.stringify(user);

    localStorage.setItem('@probe:token', token);
    localStorage.setItem('@probe:user', stringifiedUser);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@probe:token');
    localStorage.removeItem('@probe:user');

    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
