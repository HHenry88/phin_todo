// return the correct status code depending on the FirestoreError code

import { FirestoreErrorCode } from "firebase/firestore/lite";

const firebaseStatus = (err: FirestoreErrorCode) => {
  switch (err) {
    case "permission-denied":
      return 403;
    case "not-found":
      return 404;
    case "already-exists":
      return 409;
    case "cancelled":
      return 499;
    case "invalid-argument":
      return 400;
    case "deadline-exceeded":
      return 504;
    case "resource-exhausted":
      return 429;
    case "unimplemented":
      return 501;
    case "internal":
      return 500;
    case "unavailable":
      return 503;
    case "data-loss":
      return 500;
    case "unauthenticated":
      return 401;
    default:
      return 500;
  }
};

export default firebaseStatus;
