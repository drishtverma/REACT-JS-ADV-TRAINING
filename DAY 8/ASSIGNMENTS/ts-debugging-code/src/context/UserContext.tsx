import axios from 'axios';
import { FC, ReactNode, createContext, useState } from 'react';
export type UserContextType = {
  users: () => void;
  data: any[];
};
const UserContext = createContext<UserContextType | null>(null);

interface Props {
  children: React.ReactNode;
}
const ContextProvider: FC<Props> = ({ children }): JSX.Element => {
  debugger;
  const [data, setData] = useState([]);

  const users = () => {
    debugger;
    return axios
      .get('https://dummyjson.com/users')
      .then((res: any) => {
        debugger;
        setData(res.data.users);
        console.log(res.data);
      })
      .catch((err: any) => err);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext };
