import React, {createContext, FC, ReactNode} from 'react';
import {ICognitoUser} from '../models/Auth';
interface UserContextValue {
  user: ICognitoUser;
  setUser: (value: ICognitoUser | null) => void;
}

interface UserProviderProps {
  children: ReactNode;
  value: any;
}

export const UserContext = createContext<UserContextValue>(
  {} as UserContextValue,
);

const UserProvider: FC<UserProviderProps> = ({children, value}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserProvider;
