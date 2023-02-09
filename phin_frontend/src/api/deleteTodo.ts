import axios from "axios";

const deleteTodo = async (id: string) => {
  // use axios to delete a todo
  try {
    const response = await axios({
      method: "delete",
      url: "http://localhost:3001/delete",
      data: { id },
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

export default deleteTodo;
