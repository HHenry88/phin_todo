import axios from "axios";
import { AddTodo } from "./interfaces";

const addTodo = async (todo: AddTodo) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/add",
      data: todo,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

export default addTodo;
