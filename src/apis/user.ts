import { UserCredential } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const createUserToDb = async (
  userCredential: UserCredential,
  displayName: string
) => {
  const { user } = userCredential;
  const { email } = user;
  await addDoc(collection(db, "users"), {
    displayName,
    email,
  });
};
