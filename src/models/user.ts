export interface User {
  id: any;
  name: string;
  age: number;
  status: boolean;
  address: {
    city: string;
    street: string;
    number: number;
  };
}
