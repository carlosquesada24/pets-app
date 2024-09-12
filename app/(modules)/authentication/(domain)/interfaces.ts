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