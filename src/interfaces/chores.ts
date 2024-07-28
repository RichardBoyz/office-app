import { Timestamp } from "firebase/firestore";

export interface CreateChoresInput {
  name: string;
  description: string;
}

export interface ChoresRoom {
  id?: string;
  name: string;
  description: string;
  creator: string;
  members: string[];
  createdAt: Date | Timestamp;
  isChoresChangeable: boolean;
}

export interface ChoresTicket {
  userId: string;
  createdAt: Date | Timestamp;
  isUsed: boolean;
}
