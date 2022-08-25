import {Currency, FolderType, Skins, FolderRole} from './Folder';
export interface GetInvite {
  created_at: string;
  currency: Currency;
  fodler_type: FolderType;
  email: string;
  id: string;
  title: string;
  skin: Skins;
}

export interface PostInvite {
  invited_customer_email: string;
  folder_id: string;
  customer_role: FolderRole;
}

export interface PatchInvite {
  customer_role: FolderRole;
  invited_customer_id: string;
  folder_id: string;
}
