# NodeJS + Express + Sequelize Boilerplate

This is a boilerplate to start a scalable application with nodejs and express and ready to use any ORM.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
* NodeJS v10.8
```

### Installing

A step by step series of examples that tell you how to get a development env running

1. If it is the first time running the project, `npm run devSetup` will set everything for you

```
npm run devSetup
```

2. To run the project use `npm run start` with the following optional params
  - -p port this will set the port to be used in your machine (default: 3000)

```
npm run start -- -p 3030
```

The expected output should be an info label

```
info: {
  "environment": "dev",
  "message": "Server running on dev in port 3030",
  "timestamp": "2018-09-14T04:43:01.559Z"
}
```

## Running the tests

To run tests you just need to run `npm run test`

### And coding eslint tests

To run eslint you just need to run `npm run lint`

## Deployment

Add additional notes about how to deploy this on a live system

1. You will need to run `npm run prodSetup` and this will set everything for you

```
npm run prodSetup
```

2. To run the project use `npm run start`, this should take the port from the environment variables (default: 3000)

```
npm run start
```

The expected output should be an info label
```
info: {
  "environment": "prod",
  "message": "Server running on dev in port 3000",
  "timestamp": "2018-09-14T04:43:01.559Z"
}
```

## Built With

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - Node.js web application framework
* [NPM](https://maven.apache.org/) - Dependency Management

## 3. Contribution Guidelines
Contributors should adhere to the git best practices.
Project includes commitizen integrated with husky and commitlint to implement guidelines used by [Angular](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). test

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this repository

## Authors

* **Uriel Contreras** - *Initial work*
