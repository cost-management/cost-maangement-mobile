export enum Currency {
  uah = 'UAH',
  usd = 'USD',
}

export enum FolderRole {
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
  nanos: string;
  units: string;
  skin?: Skins;
}
