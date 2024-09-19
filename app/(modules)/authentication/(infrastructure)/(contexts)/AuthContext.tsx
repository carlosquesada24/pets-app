import React, { createContext, useContext, useEffect, useState } from "react";

import { User } from "../../(domain)/interfaces";
import { USER_DEFAULT_STATE, USER_MOCK } from "../../(domain)/data";
import {
  resetPasswordSQLite,
  signInSQLite,
  signUpSQLite,
} from "../(repositories)/auth";
import { useSQLiteContext } from "expo-sqlite";
import { userSQLiteToUserAdapter } from "../(adapters)";

import * as SecureStore from "expo-secure-store";
import { randomUUID } from "expo-crypto";

interface AuthContextData {
  user: User;
  isLogged: boolean;
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  resetPassword: (email: string, password: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  user: USER_DEFAULT_STATE,
  isLogged: false,
  signUp: (email: string, password: string) => {},
  logIn: (email: string, password: string) => {},
  resetPassword: (email: string, password: string) => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState<User>(USER_MOCK);
  const [isLogged, setIsLogged] = useState(false);

  const db = useSQLiteContext();

  useEffect(() => {
    const handleGetUserSession = async () => {
      await getUserSession();
    };

    handleGetUserSession();
  }, []);

  const getUserSession = async () => {
    const unformattedUserSession = await SecureStore.getItemAsync(
      "user-session"
    );
    const userSession = JSON.parse(unformattedUserSession ?? "");

    console.log({ userSession });
  };

  const createUserSession = async (email: string) => {
    const userSession = {
      id: randomUUID(),
      userEmail: "johndoe@example.com",
      isLoggedIn: true,
    };

    const userSessionString = JSON.stringify(userSession);

    await SecureStore.setItemAsync("user-session", userSessionString);
  };

  const deleteUserSession = async () => {
    await SecureStore.deleteItemAsync("user-session");
  };

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
    // const user = await signInSQLite(email, password, db);
    // const isUserValid = user.email.length > 0 && user.id > 0;
    // if (isUserValid) {
    //   alert("Sesión iniciada");
    //   setIsLogged(true);
    //   setUser(userSQLiteToUserAdapter(user));
    // } else {
    //   alert("Hubo un error al inicial sesión");
    // }
  };

  const resetPassword = async (email: string, password: string) => {
    const result = await resetPasswordSQLite(email, password, db);

    if (result) {
      alert("Contraseña actualizada con éxito");
    } else {
      alert("Hubo un error al reestablecer la contraseña");
    }
  };

  const signOut = async () => {};

  const authContextValue = {
    user,
    isLogged,
    signUp,
    logIn,
    resetPassword,
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
