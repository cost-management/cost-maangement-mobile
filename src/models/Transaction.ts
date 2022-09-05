export interface PostTransaction {
  id: string;
  title: string;
  folder_id: string;
  income_category: string;
  customer_id: string;
  units: number;
  nanos: number;
  timezone: number;
  created_at: string;
}

export interface ITransaction {
  created_at: string;
  costumer_id: string;
  id: string;
  title: string;
  folder_id: string;
  income_category: string;
  units: string;
  nanos: string;
  timezone: number;
}

export interface TransactionsFolder {
  folder_id: string;
  transactions: ITransaction[];
}
