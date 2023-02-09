import { TableBody } from "@mui/material";
import { Todo } from "../../api/interfaces";
import { useEffect, useState } from "react";
import deleteTodo from "../../api/deleteTodo";
import { TodoRow } from "./Row";
import { useTodosContext } from "../TodosContext";

const sortTodos = (todos: Todo[], isAscending: boolean) => {
  const todosCopy = [...todos];
  return todosCopy.sort((a, b) => {
    if (isAscending) {
      return a.created.seconds - b.created.seconds;
    } else {
      return b.created.seconds - a.created.seconds;
    }
  });
};

export const TodoTableBody = ({ isAscending }: { isAscending: boolean }) => {
  const { todos } = useTodosContext();

  const [sortedTodos, setSortedTodos] = useState(() =>
    sortTodos(todos, isAscending)
  );

  useEffect(() => {
    setSortedTodos(sortTodos(todos, isAscending));
  }, [todos, isAscending]);

  const onRemove = async (id: string) => {
    try {
      await deleteTodo(id);

      setSortedTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TableBody>
      {sortedTodos.map((todo) => (
        <TodoRow todo={todo} onRemove={onRemove} key={todo.id} />
      ))}
    </TableBody>
  );
};
