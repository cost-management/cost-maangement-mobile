export interface PostTransaction {
  id: string;
  title: string;
  folder_id: string;
  income_category: string;
  costumer_id: string;
  units: number;
  nanos: number;
  timezone: number;
}

export interface ITransaction {
  created_at: string;
  costumer_id: string;
  id: string;
  title: string;
  folder_id: string;
  income_category: string;
  units: number;
  nanos: number;
  timezone: number;
}
