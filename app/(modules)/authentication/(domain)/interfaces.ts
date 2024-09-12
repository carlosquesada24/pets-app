export interface User {
    id: string;
    email: string;
    password: string;
}

export interface UserSQLite {
    createdAt: string;
    email: string;
    id: number
    isActive: number
    password: string;
    updatedAt: string;
}