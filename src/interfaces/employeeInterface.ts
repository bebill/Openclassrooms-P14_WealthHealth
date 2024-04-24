export interface Employee {
  firstName: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  department: string;
}
