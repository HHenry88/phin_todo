import "./App.css";
import { TodoTableContainer as TodoTable } from "./components/TodoTable/Container";
import AddTodo from "./components/AddTodo";
import { useTodosContext } from "./components/TodosContext";
import { useEffect } from "react";
import getTodos from "./api/getTodos";
import { Box, Checkbox, Typography } from "@mui/material";

function App() {
  const { setTodos, hideCompleted, setHideCompleted } = useTodosContext();

  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  return (
    <div className="App">
      <Typography variant="h2" mb={2}>
        Henry Han Todo
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={hideCompleted}
          sx={{ color: "white" }}
          onClick={() => setHideCompleted(!hideCompleted)}
        />
        <Typography variant="h6" sx={{ color: "white" }}>
          Hide Completed
        </Typography>
      </Box>
      <TodoTable />
      <AddTodo />
    </div>
  );
}

export default App;
