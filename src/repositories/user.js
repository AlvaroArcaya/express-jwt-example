import { v4 as uuid } from 'uuid';

// Fake repository
const users = [];

function search(user) {
  return Object.keys(this).every((key) => user[key] === this[key]);
}

export const create = (newUser) => {
  const user = { id: uuid(), ...newUser };

  users.push(user);

  return user;
};

export const get = (filter) => users.find(search, filter);
