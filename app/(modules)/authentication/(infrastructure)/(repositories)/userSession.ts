import * as SecureStore from "expo-secure-store";
import { randomUUID } from "expo-crypto";
import { USER_SESSION_EMPTY_STATE, UserSession } from "../../(domain)/interfaces";

export const getUserSession = async (): Promise<UserSession> => {
    const unformattedUserSession = await SecureStore.getItemAsync(
        "user-session"
    );

    const userSession: UserSession = await JSON.parse(
        unformattedUserSession === null
            ? JSON.stringify(USER_SESSION_EMPTY_STATE)
            : unformattedUserSession
    );

    return userSession
};

export const createUserSession = async (email: string) => {
    const userSession = {
        id: randomUUID(),
        userEmail: email,
        isLoggedIn: true,
    };

    const userSessionString = JSON.stringify(userSession);

    await SecureStore.setItemAsync("user-session", userSessionString);
};

export const deleteUserSession = async () => {
    await SecureStore.deleteItemAsync("user-session");
};