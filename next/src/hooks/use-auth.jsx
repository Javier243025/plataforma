'use client'

import { useEffect, useState } from 'react';
import { usePlatform } from './use-platform';

const USER_ID_KEY = 'userId';

export const PENDING = 'PENDING';
export const AUTHENTICATED = 'AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';

export const useAuth = () => {
  const [userState, setUserState] = useState(PENDING);
  const { isBrowser } = usePlatform()

  const userId = isBrowser ? localStorage.getItem(USER_ID_KEY) : null;
  useEffect(() => {
    setUserState(userId ? AUTHENTICATED : UNAUTHENTICATED);
  }, [userId]);

  const login = (userId) => {
    localStorage.setItem(USER_ID_KEY, userId);
    setUserState(AUTHENTICATED);
  };

  const logout = () => {
    localStorage.removeItem(USER_ID_KEY);
    setUserState(UNAUTHENTICATED);
  };

  return { userState, login, logout };
};
