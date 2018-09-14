const pick = require('lodash/pick');

const requiredKeys = {
  post: [
    'username',
    'email',
    'password',
  ],
  login: [
    'email',
    'password',
  ],
};

export const publicUserAttributes = [
  'id',
  'username',
  'email',
  'createdAt',
  'updatedAt',
];

export function getUserAttributes(user) {
  return pick(user, publicUserAttributes);
}

export function hasRequiredValues(values, target) {
  return (requiredKeys[target].every(key => values[key]));
}
