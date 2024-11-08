export interface IEmployee {
  id: number;
  image: string | null;
  full_name: string;
  email: string;
  role: string;
  manager_id: number;
}
