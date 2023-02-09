import { createContext, useContext, useState } from "react";
import { Todo } from "../api/interfaces";

interface TodosContextProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  hideCompleted: boolean;
  setHideCompleted: (hideCompleted: boolean) => void;
}

const TodosContext = createContext({} as TodosContextProps);

export const TodosContextProvider = ({ children }: { children: any }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        hideCompleted,
        setHideCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = (): TodosContextProps => {
  const context = useContext<TodosContextProps>(TodosContext);
  if (context === null) {
    throw new Error(
      '"useTodosContext" should be used inside a "TodosContextProvider"'
    );
  }

  return context;
};
