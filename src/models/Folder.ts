export enum Currency {
  uah = 'UAH',
  usd = 'USD',
}

export enum FolderRole {
  admin = 'ADMIN',
  user = 'USER',
}
export enum FolderRoleWithOwner {
  admin = 'ADMIN',
  user = 'USER',
  owner = 'OWNER',
}

export enum FolderType {
  card = 'CARD',
  cash = 'CASH',
}

export enum Skins {
  blue = 'BLUE',
  green = 'GREEN',
  red = 'RED',
}

export interface IFolder {
  id: string;
  owner_id: string;
  title: string;
  folder_type: FolderType;
  currency: Currency;
  balance: string;
  skin?: Skins;
}

export interface FolderCustomerMetaData {
  customer_id: string;
  customer_role: FolderRole;
}

export interface GetFolder {
  created_at: string;
  currency: Currency;
  folder_customer_metadata: FolderCustomerMetaData;
  folder_type: FolderType;
  id: string;
  nanos: number;
  skin: Skins;
  title: string;
  units: string;
}
