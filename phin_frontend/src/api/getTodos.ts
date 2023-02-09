import axios from "axios";

// fetch todos

const getTodos = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3001/",
    });

    const todos = response.data;

    return todos;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

export default getTodos;
