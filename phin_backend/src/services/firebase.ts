// create a firebase instance

import app from "../config/firebase";
import { getFirestore } from "firebase/firestore/lite";

export const db = getFirestore(app);
