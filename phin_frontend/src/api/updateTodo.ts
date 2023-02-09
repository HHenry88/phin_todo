import axios from "axios";
import { UpdateTodo } from "./interfaces";

const updateTodo = async (todo: UpdateTodo) => {
  try {
    const response = await axios({
      method: "put",
      url: "http://localhost:3001/update",
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

export default updateTodo;
