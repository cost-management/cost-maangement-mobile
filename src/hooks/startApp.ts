import {useState} from 'react';
import {InviteAPI} from '../services/InviteService';
import {getInvite} from '../store/slices/inviteSlice';
import {useAppDispatch} from './redux';
import {FolderAPI} from '../services/FolderService';
import {refreshFolder} from '../store/slices/folderSlice';
const useStartApp = () => {
  const dispatch = useAppDispatch();
  const [getInviteQuery] = InviteAPI.useLazyGetInvitesQuery();
  const [getFoldersQuery] = FolderAPI.useLazyGetAllFoldersQuery();

  const getInvites = async (id: string) => {
    const {data} = await getInviteQuery(id);
    dispatch(getInvite(data));
  };

  const getFolders = async (id: string) => {
    const {data} = await getFoldersQuery(id);
    dispatch(refreshFolder(data!));
  };
  return {getInvites, getFolders};
};

export default useStartApp;
