import { Request, Response } from "express";
import { deleteDoc, doc, FirestoreError } from "firebase/firestore/lite";
import { db } from "../services/firebase";
import firebaseStatus from "../utils/firebaseStatus";

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const docRef = await deleteDoc(doc(db, "todos", req.body.id));
    res.status(200).send(docRef);
  } catch (err) {
    const error = err as FirestoreError;
    res.status(firebaseStatus(error.code)).send(error.message);
  }
};

export default deleteTodo;
