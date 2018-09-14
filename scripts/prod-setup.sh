#!/bin/bash

echo "1) Set env variables as 'prod'"
echo " - NODE_ENV=prod"
export NODE_ENV=prod

echo "2) Installing node dependencies"
npm i

echo "3) Setting services databases"
services=(identity)
for i in ${services[@]}; do
  export MICROSERVICE=${services[i]}
  echo " - Service / ${services[i]} "
  echo "  - Applying migrations "
  npm run migrate
  echo "  - Applying Seeders "
  npm run seed:undo
  npm run seed
done;

exit 0