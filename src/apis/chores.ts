import { ChoresRoom } from "@/interfaces/chores";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";

const authProtect = (callback: () => Promise<void> | void) => {
  if (!auth.currentUser) throw Error("Please login");
  return callback();
};

export const createChoresRoom = async (name: string, description: string) => {
  const data: ChoresRoom = {
    name,
    description,
    members: [auth.currentUser!.uid],
    creator: auth.currentUser!.uid,
    createAt: new Date(),
  };

  return authProtect(async () => {
    await addDoc(collection(db, "chores_rooms"), data);
  });
};
