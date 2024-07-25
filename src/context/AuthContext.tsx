import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createUserToDb } from "../apis";
import { auth } from "../firebase";

type UserContextType = {
  user: User | null;
  isAuthLoading: Boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  createUser: (userData: CreateUserType) => void;
  logOut: () => Promise<void>;
  logIn: (loginData: LoginType) => Promise<UserCredential>;
};

type CreateUserType = {
  email: string;
  password: string;
  displayName: string;
};

type LoginType = {
  email: string;
  password: string;
};

const defaultUserContect: UserContextType = {
  user: null,
  isAuthLoading: true,
  setUser: () => {},
  createUser: async (userData: CreateUserType) => {},
  logOut: async () => {},
  logIn: async (loginData: LoginType) => {
    return {} as UserCredential;
  },
};

const UserContext = createContext<UserContextType>(defaultUserContect);

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

  const createUser = async (userData: CreateUserType) => {
    const { email, password, displayName } = userData;
    const createUserResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    createUserToDb(createUserResult, displayName);
  };

  const logOut = async () => {
    return signOut(auth);
  };

  const logIn = (signinData: LoginType) => {
    const { email, password } = signinData;
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
      setIsAuthLoading(false);
    });

    () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isAuthLoading, setUser, createUser, logOut, logIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
