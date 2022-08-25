import {useState} from 'react';
import {InviteAPI} from '../services/InviteService';
import {getInvite} from '../store/slices/inviteSlice';
import {useAppDispatch} from './redux';
const useStartApp = () => {
  const dispatch = useAppDispatch();
  const [getInviteQuery] = InviteAPI.useLazyGetInvitesQuery();

  const getInvites = async (id: string) => {
    const {data} = await getInviteQuery(id);
    dispatch(getInvite(data));
  };
  return {getInvites};
};

export default useStartApp;
