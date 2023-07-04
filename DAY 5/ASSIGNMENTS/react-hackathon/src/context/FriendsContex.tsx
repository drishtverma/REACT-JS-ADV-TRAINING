import axios from 'axios';
import { FC, createContext, useState } from 'react';
export type FriendContextType = {
  data: any[];
  friends: () => void;
  profileData: any;
  friendDetails: (id: String) => any;
  addFriends: (data: any) => any;
  friendList: () => void;
  friendsList: any;
  removeFriend: (id: String) => any;
  localData: any;
  localStorageData: (data: any) => void;
};
const FriendsContext = createContext<FriendContextType | null>(null);
const APPID = '64a2a10b6fa559f2201d687e';

const ContextProvider: FC<any> = ({ children }: any) => {
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [friendsList, setFriendList] = useState([]);
  const [localData, setLocalData] = useState<any>({ auth: false });
  const apiCall = axios.create({
    headers: { 'Content-type': 'application/json', 'app-id': APPID },
  });
  const friends = () => {
    return apiCall
      .get('https://dummyapi.io/data/v1/user?limit=20')
      .then((res: any) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err: any) => err);
  };
  const friendDetails = (id: String) => {
    return apiCall
      .get(`https://dummyapi.io/data/v1/user/${id}`)
      .then((res: any) => {
        setProfileData(res.data);
        console.log(res.data);
      })
      .catch((err: any) => err);
  };
  const addFriends = (data: any) => {
    return apiCall
      .post(`http://localhost:3002/friend-list`, data)
      .then((res: any) => res)
      .catch((err: any) => err);
  };

  const friendList = () => {
    return apiCall
      .get(`http://localhost:3002/friend-list`)
      .then((res: any) => setFriendList(res.data))
      .catch((err: any) => err);
  };

  const removeFriend = (id: any) => {
    return apiCall
      .delete(`http://localhost:3002/friend-list/${id}`)
      .then((res: any) => res)
      .catch((err: any) => err);
  };

  const localStorageData = (data: any) => {
    setLocalData(data);
  };

  return (
    <FriendsContext.Provider
      value={{
        data,
        friends,
        profileData,
        friendDetails,
        addFriends,
        friendList,
        friendsList,
        removeFriend,
        localData,
        localStorageData,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export { ContextProvider, FriendsContext };
