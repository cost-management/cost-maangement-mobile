import React, {FC, useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {Auth} from 'aws-amplify';
import {FolderAPI} from '../services/FolderService';
//@ts-ignore
import {v4 as uuidv4} from 'uuid';

interface MainProps {
  setUser: any;
}

const Main: FC<MainProps> = ({setUser}) => {
  const [userId, setUserId] = useState<string>('');

  const getUserId = async () => {
    const {attributes} = await Auth.currentAuthenticatedUser();
    setUserId(attributes.sub);
  };

  useEffect(() => {
    getUserId();
  }, []);
  const {data} = FolderAPI.useGetAllFoldersQuery(userId);
  const [addFolder, {}] = FolderAPI.useAddFolderMutation();
  const signOutHandler = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const getHandler = async () => {
    const response = await data;
    console.log(response);
  };

  const postHandler = async () => {
    const response = await addFolder({
      body: {
        folder: {
          id: uuidv4(),
          owner_id: userId,
          title: 'test_folder',
          folder_type: 'CARD',
          currency: 'UAN',
        },
      },
      id: userId,
    });
    console.log(response);
  };

  return (
    <View>
      <Button title="SignOut" onPress={signOutHandler} />
      <Button title="Get folders" onPress={getHandler} />
      <Button title="Post folders" onPress={postHandler} />
    </View>
  );
};

export default Main;
