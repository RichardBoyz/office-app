import { ChoresRoom } from "@/interfaces/chores";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../firebase";

type ChoresRoomContextType = {
  choresRooms: ChoresRoom[];
  loading: boolean;
  getChoresRoomsList: (keyword: string) => Promise<void> | void;
};

type ChoresRoomProviderProps = {
  children: ReactNode;
};

const defaultContext: ChoresRoomContextType = {
  choresRooms: [],
  loading: false,
  getChoresRoomsList: () => {},
};

const ChoresRoomContext = createContext<ChoresRoomContextType>(defaultContext);

const ChoresRoomProvider: React.FC<ChoresRoomProviderProps> = ({
  children,
}) => {
  const [choresRooms, setChoresRooms] = useState<ChoresRoom[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getChoresRoomsList = async (keyword: string = "") => {
    setLoading(true);
    try {
      const choresRoomsRef = collection(db, "chores_rooms");
      const queryRef = query(
        choresRoomsRef,
        where("name", ">=", keyword),
        where("name", "<=", keyword + "\uf8ff")
      );
      const querySnapshot = await getDocs(queryRef);
      const rooms: ChoresRoom[] = [];
      querySnapshot.forEach((doc) => {
        rooms.push({ id: doc.id, ...doc.data() } as ChoresRoom);
      });
      setChoresRooms(rooms);
    } catch (error) {
      console.error("Error fetching chores rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChoresRoomsList();
  }, []);

  return (
    <ChoresRoomContext.Provider
      value={{ choresRooms, loading, getChoresRoomsList }}
    >
      {children}
    </ChoresRoomContext.Provider>
  );
};

const useChoresRoom = () => {
  const context = useContext(ChoresRoomContext);
  if (!context) {
    throw new Error("useChoresRoom must be used within a ChoresRoomProvider");
  }
  return context;
};

export { ChoresRoomProvider, useChoresRoom };
