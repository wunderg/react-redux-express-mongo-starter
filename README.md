# PTC Portal

## Table of Contents

1. [Team](#team)
2. [Usage](#Usage)
3. [Development](#development)
4. [Contributing](#contributing)
5. [Test Data](#test-data)
6. [DB Schema](#db-schema)
7. [Server API](#server-api)

## Team

 to be determined

## Development

### Installing Dependencies

From within the root directory:

```sh
npm run dev-install
```

This will handle both client and server-side dependencies as outlined in [package.json](package.json).

after installation has completed
```sh
npm run start-dev
```

then navigate to `localhost:3001/`

## Usage

to be determnied

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
Make sure you have [Node](https://nodejs.org/en/) installed, and then from within the root directory:

## Internal APIs
On any project there are many internal APIs. For ease of reference, for both the development team and future contributers, they are exhaustively documented here.

### Test

```sh
npm test
```

TODO//
Additionally, this repo contains a dummy-data file that will help you test feel
and look. To add records to the database just run:
```sh
./dummy-data.sh
```

### DB Schema
There is one types of objects stored in the database so far: students. To minimize http requests on the server, when retrieved, all references to other objects will be fully populated with complete objects, not just is numbers. The schema are as follows:

####[User](server/controllers/students/studentsController.js)
```javascript
{
name       : ... //String
email      : ... //String
lesson     : ... //String
level      : ... //String
interview  : ... //String
decision   : ... //String
}
```

### Server API
The server uses a stateless RESTful API for all database access. It supports four HTTP verbs: `GET` for retrieving data, `POST` for creating new objects, `PUT` for updating existing objects, and `DELETE` for removing objects. *NOTE: All `POST`, `PUT`, and `DELETE` routes require an authorization token, with the exception of `POST /api/signup`.*

#### The Routes
Most routes follow a `/api/:data_type/:data_identifier` pattern. Note that when an aspect of a route is prefaced with a colon `:` it refers to a variable. Do not actually write down a colon in any api calls. Additionally, ALL of the following routes must be prefaced with `/api`.

```javascript
GET     api/students                // Get list of students
POST    api/student                 // Add new student
DELETE  api/student/:id             // Delete the student
```

