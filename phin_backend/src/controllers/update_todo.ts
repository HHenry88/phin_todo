import { Request, Response } from "express";
import {
  doc,
  updateDoc,
  FirestoreError,
  serverTimestamp,
} from "firebase/firestore/lite";
import { db } from "../services/firebase";
import firebaseStatus from "../utils/firebaseStatus";

const updateTodo = async (req: Request, res: Response) => {
  try {
    const todo = req.body;

    await updateDoc(doc(db, "todos", todo.id), {
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      updated: serverTimestamp(),
    });
    res.status(204);
  } catch (err) {
    const error = err as FirestoreError;
    res.status(firebaseStatus(error.code)).send(error.message);
  }
};

export default updateTodo;
