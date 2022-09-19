import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';

export const getByUsername = async (username: string): Promise<IUser | null> => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const values = [username];

  const [result] = await connection.execute(query, values);
  const [user] = result as IUser[];

  return user || null;
};

export const create = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;

  const query = (
    'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)'
  );
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: IUser = { id, username, classe, level, password };
  return newUser;
};