import { UserCredential } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createUserToDb = async (
  userCredential: UserCredential,
  displayName: string
) => {
  const { user } = userCredential;
  const { email } = user;
  await setDoc(doc(db, "users", user.uid), {
    displayName,
    email,
  });
};
