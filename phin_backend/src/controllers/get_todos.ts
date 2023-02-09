// Get todos from firebase collection

import { Request, Response } from "express";
import { collection, FirestoreError, getDocs } from "firebase/firestore/lite";
import { db } from "../services/firebase";
import firebaseStatus from "../utils/firebaseStatus";

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  created: Date;
  updated?: Date;
}

const getTodos = async (req: Request, res: Response) => {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));

    const todos: Todo[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const todo: Todo = {
        id: doc.id,
        title: data.title,
        description: data.description,
        completed: data.completed,
        created: data.created,
      };
      todos.push(todo);
    });

    return res.status(200).json(todos);
  } catch (err) {
    const error = err as FirestoreError;
    res.status(firebaseStatus(error.code)).end(error.message);
  }
};

export default getTodos;
