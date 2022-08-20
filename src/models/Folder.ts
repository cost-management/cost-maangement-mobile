export enum Currency {
  uah = 'UAH',
  usd = 'USD',
}

export enum FolderType {
  card = 'CARD',
  cash = 'CASH',
}

export interface IFolder {
  id: string;
  owner_id: string;
  title: string;
  folder_type: FolderType;
  currency: Currency;
  balance: string;
}
