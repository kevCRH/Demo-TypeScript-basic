// IPerson 
export interface IPerson {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string
  role: IRole;
}

// role
export interface IRole {
  role: string;
}