# Todo Frontend

A frontend for the TODO app using React, Typescript, Vite, and Material UI

## Installation

```bash
yarn install
```

## Starting the frontend on port 5173

```bash
yarn dev
```

## Write up

0. The frontend uses vite which starts much faster the CRA. And is hardcoded to use the backend that is using port 3001.

1. It includes a single context to pass around TODO data and a hide completed state to multiple components

2. There are two major components in the application which are the table that lists the made todos and, a form component for users to add new TODOs

3. The Todo Table is made up multiple components that are in the TodoTable folder, and drops the prefix of TodoTable in the file name but is kept in the component name.

4. The ContainerTable is the component the envelops all the other components to make up the TodoTable: Table, Header, Body. The Header has very little functionality other than being able to sort the created time by ascending or descending. The Body has some functionality, like toRemove a todo and sort the todos since that critera is passed from the ContainerTable.

5. The Row component is for each single Todo and has the logic to update Todos to firebase if there are any changes like if the user wants to say it's completed.

6. The requests to the backend are in the api folder and is separated into each file for each call.

## License

[MIT](https://choosealicense.com/licenses/mit/)
