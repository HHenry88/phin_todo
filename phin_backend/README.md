# Todo Backend

A backend for the TODO app using Express, Typescript and Firebase

## Local set up

Create a `.env` file with these environment variables:

1. PORT=3001
2. FIREBASE_API_KEY=<your_firebase_api_key>

## Installation

```bash
yarn install
```

## Starting the dev server on nodemon

```bash
yarn dev
```

## Write up

0. The ENVs are set in an .env file in the root directory that are used backend codebase. The port for the backend uses :3001, which the frontend is also currently hardcoded to use when sending requests to the backend. The api key is the one that's given from Google cloud. The firebase database that is used by this backend is set to development mode  so it's currently publically able to be read / write.

1. The entry point of the backend is index.ts. From there the set up envs, middleware, and the routes are made.

2. Only 4 routes needed so I didn't modularize the routes into separate folders/files. Each route has a simple controller that is dedicated to a firebase method.

3. The firebase config is initialized in the config directory and is used in the service that will be passed around to controllers.

## TODO

- [] Deploy on Google Cloud
- [] Add Authentication where a user has their own private todo list

## License

[MIT](https://choosealicense.com/licenses/mit/)
