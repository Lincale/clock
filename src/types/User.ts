export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Dob {
  age: number;
}

export interface User {
  name: Name;
  email: string;
  dob: Dob;
  nat: string;
}

export interface Users {
  results: User[];
}

export const initialUsers: Users = {
  results: [
    {
      name: {
        title: 'init',
        first: 'initial',
        last: 'value',
      },
      email: 'initialvalue@example.com',
      dob: {
        age: 100,
      },
      nat: '',
    },
  ],
};

export const isUser = (arg: any): arg is User =>
  typeof arg.name.title === 'string' &&
  typeof arg.name.first === 'string' &&
  typeof arg.name.last === 'string' &&
  typeof arg.email === 'string' &&
  typeof arg.dob.age === 'number' &&
  typeof arg.nat === 'string';

export const isUserArray = (arg: any): arg is Users =>
  Array.isArray(arg.results) && arg.results.every(isUser);
