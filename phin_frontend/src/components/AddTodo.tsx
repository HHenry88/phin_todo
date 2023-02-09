import { Box, Button, FormControl, Input } from "@mui/material";
import { FormEvent, useState } from "react";
import addTodo from "../api/addTodo";
import { Todo } from "../api/interfaces";
import { useTodosContext } from "./TodosContext";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { setTodos } = useTodosContext();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please add a title and a description");
      return;
    }

    try {
      const response = await addTodo({
        title,
        description,
      });

      setTitle("");
      setDescription("");
      const currentMSeconds = Math.floor(Date.now());

      //@ts-ignore
      setTodos((prev: Todo[]) => [
        ...prev,
        {
          id: response,
          title,
          description,
          completed: false,
          created: {
            nanoseconds: currentMSeconds,
            seconds: currentMSeconds / 1000,
          },
        },
      ]);

      alert("Successfully saved");
    } catch (err) {
      const error = err as Error;
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit} width="100%" sx={{ mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2 }}>
        <FormControl sx={{ width: "100%" }}>
          <Input
            placeholder="Add Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <Input
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Todo
        </Button>
      </Box>
    </Box>
  );
};

export default AddTodo;
