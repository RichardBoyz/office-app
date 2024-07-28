import { FIRESTORE_COLLECTIONS } from "@/constants/chores";
import { ChoresRoom, ChoresTicket } from "@/interfaces/chores";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";

const authProtect = (callback: () => Promise<void> | void) => {
  if (!auth.currentUser) throw Error("Please login");
  return callback();
};

export const createChoresRoom = async (name: string, description: string) => {
  return authProtect(async () => {
    const data: ChoresRoom = {
      name,
      description,
      members: [auth.currentUser!.uid],
      creator: auth.currentUser!.uid,
      createdAt: Timestamp.now(),
    };
    await addDoc(collection(db, FIRESTORE_COLLECTIONS.CHORES_ROOMS), data);
  });
};

export const createNewTicketWhenSignin = async () => {
  return authProtect(async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // 轉換為 Firestore Timestamp
    const startOfDay = Timestamp.fromDate(today);
    const endOfDay = Timestamp.fromDate(tomorrow);

    // 建立查詢
    const isExistQuery = query(
      collection(db, "chores_tickets"),
      where("userId", "==", auth.currentUser!.uid),
      where("createdAt", ">=", startOfDay),
      where("createdAt", "<", endOfDay),
      limit(1) // 我們只需要確認是否存在，所以限制為1個結果
    );

    try {
      const isExistSnapshot = await getDocs(isExistQuery);
      if (!isExistSnapshot.empty) {
        console.log("is exists");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }

    const data: ChoresTicket = {
      userId: auth.currentUser!.uid,
      isUsed: false,
      createdAt: Timestamp.now(),
    };

    await addDoc(collection(db, "chores_tickets"), data);
  });
};
