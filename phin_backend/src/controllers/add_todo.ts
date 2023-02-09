// Use firebase db to add a TODO to the database
import { Request, Response } from "express";
import {
  addDoc,
  collection,
  FirestoreError,
  serverTimestamp,
} from "firebase/firestore/lite";
import { db } from "../services/firebase";
import firebaseStatus from "../utils/firebaseStatus";

interface AddTodo {
  title: string;
  description: string;
}

const addTodo = async (req: Request, res: Response) => {
  try {
    const todo: AddTodo = req.body;

    const docRef = await addDoc(collection(db, "todos"), {
      title: todo.title,
      description: todo.description,
      completed: false,
      created: serverTimestamp(),
      updated: serverTimestamp(),
    });

    res.status(201).send(docRef.id);
  } catch (err) {
    const error = err as FirestoreError;
    res.status(firebaseStatus(error.code)).send(error.message);
  }
};
export default addTodo;
