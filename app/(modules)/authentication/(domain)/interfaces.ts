export interface User {
    id: string;
    email: string;
    createdAt: string;
}

export interface UserSQLite {
    createdAt: string;
    email: string;
    id: number
    isActive: number
    password: string;
    updatedAt: string;
}

export interface UserSession {
    id: string
    userEmail: string
    isLoggedIn: boolean
}

export const USER_SESSION_EMPTY_STATE = {
    id: "0",
    userEmail: "nothing@example.com",
    isLoggedIn: false
}