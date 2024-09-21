import React, { createContext, useContext, useEffect, useState } from "react";

import {
  User,
  USER_SESSION_EMPTY_STATE,
  UserSession,
} from "../../(domain)/interfaces";
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
import {
  createUserSession,
  deleteUserSession,
  getUserSession,
} from "../(repositories)/userSession";
import { useRouter } from "expo-router";
import ROUTES from "../../../../constants/routes";

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
  const [userSession, setUserSession] = useState<UserSession>();
  const [user, setUser] = useState<User>(USER_MOCK);
  const [isLogged, setIsLogged] = useState(false);

  const db = useSQLiteContext();

  const router = useRouter();

  useEffect(() => {
    const handleGetUserSession = async () => {
      // await deleteUserSession();
      await createUserSession("johndoe@example.com");
      const userSession = await getUserSession();

      const existsUserSession =
        userSession !== null && userSession.id !== USER_SESSION_EMPTY_STATE.id;

      console.log({ existsUserSession });

      const userSessionToSave = existsUserSession
        ? userSession
        : USER_SESSION_EMPTY_STATE;

      setUserSession(userSessionToSave);

      const isLoggedIn = existsUserSession ?? userSession?.isLoggedIn;

      !isLoggedIn && router.push(ROUTES.AUTHENTICATION.SIGN_IN);
    };

    handleGetUserSession();
  }, []);

  const signUp = async (email: string, password: string) => {
    alert("Creando cuenta");

    const user = await signUpSQLite(email, password, db);

    if (user !== null) {
      alert("Cuenta creada");
      createUserSession(email);
      setIsLogged(true);
      setUser(userSQLiteToUserAdapter(user));
    }
  };
  const logIn = async (email: string, password: string) => {
    const user = await signInSQLite(email, password, db);
    const isUserValid = user.email.length > 0 && user.id > 0;
    if (isUserValid) {
      alert("Sesión iniciada");
      createUserSession(email);
      setIsLogged(true);
      setUser(userSQLiteToUserAdapter(user));
    } else {
      alert("Hubo un error al inicial sesión");
    }
  };

  const resetPassword = async (email: string, password: string) => {
    const result = await resetPasswordSQLite(email, password, db);

    if (result) {
      alert("Contraseña actualizada con éxito");
    } else {
      alert("Hubo un error al reestablecer la contraseña");
    }
  };

  const signOut = async () => {
    deleteUserSession();
    setIsLogged(false);
  };

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
