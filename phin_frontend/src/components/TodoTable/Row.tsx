import {
  Checkbox,
  Icon,
  IconButton,
  Input,
  TableCell,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Todo } from "../../api/interfaces";
import updateTodo from "../../api/updateTodo";
import secondsToLocaleDateTime from "../../util/secondsToLocaleDate";
import { useTodosContext } from "../TodosContext";

interface TodoRowProps {
  todo: Todo;
  onRemove: (id: string) => void;
}

export const TodoRow = ({ todo, onRemove }: TodoRowProps) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);
  const [originalTodo, setOriginalTodo] = useState({
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  });
  const { hideCompleted } = useTodosContext();

  useEffect(() => {
    // Update debounced value after delay
    if (
      title === originalTodo.title &&
      description === originalTodo.description &&
      completed === originalTodo.completed
    )
      return;

    const handler = setTimeout(async () => {
      await updateTodo({
        id: todo.id,
        title,
        description,
        completed,
      });

      setOriginalTodo({
        title,
        description,
        completed,
      });
    }, 1000);
    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [title, description, completed]);

  return (
    <TableRow
      key={todo.id}
      sx={{
        display: hideCompleted && completed ? "none" : "table-row",
      }}
    >
      <TableCell>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </TableCell>
      <TableCell>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </TableCell>
      <TableCell>{secondsToLocaleDateTime(todo.created.seconds)}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <Checkbox
          checked={completed}
          sx={{ color: "white" }}
          onClick={() => setCompleted(!completed)}
        />
      </TableCell>
      <TableCell>
        <IconButton onClick={() => onRemove(todo.id)}>
          <Icon color="error">delete</Icon>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
