export interface expense {
  amount: number,
  created: number,
  id: number,
  key: string,
  modified: number,
  spentOn?: string,
  uid: string
}

export interface expenseResponse extends expense  {
  categoryKey: string
}