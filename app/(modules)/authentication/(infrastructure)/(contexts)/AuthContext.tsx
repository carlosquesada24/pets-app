import React, { createContext, useContext, useEffect, useState } from "react";

import { User } from "../../(domain)/interfaces";
import { USER_DEFAULT_STATE, USER_MOCK } from "../../(domain)/data";
import { Alert } from "react-native";
import { signUpSQLite } from "../(repositories)/auth";
import { useSQLiteContext } from "expo-sqlite";

interface AuthContextData {
  user: User;
  isLogged: boolean;
  signUp: (email: string, password: string) => void;
  logIn: (email: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  user: USER_DEFAULT_STATE,
  isLogged: false,
  signUp: (email: string, password: string) => {},
  logIn: () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState<User>(USER_MOCK);
  const [isLogged, setIsLogged] = useState(false);

  const db = useSQLiteContext();

  const signUp = async (email: string, password: string) => {
    alert("Creando cuenta");

    const userId = signUpSQLite(email, password, db);

    if (typeof userId === "number") {
      alert("Cuenta creada");
      setIsLogged(true);
    }
  };
  const logIn = async (email: string) => {};
  const signOut = async () => {};

  const authContextValue = {
    user,
    isLogged,
    signUp,
    logIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
