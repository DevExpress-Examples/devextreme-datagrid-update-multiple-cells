export interface Customer {
  CustomerID: number;
  CustomerName: string;
  Address: string;
  Phone: string;
}

export interface Employee {
  ID: number;
  CustomerID: number;
  Address: string;
  Phone: string;
}
