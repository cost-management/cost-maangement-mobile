export interface PostTransaction {
  id: string;
  title: string;
  folder_id: string;
  income_category: string;
  customer_id: string;
  amount: number;
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
  amount: string;
  timezone: number;
}

export interface TransactionsFolder {
  folder_id: string;
  transactions: ITransaction[];
}
