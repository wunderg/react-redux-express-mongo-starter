[![Build Status](https://travis-ci.org/wunderg/ptcportal-demo.svg?branch=master)](https://travis-ci.org/wunderg/ptcportal-demo.svg)

# React-Redux-Express-Mongo-Starter-Kit

## Table of Contents

1. [Usage](#Usage)
2. [Development](#development)
3. [Production](#production)
4. [Test Data](#test-data)
5. [DB Schema](#db-schema)
6. [Server API](#server-api)


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

This will handle both client and server-side dependencies as outlined in [package.json](package.json).


Make sure that you have created `secrets.js` file that contains secret for JWT
and address for the mongoDB instance. Example below:

```sh
export default {
  mongo: 'mongodb://localhost/myLocalDatabaseInstance',
  jwt: 'mysecret'
};
```

after installation has completed
```sh
npm start
```

then navigate to `localhost:3001/`

## Production

// TODO add production instruction

## Usage

to be determnied

Make sure you have [Node](https://nodejs.org/en/) installed, and then from within the root directory:

Node 5 or above has to be installed

## Internal APIs
On any project there are many internal APIs. For ease of reference, for both the development team and future contributers, they are exhaustively documented here.

### Test

To run test:
```sh
npm test
```

To run test continiously:

```sh
npm test:watch
```


### DB Schema
There are two  types of objects stored in the database so far: datas and users. To minimize http requests on the server, when retrieved, all references to other objects will be fully populated with complete objects, not just is numbers. The schema are as follows:

####[User](server/controllers/datas/datasController.js)
```javascript
{
name       : ... //String
}
```

### Server API
The server uses a stateless RESTful API for all database access. It supports four HTTP verbs: `GET` for retrieving data, `POST` for creating new objects, `PUT` for updating existing objects, and `DELETE` for removing objects. *NOTE: All `POST`, `PUT`, and `DELETE` routes require an authorization token, with the exception of `POST /api/signup`.*

#### The Routes
Most routes follow a `/api/:data_type/:data_identifier` pattern. Note that when an aspect of a route is prefaced with a colon `:` it refers to a variable. Do not actually write down a colon in any api calls. Additionally, ALL of the following routes must be prefaced with `/api`.

```javascript
GET     api/datas                // Get list of data
POST    api/data                 // Add new data
DELETE  api/data/:id             // Delete the data

GET     api/users                 // Get list of user
POST    api/users                 // Add new user
DELETE  api/users/:id             // Delete the user
```

