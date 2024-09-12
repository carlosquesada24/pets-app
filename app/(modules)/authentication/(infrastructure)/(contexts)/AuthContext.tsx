import React, { createContext, useContext, useEffect, useState } from "react";

import { User } from "../../(domain)/interfaces";
import { USER_DEFAULT_STATE, USER_MOCK } from "../../(domain)/data";
import { signInSQLite, signUpSQLite } from "../(repositories)/auth";
import { useSQLiteContext } from "expo-sqlite";
import { userSQLiteToUserAdapter } from "../(adapters)";

interface AuthContextData {
  user: User;
  isLogged: boolean;
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  user: USER_DEFAULT_STATE,
  isLogged: false,
  signUp: (email: string, password: string) => {},
  logIn: (email: string, password: string) => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState<User>(USER_MOCK);
  const [isLogged, setIsLogged] = useState(false);

  const db = useSQLiteContext();

  const signUp = async (email: string, password: string) => {
    alert("Creando cuenta");

    const user = await signUpSQLite(email, password, db);

    if (user !== null) {
      alert("Cuenta creada");
      setIsLogged(true);
      setUser(userSQLiteToUserAdapter(user));
    }
  };
  const logIn = async (email: string, password: string) => {
    const user = await signInSQLite(email, password, db);

    if (user !== null) {
      alert("Sesión iniciada");
      setIsLogged(true);
      setUser(userSQLiteToUserAdapter(user));
    }
  };

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
