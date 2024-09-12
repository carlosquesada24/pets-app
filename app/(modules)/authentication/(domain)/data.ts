import { User, UserSQLite } from "./interfaces"

export const USER_DEFAULT_STATE: User = {
    id: "",
    email: "",
    createdAt: "",
}

export const USER_MOCK: User = {
    id: "1",
    email: "firstexample@example.com",
    createdAt: "2024-09-12 19:19:17",
}

export const USER_MOCK_SQLITE: UserSQLite = {
    createdAt: "2024-09-12 19:19:17",
    email: "johndoe@example.com",
    id: 1,
    isActive: 1,
    password: "password123#",
    updatedAt: "2024-09-12 19:19:17",
}

export const USER_SQLITE_EMPTY_STATE: UserSQLite = {
    createdAt: "",
    email: "",
    id: 0,
    isActive: 0,
    password: "",
    updatedAt: "",
}