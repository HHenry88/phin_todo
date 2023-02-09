export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  created: {
    seconds: number;
    nanoseconds: number;
  };
  updated?: {
    seconds: number;
    nanoseconds: number;
  };
}

export interface AddTodo {
  title: string;
  description: string;
}

export interface UpdateTodo extends AddTodo {
  id: string;
  completed: boolean;
}
