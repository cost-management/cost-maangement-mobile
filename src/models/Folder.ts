export enum Currency {
  uah = 'UAH',
  usd = 'USD',
}

export enum FolderRole {
  admin = 'ADMIN',
  user = 'USER',
  owner = 'OWNER',
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
  skin1 = 'skin1',
}
export enum Colors {
  dark = '#3D424A',
  grey = '#C0C0BE',
  green = '#BFC3AB',
  yellow = '#FFDF5F',
  orange = '#FEAE49',
  red = '#FF3027',
  pink = '#F2AFDF',
  purpure = '#A69BE9',
  blue = '#87A1FF',
}

export interface IFolder {
  created_at: string;
  currency: Currency;
  folder_customer_metadata: FolderCustomerMetaData[];
  folder_type: FolderType;
  id: string;
  skin: Skins;
  title: string;
  amount: string;
  color: Colors;
}

export interface FolderCustomerMetaData {
  customer_id: string;
  customer_role: FolderRole;
}

export interface PostFolder {
  id: string;
  title: string;
  folder_type: FolderType;
  currency: Currency;
  skin: Skins;
  amount: number;
  created_at: string;
}
