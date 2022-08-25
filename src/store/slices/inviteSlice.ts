import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetInvite} from '../../models/Invite';

interface InvitesState {
  invites: GetInvite[];
}

const initialState: InvitesState = {
  invites: [],
};

const invitesSlice = createSlice({
  name: 'invites',
  initialState,
  reducers: {
    getInvite: (state, actions: PayloadAction<GetInvite[]>) => {
      state.invites = actions.payload;
    },
    deleteInvite: (state, actions: PayloadAction<string>) => {
      state.invites = state.invites.filter(
        invite => invite.id !== actions.payload,
      );
    },
  },
});

export const {getInvite, deleteInvite} = invitesSlice.actions;

export default invitesSlice.reducer;
