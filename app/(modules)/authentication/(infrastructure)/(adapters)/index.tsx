import { User, UserSQLite } from "../../(domain)/interfaces";

export const userSQLiteToUserAdapter = (userSQLite: UserSQLite): User => {
  return {
    id: userSQLite.id.toString(),
    email: userSQLite.email,
    createdAt: userSQLite.createdAt,
  };
};
